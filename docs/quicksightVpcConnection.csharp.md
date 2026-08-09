# `quicksightVpcConnection` Submodule <a name="`quicksightVpcConnection` Submodule" id="@cdktn/provider-awscc.quicksightVpcConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### QuicksightVpcConnection <a name="QuicksightVpcConnection" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_vpc_connection awscc_quicksight_vpc_connection}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QuicksightVpcConnection(Construct Scope, string Id, QuicksightVpcConnectionConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionConfig">QuicksightVpcConnectionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionConfig">QuicksightVpcConnectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.resetAvailabilityStatus">ResetAvailabilityStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.resetAwsAccountId">ResetAwsAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.resetDnsResolvers">ResetDnsResolvers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.resetRoleArn">ResetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.resetSecurityGroupIds">ResetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.resetSubnetIds">ResetSubnetIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.resetVpcConnectionId">ResetVpcConnectionId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.putTags"></a>

```csharp
private void PutTags(IResolvable|QuicksightVpcConnectionTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTags">QuicksightVpcConnectionTags</a>[]

---

##### `ResetAvailabilityStatus` <a name="ResetAvailabilityStatus" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.resetAvailabilityStatus"></a>

```csharp
private void ResetAvailabilityStatus()
```

##### `ResetAwsAccountId` <a name="ResetAwsAccountId" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.resetAwsAccountId"></a>

```csharp
private void ResetAwsAccountId()
```

##### `ResetDnsResolvers` <a name="ResetDnsResolvers" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.resetDnsResolvers"></a>

```csharp
private void ResetDnsResolvers()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetRoleArn` <a name="ResetRoleArn" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.resetRoleArn"></a>

```csharp
private void ResetRoleArn()
```

##### `ResetSecurityGroupIds` <a name="ResetSecurityGroupIds" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.resetSecurityGroupIds"></a>

```csharp
private void ResetSecurityGroupIds()
```

##### `ResetSubnetIds` <a name="ResetSubnetIds" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.resetSubnetIds"></a>

```csharp
private void ResetSubnetIds()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetVpcConnectionId` <a name="ResetVpcConnectionId" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.resetVpcConnectionId"></a>

```csharp
private void ResetVpcConnectionId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a QuicksightVpcConnection resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

QuicksightVpcConnection.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

QuicksightVpcConnection.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

QuicksightVpcConnection.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

QuicksightVpcConnection.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a QuicksightVpcConnection resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the QuicksightVpcConnection to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing QuicksightVpcConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_vpc_connection#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the QuicksightVpcConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.createdTime">CreatedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.lastUpdatedTime">LastUpdatedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.networkInterfaces">NetworkInterfaces</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesList">QuicksightVpcConnectionNetworkInterfacesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsList">QuicksightVpcConnectionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.vpcId">VpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.availabilityStatusInput">AvailabilityStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.awsAccountIdInput">AwsAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.dnsResolversInput">DnsResolversInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.roleArnInput">RoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.securityGroupIdsInput">SecurityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.subnetIdsInput">SubnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTags">QuicksightVpcConnectionTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.vpcConnectionIdInput">VpcConnectionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.availabilityStatus">AvailabilityStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.awsAccountId">AwsAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.dnsResolvers">DnsResolvers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.vpcConnectionId">VpcConnectionId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CreatedTime`<sup>Required</sup> <a name="CreatedTime" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.createdTime"></a>

```csharp
public string CreatedTime { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LastUpdatedTime`<sup>Required</sup> <a name="LastUpdatedTime" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.lastUpdatedTime"></a>

```csharp
public string LastUpdatedTime { get; }
```

- *Type:* string

---

##### `NetworkInterfaces`<sup>Required</sup> <a name="NetworkInterfaces" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.networkInterfaces"></a>

```csharp
public QuicksightVpcConnectionNetworkInterfacesList NetworkInterfaces { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesList">QuicksightVpcConnectionNetworkInterfacesList</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.tags"></a>

```csharp
public QuicksightVpcConnectionTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsList">QuicksightVpcConnectionTagsList</a>

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.vpcId"></a>

```csharp
public string VpcId { get; }
```

- *Type:* string

---

##### `AvailabilityStatusInput`<sup>Optional</sup> <a name="AvailabilityStatusInput" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.availabilityStatusInput"></a>

