# `lightsailDomain` Submodule <a name="`lightsailDomain` Submodule" id="@cdktn/provider-awscc.lightsailDomain"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LightsailDomain <a name="LightsailDomain" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomain"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lightsail_domain awscc_lightsail_domain}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomain.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LightsailDomain(Construct Scope, string Id, LightsailDomainConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomain.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomain.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomain.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomainConfig">LightsailDomainConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomain.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomain.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomain.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomainConfig">LightsailDomainConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomain.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomain.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomain.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomain.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomain.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomain.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomain.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomain.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomain.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomain.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomain.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomain.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomain.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomain.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomain.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomain.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomain.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomain.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomain.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomain.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomain.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomain.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomain.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomain.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomain.putDomainEntries">PutDomainEntries</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomain.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomain.resetDomainEntries">ResetDomainEntries</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomain.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomain.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomain.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomain.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomain.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomain.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomain.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomain.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomain.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomain.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomain.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomain.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomain.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomain.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomain.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomain.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomain.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomain.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomain.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomain.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomain.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomain.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomain.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomain.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomain.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomain.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomain.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomain.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomain.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomain.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomain.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomain.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomain.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomain.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomain.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomain.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomain.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomain.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomain.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomain.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomain.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomain.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomain.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomain.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomain.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomain.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDomainEntries` <a name="PutDomainEntries" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomain.putDomainEntries"></a>

