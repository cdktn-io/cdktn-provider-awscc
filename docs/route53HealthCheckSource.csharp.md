# `route53HealthCheckSource` Submodule <a name="`route53HealthCheckSource` Submodule" id="@cdktn/provider-awscc.route53HealthCheckSource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Route53HealthCheckSource <a name="Route53HealthCheckSource" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53_health_check_source awscc_route53_health_check_source}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Route53HealthCheckSource(Construct Scope, string Id, Route53HealthCheckSourceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceConfig">Route53HealthCheckSourceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceConfig">Route53HealthCheckSourceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.putHealthCheckSourceConfig">PutHealthCheckSourceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutHealthCheckSourceConfig` <a name="PutHealthCheckSourceConfig" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.putHealthCheckSourceConfig"></a>

```csharp
private void PutHealthCheckSourceConfig(Route53HealthCheckSourceHealthCheckSourceConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.putHealthCheckSourceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfig">Route53HealthCheckSourceHealthCheckSourceConfig</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.putTags"></a>

```csharp
private void PutTags(IResolvable|Route53HealthCheckSourceTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTags">Route53HealthCheckSourceTags</a>[]

---

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Route53HealthCheckSource resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Route53HealthCheckSource.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Route53HealthCheckSource.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Route53HealthCheckSource.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Route53HealthCheckSource.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a Route53HealthCheckSource resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Route53HealthCheckSource to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Route53HealthCheckSource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53_health_check_source#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the Route53HealthCheckSource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.property.healthCheckSourceConfig">HealthCheckSourceConfig</a></code> | <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference">Route53HealthCheckSourceHealthCheckSourceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.property.healthCheckSourceId">HealthCheckSourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.property.healthCheckSourceStatus">HealthCheckSourceStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsList">Route53HealthCheckSourceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.property.healthCheckSourceConfigInput">HealthCheckSourceConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfig">Route53HealthCheckSourceHealthCheckSourceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTags">Route53HealthCheckSourceTags</a>[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `HealthCheckSourceConfig`<sup>Required</sup> <a name="HealthCheckSourceConfig" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.property.healthCheckSourceConfig"></a>

```csharp
public Route53HealthCheckSourceHealthCheckSourceConfigOutputReference HealthCheckSourceConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference">Route53HealthCheckSourceHealthCheckSourceConfigOutputReference</a>

---

##### `HealthCheckSourceId`<sup>Required</sup> <a name="HealthCheckSourceId" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.property.healthCheckSourceId"></a>

```csharp
public string HealthCheckSourceId { get; }
```

- *Type:* string

---

##### `HealthCheckSourceStatus`<sup>Required</sup> <a name="HealthCheckSourceStatus" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.property.healthCheckSourceStatus"></a>

```csharp
public string HealthCheckSourceStatus { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.property.tags"></a>

```csharp
public Route53HealthCheckSourceTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsList">Route53HealthCheckSourceTagsList</a>

---

##### `HealthCheckSourceConfigInput`<sup>Optional</sup> <a name="HealthCheckSourceConfigInput" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.property.healthCheckSourceConfigInput"></a>

```csharp
public IResolvable|Route53HealthCheckSourceHealthCheckSourceConfig HealthCheckSourceConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfig">Route53HealthCheckSourceHealthCheckSourceConfig</a>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.property.tagsInput"></a>

```csharp
public IResolvable|Route53HealthCheckSourceTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTags">Route53HealthCheckSourceTags</a>[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Route53HealthCheckSourceConfig <a name="Route53HealthCheckSourceConfig" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Route53HealthCheckSourceConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    Route53HealthCheckSourceHealthCheckSourceConfig HealthCheckSourceConfig,
    IResolvable|Route53HealthCheckSourceTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceConfig.property.healthCheckSourceConfig">HealthCheckSourceConfig</a></code> | <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfig">Route53HealthCheckSourceHealthCheckSourceConfig</a></code> | <p>The VPC, subnets, and security groups for the health check source.</p>. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTags">Route53HealthCheckSourceTags</a>[]</code> | An array of key-value pairs to apply to this resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `HealthCheckSourceConfig`<sup>Required</sup> <a name="HealthCheckSourceConfig" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceConfig.property.healthCheckSourceConfig"></a>

```csharp
public Route53HealthCheckSourceHealthCheckSourceConfig HealthCheckSourceConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfig">Route53HealthCheckSourceHealthCheckSourceConfig</a>

<p>The VPC, subnets, and security groups for the health check source.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53_health_check_source#health_check_source_config Route53HealthCheckSource#health_check_source_config}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceConfig.property.tags"></a>

```csharp
public IResolvable|Route53HealthCheckSourceTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTags">Route53HealthCheckSourceTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53_health_check_source#tags Route53HealthCheckSource#tags}

---

### Route53HealthCheckSourceHealthCheckSourceConfig <a name="Route53HealthCheckSourceHealthCheckSourceConfig" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Route53HealthCheckSourceHealthCheckSourceConfig {
    IResolvable|Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStruct[] SubnetConfigurationList,
    string VpcId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfig.property.subnetConfigurationList">SubnetConfigurationList</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStruct">Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStruct</a>[]</code> | <p>A complex type that contains one <code>SubnetConfiguration</code> element for each Availability Zone that Route 53 uses for private endpoint health checks in the Amazon Web Services Region. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfig.property.vpcId">VpcId</a></code> | <code>string</code> | <p>The ID of the VPC that contains the subnets for the health check source. |

---

##### `SubnetConfigurationList`<sup>Required</sup> <a name="SubnetConfigurationList" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfig.property.subnetConfigurationList"></a>

```csharp
public IResolvable|Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStruct[] SubnetConfigurationList { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStruct">Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStruct</a>[]

<p>A complex type that contains one <code>SubnetConfiguration</code> element for each Availability Zone that Route 53 uses for private endpoint health checks in the Amazon Web Services Region.

Each element must be in a different Availability Zone. Most Regions require three elements. Regions that have only two such Availability Zones, such as US West (N. California), require two elements. Route 53 creates network interfaces in each subnet and sends health check requests from all of them.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53_health_check_source#subnet_configuration_list Route53HealthCheckSource#subnet_configuration_list}

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfig.property.vpcId"></a>

```csharp
public string VpcId { get; set; }
```

- *Type:* string

<p>The ID of the VPC that contains the subnets for the health check source.

All subnets in <code>SubnetConfigurationList</code> must belong to this VPC.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53_health_check_source#vpc_id Route53HealthCheckSource#vpc_id}

---

### Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStruct <a name="Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStruct" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStruct.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStruct {
    string AvailabilityZoneId,
    string[] SecurityGroupIdList,
    string SubnetId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStruct.property.availabilityZoneId">AvailabilityZoneId</a></code> | <code>string</code> | <p>The ID of the Availability Zone that contains the subnet, for example <code>use1-az1</code>. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStruct.property.securityGroupIdList">SecurityGroupIdList</a></code> | <code>string[]</code> | <p>The IDs of one to ten security groups in the same VPC to associate with the network interfaces that Route 53 creates in this subnet. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStruct.property.subnetId">SubnetId</a></code> | <code>string</code> | <p>The ID of the subnet. The subnet must have free IP addresses for the network interfaces that Route 53 creates.</p>. |

---

##### `AvailabilityZoneId`<sup>Required</sup> <a name="AvailabilityZoneId" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStruct.property.availabilityZoneId"></a>

```csharp
public string AvailabilityZoneId { get; set; }
```

- *Type:* string

<p>The ID of the Availability Zone that contains the subnet, for example <code>use1-az1</code>.

Specify the Availability Zone ID, not the Availability Zone name. Each subnet in a health check source must be in a different Availability Zone.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53_health_check_source#availability_zone_id Route53HealthCheckSource#availability_zone_id}

---

##### `SecurityGroupIdList`<sup>Required</sup> <a name="SecurityGroupIdList" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStruct.property.securityGroupIdList"></a>

```csharp
public string[] SecurityGroupIdList { get; set; }
```

- *Type:* string[]

<p>The IDs of one to ten security groups in the same VPC to associate with the network interfaces that Route 53 creates in this subnet.

The security groups must allow outbound traffic to the endpoints that the health checks monitor.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53_health_check_source#security_group_id_list Route53HealthCheckSource#security_group_id_list}

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStruct.property.subnetId"></a>

```csharp
public string SubnetId { get; set; }
```

- *Type:* string

<p>The ID of the subnet. The subnet must have free IP addresses for the network interfaces that Route 53 creates.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53_health_check_source#subnet_id Route53HealthCheckSource#subnet_id}

---

### Route53HealthCheckSourceTags <a name="Route53HealthCheckSourceTags" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Route53HealthCheckSourceTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTags.property.key">Key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTags.property.value">Value</a></code> | <code>string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53_health_check_source#key Route53HealthCheckSource#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53_health_check_source#value Route53HealthCheckSource#value}

---

## Classes <a name="Classes" id="Classes"></a>

### Route53HealthCheckSourceHealthCheckSourceConfigOutputReference <a name="Route53HealthCheckSourceHealthCheckSourceConfigOutputReference" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Route53HealthCheckSourceHealthCheckSourceConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.putSubnetConfigurationList">PutSubnetConfigurationList</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSubnetConfigurationList` <a name="PutSubnetConfigurationList" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.putSubnetConfigurationList"></a>

```csharp
private void PutSubnetConfigurationList(IResolvable|Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStruct[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.putSubnetConfigurationList.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStruct">Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStruct</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.property.subnetConfigurationList">SubnetConfigurationList</a></code> | <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList">Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.property.subnetConfigurationListInput">SubnetConfigurationListInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStruct">Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStruct</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.property.vpcIdInput">VpcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.property.vpcId">VpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfig">Route53HealthCheckSourceHealthCheckSourceConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SubnetConfigurationList`<sup>Required</sup> <a name="SubnetConfigurationList" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.property.subnetConfigurationList"></a>

```csharp
public Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList SubnetConfigurationList { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList">Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList</a>

---

##### `SubnetConfigurationListInput`<sup>Optional</sup> <a name="SubnetConfigurationListInput" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.property.subnetConfigurationListInput"></a>

```csharp
public IResolvable|Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStruct[] SubnetConfigurationListInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStruct">Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStruct</a>[]

---

##### `VpcIdInput`<sup>Optional</sup> <a name="VpcIdInput" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.property.vpcIdInput"></a>

```csharp
public string VpcIdInput { get; }
```

- *Type:* string

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.property.vpcId"></a>

```csharp
public string VpcId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Route53HealthCheckSourceHealthCheckSourceConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfig">Route53HealthCheckSourceHealthCheckSourceConfig</a>

---


### Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList <a name="Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList.get"></a>

```csharp
private Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStruct">Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStruct</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList.property.internalValue"></a>

```csharp
public IResolvable|Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStruct[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStruct">Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStruct</a>[]

---


### Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference <a name="Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.property.availabilityZoneIdInput">AvailabilityZoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.property.securityGroupIdListInput">SecurityGroupIdListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.property.subnetIdInput">SubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.property.availabilityZoneId">AvailabilityZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.property.securityGroupIdList">SecurityGroupIdList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStruct">Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStruct</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AvailabilityZoneIdInput`<sup>Optional</sup> <a name="AvailabilityZoneIdInput" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.property.availabilityZoneIdInput"></a>

```csharp
public string AvailabilityZoneIdInput { get; }
```

- *Type:* string

---

##### `SecurityGroupIdListInput`<sup>Optional</sup> <a name="SecurityGroupIdListInput" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.property.securityGroupIdListInput"></a>

```csharp
public string[] SecurityGroupIdListInput { get; }
```

- *Type:* string[]

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.property.subnetIdInput"></a>

```csharp
public string SubnetIdInput { get; }
```

- *Type:* string

---

##### `AvailabilityZoneId`<sup>Required</sup> <a name="AvailabilityZoneId" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.property.availabilityZoneId"></a>

```csharp
public string AvailabilityZoneId { get; }
```

- *Type:* string

---

##### `SecurityGroupIdList`<sup>Required</sup> <a name="SecurityGroupIdList" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.property.securityGroupIdList"></a>

```csharp
public string[] SecurityGroupIdList { get; }
```

- *Type:* string[]

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStruct InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStruct">Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStruct</a>

---


### Route53HealthCheckSourceTagsList <a name="Route53HealthCheckSourceTagsList" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Route53HealthCheckSourceTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsList.get"></a>

```csharp
private Route53HealthCheckSourceTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTags">Route53HealthCheckSourceTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsList.property.internalValue"></a>

```csharp
public IResolvable|Route53HealthCheckSourceTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTags">Route53HealthCheckSourceTags</a>[]

---


### Route53HealthCheckSourceTagsOutputReference <a name="Route53HealthCheckSourceTagsOutputReference" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Route53HealthCheckSourceTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTags">Route53HealthCheckSourceTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Route53HealthCheckSourceTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTags">Route53HealthCheckSourceTags</a>

---