```csharp
public string AvailabilityStatusInput { get; }
```

- *Type:* string

---

##### `AwsAccountIdInput`<sup>Optional</sup> <a name="AwsAccountIdInput" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.awsAccountIdInput"></a>

```csharp
public string AwsAccountIdInput { get; }
```

- *Type:* string

---

##### `DnsResolversInput`<sup>Optional</sup> <a name="DnsResolversInput" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.dnsResolversInput"></a>

```csharp
public string[] DnsResolversInput { get; }
```

- *Type:* string[]

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.roleArnInput"></a>

```csharp
public string RoleArnInput { get; }
```

- *Type:* string

---

##### `SecurityGroupIdsInput`<sup>Optional</sup> <a name="SecurityGroupIdsInput" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.securityGroupIdsInput"></a>

```csharp
public string[] SecurityGroupIdsInput { get; }
```

- *Type:* string[]

---

##### `SubnetIdsInput`<sup>Optional</sup> <a name="SubnetIdsInput" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.subnetIdsInput"></a>

```csharp
public string[] SubnetIdsInput { get; }
```

- *Type:* string[]

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.tagsInput"></a>

```csharp
public IResolvable|QuicksightVpcConnectionTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTags">QuicksightVpcConnectionTags</a>[]

---

##### `VpcConnectionIdInput`<sup>Optional</sup> <a name="VpcConnectionIdInput" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.vpcConnectionIdInput"></a>

```csharp
public string VpcConnectionIdInput { get; }
```

- *Type:* string

---

##### `AvailabilityStatus`<sup>Required</sup> <a name="AvailabilityStatus" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.availabilityStatus"></a>

```csharp
public string AvailabilityStatus { get; }
```

- *Type:* string

---

##### `AwsAccountId`<sup>Required</sup> <a name="AwsAccountId" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.awsAccountId"></a>

```csharp
public string AwsAccountId { get; }
```

- *Type:* string

---

##### `DnsResolvers`<sup>Required</sup> <a name="DnsResolvers" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.dnsResolvers"></a>

```csharp
public string[] DnsResolvers { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; }
```

- *Type:* string[]

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; }
```

- *Type:* string[]

---

##### `VpcConnectionId`<sup>Required</sup> <a name="VpcConnectionId" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.vpcConnectionId"></a>

```csharp
public string VpcConnectionId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### QuicksightVpcConnectionConfig <a name="QuicksightVpcConnectionConfig" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QuicksightVpcConnectionConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AvailabilityStatus = null,
    string AwsAccountId = null,
    string[] DnsResolvers = null,
    string Name = null,
    string RoleArn = null,
    string[] SecurityGroupIds = null,
    string[] SubnetIds = null,
    IResolvable|QuicksightVpcConnectionTags[] Tags = null,
    string VpcConnectionId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionConfig.property.availabilityStatus">AvailabilityStatus</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_vpc_connection#availability_status QuicksightVpcConnection#availability_status}. |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionConfig.property.awsAccountId">AwsAccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_vpc_connection#aws_account_id QuicksightVpcConnection#aws_account_id}. |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionConfig.property.dnsResolvers">DnsResolvers</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_vpc_connection#dns_resolvers QuicksightVpcConnection#dns_resolvers}. |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_vpc_connection#name QuicksightVpcConnection#name}. |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionConfig.property.roleArn">RoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_vpc_connection#role_arn QuicksightVpcConnection#role_arn}. |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionConfig.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_vpc_connection#security_group_ids QuicksightVpcConnection#security_group_ids}. |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionConfig.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_vpc_connection#subnet_ids QuicksightVpcConnection#subnet_ids}. |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTags">QuicksightVpcConnectionTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_vpc_connection#tags QuicksightVpcConnection#tags}. |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionConfig.property.vpcConnectionId">VpcConnectionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_vpc_connection#vpc_connection_id QuicksightVpcConnection#vpc_connection_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AvailabilityStatus`<sup>Optional</sup> <a name="AvailabilityStatus" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionConfig.property.availabilityStatus"></a>

```csharp
public string AvailabilityStatus { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_vpc_connection#availability_status QuicksightVpcConnection#availability_status}.

---

##### `AwsAccountId`<sup>Optional</sup> <a name="AwsAccountId" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionConfig.property.awsAccountId"></a>

```csharp
public string AwsAccountId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_vpc_connection#aws_account_id QuicksightVpcConnection#aws_account_id}.

