# `route53GlobalresolverGlobalResolver` Submodule <a name="`route53GlobalresolverGlobalResolver` Submodule" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Route53GlobalresolverGlobalResolver <a name="Route53GlobalresolverGlobalResolver" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53globalresolver_global_resolver awscc_route53globalresolver_global_resolver}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Route53GlobalresolverGlobalResolver(Construct Scope, string Id, Route53GlobalresolverGlobalResolverConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverConfig">Route53GlobalresolverGlobalResolverConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverConfig">Route53GlobalresolverGlobalResolverConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.resetClientToken">ResetClientToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.resetIpAddressType">ResetIpAddressType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.resetObservabilityRegion">ResetObservabilityRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.putTags"></a>

```csharp
private void PutTags(IResolvable|Route53GlobalresolverGlobalResolverTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTags">Route53GlobalresolverGlobalResolverTags</a>[]

---

##### `ResetClientToken` <a name="ResetClientToken" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.resetClientToken"></a>

```csharp
private void ResetClientToken()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetIpAddressType` <a name="ResetIpAddressType" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.resetIpAddressType"></a>

```csharp
private void ResetIpAddressType()
```

##### `ResetObservabilityRegion` <a name="ResetObservabilityRegion" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.resetObservabilityRegion"></a>

```csharp
private void ResetObservabilityRegion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Route53GlobalresolverGlobalResolver resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Route53GlobalresolverGlobalResolver.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Route53GlobalresolverGlobalResolver.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Route53GlobalresolverGlobalResolver.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Route53GlobalresolverGlobalResolver.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a Route53GlobalresolverGlobalResolver resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Route53GlobalresolverGlobalResolver to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Route53GlobalresolverGlobalResolver that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53globalresolver_global_resolver#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the Route53GlobalresolverGlobalResolver to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.dnsName">DnsName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.globalResolverId">GlobalResolverId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.iPv4Addresses">IPv4Addresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.iPv6Addresses">IPv6Addresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsList">Route53GlobalresolverGlobalResolverTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.clientTokenInput">ClientTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.ipAddressTypeInput">IpAddressTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.observabilityRegionInput">ObservabilityRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.regionsInput">RegionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTags">Route53GlobalresolverGlobalResolverTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.clientToken">ClientToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.ipAddressType">IpAddressType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.observabilityRegion">ObservabilityRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.regions">Regions</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `DnsName`<sup>Required</sup> <a name="DnsName" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.dnsName"></a>

```csharp
public string DnsName { get; }
```

- *Type:* string

---

##### `GlobalResolverId`<sup>Required</sup> <a name="GlobalResolverId" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.globalResolverId"></a>

```csharp
public string GlobalResolverId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IPv4Addresses`<sup>Required</sup> <a name="IPv4Addresses" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.iPv4Addresses"></a>

```csharp
public string[] IPv4Addresses { get; }
```

- *Type:* string[]

---

##### `IPv6Addresses`<sup>Required</sup> <a name="IPv6Addresses" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.iPv6Addresses"></a>

```csharp
public string[] IPv6Addresses { get; }
```

- *Type:* string[]

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.tags"></a>

```csharp
public Route53GlobalresolverGlobalResolverTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsList">Route53GlobalresolverGlobalResolverTagsList</a>

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `ClientTokenInput`<sup>Optional</sup> <a name="ClientTokenInput" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.clientTokenInput"></a>

```csharp
public string ClientTokenInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IpAddressTypeInput`<sup>Optional</sup> <a name="IpAddressTypeInput" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.ipAddressTypeInput"></a>

```csharp
public string IpAddressTypeInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ObservabilityRegionInput`<sup>Optional</sup> <a name="ObservabilityRegionInput" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.observabilityRegionInput"></a>

```csharp
public string ObservabilityRegionInput { get; }
```

- *Type:* string

---

##### `RegionsInput`<sup>Optional</sup> <a name="RegionsInput" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.regionsInput"></a>

```csharp
public string[] RegionsInput { get; }
```

- *Type:* string[]

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.tagsInput"></a>

```csharp
public IResolvable|Route53GlobalresolverGlobalResolverTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTags">Route53GlobalresolverGlobalResolverTags</a>[]

---

##### `ClientToken`<sup>Required</sup> <a name="ClientToken" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.clientToken"></a>

