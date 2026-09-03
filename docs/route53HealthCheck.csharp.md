# `route53HealthCheck` Submodule <a name="`route53HealthCheck` Submodule" id="@cdktn/provider-awscc.route53HealthCheck"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Route53HealthCheck <a name="Route53HealthCheck" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/route53_health_check awscc_route53_health_check}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Route53HealthCheck(Construct Scope, string Id, Route53HealthCheckConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckConfig">Route53HealthCheckConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckConfig">Route53HealthCheckConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.putHealthCheckConfig">PutHealthCheckConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.putHealthCheckTags">PutHealthCheckTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.resetHealthCheckTags">ResetHealthCheckTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutHealthCheckConfig` <a name="PutHealthCheckConfig" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.putHealthCheckConfig"></a>

```csharp
private void PutHealthCheckConfig(Route53HealthCheckHealthCheckConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.putHealthCheckConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig">Route53HealthCheckHealthCheckConfig</a>

---

##### `PutHealthCheckTags` <a name="PutHealthCheckTags" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.putHealthCheckTags"></a>

```csharp
private void PutHealthCheckTags(IResolvable|Route53HealthCheckHealthCheckTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.putHealthCheckTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTags">Route53HealthCheckHealthCheckTags</a>[]

---

##### `ResetHealthCheckTags` <a name="ResetHealthCheckTags" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.resetHealthCheckTags"></a>

```csharp
private void ResetHealthCheckTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Route53HealthCheck resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Route53HealthCheck.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Route53HealthCheck.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Route53HealthCheck.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Route53HealthCheck.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a Route53HealthCheck resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Route53HealthCheck to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Route53HealthCheck that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/route53_health_check#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the Route53HealthCheck to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.healthCheckConfig">HealthCheckConfig</a></code> | <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference">Route53HealthCheckHealthCheckConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.healthCheckId">HealthCheckId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.healthCheckTags">HealthCheckTags</a></code> | <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsList">Route53HealthCheckHealthCheckTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.healthCheckConfigInput">HealthCheckConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig">Route53HealthCheckHealthCheckConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.healthCheckTagsInput">HealthCheckTagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTags">Route53HealthCheckHealthCheckTags</a>[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `HealthCheckConfig`<sup>Required</sup> <a name="HealthCheckConfig" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.healthCheckConfig"></a>

```csharp
public Route53HealthCheckHealthCheckConfigOutputReference HealthCheckConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference">Route53HealthCheckHealthCheckConfigOutputReference</a>

---

##### `HealthCheckId`<sup>Required</sup> <a name="HealthCheckId" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.healthCheckId"></a>

```csharp
public string HealthCheckId { get; }
```

- *Type:* string

---

##### `HealthCheckTags`<sup>Required</sup> <a name="HealthCheckTags" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.healthCheckTags"></a>

```csharp
public Route53HealthCheckHealthCheckTagsList HealthCheckTags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsList">Route53HealthCheckHealthCheckTagsList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `HealthCheckConfigInput`<sup>Optional</sup> <a name="HealthCheckConfigInput" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.healthCheckConfigInput"></a>

```csharp
public IResolvable|Route53HealthCheckHealthCheckConfig HealthCheckConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig">Route53HealthCheckHealthCheckConfig</a>

---

##### `HealthCheckTagsInput`<sup>Optional</sup> <a name="HealthCheckTagsInput" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.healthCheckTagsInput"></a>

```csharp
public IResolvable|Route53HealthCheckHealthCheckTags[] HealthCheckTagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTags">Route53HealthCheckHealthCheckTags</a>[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Route53HealthCheckConfig <a name="Route53HealthCheckConfig" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Route53HealthCheckConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    Route53HealthCheckHealthCheckConfig HealthCheckConfig,
    IResolvable|Route53HealthCheckHealthCheckTags[] HealthCheckTags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckConfig.property.healthCheckConfig">HealthCheckConfig</a></code> | <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig">Route53HealthCheckHealthCheckConfig</a></code> | A complex type that contains information about the health check. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckConfig.property.healthCheckTags">HealthCheckTags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTags">Route53HealthCheckHealthCheckTags</a>[]</code> | An array of key-value pairs to apply to this resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `HealthCheckConfig`<sup>Required</sup> <a name="HealthCheckConfig" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckConfig.property.healthCheckConfig"></a>

```csharp
public Route53HealthCheckHealthCheckConfig HealthCheckConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig">Route53HealthCheckHealthCheckConfig</a>

A complex type that contains information about the health check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/route53_health_check#health_check_config Route53HealthCheck#health_check_config}

---

##### `HealthCheckTags`<sup>Optional</sup> <a name="HealthCheckTags" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckConfig.property.healthCheckTags"></a>

```csharp
public IResolvable|Route53HealthCheckHealthCheckTags[] HealthCheckTags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTags">Route53HealthCheckHealthCheckTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/route53_health_check#health_check_tags Route53HealthCheck#health_check_tags}

---

### Route53HealthCheckHealthCheckConfig <a name="Route53HealthCheckHealthCheckConfig" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Route53HealthCheckHealthCheckConfig {
    string Type,
    Route53HealthCheckHealthCheckConfigAlarmIdentifier AlarmIdentifier = null,
    string[] ChildHealthChecks = null,
    bool|IResolvable EnableSni = null,
    double FailureThreshold = null,
    string FullyQualifiedDomainName = null,
    double HealthThreshold = null,
    string InsufficientDataHealthStatus = null,
    bool|IResolvable Inverted = null,
    string IpAddress = null,
    bool|IResolvable MeasureLatency = null,
    double Port = null,
    string[] Regions = null,
    double RequestInterval = null,
    string ResourcePath = null,
    string RoutingControlArn = null,
    string SearchString = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/route53_health_check#type Route53HealthCheck#type}. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.property.alarmIdentifier">AlarmIdentifier</a></code> | <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifier">Route53HealthCheckHealthCheckConfigAlarmIdentifier</a></code> | A complex type that identifies the CloudWatch alarm that you want Amazon Route 53 health checkers to use to determine whether the specified health check is healthy. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.property.childHealthChecks">ChildHealthChecks</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/route53_health_check#child_health_checks Route53HealthCheck#child_health_checks}. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.property.enableSni">EnableSni</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/route53_health_check#enable_sni Route53HealthCheck#enable_sni}. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.property.failureThreshold">FailureThreshold</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/route53_health_check#failure_threshold Route53HealthCheck#failure_threshold}. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.property.fullyQualifiedDomainName">FullyQualifiedDomainName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/route53_health_check#fully_qualified_domain_name Route53HealthCheck#fully_qualified_domain_name}. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.property.healthThreshold">HealthThreshold</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/route53_health_check#health_threshold Route53HealthCheck#health_threshold}. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.property.insufficientDataHealthStatus">InsufficientDataHealthStatus</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/route53_health_check#insufficient_data_health_status Route53HealthCheck#insufficient_data_health_status}. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.property.inverted">Inverted</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/route53_health_check#inverted Route53HealthCheck#inverted}. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.property.ipAddress">IpAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/route53_health_check#ip_address Route53HealthCheck#ip_address}. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.property.measureLatency">MeasureLatency</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/route53_health_check#measure_latency Route53HealthCheck#measure_latency}. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.property.port">Port</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/route53_health_check#port Route53HealthCheck#port}. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.property.regions">Regions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/route53_health_check#regions Route53HealthCheck#regions}. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.property.requestInterval">RequestInterval</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/route53_health_check#request_interval Route53HealthCheck#request_interval}. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.property.resourcePath">ResourcePath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/route53_health_check#resource_path Route53HealthCheck#resource_path}. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.property.routingControlArn">RoutingControlArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/route53_health_check#routing_control_arn Route53HealthCheck#routing_control_arn}. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.property.searchString">SearchString</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/route53_health_check#search_string Route53HealthCheck#search_string}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/route53_health_check#type Route53HealthCheck#type}.

---

##### `AlarmIdentifier`<sup>Optional</sup> <a name="AlarmIdentifier" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.property.alarmIdentifier"></a>

```csharp
public Route53HealthCheckHealthCheckConfigAlarmIdentifier AlarmIdentifier { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifier">Route53HealthCheckHealthCheckConfigAlarmIdentifier</a>

A complex type that identifies the CloudWatch alarm that you want Amazon Route 53 health checkers to use to determine whether the specified health check is healthy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/route53_health_check#alarm_identifier Route53HealthCheck#alarm_identifier}

---

##### `ChildHealthChecks`<sup>Optional</sup> <a name="ChildHealthChecks" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.property.childHealthChecks"></a>

```csharp
public string[] ChildHealthChecks { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/route53_health_check#child_health_checks Route53HealthCheck#child_health_checks}.

---

##### `EnableSni`<sup>Optional</sup> <a name="EnableSni" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.property.enableSni"></a>

```csharp
public bool|IResolvable EnableSni { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/route53_health_check#enable_sni Route53HealthCheck#enable_sni}.

---

##### `FailureThreshold`<sup>Optional</sup> <a name="FailureThreshold" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.property.failureThreshold"></a>

```csharp
public double FailureThreshold { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/route53_health_check#failure_threshold Route53HealthCheck#failure_threshold}.

---

##### `FullyQualifiedDomainName`<sup>Optional</sup> <a name="FullyQualifiedDomainName" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.property.fullyQualifiedDomainName"></a>

```csharp
public string FullyQualifiedDomainName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/route53_health_check#fully_qualified_domain_name Route53HealthCheck#fully_qualified_domain_name}.

---

##### `HealthThreshold`<sup>Optional</sup> <a name="HealthThreshold" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.property.healthThreshold"></a>

```csharp
public double HealthThreshold { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/route53_health_check#health_threshold Route53HealthCheck#health_threshold}.

---

##### `InsufficientDataHealthStatus`<sup>Optional</sup> <a name="InsufficientDataHealthStatus" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.property.insufficientDataHealthStatus"></a>

```csharp
public string InsufficientDataHealthStatus { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/route53_health_check#insufficient_data_health_status Route53HealthCheck#insufficient_data_health_status}.

---

##### `Inverted`<sup>Optional</sup> <a name="Inverted" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.property.inverted"></a>

```csharp
public bool|IResolvable Inverted { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/route53_health_check#inverted Route53HealthCheck#inverted}.

---

##### `IpAddress`<sup>Optional</sup> <a name="IpAddress" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.property.ipAddress"></a>

```csharp
public string IpAddress { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/route53_health_check#ip_address Route53HealthCheck#ip_address}.

---

##### `MeasureLatency`<sup>Optional</sup> <a name="MeasureLatency" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.property.measureLatency"></a>

```csharp
public bool|IResolvable MeasureLatency { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/route53_health_check#measure_latency Route53HealthCheck#measure_latency}.

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/route53_health_check#port Route53HealthCheck#port}.

---

##### `Regions`<sup>Optional</sup> <a name="Regions" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.property.regions"></a>

```csharp
public string[] Regions { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/route53_health_check#regions Route53HealthCheck#regions}.

---

##### `RequestInterval`<sup>Optional</sup> <a name="RequestInterval" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.property.requestInterval"></a>

```csharp
public double RequestInterval { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/route53_health_check#request_interval Route53HealthCheck#request_interval}.

---

##### `ResourcePath`<sup>Optional</sup> <a name="ResourcePath" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.property.resourcePath"></a>

```csharp
public string ResourcePath { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/route53_health_check#resource_path Route53HealthCheck#resource_path}.

---

##### `RoutingControlArn`<sup>Optional</sup> <a name="RoutingControlArn" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.property.routingControlArn"></a>

```csharp
public string RoutingControlArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/route53_health_check#routing_control_arn Route53HealthCheck#routing_control_arn}.

---

##### `SearchString`<sup>Optional</sup> <a name="SearchString" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.property.searchString"></a>

```csharp
public string SearchString { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/route53_health_check#search_string Route53HealthCheck#search_string}.

---

### Route53HealthCheckHealthCheckConfigAlarmIdentifier <a name="Route53HealthCheckHealthCheckConfigAlarmIdentifier" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifier"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifier.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Route53HealthCheckHealthCheckConfigAlarmIdentifier {
    string Name = null,
    string Region = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifier.property.name">Name</a></code> | <code>string</code> | The name of the CloudWatch alarm that you want Amazon Route 53 health checkers to use to determine whether this health check is healthy. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifier.property.region">Region</a></code> | <code>string</code> | For the CloudWatch alarm that you want Route 53 health checkers to use to determine whether this health check is healthy, the region that the alarm was created in. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifier.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the CloudWatch alarm that you want Amazon Route 53 health checkers to use to determine whether this health check is healthy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/route53_health_check#name Route53HealthCheck#name}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifier.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

For the CloudWatch alarm that you want Route 53 health checkers to use to determine whether this health check is healthy, the region that the alarm was created in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/route53_health_check#region Route53HealthCheck#region}

---

### Route53HealthCheckHealthCheckTags <a name="Route53HealthCheckHealthCheckTags" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Route53HealthCheckHealthCheckTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTags.property.key">Key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTags.property.value">Value</a></code> | <code>string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/route53_health_check#key Route53HealthCheck#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/route53_health_check#value Route53HealthCheck#value}

---

## Classes <a name="Classes" id="Classes"></a>

### Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference <a name="Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.resetRegion"></a>

```csharp
private void ResetRegion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifier">Route53HealthCheckHealthCheckConfigAlarmIdentifier</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Route53HealthCheckHealthCheckConfigAlarmIdentifier InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifier">Route53HealthCheckHealthCheckConfigAlarmIdentifier</a>

---


### Route53HealthCheckHealthCheckConfigOutputReference <a name="Route53HealthCheckHealthCheckConfigOutputReference" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Route53HealthCheckHealthCheckConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.putAlarmIdentifier">PutAlarmIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resetAlarmIdentifier">ResetAlarmIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resetChildHealthChecks">ResetChildHealthChecks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resetEnableSni">ResetEnableSni</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resetFailureThreshold">ResetFailureThreshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resetFullyQualifiedDomainName">ResetFullyQualifiedDomainName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resetHealthThreshold">ResetHealthThreshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resetInsufficientDataHealthStatus">ResetInsufficientDataHealthStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resetInverted">ResetInverted</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resetIpAddress">ResetIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resetMeasureLatency">ResetMeasureLatency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resetRegions">ResetRegions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resetRequestInterval">ResetRequestInterval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resetResourcePath">ResetResourcePath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resetRoutingControlArn">ResetRoutingControlArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resetSearchString">ResetSearchString</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAlarmIdentifier` <a name="PutAlarmIdentifier" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.putAlarmIdentifier"></a>

```csharp
private void PutAlarmIdentifier(Route53HealthCheckHealthCheckConfigAlarmIdentifier Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.putAlarmIdentifier.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifier">Route53HealthCheckHealthCheckConfigAlarmIdentifier</a>

---

##### `ResetAlarmIdentifier` <a name="ResetAlarmIdentifier" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resetAlarmIdentifier"></a>

```csharp
private void ResetAlarmIdentifier()
```

##### `ResetChildHealthChecks` <a name="ResetChildHealthChecks" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resetChildHealthChecks"></a>

```csharp
private void ResetChildHealthChecks()
```

##### `ResetEnableSni` <a name="ResetEnableSni" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resetEnableSni"></a>

```csharp
private void ResetEnableSni()
```

##### `ResetFailureThreshold` <a name="ResetFailureThreshold" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resetFailureThreshold"></a>

```csharp
private void ResetFailureThreshold()
```

##### `ResetFullyQualifiedDomainName` <a name="ResetFullyQualifiedDomainName" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resetFullyQualifiedDomainName"></a>

```csharp
private void ResetFullyQualifiedDomainName()
```

##### `ResetHealthThreshold` <a name="ResetHealthThreshold" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resetHealthThreshold"></a>

```csharp
private void ResetHealthThreshold()
```

##### `ResetInsufficientDataHealthStatus` <a name="ResetInsufficientDataHealthStatus" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resetInsufficientDataHealthStatus"></a>

```csharp
private void ResetInsufficientDataHealthStatus()
```

##### `ResetInverted` <a name="ResetInverted" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resetInverted"></a>

```csharp
private void ResetInverted()
```

##### `ResetIpAddress` <a name="ResetIpAddress" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resetIpAddress"></a>

```csharp
private void ResetIpAddress()
```

##### `ResetMeasureLatency` <a name="ResetMeasureLatency" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resetMeasureLatency"></a>

```csharp
private void ResetMeasureLatency()
```

##### `ResetPort` <a name="ResetPort" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resetPort"></a>

```csharp
private void ResetPort()
```

##### `ResetRegions` <a name="ResetRegions" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resetRegions"></a>

```csharp
private void ResetRegions()
```

##### `ResetRequestInterval` <a name="ResetRequestInterval" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resetRequestInterval"></a>

```csharp
private void ResetRequestInterval()
```

##### `ResetResourcePath` <a name="ResetResourcePath" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resetResourcePath"></a>

```csharp
private void ResetResourcePath()
```

##### `ResetRoutingControlArn` <a name="ResetRoutingControlArn" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resetRoutingControlArn"></a>

```csharp
private void ResetRoutingControlArn()
```

##### `ResetSearchString` <a name="ResetSearchString" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resetSearchString"></a>

```csharp
private void ResetSearchString()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.alarmIdentifier">AlarmIdentifier</a></code> | <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference">Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.alarmIdentifierInput">AlarmIdentifierInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifier">Route53HealthCheckHealthCheckConfigAlarmIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.childHealthChecksInput">ChildHealthChecksInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.enableSniInput">EnableSniInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.failureThresholdInput">FailureThresholdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.fullyQualifiedDomainNameInput">FullyQualifiedDomainNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.healthThresholdInput">HealthThresholdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.insufficientDataHealthStatusInput">InsufficientDataHealthStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.invertedInput">InvertedInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.ipAddressInput">IpAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.measureLatencyInput">MeasureLatencyInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.regionsInput">RegionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.requestIntervalInput">RequestIntervalInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.resourcePathInput">ResourcePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.routingControlArnInput">RoutingControlArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.searchStringInput">SearchStringInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.childHealthChecks">ChildHealthChecks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.enableSni">EnableSni</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.failureThreshold">FailureThreshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.fullyQualifiedDomainName">FullyQualifiedDomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.healthThreshold">HealthThreshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.insufficientDataHealthStatus">InsufficientDataHealthStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.inverted">Inverted</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.ipAddress">IpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.measureLatency">MeasureLatency</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.regions">Regions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.requestInterval">RequestInterval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.resourcePath">ResourcePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.routingControlArn">RoutingControlArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.searchString">SearchString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig">Route53HealthCheckHealthCheckConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AlarmIdentifier`<sup>Required</sup> <a name="AlarmIdentifier" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.alarmIdentifier"></a>

```csharp
public Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference AlarmIdentifier { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference">Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference</a>

---

##### `AlarmIdentifierInput`<sup>Optional</sup> <a name="AlarmIdentifierInput" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.alarmIdentifierInput"></a>

```csharp
public IResolvable|Route53HealthCheckHealthCheckConfigAlarmIdentifier AlarmIdentifierInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifier">Route53HealthCheckHealthCheckConfigAlarmIdentifier</a>

---

##### `ChildHealthChecksInput`<sup>Optional</sup> <a name="ChildHealthChecksInput" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.childHealthChecksInput"></a>

```csharp
public string[] ChildHealthChecksInput { get; }
```

- *Type:* string[]

---

##### `EnableSniInput`<sup>Optional</sup> <a name="EnableSniInput" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.enableSniInput"></a>

```csharp
public bool|IResolvable EnableSniInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `FailureThresholdInput`<sup>Optional</sup> <a name="FailureThresholdInput" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.failureThresholdInput"></a>

```csharp
public double FailureThresholdInput { get; }
```

- *Type:* double

---

##### `FullyQualifiedDomainNameInput`<sup>Optional</sup> <a name="FullyQualifiedDomainNameInput" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.fullyQualifiedDomainNameInput"></a>

```csharp
public string FullyQualifiedDomainNameInput { get; }
```

- *Type:* string

---

##### `HealthThresholdInput`<sup>Optional</sup> <a name="HealthThresholdInput" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.healthThresholdInput"></a>

```csharp
public double HealthThresholdInput { get; }
```

- *Type:* double

---

##### `InsufficientDataHealthStatusInput`<sup>Optional</sup> <a name="InsufficientDataHealthStatusInput" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.insufficientDataHealthStatusInput"></a>

```csharp
public string InsufficientDataHealthStatusInput { get; }
```

- *Type:* string

---

##### `InvertedInput`<sup>Optional</sup> <a name="InvertedInput" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.invertedInput"></a>

```csharp
public bool|IResolvable InvertedInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IpAddressInput`<sup>Optional</sup> <a name="IpAddressInput" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.ipAddressInput"></a>

```csharp
public string IpAddressInput { get; }
```

- *Type:* string

---

##### `MeasureLatencyInput`<sup>Optional</sup> <a name="MeasureLatencyInput" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.measureLatencyInput"></a>

```csharp
public bool|IResolvable MeasureLatencyInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `RegionsInput`<sup>Optional</sup> <a name="RegionsInput" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.regionsInput"></a>

```csharp
public string[] RegionsInput { get; }
```

- *Type:* string[]

---

##### `RequestIntervalInput`<sup>Optional</sup> <a name="RequestIntervalInput" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.requestIntervalInput"></a>

```csharp
public double RequestIntervalInput { get; }
```

- *Type:* double

---

##### `ResourcePathInput`<sup>Optional</sup> <a name="ResourcePathInput" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.resourcePathInput"></a>

```csharp
public string ResourcePathInput { get; }
```

- *Type:* string

---

##### `RoutingControlArnInput`<sup>Optional</sup> <a name="RoutingControlArnInput" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.routingControlArnInput"></a>

```csharp
public string RoutingControlArnInput { get; }
```

- *Type:* string

---

##### `SearchStringInput`<sup>Optional</sup> <a name="SearchStringInput" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.searchStringInput"></a>

```csharp
public string SearchStringInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `ChildHealthChecks`<sup>Required</sup> <a name="ChildHealthChecks" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.childHealthChecks"></a>

```csharp
public string[] ChildHealthChecks { get; }
```

- *Type:* string[]

---

##### `EnableSni`<sup>Required</sup> <a name="EnableSni" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.enableSni"></a>

```csharp
public bool|IResolvable EnableSni { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `FailureThreshold`<sup>Required</sup> <a name="FailureThreshold" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.failureThreshold"></a>

```csharp
public double FailureThreshold { get; }
```

- *Type:* double

---

##### `FullyQualifiedDomainName`<sup>Required</sup> <a name="FullyQualifiedDomainName" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.fullyQualifiedDomainName"></a>

```csharp
public string FullyQualifiedDomainName { get; }
```

- *Type:* string

---

##### `HealthThreshold`<sup>Required</sup> <a name="HealthThreshold" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.healthThreshold"></a>

```csharp
public double HealthThreshold { get; }
```

- *Type:* double

---

##### `InsufficientDataHealthStatus`<sup>Required</sup> <a name="InsufficientDataHealthStatus" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.insufficientDataHealthStatus"></a>

```csharp
public string InsufficientDataHealthStatus { get; }
```

- *Type:* string

---

##### `Inverted`<sup>Required</sup> <a name="Inverted" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.inverted"></a>

```csharp
public bool|IResolvable Inverted { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.ipAddress"></a>

```csharp
public string IpAddress { get; }
```

- *Type:* string

---

##### `MeasureLatency`<sup>Required</sup> <a name="MeasureLatency" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.measureLatency"></a>

```csharp
public bool|IResolvable MeasureLatency { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `Regions`<sup>Required</sup> <a name="Regions" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.regions"></a>

```csharp
public string[] Regions { get; }
```

- *Type:* string[]

---

##### `RequestInterval`<sup>Required</sup> <a name="RequestInterval" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.requestInterval"></a>

```csharp
public double RequestInterval { get; }
```

- *Type:* double

---

##### `ResourcePath`<sup>Required</sup> <a name="ResourcePath" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.resourcePath"></a>

```csharp
public string ResourcePath { get; }
```

- *Type:* string

---

##### `RoutingControlArn`<sup>Required</sup> <a name="RoutingControlArn" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.routingControlArn"></a>

```csharp
public string RoutingControlArn { get; }
```

- *Type:* string

---

##### `SearchString`<sup>Required</sup> <a name="SearchString" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.searchString"></a>

```csharp
public string SearchString { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Route53HealthCheckHealthCheckConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig">Route53HealthCheckHealthCheckConfig</a>

---


### Route53HealthCheckHealthCheckTagsList <a name="Route53HealthCheckHealthCheckTagsList" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Route53HealthCheckHealthCheckTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsList.get"></a>

```csharp
private Route53HealthCheckHealthCheckTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTags">Route53HealthCheckHealthCheckTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsList.property.internalValue"></a>

```csharp
public IResolvable|Route53HealthCheckHealthCheckTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTags">Route53HealthCheckHealthCheckTags</a>[]

---


### Route53HealthCheckHealthCheckTagsOutputReference <a name="Route53HealthCheckHealthCheckTagsOutputReference" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Route53HealthCheckHealthCheckTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTags">Route53HealthCheckHealthCheckTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Route53HealthCheckHealthCheckTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTags">Route53HealthCheckHealthCheckTags</a>

---