---

##### `DnsResolvers`<sup>Optional</sup> <a name="DnsResolvers" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionConfig.property.dnsResolvers"></a>

```csharp
public string[] DnsResolvers { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_vpc_connection#dns_resolvers QuicksightVpcConnection#dns_resolvers}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_vpc_connection#name QuicksightVpcConnection#name}.

---

##### `RoleArn`<sup>Optional</sup> <a name="RoleArn" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionConfig.property.roleArn"></a>

```csharp
public string RoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_vpc_connection#role_arn QuicksightVpcConnection#role_arn}.

---

##### `SecurityGroupIds`<sup>Optional</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionConfig.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_vpc_connection#security_group_ids QuicksightVpcConnection#security_group_ids}.

---

##### `SubnetIds`<sup>Optional</sup> <a name="SubnetIds" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionConfig.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_vpc_connection#subnet_ids QuicksightVpcConnection#subnet_ids}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionConfig.property.tags"></a>

```csharp
public IResolvable|QuicksightVpcConnectionTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTags">QuicksightVpcConnectionTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_vpc_connection#tags QuicksightVpcConnection#tags}.

---

##### `VpcConnectionId`<sup>Optional</sup> <a name="VpcConnectionId" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionConfig.property.vpcConnectionId"></a>

```csharp
public string VpcConnectionId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_vpc_connection#vpc_connection_id QuicksightVpcConnection#vpc_connection_id}.

---

### QuicksightVpcConnectionNetworkInterfaces <a name="QuicksightVpcConnectionNetworkInterfaces" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfaces"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfaces.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QuicksightVpcConnectionNetworkInterfaces {

};
```


### QuicksightVpcConnectionTags <a name="QuicksightVpcConnectionTags" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QuicksightVpcConnectionTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTags.property.key">Key</a></code> | <code>string</code> | <p>Tag key.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTags.property.value">Value</a></code> | <code>string</code> | <p>Tag value.</p>. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

<p>Tag key.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_vpc_connection#key QuicksightVpcConnection#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

<p>Tag value.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_vpc_connection#value QuicksightVpcConnection#value}

---

## Classes <a name="Classes" id="Classes"></a>

### QuicksightVpcConnectionNetworkInterfacesList <a name="QuicksightVpcConnectionNetworkInterfacesList" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QuicksightVpcConnectionNetworkInterfacesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesList.get"></a>

```csharp
private QuicksightVpcConnectionNetworkInterfacesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### QuicksightVpcConnectionNetworkInterfacesOutputReference <a name="QuicksightVpcConnectionNetworkInterfacesOutputReference" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QuicksightVpcConnectionNetworkInterfacesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.property.availabilityZone">AvailabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.property.errorMessage">ErrorMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.property.networkInterfaceId">NetworkInterfaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfaces">QuicksightVpcConnectionNetworkInterfaces</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.property.availabilityZone"></a>

```csharp
public string AvailabilityZone { get; }
```

- *Type:* string

---

##### `ErrorMessage`<sup>Required</sup> <a name="ErrorMessage" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.property.errorMessage"></a>

```csharp
public string ErrorMessage { get; }
```

- *Type:* string

---

##### `NetworkInterfaceId`<sup>Required</sup> <a name="NetworkInterfaceId" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.property.networkInterfaceId"></a>

```csharp
public string NetworkInterfaceId { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.property.internalValue"></a>

```csharp
public QuicksightVpcConnectionNetworkInterfaces InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfaces">QuicksightVpcConnectionNetworkInterfaces</a>

---


### QuicksightVpcConnectionTagsList <a name="QuicksightVpcConnectionTagsList" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QuicksightVpcConnectionTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsList.get"></a>

```csharp
private QuicksightVpcConnectionTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTags">QuicksightVpcConnectionTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsList.property.internalValue"></a>

```csharp
public IResolvable|QuicksightVpcConnectionTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTags">QuicksightVpcConnectionTags</a>[]

---


### QuicksightVpcConnectionTagsOutputReference <a name="QuicksightVpcConnectionTagsOutputReference" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QuicksightVpcConnectionTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTags">QuicksightVpcConnectionTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|QuicksightVpcConnectionTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTags">QuicksightVpcConnectionTags</a>

---



