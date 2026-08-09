# `configAggregationAuthorization` Submodule <a name="`configAggregationAuthorization` Submodule" id="@cdktn/provider-awscc.configAggregationAuthorization"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConfigAggregationAuthorization <a name="ConfigAggregationAuthorization" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/config_aggregation_authorization awscc_config_aggregation_authorization}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConfigAggregationAuthorization(Construct Scope, string Id, ConfigAggregationAuthorizationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationConfig">ConfigAggregationAuthorizationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationConfig">ConfigAggregationAuthorizationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.putTags"></a>

```csharp
private void PutTags(IResolvable|ConfigAggregationAuthorizationTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTags">ConfigAggregationAuthorizationTags</a>[]

---

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ConfigAggregationAuthorization resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ConfigAggregationAuthorization.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ConfigAggregationAuthorization.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ConfigAggregationAuthorization.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ConfigAggregationAuthorization.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ConfigAggregationAuthorization resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ConfigAggregationAuthorization to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ConfigAggregationAuthorization that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/config_aggregation_authorization#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ConfigAggregationAuthorization to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.property.aggregationAuthorizationArn">AggregationAuthorizationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsList">ConfigAggregationAuthorizationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.property.authorizedAccountIdInput">AuthorizedAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.property.authorizedAwsRegionInput">AuthorizedAwsRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTags">ConfigAggregationAuthorizationTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.property.authorizedAccountId">AuthorizedAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.property.authorizedAwsRegion">AuthorizedAwsRegion</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AggregationAuthorizationArn`<sup>Required</sup> <a name="AggregationAuthorizationArn" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.property.aggregationAuthorizationArn"></a>

```csharp
public string AggregationAuthorizationArn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.property.tags"></a>

```csharp
public ConfigAggregationAuthorizationTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsList">ConfigAggregationAuthorizationTagsList</a>

---

##### `AuthorizedAccountIdInput`<sup>Optional</sup> <a name="AuthorizedAccountIdInput" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.property.authorizedAccountIdInput"></a>

```csharp
public string AuthorizedAccountIdInput { get; }
```

- *Type:* string

---

##### `AuthorizedAwsRegionInput`<sup>Optional</sup> <a name="AuthorizedAwsRegionInput" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.property.authorizedAwsRegionInput"></a>

```csharp
public string AuthorizedAwsRegionInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.property.tagsInput"></a>

```csharp
public IResolvable|ConfigAggregationAuthorizationTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTags">ConfigAggregationAuthorizationTags</a>[]

---

##### `AuthorizedAccountId`<sup>Required</sup> <a name="AuthorizedAccountId" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.property.authorizedAccountId"></a>

```csharp
public string AuthorizedAccountId { get; }
```

- *Type:* string

---

##### `AuthorizedAwsRegion`<sup>Required</sup> <a name="AuthorizedAwsRegion" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.property.authorizedAwsRegion"></a>

```csharp
public string AuthorizedAwsRegion { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ConfigAggregationAuthorizationConfig <a name="ConfigAggregationAuthorizationConfig" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConfigAggregationAuthorizationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AuthorizedAccountId,
    string AuthorizedAwsRegion,
    IResolvable|ConfigAggregationAuthorizationTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationConfig.property.authorizedAccountId">AuthorizedAccountId</a></code> | <code>string</code> | The 12-digit account ID of the account authorized to aggregate data. |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationConfig.property.authorizedAwsRegion">AuthorizedAwsRegion</a></code> | <code>string</code> | The region authorized to collect aggregated data. |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTags">ConfigAggregationAuthorizationTags</a>[]</code> | The tags for the AggregationAuthorization. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AuthorizedAccountId`<sup>Required</sup> <a name="AuthorizedAccountId" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationConfig.property.authorizedAccountId"></a>

```csharp
public string AuthorizedAccountId { get; set; }
```

- *Type:* string

The 12-digit account ID of the account authorized to aggregate data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/config_aggregation_authorization#authorized_account_id ConfigAggregationAuthorization#authorized_account_id}

---

##### `AuthorizedAwsRegion`<sup>Required</sup> <a name="AuthorizedAwsRegion" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationConfig.property.authorizedAwsRegion"></a>

```csharp
public string AuthorizedAwsRegion { get; set; }
```

- *Type:* string

The region authorized to collect aggregated data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/config_aggregation_authorization#authorized_aws_region ConfigAggregationAuthorization#authorized_aws_region}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationConfig.property.tags"></a>

```csharp
public IResolvable|ConfigAggregationAuthorizationTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTags">ConfigAggregationAuthorizationTags</a>[]

The tags for the AggregationAuthorization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/config_aggregation_authorization#tags ConfigAggregationAuthorization#tags}

---

### ConfigAggregationAuthorizationTags <a name="ConfigAggregationAuthorizationTags" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConfigAggregationAuthorizationTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTags.property.key">Key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTags.property.value">Value</a></code> | <code>string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/config_aggregation_authorization#key ConfigAggregationAuthorization#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the tag.

You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/config_aggregation_authorization#value ConfigAggregationAuthorization#value}

---

## Classes <a name="Classes" id="Classes"></a>

### ConfigAggregationAuthorizationTagsList <a name="ConfigAggregationAuthorizationTagsList" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConfigAggregationAuthorizationTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsList.get"></a>

```csharp
private ConfigAggregationAuthorizationTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTags">ConfigAggregationAuthorizationTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsList.property.internalValue"></a>

```csharp
public IResolvable|ConfigAggregationAuthorizationTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTags">ConfigAggregationAuthorizationTags</a>[]

---


### ConfigAggregationAuthorizationTagsOutputReference <a name="ConfigAggregationAuthorizationTagsOutputReference" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConfigAggregationAuthorizationTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTags">ConfigAggregationAuthorizationTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ConfigAggregationAuthorizationTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTags">ConfigAggregationAuthorizationTags</a>

---



