# `route53GlobalresolverCoreNetworkEndpoint` Submodule <a name="`route53GlobalresolverCoreNetworkEndpoint` Submodule" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Route53GlobalresolverCoreNetworkEndpoint <a name="Route53GlobalresolverCoreNetworkEndpoint" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53globalresolver_core_network_endpoint awscc_route53globalresolver_core_network_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Route53GlobalresolverCoreNetworkEndpoint(Construct Scope, string Id, Route53GlobalresolverCoreNetworkEndpointConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointConfig">Route53GlobalresolverCoreNetworkEndpointConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointConfig">Route53GlobalresolverCoreNetworkEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.putIpAddresses">PutIpAddresses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.resetClientToken">ResetClientToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutIpAddresses` <a name="PutIpAddresses" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.putIpAddresses"></a>

```csharp
private void PutIpAddresses(IResolvable|Route53GlobalresolverCoreNetworkEndpointIpAddresses[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.putIpAddresses.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddresses">Route53GlobalresolverCoreNetworkEndpointIpAddresses</a>[]

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.putTags"></a>

```csharp
private void PutTags(IResolvable|Route53GlobalresolverCoreNetworkEndpointTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTags">Route53GlobalresolverCoreNetworkEndpointTags</a>[]

---

##### `ResetClientToken` <a name="ResetClientToken" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.resetClientToken"></a>

```csharp
private void ResetClientToken()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Route53GlobalresolverCoreNetworkEndpoint resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Route53GlobalresolverCoreNetworkEndpoint.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Route53GlobalresolverCoreNetworkEndpoint.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Route53GlobalresolverCoreNetworkEndpoint.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Route53GlobalresolverCoreNetworkEndpoint.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a Route53GlobalresolverCoreNetworkEndpoint resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Route53GlobalresolverCoreNetworkEndpoint to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Route53GlobalresolverCoreNetworkEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53globalresolver_core_network_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the Route53GlobalresolverCoreNetworkEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.availableRegions">AvailableRegions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.coreNetworkEndpointId">CoreNetworkEndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.ipAddresses">IpAddresses</a></code> | <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesList">Route53GlobalresolverCoreNetworkEndpointIpAddressesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsList">Route53GlobalresolverCoreNetworkEndpointTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.clientTokenInput">ClientTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.coreNetworkArnInput">CoreNetworkArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.globalResolverIdInput">GlobalResolverIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.ipAddressesInput">IpAddressesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddresses">Route53GlobalresolverCoreNetworkEndpointIpAddresses</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTags">Route53GlobalresolverCoreNetworkEndpointTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.clientToken">ClientToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.coreNetworkArn">CoreNetworkArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.globalResolverId">GlobalResolverId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `AvailableRegions`<sup>Required</sup> <a name="AvailableRegions" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.availableRegions"></a>

```csharp
public string[] AvailableRegions { get; }
```

- *Type:* string[]

---

##### `CoreNetworkEndpointId`<sup>Required</sup> <a name="CoreNetworkEndpointId" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.coreNetworkEndpointId"></a>

```csharp
public string CoreNetworkEndpointId { get; }
```

- *Type:* string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IpAddresses`<sup>Required</sup> <a name="IpAddresses" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.ipAddresses"></a>

```csharp
public Route53GlobalresolverCoreNetworkEndpointIpAddressesList IpAddresses { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesList">Route53GlobalresolverCoreNetworkEndpointIpAddressesList</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.tags"></a>

```csharp
public Route53GlobalresolverCoreNetworkEndpointTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsList">Route53GlobalresolverCoreNetworkEndpointTagsList</a>

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `ClientTokenInput`<sup>Optional</sup> <a name="ClientTokenInput" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.clientTokenInput"></a>

```csharp
public string ClientTokenInput { get; }
```

- *Type:* string

---

##### `CoreNetworkArnInput`<sup>Optional</sup> <a name="CoreNetworkArnInput" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.coreNetworkArnInput"></a>

```csharp
public string CoreNetworkArnInput { get; }
```

- *Type:* string

---

##### `GlobalResolverIdInput`<sup>Optional</sup> <a name="GlobalResolverIdInput" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.globalResolverIdInput"></a>

```csharp
public string GlobalResolverIdInput { get; }
```

- *Type:* string

---

##### `IpAddressesInput`<sup>Optional</sup> <a name="IpAddressesInput" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.ipAddressesInput"></a>

```csharp
public IResolvable|Route53GlobalresolverCoreNetworkEndpointIpAddresses[] IpAddressesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddresses">Route53GlobalresolverCoreNetworkEndpointIpAddresses</a>[]

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.tagsInput"></a>

```csharp
public IResolvable|Route53GlobalresolverCoreNetworkEndpointTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTags">Route53GlobalresolverCoreNetworkEndpointTags</a>[]

---

##### `ClientToken`<sup>Required</sup> <a name="ClientToken" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.clientToken"></a>

```csharp
public string ClientToken { get; }
```

- *Type:* string

---

##### `CoreNetworkArn`<sup>Required</sup> <a name="CoreNetworkArn" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.coreNetworkArn"></a>

```csharp
public string CoreNetworkArn { get; }
```

- *Type:* string

---

##### `GlobalResolverId`<sup>Required</sup> <a name="GlobalResolverId" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.globalResolverId"></a>

```csharp
public string GlobalResolverId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Route53GlobalresolverCoreNetworkEndpointConfig <a name="Route53GlobalresolverCoreNetworkEndpointConfig" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Route53GlobalresolverCoreNetworkEndpointConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string CoreNetworkArn,
    string GlobalResolverId,
    IResolvable|Route53GlobalresolverCoreNetworkEndpointIpAddresses[] IpAddresses,
    string ClientToken = null,
    string Name = null,
    IResolvable|Route53GlobalresolverCoreNetworkEndpointTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointConfig.property.coreNetworkArn">CoreNetworkArn</a></code> | <code>string</code> | The ARN of the AWS Cloud WAN core network to connect. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointConfig.property.globalResolverId">GlobalResolverId</a></code> | <code>string</code> | The ID of the Global Resolver to connect. A Global Resolver can have one core network endpoint. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointConfig.property.ipAddresses">IpAddresses</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddresses">Route53GlobalresolverCoreNetworkEndpointIpAddresses</a>[]</code> | The private DNS IP addresses of the endpoint (1 to 5). Each IP address can appear once. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointConfig.property.clientToken">ClientToken</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53globalresolver_core_network_endpoint#client_token Route53GlobalresolverCoreNetworkEndpoint#client_token}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointConfig.property.name">Name</a></code> | <code>string</code> | A name for the core network endpoint. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTags">Route53GlobalresolverCoreNetworkEndpointTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53globalresolver_core_network_endpoint#tags Route53GlobalresolverCoreNetworkEndpoint#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CoreNetworkArn`<sup>Required</sup> <a name="CoreNetworkArn" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointConfig.property.coreNetworkArn"></a>

```csharp
public string CoreNetworkArn { get; set; }
```

- *Type:* string

The ARN of the AWS Cloud WAN core network to connect.

The core network must be in the same account and AVAILABLE. A core network can have one core network endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53globalresolver_core_network_endpoint#core_network_arn Route53GlobalresolverCoreNetworkEndpoint#core_network_arn}

---

##### `GlobalResolverId`<sup>Required</sup> <a name="GlobalResolverId" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointConfig.property.globalResolverId"></a>

```csharp
public string GlobalResolverId { get; set; }
```

- *Type:* string

The ID of the Global Resolver to connect. A Global Resolver can have one core network endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53globalresolver_core_network_endpoint#global_resolver_id Route53GlobalresolverCoreNetworkEndpoint#global_resolver_id}

---

##### `IpAddresses`<sup>Required</sup> <a name="IpAddresses" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointConfig.property.ipAddresses"></a>

```csharp
public IResolvable|Route53GlobalresolverCoreNetworkEndpointIpAddresses[] IpAddresses { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddresses">Route53GlobalresolverCoreNetworkEndpointIpAddresses</a>[]

The private DNS IP addresses of the endpoint (1 to 5). Each IP address can appear once.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53globalresolver_core_network_endpoint#ip_addresses Route53GlobalresolverCoreNetworkEndpoint#ip_addresses}

---

##### `ClientToken`<sup>Optional</sup> <a name="ClientToken" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointConfig.property.clientToken"></a>

```csharp
public string ClientToken { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53globalresolver_core_network_endpoint#client_token Route53GlobalresolverCoreNetworkEndpoint#client_token}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

A name for the core network endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53globalresolver_core_network_endpoint#name Route53GlobalresolverCoreNetworkEndpoint#name}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointConfig.property.tags"></a>

```csharp
public IResolvable|Route53GlobalresolverCoreNetworkEndpointTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTags">Route53GlobalresolverCoreNetworkEndpointTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53globalresolver_core_network_endpoint#tags Route53GlobalresolverCoreNetworkEndpoint#tags}.

---

### Route53GlobalresolverCoreNetworkEndpointIpAddresses <a name="Route53GlobalresolverCoreNetworkEndpointIpAddresses" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddresses"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddresses.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Route53GlobalresolverCoreNetworkEndpointIpAddresses {
    string DnsLabel,
    string RegionScope,
    string Ipv4Address = null,
    string Ipv6Address = null,
    string[] Regions = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddresses.property.dnsLabel">DnsLabel</a></code> | <code>string</code> | Lowercase DNS label for the IP address. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddresses.property.regionScope">RegionScope</a></code> | <code>string</code> | ALL to serve the IP address in every available region of the endpoint, or REGIONAL to serve it only in Regions. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddresses.property.ipv4Address">Ipv4Address</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53globalresolver_core_network_endpoint#ipv_4_address Route53GlobalresolverCoreNetworkEndpoint#ipv_4_address}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddresses.property.ipv6Address">Ipv6Address</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53globalresolver_core_network_endpoint#ipv_6_address Route53GlobalresolverCoreNetworkEndpoint#ipv_6_address}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddresses.property.regions">Regions</a></code> | <code>string[]</code> | Regions that serve the IP address. |

---

##### `DnsLabel`<sup>Required</sup> <a name="DnsLabel" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddresses.property.dnsLabel"></a>

```csharp
public string DnsLabel { get; set; }
```

- *Type:* string

Lowercase DNS label for the IP address.

The service appends the endpoint ID to build the DNS name. The label of an existing IP address cannot be changed; to use a new label, change the IP address too.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53globalresolver_core_network_endpoint#dns_label Route53GlobalresolverCoreNetworkEndpoint#dns_label}

---

##### `RegionScope`<sup>Required</sup> <a name="RegionScope" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddresses.property.regionScope"></a>

```csharp
public string RegionScope { get; set; }
```

- *Type:* string

ALL to serve the IP address in every available region of the endpoint, or REGIONAL to serve it only in Regions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53globalresolver_core_network_endpoint#region_scope Route53GlobalresolverCoreNetworkEndpoint#region_scope}

---

##### `Ipv4Address`<sup>Optional</sup> <a name="Ipv4Address" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddresses.property.ipv4Address"></a>

```csharp
public string Ipv4Address { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53globalresolver_core_network_endpoint#ipv_4_address Route53GlobalresolverCoreNetworkEndpoint#ipv_4_address}.

---

##### `Ipv6Address`<sup>Optional</sup> <a name="Ipv6Address" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddresses.property.ipv6Address"></a>

```csharp
public string Ipv6Address { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53globalresolver_core_network_endpoint#ipv_6_address Route53GlobalresolverCoreNetworkEndpoint#ipv_6_address}.

---

##### `Regions`<sup>Optional</sup> <a name="Regions" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddresses.property.regions"></a>

```csharp
public string[] Regions { get; set; }
```

- *Type:* string[]

Regions that serve the IP address.

Required when RegionScope is REGIONAL and not allowed when it is ALL. Must be a subset of AvailableRegions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53globalresolver_core_network_endpoint#regions Route53GlobalresolverCoreNetworkEndpoint#regions}

---

### Route53GlobalresolverCoreNetworkEndpointTags <a name="Route53GlobalresolverCoreNetworkEndpointTags" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Route53GlobalresolverCoreNetworkEndpointTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53globalresolver_core_network_endpoint#key Route53GlobalresolverCoreNetworkEndpoint#key}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53globalresolver_core_network_endpoint#value Route53GlobalresolverCoreNetworkEndpoint#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53globalresolver_core_network_endpoint#key Route53GlobalresolverCoreNetworkEndpoint#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53globalresolver_core_network_endpoint#value Route53GlobalresolverCoreNetworkEndpoint#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### Route53GlobalresolverCoreNetworkEndpointIpAddressesList <a name="Route53GlobalresolverCoreNetworkEndpointIpAddressesList" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Route53GlobalresolverCoreNetworkEndpointIpAddressesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesList.get"></a>

```csharp
private Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddresses">Route53GlobalresolverCoreNetworkEndpointIpAddresses</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesList.property.internalValue"></a>

```csharp
public IResolvable|Route53GlobalresolverCoreNetworkEndpointIpAddresses[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddresses">Route53GlobalresolverCoreNetworkEndpointIpAddresses</a>[]

---


### Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference <a name="Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.resetIpv4Address">ResetIpv4Address</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.resetIpv6Address">ResetIpv6Address</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.resetRegions">ResetRegions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIpv4Address` <a name="ResetIpv4Address" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.resetIpv4Address"></a>

```csharp
private void ResetIpv4Address()
```

##### `ResetIpv6Address` <a name="ResetIpv6Address" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.resetIpv6Address"></a>

```csharp
private void ResetIpv6Address()
```

##### `ResetRegions` <a name="ResetRegions" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.resetRegions"></a>

```csharp
private void ResetRegions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.dnsLabelInput">DnsLabelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.ipv4AddressInput">Ipv4AddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.ipv6AddressInput">Ipv6AddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.regionScopeInput">RegionScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.regionsInput">RegionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.dnsLabel">DnsLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.ipv4Address">Ipv4Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.ipv6Address">Ipv6Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.regions">Regions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.regionScope">RegionScope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddresses">Route53GlobalresolverCoreNetworkEndpointIpAddresses</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DnsLabelInput`<sup>Optional</sup> <a name="DnsLabelInput" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.dnsLabelInput"></a>

```csharp
public string DnsLabelInput { get; }
```

- *Type:* string

---

##### `Ipv4AddressInput`<sup>Optional</sup> <a name="Ipv4AddressInput" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.ipv4AddressInput"></a>

```csharp
public string Ipv4AddressInput { get; }
```

- *Type:* string

---

##### `Ipv6AddressInput`<sup>Optional</sup> <a name="Ipv6AddressInput" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.ipv6AddressInput"></a>

```csharp
public string Ipv6AddressInput { get; }
```

- *Type:* string

---

##### `RegionScopeInput`<sup>Optional</sup> <a name="RegionScopeInput" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.regionScopeInput"></a>

```csharp
public string RegionScopeInput { get; }
```

- *Type:* string

---

##### `RegionsInput`<sup>Optional</sup> <a name="RegionsInput" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.regionsInput"></a>

```csharp
public string[] RegionsInput { get; }
```

- *Type:* string[]

---

##### `DnsLabel`<sup>Required</sup> <a name="DnsLabel" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.dnsLabel"></a>

```csharp
public string DnsLabel { get; }
```

- *Type:* string

---

##### `Ipv4Address`<sup>Required</sup> <a name="Ipv4Address" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.ipv4Address"></a>

```csharp
public string Ipv4Address { get; }
```

- *Type:* string

---

##### `Ipv6Address`<sup>Required</sup> <a name="Ipv6Address" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.ipv6Address"></a>

```csharp
public string Ipv6Address { get; }
```

- *Type:* string

---

##### `Regions`<sup>Required</sup> <a name="Regions" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.regions"></a>

```csharp
public string[] Regions { get; }
```

- *Type:* string[]

---

##### `RegionScope`<sup>Required</sup> <a name="RegionScope" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.regionScope"></a>

```csharp
public string RegionScope { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Route53GlobalresolverCoreNetworkEndpointIpAddresses InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddresses">Route53GlobalresolverCoreNetworkEndpointIpAddresses</a>

---


### Route53GlobalresolverCoreNetworkEndpointTagsList <a name="Route53GlobalresolverCoreNetworkEndpointTagsList" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Route53GlobalresolverCoreNetworkEndpointTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsList.get"></a>

```csharp
private Route53GlobalresolverCoreNetworkEndpointTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTags">Route53GlobalresolverCoreNetworkEndpointTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsList.property.internalValue"></a>

```csharp
public IResolvable|Route53GlobalresolverCoreNetworkEndpointTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTags">Route53GlobalresolverCoreNetworkEndpointTags</a>[]

---


### Route53GlobalresolverCoreNetworkEndpointTagsOutputReference <a name="Route53GlobalresolverCoreNetworkEndpointTagsOutputReference" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Route53GlobalresolverCoreNetworkEndpointTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTags">Route53GlobalresolverCoreNetworkEndpointTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Route53GlobalresolverCoreNetworkEndpointTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTags">Route53GlobalresolverCoreNetworkEndpointTags</a>

---