```csharp
private void PutDomainEntries(IResolvable|LightsailDomainDomainEntries[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomain.putDomainEntries.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomainDomainEntries">LightsailDomainDomainEntries</a>[]

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomain.putTags"></a>

```csharp
private void PutTags(IResolvable|LightsailDomainTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomain.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomainTags">LightsailDomainTags</a>[]

---

##### `ResetDomainEntries` <a name="ResetDomainEntries" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomain.resetDomainEntries"></a>

```csharp
private void ResetDomainEntries()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomain.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomain.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomain.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomain.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomain.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a LightsailDomain resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomain.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

LightsailDomain.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomain.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomain.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

LightsailDomain.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomain.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomain.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

LightsailDomain.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomain.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomain.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

LightsailDomain.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a LightsailDomain resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomain.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomain.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LightsailDomain to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomain.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LightsailDomain that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lightsail_domain#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomain.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the LightsailDomain to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomain.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomain.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomain.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomain.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomain.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomain.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomain.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomain.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomain.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomain.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomain.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomain.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomain.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomain.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomain.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomain.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomain.property.domainEntries">DomainEntries</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomainDomainEntriesList">LightsailDomainDomainEntriesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomain.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomain.property.location">Location</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomainLocationOutputReference">LightsailDomainLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomain.property.resourceType">ResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomain.property.supportCode">SupportCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomain.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomainTagsList">LightsailDomainTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomain.property.domainEntriesInput">DomainEntriesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomainDomainEntries">LightsailDomainDomainEntries</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomain.property.domainNameInput">DomainNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomain.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomainTags">LightsailDomainTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomain.property.domainName">DomainName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomain.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomain.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomain.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomain.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomain.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomain.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomain.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomain.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomain.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomain.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomain.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomain.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomain.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomain.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomain.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomain.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `DomainEntries`<sup>Required</sup> <a name="DomainEntries" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomain.property.domainEntries"></a>

```csharp
public LightsailDomainDomainEntriesList DomainEntries { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomainDomainEntriesList">LightsailDomainDomainEntriesList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomain.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomain.property.location"></a>

```csharp
public LightsailDomainLocationOutputReference Location { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomainLocationOutputReference">LightsailDomainLocationOutputReference</a>

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomain.property.resourceType"></a>

```csharp
public string ResourceType { get; }
```

- *Type:* string

---

##### `SupportCode`<sup>Required</sup> <a name="SupportCode" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomain.property.supportCode"></a>

```csharp
public string SupportCode { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomain.property.tags"></a>

```csharp
public LightsailDomainTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomainTagsList">LightsailDomainTagsList</a>

---

##### `DomainEntriesInput`<sup>Optional</sup> <a name="DomainEntriesInput" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomain.property.domainEntriesInput"></a>

```csharp
public IResolvable|LightsailDomainDomainEntries[] DomainEntriesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomainDomainEntries">LightsailDomainDomainEntries</a>[]

---

##### `DomainNameInput`<sup>Optional</sup> <a name="DomainNameInput" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomain.property.domainNameInput"></a>

```csharp
public string DomainNameInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomain.property.tagsInput"></a>

```csharp
public IResolvable|LightsailDomainTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomainTags">LightsailDomainTags</a>[]

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomain.property.domainName"></a>

```csharp
public string DomainName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomain.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomain.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LightsailDomainConfig <a name="LightsailDomainConfig" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LightsailDomainConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string DomainName,
    IResolvable|LightsailDomainDomainEntries[] DomainEntries = null,
    IResolvable|LightsailDomainTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomainConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomainConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomainConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomainConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomainConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomainConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomainConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomainConfig.property.domainName">DomainName</a></code> | <code>string</code> | The name of the domain to manage in Lightsail. |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomainConfig.property.domainEntries">DomainEntries</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomainDomainEntries">LightsailDomainDomainEntries</a>[]</code> | An array of key-value pairs containing information about the domain entries. |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomainConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomainTags">LightsailDomainTags</a>[]</code> | An array of key-value pairs to apply to this resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainConfig.property.domainName"></a>

```csharp
public string DomainName { get; set; }
```

- *Type:* string

The name of the domain to manage in Lightsail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lightsail_domain#domain_name LightsailDomain#domain_name}

---

##### `DomainEntries`<sup>Optional</sup> <a name="DomainEntries" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainConfig.property.domainEntries"></a>

```csharp
public IResolvable|LightsailDomainDomainEntries[] DomainEntries { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomainDomainEntries">LightsailDomainDomainEntries</a>[]

An array of key-value pairs containing information about the domain entries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lightsail_domain#domain_entries LightsailDomain#domain_entries}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainConfig.property.tags"></a>

```csharp
public IResolvable|LightsailDomainTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomainTags">LightsailDomainTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lightsail_domain#tags LightsailDomain#tags}

---

### LightsailDomainDomainEntries <a name="LightsailDomainDomainEntries" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainDomainEntries"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainDomainEntries.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LightsailDomainDomainEntries {
    string Id = null,
    bool|IResolvable IsAlias = null,
    string Name = null,
    string Target = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomainDomainEntries.property.id">Id</a></code> | <code>string</code> | The ID of the domain recordset entry. |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomainDomainEntries.property.isAlias">IsAlias</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | When true, specifies whether the domain entry is an alias used by the Lightsail load balancer, Lightsail container service, Lightsail content delivery network (CDN) distribution, or another AWS resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomainDomainEntries.property.name">Name</a></code> | <code>string</code> | The name of the domain entry. |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomainDomainEntries.property.target">Target</a></code> | <code>string</code> | The target AWS name server (e.g., ns-111.awsdns-11.com). |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomainDomainEntries.property.type">Type</a></code> | <code>string</code> | The type of domain entry (e.g., A, CNAME, MX, NS, SOA, SRV, TXT). |

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainDomainEntries.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

The ID of the domain recordset entry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lightsail_domain#id LightsailDomain#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsAlias`<sup>Optional</sup> <a name="IsAlias" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainDomainEntries.property.isAlias"></a>

```csharp
public bool|IResolvable IsAlias { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

When true, specifies whether the domain entry is an alias used by the Lightsail load balancer, Lightsail container service, Lightsail content delivery network (CDN) distribution, or another AWS resource.

You can include an alias (A type) record in your request, which points to the DNS name of a load balancer, container service, CDN distribution, or other AWS resource and routes traffic to that resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lightsail_domain#is_alias LightsailDomain#is_alias}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainDomainEntries.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the domain entry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lightsail_domain#name LightsailDomain#name}

---

##### `Target`<sup>Optional</sup> <a name="Target" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainDomainEntries.property.target"></a>

```csharp
public string Target { get; set; }
```

- *Type:* string

The target AWS name server (e.g., ns-111.awsdns-11.com).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lightsail_domain#target LightsailDomain#target}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainDomainEntries.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The type of domain entry (e.g., A, CNAME, MX, NS, SOA, SRV, TXT).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lightsail_domain#type LightsailDomain#type}

---

### LightsailDomainLocation <a name="LightsailDomainLocation" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainLocation.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LightsailDomainLocation {

};
```


### LightsailDomainTags <a name="LightsailDomainTags" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LightsailDomainTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomainTags.property.key">Key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomainTags.property.value">Value</a></code> | <code>string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lightsail_domain#key LightsailDomain#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lightsail_domain#value LightsailDomain#value}

---

## Classes <a name="Classes" id="Classes"></a>

### LightsailDomainDomainEntriesList <a name="LightsailDomainDomainEntriesList" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainDomainEntriesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainDomainEntriesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LightsailDomainDomainEntriesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomainDomainEntriesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomainDomainEntriesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomainDomainEntriesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainDomainEntriesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainDomainEntriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainDomainEntriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomainDomainEntriesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomainDomainEntriesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomainDomainEntriesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomainDomainEntriesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomainDomainEntriesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainDomainEntriesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainDomainEntriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainDomainEntriesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainDomainEntriesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainDomainEntriesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainDomainEntriesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainDomainEntriesList.get"></a>

```csharp
private LightsailDomainDomainEntriesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainDomainEntriesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomainDomainEntriesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomainDomainEntriesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomainDomainEntriesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomainDomainEntries">LightsailDomainDomainEntries</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainDomainEntriesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainDomainEntriesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainDomainEntriesList.property.internalValue"></a>

```csharp
public IResolvable|LightsailDomainDomainEntries[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomainDomainEntries">LightsailDomainDomainEntries</a>[]

---


### LightsailDomainDomainEntriesOutputReference <a name="LightsailDomainDomainEntriesOutputReference" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainDomainEntriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainDomainEntriesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LightsailDomainDomainEntriesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomainDomainEntriesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomainDomainEntriesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomainDomainEntriesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomainDomainEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainDomainEntriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainDomainEntriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainDomainEntriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainDomainEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomainDomainEntriesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomainDomainEntriesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomainDomainEntriesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomainDomainEntriesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomainDomainEntriesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomainDomainEntriesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomainDomainEntriesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomainDomainEntriesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomainDomainEntriesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomainDomainEntriesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomainDomainEntriesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomainDomainEntriesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomainDomainEntriesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomainDomainEntriesOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomainDomainEntriesOutputReference.resetIsAlias">ResetIsAlias</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomainDomainEntriesOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomainDomainEntriesOutputReference.resetTarget">ResetTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomainDomainEntriesOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainDomainEntriesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainDomainEntriesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainDomainEntriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainDomainEntriesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainDomainEntriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainDomainEntriesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainDomainEntriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainDomainEntriesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainDomainEntriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainDomainEntriesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainDomainEntriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainDomainEntriesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainDomainEntriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainDomainEntriesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainDomainEntriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainDomainEntriesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainDomainEntriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainDomainEntriesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainDomainEntriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainDomainEntriesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainDomainEntriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainDomainEntriesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainDomainEntriesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainDomainEntriesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetId` <a name="ResetId" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainDomainEntriesOutputReference.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIsAlias` <a name="ResetIsAlias" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainDomainEntriesOutputReference.resetIsAlias"></a>

```csharp
private void ResetIsAlias()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainDomainEntriesOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetTarget` <a name="ResetTarget" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainDomainEntriesOutputReference.resetTarget"></a>

```csharp
private void ResetTarget()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainDomainEntriesOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomainDomainEntriesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomainDomainEntriesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomainDomainEntriesOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomainDomainEntriesOutputReference.property.isAliasInput">IsAliasInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomainDomainEntriesOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomainDomainEntriesOutputReference.property.targetInput">TargetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomainDomainEntriesOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomainDomainEntriesOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomainDomainEntriesOutputReference.property.isAlias">IsAlias</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomainDomainEntriesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomainDomainEntriesOutputReference.property.target">Target</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomainDomainEntriesOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomainDomainEntriesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomainDomainEntries">LightsailDomainDomainEntries</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainDomainEntriesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainDomainEntriesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainDomainEntriesOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IsAliasInput`<sup>Optional</sup> <a name="IsAliasInput" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainDomainEntriesOutputReference.property.isAliasInput"></a>

```csharp
public bool|IResolvable IsAliasInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainDomainEntriesOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainDomainEntriesOutputReference.property.targetInput"></a>

```csharp
public string TargetInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainDomainEntriesOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainDomainEntriesOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsAlias`<sup>Required</sup> <a name="IsAlias" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainDomainEntriesOutputReference.property.isAlias"></a>

```csharp
public bool|IResolvable IsAlias { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainDomainEntriesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainDomainEntriesOutputReference.property.target"></a>

```csharp
public string Target { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainDomainEntriesOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainDomainEntriesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LightsailDomainDomainEntries InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomainDomainEntries">LightsailDomainDomainEntries</a>

---


### LightsailDomainLocationOutputReference <a name="LightsailDomainLocationOutputReference" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainLocationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LightsailDomainLocationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomainLocationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomainLocationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomainLocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomainLocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomainLocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomainLocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomainLocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomainLocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomainLocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomainLocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomainLocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomainLocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomainLocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomainLocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomainLocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainLocationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainLocationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainLocationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainLocationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainLocationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainLocationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainLocationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainLocationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainLocationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainLocationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainLocationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainLocationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainLocationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainLocationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomainLocationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomainLocationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomainLocationOutputReference.property.availabilityZone">AvailabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomainLocationOutputReference.property.regionName">RegionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomainLocationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomainLocation">LightsailDomainLocation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainLocationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainLocationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainLocationOutputReference.property.availabilityZone"></a>

```csharp
public string AvailabilityZone { get; }
```

- *Type:* string

---

##### `RegionName`<sup>Required</sup> <a name="RegionName" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainLocationOutputReference.property.regionName"></a>

```csharp
public string RegionName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainLocationOutputReference.property.internalValue"></a>

```csharp
public LightsailDomainLocation InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomainLocation">LightsailDomainLocation</a>

---


### LightsailDomainTagsList <a name="LightsailDomainTagsList" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LightsailDomainTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomainTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomainTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomainTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomainTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomainTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomainTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomainTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomainTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainTagsList.get"></a>

```csharp
private LightsailDomainTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomainTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomainTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomainTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomainTags">LightsailDomainTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainTagsList.property.internalValue"></a>

```csharp
public IResolvable|LightsailDomainTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomainTags">LightsailDomainTags</a>[]

---


### LightsailDomainTagsOutputReference <a name="LightsailDomainTagsOutputReference" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LightsailDomainTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomainTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomainTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomainTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomainTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomainTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomainTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomainTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomainTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomainTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomainTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomainTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomainTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomainTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomainTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomainTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomainTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomainTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomainTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomainTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomainTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomainTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomainTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomainTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomainTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomainTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomainTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomainTags">LightsailDomainTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lightsailDomain.LightsailDomainTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LightsailDomainTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lightsailDomain.LightsailDomainTags">LightsailDomainTags</a>

---



