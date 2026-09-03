# `rdsDbProxy` Submodule <a name="`rdsDbProxy` Submodule" id="@cdktn/provider-awscc.rdsDbProxy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RdsDbProxy <a name="RdsDbProxy" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_proxy awscc_rds_db_proxy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RdsDbProxy(Construct Scope, string Id, RdsDbProxyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig">RdsDbProxyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig">RdsDbProxyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.putAuth">PutAuth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.resetAuth">ResetAuth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.resetDebugLogging">ResetDebugLogging</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.resetDefaultAuthScheme">ResetDefaultAuthScheme</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.resetEndpointNetworkType">ResetEndpointNetworkType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.resetIdleClientTimeout">ResetIdleClientTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.resetRequireTls">ResetRequireTls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.resetTargetConnectionNetworkType">ResetTargetConnectionNetworkType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.resetVpcSecurityGroupIds">ResetVpcSecurityGroupIds</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAuth` <a name="PutAuth" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.putAuth"></a>

```csharp
private void PutAuth(IResolvable|RdsDbProxyAuth[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.putAuth.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuth">RdsDbProxyAuth</a>[]

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.putTags"></a>

```csharp
private void PutTags(IResolvable|RdsDbProxyTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTags">RdsDbProxyTags</a>[]

---

##### `ResetAuth` <a name="ResetAuth" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.resetAuth"></a>

```csharp
private void ResetAuth()
```

##### `ResetDebugLogging` <a name="ResetDebugLogging" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.resetDebugLogging"></a>

```csharp
private void ResetDebugLogging()
```

##### `ResetDefaultAuthScheme` <a name="ResetDefaultAuthScheme" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.resetDefaultAuthScheme"></a>

```csharp
private void ResetDefaultAuthScheme()
```

##### `ResetEndpointNetworkType` <a name="ResetEndpointNetworkType" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.resetEndpointNetworkType"></a>

```csharp
private void ResetEndpointNetworkType()
```

##### `ResetIdleClientTimeout` <a name="ResetIdleClientTimeout" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.resetIdleClientTimeout"></a>

```csharp
private void ResetIdleClientTimeout()
```

##### `ResetRequireTls` <a name="ResetRequireTls" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.resetRequireTls"></a>

```csharp
private void ResetRequireTls()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTargetConnectionNetworkType` <a name="ResetTargetConnectionNetworkType" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.resetTargetConnectionNetworkType"></a>

```csharp
private void ResetTargetConnectionNetworkType()
```

##### `ResetVpcSecurityGroupIds` <a name="ResetVpcSecurityGroupIds" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.resetVpcSecurityGroupIds"></a>

```csharp
private void ResetVpcSecurityGroupIds()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a RdsDbProxy resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

RdsDbProxy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

RdsDbProxy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

RdsDbProxy.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

RdsDbProxy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a RdsDbProxy resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the RdsDbProxy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing RdsDbProxy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_proxy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the RdsDbProxy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.auth">Auth</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthList">RdsDbProxyAuthList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.dbProxyArn">DbProxyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.endpoint">Endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsList">RdsDbProxyTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.vpcId">VpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.authInput">AuthInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuth">RdsDbProxyAuth</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.dbProxyNameInput">DbProxyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.debugLoggingInput">DebugLoggingInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.defaultAuthSchemeInput">DefaultAuthSchemeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.endpointNetworkTypeInput">EndpointNetworkTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.engineFamilyInput">EngineFamilyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.idleClientTimeoutInput">IdleClientTimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.requireTlsInput">RequireTlsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.roleArnInput">RoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTags">RdsDbProxyTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.targetConnectionNetworkTypeInput">TargetConnectionNetworkTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.vpcSecurityGroupIdsInput">VpcSecurityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.vpcSubnetIdsInput">VpcSubnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.dbProxyName">DbProxyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.debugLogging">DebugLogging</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.defaultAuthScheme">DefaultAuthScheme</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.endpointNetworkType">EndpointNetworkType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.engineFamily">EngineFamily</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.idleClientTimeout">IdleClientTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.requireTls">RequireTls</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.targetConnectionNetworkType">TargetConnectionNetworkType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.vpcSecurityGroupIds">VpcSecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.vpcSubnetIds">VpcSubnetIds</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Auth`<sup>Required</sup> <a name="Auth" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.auth"></a>

```csharp
public RdsDbProxyAuthList Auth { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthList">RdsDbProxyAuthList</a>

---

##### `DbProxyArn`<sup>Required</sup> <a name="DbProxyArn" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.dbProxyArn"></a>

```csharp
public string DbProxyArn { get; }
```

- *Type:* string

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.endpoint"></a>

```csharp
public string Endpoint { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.tags"></a>

```csharp
public RdsDbProxyTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsList">RdsDbProxyTagsList</a>

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.vpcId"></a>

```csharp
public string VpcId { get; }
```

- *Type:* string

---

##### `AuthInput`<sup>Optional</sup> <a name="AuthInput" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.authInput"></a>

```csharp
public IResolvable|RdsDbProxyAuth[] AuthInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuth">RdsDbProxyAuth</a>[]

---

##### `DbProxyNameInput`<sup>Optional</sup> <a name="DbProxyNameInput" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.dbProxyNameInput"></a>

```csharp
public string DbProxyNameInput { get; }
```

- *Type:* string

---

##### `DebugLoggingInput`<sup>Optional</sup> <a name="DebugLoggingInput" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.debugLoggingInput"></a>

```csharp
public bool|IResolvable DebugLoggingInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DefaultAuthSchemeInput`<sup>Optional</sup> <a name="DefaultAuthSchemeInput" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.defaultAuthSchemeInput"></a>

```csharp
public string DefaultAuthSchemeInput { get; }
```

- *Type:* string

---

##### `EndpointNetworkTypeInput`<sup>Optional</sup> <a name="EndpointNetworkTypeInput" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.endpointNetworkTypeInput"></a>

```csharp
public string EndpointNetworkTypeInput { get; }
```

- *Type:* string

---

##### `EngineFamilyInput`<sup>Optional</sup> <a name="EngineFamilyInput" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.engineFamilyInput"></a>

```csharp
public string EngineFamilyInput { get; }
```

- *Type:* string

---

##### `IdleClientTimeoutInput`<sup>Optional</sup> <a name="IdleClientTimeoutInput" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.idleClientTimeoutInput"></a>

```csharp
public double IdleClientTimeoutInput { get; }
```

- *Type:* double

---

##### `RequireTlsInput`<sup>Optional</sup> <a name="RequireTlsInput" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.requireTlsInput"></a>

```csharp
public bool|IResolvable RequireTlsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.roleArnInput"></a>

```csharp
public string RoleArnInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.tagsInput"></a>

```csharp
public IResolvable|RdsDbProxyTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTags">RdsDbProxyTags</a>[]

---

##### `TargetConnectionNetworkTypeInput`<sup>Optional</sup> <a name="TargetConnectionNetworkTypeInput" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.targetConnectionNetworkTypeInput"></a>

```csharp
public string TargetConnectionNetworkTypeInput { get; }
```

- *Type:* string

---

##### `VpcSecurityGroupIdsInput`<sup>Optional</sup> <a name="VpcSecurityGroupIdsInput" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.vpcSecurityGroupIdsInput"></a>

```csharp
public string[] VpcSecurityGroupIdsInput { get; }
```

- *Type:* string[]

---

##### `VpcSubnetIdsInput`<sup>Optional</sup> <a name="VpcSubnetIdsInput" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.vpcSubnetIdsInput"></a>

```csharp
public string[] VpcSubnetIdsInput { get; }
```

- *Type:* string[]

---

##### `DbProxyName`<sup>Required</sup> <a name="DbProxyName" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.dbProxyName"></a>

```csharp
public string DbProxyName { get; }
```

- *Type:* string

---

##### `DebugLogging`<sup>Required</sup> <a name="DebugLogging" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.debugLogging"></a>

```csharp
public bool|IResolvable DebugLogging { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DefaultAuthScheme`<sup>Required</sup> <a name="DefaultAuthScheme" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.defaultAuthScheme"></a>

```csharp
public string DefaultAuthScheme { get; }
```

- *Type:* string

---

##### `EndpointNetworkType`<sup>Required</sup> <a name="EndpointNetworkType" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.endpointNetworkType"></a>

```csharp
public string EndpointNetworkType { get; }
```

- *Type:* string

---

##### `EngineFamily`<sup>Required</sup> <a name="EngineFamily" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.engineFamily"></a>

```csharp
public string EngineFamily { get; }
```

- *Type:* string

---

##### `IdleClientTimeout`<sup>Required</sup> <a name="IdleClientTimeout" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.idleClientTimeout"></a>

```csharp
public double IdleClientTimeout { get; }
```

- *Type:* double

---

##### `RequireTls`<sup>Required</sup> <a name="RequireTls" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.requireTls"></a>

```csharp
public bool|IResolvable RequireTls { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `TargetConnectionNetworkType`<sup>Required</sup> <a name="TargetConnectionNetworkType" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.targetConnectionNetworkType"></a>

```csharp
public string TargetConnectionNetworkType { get; }
```

- *Type:* string

---

##### `VpcSecurityGroupIds`<sup>Required</sup> <a name="VpcSecurityGroupIds" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.vpcSecurityGroupIds"></a>

```csharp
public string[] VpcSecurityGroupIds { get; }
```

- *Type:* string[]

---

##### `VpcSubnetIds`<sup>Required</sup> <a name="VpcSubnetIds" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.vpcSubnetIds"></a>

```csharp
public string[] VpcSubnetIds { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RdsDbProxyAuth <a name="RdsDbProxyAuth" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuth"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuth.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RdsDbProxyAuth {
    string AuthScheme = null,
    string ClientPasswordAuthType = null,
    string Description = null,
    string IamAuth = null,
    string SecretArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuth.property.authScheme">AuthScheme</a></code> | <code>string</code> | The type of authentication that the proxy uses for connections from the proxy to the underlying database. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuth.property.clientPasswordAuthType">ClientPasswordAuthType</a></code> | <code>string</code> | The type of authentication the proxy uses for connections from clients. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuth.property.description">Description</a></code> | <code>string</code> | A user-specified description about the authentication used by a proxy to log in as a specific database user. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuth.property.iamAuth">IamAuth</a></code> | <code>string</code> | Whether to require or disallow Amazon Web Services Identity and Access Management (IAM) authentication for connections to the proxy. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuth.property.secretArn">SecretArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) representing the secret that the proxy uses to authenticate to the RDS DB instance or Aurora DB cluster. |

---

##### `AuthScheme`<sup>Optional</sup> <a name="AuthScheme" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuth.property.authScheme"></a>

```csharp
public string AuthScheme { get; set; }
```

- *Type:* string

The type of authentication that the proxy uses for connections from the proxy to the underlying database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_proxy#auth_scheme RdsDbProxy#auth_scheme}

---

##### `ClientPasswordAuthType`<sup>Optional</sup> <a name="ClientPasswordAuthType" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuth.property.clientPasswordAuthType"></a>

```csharp
public string ClientPasswordAuthType { get; set; }
```

- *Type:* string

The type of authentication the proxy uses for connections from clients.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_proxy#client_password_auth_type RdsDbProxy#client_password_auth_type}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuth.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A user-specified description about the authentication used by a proxy to log in as a specific database user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_proxy#description RdsDbProxy#description}

---

##### `IamAuth`<sup>Optional</sup> <a name="IamAuth" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuth.property.iamAuth"></a>

```csharp
public string IamAuth { get; set; }
```

- *Type:* string

Whether to require or disallow Amazon Web Services Identity and Access Management (IAM) authentication for connections to the proxy.

The ENABLED value is valid only for proxies with RDS for Microsoft SQL Server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_proxy#iam_auth RdsDbProxy#iam_auth}

---

##### `SecretArn`<sup>Optional</sup> <a name="SecretArn" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuth.property.secretArn"></a>

```csharp
public string SecretArn { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) representing the secret that the proxy uses to authenticate to the RDS DB instance or Aurora DB cluster.

These secrets are stored within Amazon Secrets Manager.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_proxy#secret_arn RdsDbProxy#secret_arn}

---

### RdsDbProxyConfig <a name="RdsDbProxyConfig" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RdsDbProxyConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string DbProxyName,
    string EngineFamily,
    string RoleArn,
    string[] VpcSubnetIds,
    IResolvable|RdsDbProxyAuth[] Auth = null,
    bool|IResolvable DebugLogging = null,
    string DefaultAuthScheme = null,
    string EndpointNetworkType = null,
    double IdleClientTimeout = null,
    bool|IResolvable RequireTls = null,
    IResolvable|RdsDbProxyTags[] Tags = null,
    string TargetConnectionNetworkType = null,
    string[] VpcSecurityGroupIds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.dbProxyName">DbProxyName</a></code> | <code>string</code> | The identifier for the proxy. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.engineFamily">EngineFamily</a></code> | <code>string</code> | The kinds of databases that the proxy can connect to. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.roleArn">RoleArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the IAM role that the proxy uses to access secrets in AWS Secrets Manager. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.vpcSubnetIds">VpcSubnetIds</a></code> | <code>string[]</code> | VPC subnet IDs to associate with the new proxy. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.auth">Auth</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuth">RdsDbProxyAuth</a>[]</code> | The authorization mechanism that the proxy uses. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.debugLogging">DebugLogging</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether the proxy includes detailed information about SQL statements in its logs. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.defaultAuthScheme">DefaultAuthScheme</a></code> | <code>string</code> | The default authentication scheme that the proxy uses for client connections to the proxy and connections from the proxy to the underlying database. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.endpointNetworkType">EndpointNetworkType</a></code> | <code>string</code> | The network type of the DB proxy endpoint. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.idleClientTimeout">IdleClientTimeout</a></code> | <code>double</code> | The number of seconds that a connection to the proxy can be inactive before the proxy disconnects it. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.requireTls">RequireTls</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | A Boolean parameter that specifies whether Transport Layer Security (TLS) encryption is required for connections to the proxy. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTags">RdsDbProxyTags</a>[]</code> | An optional set of key-value pairs to associate arbitrary data of your choosing with the proxy. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.targetConnectionNetworkType">TargetConnectionNetworkType</a></code> | <code>string</code> | The network type that the proxy uses to connect to the target database. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.vpcSecurityGroupIds">VpcSecurityGroupIds</a></code> | <code>string[]</code> | VPC security group IDs to associate with the new proxy. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DbProxyName`<sup>Required</sup> <a name="DbProxyName" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.dbProxyName"></a>

```csharp
public string DbProxyName { get; set; }
```

- *Type:* string

The identifier for the proxy.

This name must be unique for all proxies owned by your AWS account in the specified AWS Region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_proxy#db_proxy_name RdsDbProxy#db_proxy_name}

---

##### `EngineFamily`<sup>Required</sup> <a name="EngineFamily" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.engineFamily"></a>

```csharp
public string EngineFamily { get; set; }
```

- *Type:* string

The kinds of databases that the proxy can connect to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_proxy#engine_family RdsDbProxy#engine_family}

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.roleArn"></a>

```csharp
public string RoleArn { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) of the IAM role that the proxy uses to access secrets in AWS Secrets Manager.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_proxy#role_arn RdsDbProxy#role_arn}

---

##### `VpcSubnetIds`<sup>Required</sup> <a name="VpcSubnetIds" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.vpcSubnetIds"></a>

```csharp
public string[] VpcSubnetIds { get; set; }
```

- *Type:* string[]

VPC subnet IDs to associate with the new proxy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_proxy#vpc_subnet_ids RdsDbProxy#vpc_subnet_ids}

---

##### `Auth`<sup>Optional</sup> <a name="Auth" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.auth"></a>

```csharp
public IResolvable|RdsDbProxyAuth[] Auth { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuth">RdsDbProxyAuth</a>[]

The authorization mechanism that the proxy uses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_proxy#auth RdsDbProxy#auth}

---

##### `DebugLogging`<sup>Optional</sup> <a name="DebugLogging" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.debugLogging"></a>

```csharp
public bool|IResolvable DebugLogging { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether the proxy includes detailed information about SQL statements in its logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_proxy#debug_logging RdsDbProxy#debug_logging}

---

##### `DefaultAuthScheme`<sup>Optional</sup> <a name="DefaultAuthScheme" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.defaultAuthScheme"></a>

```csharp
public string DefaultAuthScheme { get; set; }
```

- *Type:* string

The default authentication scheme that the proxy uses for client connections to the proxy and connections from the proxy to the underlying database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_proxy#default_auth_scheme RdsDbProxy#default_auth_scheme}

---

##### `EndpointNetworkType`<sup>Optional</sup> <a name="EndpointNetworkType" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.endpointNetworkType"></a>

```csharp
public string EndpointNetworkType { get; set; }
```

- *Type:* string

The network type of the DB proxy endpoint.

The network type determines the IP version that the proxy endpoint supports.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_proxy#endpoint_network_type RdsDbProxy#endpoint_network_type}

---

##### `IdleClientTimeout`<sup>Optional</sup> <a name="IdleClientTimeout" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.idleClientTimeout"></a>

```csharp
public double IdleClientTimeout { get; set; }
```

- *Type:* double

The number of seconds that a connection to the proxy can be inactive before the proxy disconnects it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_proxy#idle_client_timeout RdsDbProxy#idle_client_timeout}

---

##### `RequireTls`<sup>Optional</sup> <a name="RequireTls" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.requireTls"></a>

```csharp
public bool|IResolvable RequireTls { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

A Boolean parameter that specifies whether Transport Layer Security (TLS) encryption is required for connections to the proxy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_proxy#require_tls RdsDbProxy#require_tls}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.tags"></a>

```csharp
public IResolvable|RdsDbProxyTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTags">RdsDbProxyTags</a>[]

An optional set of key-value pairs to associate arbitrary data of your choosing with the proxy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_proxy#tags RdsDbProxy#tags}

---

##### `TargetConnectionNetworkType`<sup>Optional</sup> <a name="TargetConnectionNetworkType" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.targetConnectionNetworkType"></a>

```csharp
public string TargetConnectionNetworkType { get; set; }
```

- *Type:* string

The network type that the proxy uses to connect to the target database.

The network type determines the IP version that the proxy uses for connections to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_proxy#target_connection_network_type RdsDbProxy#target_connection_network_type}

---

##### `VpcSecurityGroupIds`<sup>Optional</sup> <a name="VpcSecurityGroupIds" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.vpcSecurityGroupIds"></a>

```csharp
public string[] VpcSecurityGroupIds { get; set; }
```

- *Type:* string[]

VPC security group IDs to associate with the new proxy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_proxy#vpc_security_group_ids RdsDbProxy#vpc_security_group_ids}

---

### RdsDbProxyTags <a name="RdsDbProxyTags" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RdsDbProxyTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_proxy#key RdsDbProxy#key}. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_proxy#value RdsDbProxy#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_proxy#key RdsDbProxy#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_proxy#value RdsDbProxy#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### RdsDbProxyAuthList <a name="RdsDbProxyAuthList" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RdsDbProxyAuthList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthList.get"></a>

```csharp
private RdsDbProxyAuthOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuth">RdsDbProxyAuth</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthList.property.internalValue"></a>

```csharp
public IResolvable|RdsDbProxyAuth[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuth">RdsDbProxyAuth</a>[]

---


### RdsDbProxyAuthOutputReference <a name="RdsDbProxyAuthOutputReference" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RdsDbProxyAuthOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.resetAuthScheme">ResetAuthScheme</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.resetClientPasswordAuthType">ResetClientPasswordAuthType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.resetIamAuth">ResetIamAuth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.resetSecretArn">ResetSecretArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAuthScheme` <a name="ResetAuthScheme" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.resetAuthScheme"></a>

```csharp
private void ResetAuthScheme()
```

##### `ResetClientPasswordAuthType` <a name="ResetClientPasswordAuthType" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.resetClientPasswordAuthType"></a>

```csharp
private void ResetClientPasswordAuthType()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetIamAuth` <a name="ResetIamAuth" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.resetIamAuth"></a>

```csharp
private void ResetIamAuth()
```

##### `ResetSecretArn` <a name="ResetSecretArn" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.resetSecretArn"></a>

```csharp
private void ResetSecretArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.property.authSchemeInput">AuthSchemeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.property.clientPasswordAuthTypeInput">ClientPasswordAuthTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.property.iamAuthInput">IamAuthInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.property.secretArnInput">SecretArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.property.authScheme">AuthScheme</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.property.clientPasswordAuthType">ClientPasswordAuthType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.property.iamAuth">IamAuth</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.property.secretArn">SecretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuth">RdsDbProxyAuth</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthSchemeInput`<sup>Optional</sup> <a name="AuthSchemeInput" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.property.authSchemeInput"></a>

```csharp
public string AuthSchemeInput { get; }
```

- *Type:* string

---

##### `ClientPasswordAuthTypeInput`<sup>Optional</sup> <a name="ClientPasswordAuthTypeInput" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.property.clientPasswordAuthTypeInput"></a>

```csharp
public string ClientPasswordAuthTypeInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IamAuthInput`<sup>Optional</sup> <a name="IamAuthInput" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.property.iamAuthInput"></a>

```csharp
public string IamAuthInput { get; }
```

- *Type:* string

---

##### `SecretArnInput`<sup>Optional</sup> <a name="SecretArnInput" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.property.secretArnInput"></a>

```csharp
public string SecretArnInput { get; }
```

- *Type:* string

---

##### `AuthScheme`<sup>Required</sup> <a name="AuthScheme" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.property.authScheme"></a>

```csharp
public string AuthScheme { get; }
```

- *Type:* string

---

##### `ClientPasswordAuthType`<sup>Required</sup> <a name="ClientPasswordAuthType" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.property.clientPasswordAuthType"></a>

```csharp
public string ClientPasswordAuthType { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `IamAuth`<sup>Required</sup> <a name="IamAuth" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.property.iamAuth"></a>

```csharp
public string IamAuth { get; }
```

- *Type:* string

---

##### `SecretArn`<sup>Required</sup> <a name="SecretArn" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.property.secretArn"></a>

```csharp
public string SecretArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.property.internalValue"></a>

```csharp
public IResolvable|RdsDbProxyAuth InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuth">RdsDbProxyAuth</a>

---


### RdsDbProxyTagsList <a name="RdsDbProxyTagsList" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RdsDbProxyTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsList.get"></a>

```csharp
private RdsDbProxyTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTags">RdsDbProxyTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsList.property.internalValue"></a>

```csharp
public IResolvable|RdsDbProxyTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTags">RdsDbProxyTags</a>[]

---


### RdsDbProxyTagsOutputReference <a name="RdsDbProxyTagsOutputReference" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RdsDbProxyTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTags">RdsDbProxyTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|RdsDbProxyTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTags">RdsDbProxyTags</a>

---