```csharp
public string ClientToken { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `IpAddressType`<sup>Required</sup> <a name="IpAddressType" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.ipAddressType"></a>

```csharp
public string IpAddressType { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ObservabilityRegion`<sup>Required</sup> <a name="ObservabilityRegion" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.observabilityRegion"></a>

```csharp
public string ObservabilityRegion { get; }
```

- *Type:* string

---

##### `Regions`<sup>Required</sup> <a name="Regions" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.regions"></a>

```csharp
public string[] Regions { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Route53GlobalresolverGlobalResolverConfig <a name="Route53GlobalresolverGlobalResolverConfig" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Route53GlobalresolverGlobalResolverConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    string[] Regions,
    string ClientToken = null,
    string Description = null,
    string IpAddressType = null,
    string ObservabilityRegion = null,
    IResolvable|Route53GlobalresolverGlobalResolverTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53globalresolver_global_resolver#name Route53GlobalresolverGlobalResolver#name}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverConfig.property.regions">Regions</a></code> | <code>string[]</code> | A list of regions the Global Resolver will exist in. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverConfig.property.clientToken">ClientToken</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53globalresolver_global_resolver#client_token Route53GlobalresolverGlobalResolver#client_token}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53globalresolver_global_resolver#description Route53GlobalresolverGlobalResolver#description}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverConfig.property.ipAddressType">IpAddressType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53globalresolver_global_resolver#ip_address_type Route53GlobalresolverGlobalResolver#ip_address_type}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverConfig.property.observabilityRegion">ObservabilityRegion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53globalresolver_global_resolver#observability_region Route53GlobalresolverGlobalResolver#observability_region}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTags">Route53GlobalresolverGlobalResolverTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53globalresolver_global_resolver#tags Route53GlobalresolverGlobalResolver#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53globalresolver_global_resolver#name Route53GlobalresolverGlobalResolver#name}.

---

##### `Regions`<sup>Required</sup> <a name="Regions" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverConfig.property.regions"></a>

```csharp
public string[] Regions { get; set; }
```

- *Type:* string[]

A list of regions the Global Resolver will exist in.

This list cannot be updated and will stay fixed for the duration of the Global Resolver.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53globalresolver_global_resolver#regions Route53GlobalresolverGlobalResolver#regions}

---

##### `ClientToken`<sup>Optional</sup> <a name="ClientToken" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverConfig.property.clientToken"></a>

```csharp
public string ClientToken { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53globalresolver_global_resolver#client_token Route53GlobalresolverGlobalResolver#client_token}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53globalresolver_global_resolver#description Route53GlobalresolverGlobalResolver#description}.

---

##### `IpAddressType`<sup>Optional</sup> <a name="IpAddressType" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverConfig.property.ipAddressType"></a>

```csharp
public string IpAddressType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53globalresolver_global_resolver#ip_address_type Route53GlobalresolverGlobalResolver#ip_address_type}.

---

##### `ObservabilityRegion`<sup>Optional</sup> <a name="ObservabilityRegion" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverConfig.property.observabilityRegion"></a>

```csharp
public string ObservabilityRegion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53globalresolver_global_resolver#observability_region Route53GlobalresolverGlobalResolver#observability_region}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverConfig.property.tags"></a>

```csharp
public IResolvable|Route53GlobalresolverGlobalResolverTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTags">Route53GlobalresolverGlobalResolverTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53globalresolver_global_resolver#tags Route53GlobalresolverGlobalResolver#tags}.

---

### Route53GlobalresolverGlobalResolverTags <a name="Route53GlobalresolverGlobalResolverTags" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Route53GlobalresolverGlobalResolverTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53globalresolver_global_resolver#key Route53GlobalresolverGlobalResolver#key}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53globalresolver_global_resolver#value Route53GlobalresolverGlobalResolver#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53globalresolver_global_resolver#key Route53GlobalresolverGlobalResolver#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53globalresolver_global_resolver#value Route53GlobalresolverGlobalResolver#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### Route53GlobalresolverGlobalResolverTagsList <a name="Route53GlobalresolverGlobalResolverTagsList" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Route53GlobalresolverGlobalResolverTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsList.get"></a>

```csharp
private Route53GlobalresolverGlobalResolverTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTags">Route53GlobalresolverGlobalResolverTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsList.property.internalValue"></a>

```csharp
public IResolvable|Route53GlobalresolverGlobalResolverTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTags">Route53GlobalresolverGlobalResolverTags</a>[]

---


### Route53GlobalresolverGlobalResolverTagsOutputReference <a name="Route53GlobalresolverGlobalResolverTagsOutputReference" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Route53GlobalresolverGlobalResolverTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTags">Route53GlobalresolverGlobalResolverTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Route53GlobalresolverGlobalResolverTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTags">Route53GlobalresolverGlobalResolverTags</a>

---



