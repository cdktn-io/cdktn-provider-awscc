# `transferConnector` Submodule <a name="`transferConnector` Submodule" id="@cdktn/provider-awscc.transferConnector"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TransferConnector <a name="TransferConnector" id="@cdktn/provider-awscc.transferConnector.TransferConnector"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_connector awscc_transfer_connector}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transferConnector.TransferConnector.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new TransferConnector(Construct Scope, string Id, TransferConnectorConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorConfig">TransferConnectorConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.transferConnector.TransferConnector.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.transferConnector.TransferConnector.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.transferConnector.TransferConnector.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorConfig">TransferConnectorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.putAs2Config">PutAs2Config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.putEgressConfig">PutEgressConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.putSftpConfig">PutSftpConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.resetAs2Config">ResetAs2Config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.resetEgressConfig">ResetEgressConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.resetEgressType">ResetEgressType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.resetIpAddressType">ResetIpAddressType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.resetLoggingRole">ResetLoggingRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.resetSecurityPolicyName">ResetSecurityPolicyName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.resetSftpConfig">ResetSftpConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.resetUrl">ResetUrl</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.transferConnector.TransferConnector.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.transferConnector.TransferConnector.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.transferConnector.TransferConnector.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.transferConnector.TransferConnector.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.transferConnector.TransferConnector.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.transferConnector.TransferConnector.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.transferConnector.TransferConnector.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.transferConnector.TransferConnector.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.transferConnector.TransferConnector.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.transferConnector.TransferConnector.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.transferConnector.TransferConnector.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.transferConnector.TransferConnector.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.transferConnector.TransferConnector.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.transferConnector.TransferConnector.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnector.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnector.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnector.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnector.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnector.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnector.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnector.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnector.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnector.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnector.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnector.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnector.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnector.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnector.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnector.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnector.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnector.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnector.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.transferConnector.TransferConnector.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.transferConnector.TransferConnector.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.transferConnector.TransferConnector.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.transferConnector.TransferConnector.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnector.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnector.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.transferConnector.TransferConnector.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.transferConnector.TransferConnector.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.transferConnector.TransferConnector.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.transferConnector.TransferConnector.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.transferConnector.TransferConnector.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.transferConnector.TransferConnector.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.transferConnector.TransferConnector.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAs2Config` <a name="PutAs2Config" id="@cdktn/provider-awscc.transferConnector.TransferConnector.putAs2Config"></a>

```csharp
private void PutAs2Config(TransferConnectorAs2Config Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.transferConnector.TransferConnector.putAs2Config.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2Config">TransferConnectorAs2Config</a>

---

##### `PutEgressConfig` <a name="PutEgressConfig" id="@cdktn/provider-awscc.transferConnector.TransferConnector.putEgressConfig"></a>

```csharp
private void PutEgressConfig(TransferConnectorEgressConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.transferConnector.TransferConnector.putEgressConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfig">TransferConnectorEgressConfig</a>

---

##### `PutSftpConfig` <a name="PutSftpConfig" id="@cdktn/provider-awscc.transferConnector.TransferConnector.putSftpConfig"></a>

```csharp
private void PutSftpConfig(TransferConnectorSftpConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.transferConnector.TransferConnector.putSftpConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfig">TransferConnectorSftpConfig</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.transferConnector.TransferConnector.putTags"></a>

```csharp
private void PutTags(IResolvable|TransferConnectorTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.transferConnector.TransferConnector.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTags">TransferConnectorTags</a>[]

---

##### `ResetAs2Config` <a name="ResetAs2Config" id="@cdktn/provider-awscc.transferConnector.TransferConnector.resetAs2Config"></a>

```csharp
private void ResetAs2Config()
```

##### `ResetEgressConfig` <a name="ResetEgressConfig" id="@cdktn/provider-awscc.transferConnector.TransferConnector.resetEgressConfig"></a>

```csharp
private void ResetEgressConfig()
```

##### `ResetEgressType` <a name="ResetEgressType" id="@cdktn/provider-awscc.transferConnector.TransferConnector.resetEgressType"></a>

```csharp
private void ResetEgressType()
```

##### `ResetIpAddressType` <a name="ResetIpAddressType" id="@cdktn/provider-awscc.transferConnector.TransferConnector.resetIpAddressType"></a>

```csharp
private void ResetIpAddressType()
```

##### `ResetLoggingRole` <a name="ResetLoggingRole" id="@cdktn/provider-awscc.transferConnector.TransferConnector.resetLoggingRole"></a>

```csharp
private void ResetLoggingRole()
```

##### `ResetSecurityPolicyName` <a name="ResetSecurityPolicyName" id="@cdktn/provider-awscc.transferConnector.TransferConnector.resetSecurityPolicyName"></a>

```csharp
private void ResetSecurityPolicyName()
```

##### `ResetSftpConfig` <a name="ResetSftpConfig" id="@cdktn/provider-awscc.transferConnector.TransferConnector.resetSftpConfig"></a>

```csharp
private void ResetSftpConfig()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.transferConnector.TransferConnector.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetUrl` <a name="ResetUrl" id="@cdktn/provider-awscc.transferConnector.TransferConnector.resetUrl"></a>

```csharp
private void ResetUrl()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a TransferConnector resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.transferConnector.TransferConnector.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

TransferConnector.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.transferConnector.TransferConnector.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.transferConnector.TransferConnector.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

TransferConnector.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.transferConnector.TransferConnector.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.transferConnector.TransferConnector.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

TransferConnector.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.transferConnector.TransferConnector.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.transferConnector.TransferConnector.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

TransferConnector.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a TransferConnector resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.transferConnector.TransferConnector.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.transferConnector.TransferConnector.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the TransferConnector to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.transferConnector.TransferConnector.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing TransferConnector that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_connector#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.transferConnector.TransferConnector.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the TransferConnector to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.property.as2Config">As2Config</a></code> | <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference">TransferConnectorAs2ConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.property.connectorId">ConnectorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.property.egressConfig">EgressConfig</a></code> | <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference">TransferConnectorEgressConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.property.errorMessage">ErrorMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.property.serviceManagedEgressIpAddresses">ServiceManagedEgressIpAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.property.sftpConfig">SftpConfig</a></code> | <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference">TransferConnectorSftpConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTagsList">TransferConnectorTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.property.accessRoleInput">AccessRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.property.as2ConfigInput">As2ConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2Config">TransferConnectorAs2Config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.property.egressConfigInput">EgressConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfig">TransferConnectorEgressConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.property.egressTypeInput">EgressTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.property.ipAddressTypeInput">IpAddressTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.property.loggingRoleInput">LoggingRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.property.securityPolicyNameInput">SecurityPolicyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.property.sftpConfigInput">SftpConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfig">TransferConnectorSftpConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTags">TransferConnectorTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.property.urlInput">UrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.property.accessRole">AccessRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.property.egressType">EgressType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.property.ipAddressType">IpAddressType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.property.loggingRole">LoggingRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.property.securityPolicyName">SecurityPolicyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.property.url">Url</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.transferConnector.TransferConnector.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.transferConnector.TransferConnector.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.transferConnector.TransferConnector.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.transferConnector.TransferConnector.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.transferConnector.TransferConnector.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.transferConnector.TransferConnector.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.transferConnector.TransferConnector.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.transferConnector.TransferConnector.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.transferConnector.TransferConnector.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.transferConnector.TransferConnector.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.transferConnector.TransferConnector.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.transferConnector.TransferConnector.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.transferConnector.TransferConnector.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.transferConnector.TransferConnector.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.transferConnector.TransferConnector.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `As2Config`<sup>Required</sup> <a name="As2Config" id="@cdktn/provider-awscc.transferConnector.TransferConnector.property.as2Config"></a>

```csharp
public TransferConnectorAs2ConfigOutputReference As2Config { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference">TransferConnectorAs2ConfigOutputReference</a>

---

##### `ConnectorId`<sup>Required</sup> <a name="ConnectorId" id="@cdktn/provider-awscc.transferConnector.TransferConnector.property.connectorId"></a>

```csharp
public string ConnectorId { get; }
```

- *Type:* string

---

##### `EgressConfig`<sup>Required</sup> <a name="EgressConfig" id="@cdktn/provider-awscc.transferConnector.TransferConnector.property.egressConfig"></a>

```csharp
public TransferConnectorEgressConfigOutputReference EgressConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference">TransferConnectorEgressConfigOutputReference</a>

---

##### `ErrorMessage`<sup>Required</sup> <a name="ErrorMessage" id="@cdktn/provider-awscc.transferConnector.TransferConnector.property.errorMessage"></a>

```csharp
public string ErrorMessage { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.transferConnector.TransferConnector.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ServiceManagedEgressIpAddresses`<sup>Required</sup> <a name="ServiceManagedEgressIpAddresses" id="@cdktn/provider-awscc.transferConnector.TransferConnector.property.serviceManagedEgressIpAddresses"></a>

```csharp
public string[] ServiceManagedEgressIpAddresses { get; }
```

- *Type:* string[]

---

##### `SftpConfig`<sup>Required</sup> <a name="SftpConfig" id="@cdktn/provider-awscc.transferConnector.TransferConnector.property.sftpConfig"></a>

```csharp
public TransferConnectorSftpConfigOutputReference SftpConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference">TransferConnectorSftpConfigOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.transferConnector.TransferConnector.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.transferConnector.TransferConnector.property.tags"></a>

```csharp
public TransferConnectorTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTagsList">TransferConnectorTagsList</a>

---

##### `AccessRoleInput`<sup>Optional</sup> <a name="AccessRoleInput" id="@cdktn/provider-awscc.transferConnector.TransferConnector.property.accessRoleInput"></a>

```csharp
public string AccessRoleInput { get; }
```

- *Type:* string

---

##### `As2ConfigInput`<sup>Optional</sup> <a name="As2ConfigInput" id="@cdktn/provider-awscc.transferConnector.TransferConnector.property.as2ConfigInput"></a>

```csharp
public IResolvable|TransferConnectorAs2Config As2ConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2Config">TransferConnectorAs2Config</a>

---

##### `EgressConfigInput`<sup>Optional</sup> <a name="EgressConfigInput" id="@cdktn/provider-awscc.transferConnector.TransferConnector.property.egressConfigInput"></a>

```csharp
public IResolvable|TransferConnectorEgressConfig EgressConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfig">TransferConnectorEgressConfig</a>

---

##### `EgressTypeInput`<sup>Optional</sup> <a name="EgressTypeInput" id="@cdktn/provider-awscc.transferConnector.TransferConnector.property.egressTypeInput"></a>

```csharp
public string EgressTypeInput { get; }
```

- *Type:* string

---

##### `IpAddressTypeInput`<sup>Optional</sup> <a name="IpAddressTypeInput" id="@cdktn/provider-awscc.transferConnector.TransferConnector.property.ipAddressTypeInput"></a>

```csharp
public string IpAddressTypeInput { get; }
```

- *Type:* string

---

##### `LoggingRoleInput`<sup>Optional</sup> <a name="LoggingRoleInput" id="@cdktn/provider-awscc.transferConnector.TransferConnector.property.loggingRoleInput"></a>

```csharp
public string LoggingRoleInput { get; }
```

- *Type:* string

---

##### `SecurityPolicyNameInput`<sup>Optional</sup> <a name="SecurityPolicyNameInput" id="@cdktn/provider-awscc.transferConnector.TransferConnector.property.securityPolicyNameInput"></a>

```csharp
public string SecurityPolicyNameInput { get; }
```

- *Type:* string

---

##### `SftpConfigInput`<sup>Optional</sup> <a name="SftpConfigInput" id="@cdktn/provider-awscc.transferConnector.TransferConnector.property.sftpConfigInput"></a>

```csharp
public IResolvable|TransferConnectorSftpConfig SftpConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfig">TransferConnectorSftpConfig</a>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.transferConnector.TransferConnector.property.tagsInput"></a>

```csharp
public IResolvable|TransferConnectorTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTags">TransferConnectorTags</a>[]

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktn/provider-awscc.transferConnector.TransferConnector.property.urlInput"></a>

```csharp
public string UrlInput { get; }
```

- *Type:* string

---

##### `AccessRole`<sup>Required</sup> <a name="AccessRole" id="@cdktn/provider-awscc.transferConnector.TransferConnector.property.accessRole"></a>

```csharp
public string AccessRole { get; }
```

- *Type:* string

---

##### `EgressType`<sup>Required</sup> <a name="EgressType" id="@cdktn/provider-awscc.transferConnector.TransferConnector.property.egressType"></a>

```csharp
public string EgressType { get; }
```

- *Type:* string

---

##### `IpAddressType`<sup>Required</sup> <a name="IpAddressType" id="@cdktn/provider-awscc.transferConnector.TransferConnector.property.ipAddressType"></a>

```csharp
public string IpAddressType { get; }
```

- *Type:* string

---

##### `LoggingRole`<sup>Required</sup> <a name="LoggingRole" id="@cdktn/provider-awscc.transferConnector.TransferConnector.property.loggingRole"></a>

```csharp
public string LoggingRole { get; }
```

- *Type:* string

---

##### `SecurityPolicyName`<sup>Required</sup> <a name="SecurityPolicyName" id="@cdktn/provider-awscc.transferConnector.TransferConnector.property.securityPolicyName"></a>

```csharp
public string SecurityPolicyName { get; }
```

- *Type:* string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktn/provider-awscc.transferConnector.TransferConnector.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.transferConnector.TransferConnector.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### TransferConnectorAs2Config <a name="TransferConnectorAs2Config" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2Config"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2Config.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new TransferConnectorAs2Config {
    TransferConnectorAs2ConfigAsyncMdnConfig AsyncMdnConfig = null,
    string BasicAuthSecretId = null,
    string Compression = null,
    string EncryptionAlgorithm = null,
    string LocalProfileId = null,
    string MdnResponse = null,
    string MdnSigningAlgorithm = null,
    string MessageSubject = null,
    string PartnerProfileId = null,
    string PreserveContentType = null,
    string SigningAlgorithm = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2Config.property.asyncMdnConfig">AsyncMdnConfig</a></code> | <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfig">TransferConnectorAs2ConfigAsyncMdnConfig</a></code> | Configuration for an AS2 connector with ASYNC MDN Response. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2Config.property.basicAuthSecretId">BasicAuthSecretId</a></code> | <code>string</code> | ARN or name of the secret in AWS Secrets Manager which contains the credentials for Basic authentication. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2Config.property.compression">Compression</a></code> | <code>string</code> | Compression setting for this AS2 connector configuration. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2Config.property.encryptionAlgorithm">EncryptionAlgorithm</a></code> | <code>string</code> | Encryption algorithm for this AS2 connector configuration. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2Config.property.localProfileId">LocalProfileId</a></code> | <code>string</code> | A unique identifier for the local profile. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2Config.property.mdnResponse">MdnResponse</a></code> | <code>string</code> | MDN Response setting for this AS2 connector configuration. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2Config.property.mdnSigningAlgorithm">MdnSigningAlgorithm</a></code> | <code>string</code> | MDN Signing algorithm for this AS2 connector configuration. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2Config.property.messageSubject">MessageSubject</a></code> | <code>string</code> | The message subject for this AS2 connector configuration. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2Config.property.partnerProfileId">PartnerProfileId</a></code> | <code>string</code> | A unique identifier for the partner profile. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2Config.property.preserveContentType">PreserveContentType</a></code> | <code>string</code> | Specifies whether to use the AWS S3 object content-type as the content-type for the AS2 message. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2Config.property.signingAlgorithm">SigningAlgorithm</a></code> | <code>string</code> | Signing algorithm for this AS2 connector configuration. |

---

##### `AsyncMdnConfig`<sup>Optional</sup> <a name="AsyncMdnConfig" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2Config.property.asyncMdnConfig"></a>

```csharp
public TransferConnectorAs2ConfigAsyncMdnConfig AsyncMdnConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfig">TransferConnectorAs2ConfigAsyncMdnConfig</a>

Configuration for an AS2 connector with ASYNC MDN Response.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_connector#async_mdn_config TransferConnector#async_mdn_config}

---

##### `BasicAuthSecretId`<sup>Optional</sup> <a name="BasicAuthSecretId" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2Config.property.basicAuthSecretId"></a>

```csharp
public string BasicAuthSecretId { get; set; }
```

- *Type:* string

ARN or name of the secret in AWS Secrets Manager which contains the credentials for Basic authentication.

If empty, Basic authentication is disabled for the AS2 connector

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_connector#basic_auth_secret_id TransferConnector#basic_auth_secret_id}

---

##### `Compression`<sup>Optional</sup> <a name="Compression" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2Config.property.compression"></a>

```csharp
public string Compression { get; set; }
```

- *Type:* string

Compression setting for this AS2 connector configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_connector#compression TransferConnector#compression}

---

##### `EncryptionAlgorithm`<sup>Optional</sup> <a name="EncryptionAlgorithm" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2Config.property.encryptionAlgorithm"></a>

```csharp
public string EncryptionAlgorithm { get; set; }
```

- *Type:* string

Encryption algorithm for this AS2 connector configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_connector#encryption_algorithm TransferConnector#encryption_algorithm}

---

##### `LocalProfileId`<sup>Optional</sup> <a name="LocalProfileId" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2Config.property.localProfileId"></a>

```csharp
public string LocalProfileId { get; set; }
```

- *Type:* string

A unique identifier for the local profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_connector#local_profile_id TransferConnector#local_profile_id}

---

##### `MdnResponse`<sup>Optional</sup> <a name="MdnResponse" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2Config.property.mdnResponse"></a>

```csharp
public string MdnResponse { get; set; }
```

- *Type:* string

MDN Response setting for this AS2 connector configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_connector#mdn_response TransferConnector#mdn_response}

---

##### `MdnSigningAlgorithm`<sup>Optional</sup> <a name="MdnSigningAlgorithm" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2Config.property.mdnSigningAlgorithm"></a>

```csharp
public string MdnSigningAlgorithm { get; set; }
```

- *Type:* string

MDN Signing algorithm for this AS2 connector configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_connector#mdn_signing_algorithm TransferConnector#mdn_signing_algorithm}

---

##### `MessageSubject`<sup>Optional</sup> <a name="MessageSubject" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2Config.property.messageSubject"></a>

```csharp
public string MessageSubject { get; set; }
```

- *Type:* string

The message subject for this AS2 connector configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_connector#message_subject TransferConnector#message_subject}

---

##### `PartnerProfileId`<sup>Optional</sup> <a name="PartnerProfileId" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2Config.property.partnerProfileId"></a>

```csharp
public string PartnerProfileId { get; set; }
```

- *Type:* string

A unique identifier for the partner profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_connector#partner_profile_id TransferConnector#partner_profile_id}

---

##### `PreserveContentType`<sup>Optional</sup> <a name="PreserveContentType" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2Config.property.preserveContentType"></a>

```csharp
public string PreserveContentType { get; set; }
```

- *Type:* string

Specifies whether to use the AWS S3 object content-type as the content-type for the AS2 message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_connector#preserve_content_type TransferConnector#preserve_content_type}

---

##### `SigningAlgorithm`<sup>Optional</sup> <a name="SigningAlgorithm" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2Config.property.signingAlgorithm"></a>

```csharp
public string SigningAlgorithm { get; set; }
```

- *Type:* string

Signing algorithm for this AS2 connector configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_connector#signing_algorithm TransferConnector#signing_algorithm}

---

### TransferConnectorAs2ConfigAsyncMdnConfig <a name="TransferConnectorAs2ConfigAsyncMdnConfig" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new TransferConnectorAs2ConfigAsyncMdnConfig {
    string[] ServerIds = null,
    string Url = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfig.property.serverIds">ServerIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_connector#server_ids TransferConnector#server_ids}. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfig.property.url">Url</a></code> | <code>string</code> | URL of the server to receive the MDN response on. |

---

##### `ServerIds`<sup>Optional</sup> <a name="ServerIds" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfig.property.serverIds"></a>

```csharp
public string[] ServerIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_connector#server_ids TransferConnector#server_ids}.

---

##### `Url`<sup>Optional</sup> <a name="Url" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfig.property.url"></a>

```csharp
public string Url { get; set; }
```

- *Type:* string

URL of the server to receive the MDN response on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_connector#url TransferConnector#url}

---

### TransferConnectorConfig <a name="TransferConnectorConfig" id="@cdktn/provider-awscc.transferConnector.TransferConnectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transferConnector.TransferConnectorConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new TransferConnectorConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AccessRole,
    TransferConnectorAs2Config As2Config = null,
    TransferConnectorEgressConfig EgressConfig = null,
    string EgressType = null,
    string IpAddressType = null,
    string LoggingRole = null,
    string SecurityPolicyName = null,
    TransferConnectorSftpConfig SftpConfig = null,
    IResolvable|TransferConnectorTags[] Tags = null,
    string Url = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorConfig.property.accessRole">AccessRole</a></code> | <code>string</code> | Specifies the access role for the connector. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorConfig.property.as2Config">As2Config</a></code> | <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2Config">TransferConnectorAs2Config</a></code> | Configuration for an AS2 connector. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorConfig.property.egressConfig">EgressConfig</a></code> | <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfig">TransferConnectorEgressConfig</a></code> | Egress configuration for the connector. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorConfig.property.egressType">EgressType</a></code> | <code>string</code> | Specifies the egress type for the connector. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorConfig.property.ipAddressType">IpAddressType</a></code> | <code>string</code> | IP address type for Connector. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorConfig.property.loggingRole">LoggingRole</a></code> | <code>string</code> | Specifies the logging role for the connector. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorConfig.property.securityPolicyName">SecurityPolicyName</a></code> | <code>string</code> | Security policy for SFTP Connector. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorConfig.property.sftpConfig">SftpConfig</a></code> | <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfig">TransferConnectorSftpConfig</a></code> | Configuration for an SFTP connector. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTags">TransferConnectorTags</a>[]</code> | Key-value pairs that can be used to group and search for connectors. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorConfig.property.url">Url</a></code> | <code>string</code> | URL for Connector. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.transferConnector.TransferConnectorConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.transferConnector.TransferConnectorConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.transferConnector.TransferConnectorConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.transferConnector.TransferConnectorConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.transferConnector.TransferConnectorConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.transferConnector.TransferConnectorConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.transferConnector.TransferConnectorConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AccessRole`<sup>Required</sup> <a name="AccessRole" id="@cdktn/provider-awscc.transferConnector.TransferConnectorConfig.property.accessRole"></a>

```csharp
public string AccessRole { get; set; }
```

- *Type:* string

Specifies the access role for the connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_connector#access_role TransferConnector#access_role}

---

##### `As2Config`<sup>Optional</sup> <a name="As2Config" id="@cdktn/provider-awscc.transferConnector.TransferConnectorConfig.property.as2Config"></a>

```csharp
public TransferConnectorAs2Config As2Config { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2Config">TransferConnectorAs2Config</a>

Configuration for an AS2 connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_connector#as_2_config TransferConnector#as_2_config}

---

##### `EgressConfig`<sup>Optional</sup> <a name="EgressConfig" id="@cdktn/provider-awscc.transferConnector.TransferConnectorConfig.property.egressConfig"></a>

```csharp
public TransferConnectorEgressConfig EgressConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfig">TransferConnectorEgressConfig</a>

Egress configuration for the connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_connector#egress_config TransferConnector#egress_config}

---

##### `EgressType`<sup>Optional</sup> <a name="EgressType" id="@cdktn/provider-awscc.transferConnector.TransferConnectorConfig.property.egressType"></a>

```csharp
public string EgressType { get; set; }
```

- *Type:* string

Specifies the egress type for the connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_connector#egress_type TransferConnector#egress_type}

---

##### `IpAddressType`<sup>Optional</sup> <a name="IpAddressType" id="@cdktn/provider-awscc.transferConnector.TransferConnectorConfig.property.ipAddressType"></a>

```csharp
public string IpAddressType { get; set; }
```

- *Type:* string

IP address type for Connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_connector#ip_address_type TransferConnector#ip_address_type}

---

##### `LoggingRole`<sup>Optional</sup> <a name="LoggingRole" id="@cdktn/provider-awscc.transferConnector.TransferConnectorConfig.property.loggingRole"></a>

```csharp
public string LoggingRole { get; set; }
```

- *Type:* string

Specifies the logging role for the connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_connector#logging_role TransferConnector#logging_role}

---

##### `SecurityPolicyName`<sup>Optional</sup> <a name="SecurityPolicyName" id="@cdktn/provider-awscc.transferConnector.TransferConnectorConfig.property.securityPolicyName"></a>

```csharp
public string SecurityPolicyName { get; set; }
```

- *Type:* string

Security policy for SFTP Connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_connector#security_policy_name TransferConnector#security_policy_name}

---

##### `SftpConfig`<sup>Optional</sup> <a name="SftpConfig" id="@cdktn/provider-awscc.transferConnector.TransferConnectorConfig.property.sftpConfig"></a>

```csharp
public TransferConnectorSftpConfig SftpConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfig">TransferConnectorSftpConfig</a>

Configuration for an SFTP connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_connector#sftp_config TransferConnector#sftp_config}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.transferConnector.TransferConnectorConfig.property.tags"></a>

```csharp
public IResolvable|TransferConnectorTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTags">TransferConnectorTags</a>[]

Key-value pairs that can be used to group and search for connectors.

Tags are metadata attached to connectors for any purpose.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_connector#tags TransferConnector#tags}

---

##### `Url`<sup>Optional</sup> <a name="Url" id="@cdktn/provider-awscc.transferConnector.TransferConnectorConfig.property.url"></a>

```csharp
public string Url { get; set; }
```

- *Type:* string

URL for Connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_connector#url TransferConnector#url}

---

### TransferConnectorEgressConfig <a name="TransferConnectorEgressConfig" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new TransferConnectorEgressConfig {
    TransferConnectorEgressConfigVpcLattice VpcLattice = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfig.property.vpcLattice">VpcLattice</a></code> | <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLattice">TransferConnectorEgressConfigVpcLattice</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_connector#vpc_lattice TransferConnector#vpc_lattice}. |

---

##### `VpcLattice`<sup>Optional</sup> <a name="VpcLattice" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfig.property.vpcLattice"></a>

```csharp
public TransferConnectorEgressConfigVpcLattice VpcLattice { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLattice">TransferConnectorEgressConfigVpcLattice</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_connector#vpc_lattice TransferConnector#vpc_lattice}.

---

### TransferConnectorEgressConfigVpcLattice <a name="TransferConnectorEgressConfigVpcLattice" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLattice"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLattice.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new TransferConnectorEgressConfigVpcLattice {
    double PortNumber = null,
    string ResourceConfigurationArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLattice.property.portNumber">PortNumber</a></code> | <code>double</code> | Port to connect to on the target VPC Lattice resource. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLattice.property.resourceConfigurationArn">ResourceConfigurationArn</a></code> | <code>string</code> | ARN of the VPC Lattice resource configuration. |

---

##### `PortNumber`<sup>Optional</sup> <a name="PortNumber" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLattice.property.portNumber"></a>

```csharp
public double PortNumber { get; set; }
```

- *Type:* double

Port to connect to on the target VPC Lattice resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_connector#port_number TransferConnector#port_number}

---

##### `ResourceConfigurationArn`<sup>Optional</sup> <a name="ResourceConfigurationArn" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLattice.property.resourceConfigurationArn"></a>

```csharp
public string ResourceConfigurationArn { get; set; }
```

- *Type:* string

ARN of the VPC Lattice resource configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_connector#resource_configuration_arn TransferConnector#resource_configuration_arn}

---

### TransferConnectorSftpConfig <a name="TransferConnectorSftpConfig" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new TransferConnectorSftpConfig {
    double MaxConcurrentConnections = null,
    string[] TrustedHostKeys = null,
    string UserSecretId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfig.property.maxConcurrentConnections">MaxConcurrentConnections</a></code> | <code>double</code> | Specifies the number of active connections that your connector can establish with the remote server at the same time. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfig.property.trustedHostKeys">TrustedHostKeys</a></code> | <code>string[]</code> | List of public host keys, for the external server to which you are connecting. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfig.property.userSecretId">UserSecretId</a></code> | <code>string</code> | ARN or name of the secret in AWS Secrets Manager which contains the SFTP user's private keys or passwords. |

---

##### `MaxConcurrentConnections`<sup>Optional</sup> <a name="MaxConcurrentConnections" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfig.property.maxConcurrentConnections"></a>

```csharp
public double MaxConcurrentConnections { get; set; }
```

- *Type:* double

Specifies the number of active connections that your connector can establish with the remote server at the same time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_connector#max_concurrent_connections TransferConnector#max_concurrent_connections}

---

##### `TrustedHostKeys`<sup>Optional</sup> <a name="TrustedHostKeys" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfig.property.trustedHostKeys"></a>

```csharp
public string[] TrustedHostKeys { get; set; }
```

- *Type:* string[]

List of public host keys, for the external server to which you are connecting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_connector#trusted_host_keys TransferConnector#trusted_host_keys}

---

##### `UserSecretId`<sup>Optional</sup> <a name="UserSecretId" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfig.property.userSecretId"></a>

```csharp
public string UserSecretId { get; set; }
```

- *Type:* string

ARN or name of the secret in AWS Secrets Manager which contains the SFTP user's private keys or passwords.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_connector#user_secret_id TransferConnector#user_secret_id}

---

### TransferConnectorTags <a name="TransferConnectorTags" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new TransferConnectorTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTags.property.key">Key</a></code> | <code>string</code> | The name assigned to the tag that you create. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTags.property.value">Value</a></code> | <code>string</code> | Contains one or more values that you assigned to the key name you create. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The name assigned to the tag that you create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_connector#key TransferConnector#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Contains one or more values that you assigned to the key name you create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_connector#value TransferConnector#value}

---

## Classes <a name="Classes" id="Classes"></a>

### TransferConnectorAs2ConfigAsyncMdnConfigOutputReference <a name="TransferConnectorAs2ConfigAsyncMdnConfigOutputReference" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new TransferConnectorAs2ConfigAsyncMdnConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.resetServerIds">ResetServerIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.resetUrl">ResetUrl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetServerIds` <a name="ResetServerIds" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.resetServerIds"></a>

```csharp
private void ResetServerIds()
```

##### `ResetUrl` <a name="ResetUrl" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.resetUrl"></a>

```csharp
private void ResetUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.property.serverIdsInput">ServerIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.property.urlInput">UrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.property.serverIds">ServerIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfig">TransferConnectorAs2ConfigAsyncMdnConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ServerIdsInput`<sup>Optional</sup> <a name="ServerIdsInput" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.property.serverIdsInput"></a>

```csharp
public string[] ServerIdsInput { get; }
```

- *Type:* string[]

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.property.urlInput"></a>

```csharp
public string UrlInput { get; }
```

- *Type:* string

---

##### `ServerIds`<sup>Required</sup> <a name="ServerIds" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.property.serverIds"></a>

```csharp
public string[] ServerIds { get; }
```

- *Type:* string[]

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|TransferConnectorAs2ConfigAsyncMdnConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfig">TransferConnectorAs2ConfigAsyncMdnConfig</a>

---


### TransferConnectorAs2ConfigOutputReference <a name="TransferConnectorAs2ConfigOutputReference" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new TransferConnectorAs2ConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.putAsyncMdnConfig">PutAsyncMdnConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.resetAsyncMdnConfig">ResetAsyncMdnConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.resetBasicAuthSecretId">ResetBasicAuthSecretId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.resetCompression">ResetCompression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.resetEncryptionAlgorithm">ResetEncryptionAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.resetLocalProfileId">ResetLocalProfileId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.resetMdnResponse">ResetMdnResponse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.resetMdnSigningAlgorithm">ResetMdnSigningAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.resetMessageSubject">ResetMessageSubject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.resetPartnerProfileId">ResetPartnerProfileId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.resetPreserveContentType">ResetPreserveContentType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.resetSigningAlgorithm">ResetSigningAlgorithm</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAsyncMdnConfig` <a name="PutAsyncMdnConfig" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.putAsyncMdnConfig"></a>

```csharp
private void PutAsyncMdnConfig(TransferConnectorAs2ConfigAsyncMdnConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.putAsyncMdnConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfig">TransferConnectorAs2ConfigAsyncMdnConfig</a>

---

##### `ResetAsyncMdnConfig` <a name="ResetAsyncMdnConfig" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.resetAsyncMdnConfig"></a>

```csharp
private void ResetAsyncMdnConfig()
```

##### `ResetBasicAuthSecretId` <a name="ResetBasicAuthSecretId" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.resetBasicAuthSecretId"></a>

```csharp
private void ResetBasicAuthSecretId()
```

##### `ResetCompression` <a name="ResetCompression" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.resetCompression"></a>

```csharp
private void ResetCompression()
```

##### `ResetEncryptionAlgorithm` <a name="ResetEncryptionAlgorithm" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.resetEncryptionAlgorithm"></a>

```csharp
private void ResetEncryptionAlgorithm()
```

##### `ResetLocalProfileId` <a name="ResetLocalProfileId" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.resetLocalProfileId"></a>

```csharp
private void ResetLocalProfileId()
```

##### `ResetMdnResponse` <a name="ResetMdnResponse" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.resetMdnResponse"></a>

```csharp
private void ResetMdnResponse()
```

##### `ResetMdnSigningAlgorithm` <a name="ResetMdnSigningAlgorithm" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.resetMdnSigningAlgorithm"></a>

```csharp
private void ResetMdnSigningAlgorithm()
```

##### `ResetMessageSubject` <a name="ResetMessageSubject" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.resetMessageSubject"></a>

```csharp
private void ResetMessageSubject()
```

##### `ResetPartnerProfileId` <a name="ResetPartnerProfileId" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.resetPartnerProfileId"></a>

```csharp
private void ResetPartnerProfileId()
```

##### `ResetPreserveContentType` <a name="ResetPreserveContentType" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.resetPreserveContentType"></a>

```csharp
private void ResetPreserveContentType()
```

##### `ResetSigningAlgorithm` <a name="ResetSigningAlgorithm" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.resetSigningAlgorithm"></a>

```csharp
private void ResetSigningAlgorithm()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.asyncMdnConfig">AsyncMdnConfig</a></code> | <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference">TransferConnectorAs2ConfigAsyncMdnConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.asyncMdnConfigInput">AsyncMdnConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfig">TransferConnectorAs2ConfigAsyncMdnConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.basicAuthSecretIdInput">BasicAuthSecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.compressionInput">CompressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.encryptionAlgorithmInput">EncryptionAlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.localProfileIdInput">LocalProfileIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.mdnResponseInput">MdnResponseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.mdnSigningAlgorithmInput">MdnSigningAlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.messageSubjectInput">MessageSubjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.partnerProfileIdInput">PartnerProfileIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.preserveContentTypeInput">PreserveContentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.signingAlgorithmInput">SigningAlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.basicAuthSecretId">BasicAuthSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.compression">Compression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.encryptionAlgorithm">EncryptionAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.localProfileId">LocalProfileId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.mdnResponse">MdnResponse</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.mdnSigningAlgorithm">MdnSigningAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.messageSubject">MessageSubject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.partnerProfileId">PartnerProfileId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.preserveContentType">PreserveContentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.signingAlgorithm">SigningAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2Config">TransferConnectorAs2Config</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AsyncMdnConfig`<sup>Required</sup> <a name="AsyncMdnConfig" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.asyncMdnConfig"></a>

```csharp
public TransferConnectorAs2ConfigAsyncMdnConfigOutputReference AsyncMdnConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference">TransferConnectorAs2ConfigAsyncMdnConfigOutputReference</a>

---

##### `AsyncMdnConfigInput`<sup>Optional</sup> <a name="AsyncMdnConfigInput" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.asyncMdnConfigInput"></a>

```csharp
public IResolvable|TransferConnectorAs2ConfigAsyncMdnConfig AsyncMdnConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfig">TransferConnectorAs2ConfigAsyncMdnConfig</a>

---

##### `BasicAuthSecretIdInput`<sup>Optional</sup> <a name="BasicAuthSecretIdInput" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.basicAuthSecretIdInput"></a>

```csharp
public string BasicAuthSecretIdInput { get; }
```

- *Type:* string

---

##### `CompressionInput`<sup>Optional</sup> <a name="CompressionInput" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.compressionInput"></a>

```csharp
public string CompressionInput { get; }
```

- *Type:* string

---

##### `EncryptionAlgorithmInput`<sup>Optional</sup> <a name="EncryptionAlgorithmInput" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.encryptionAlgorithmInput"></a>

```csharp
public string EncryptionAlgorithmInput { get; }
```

- *Type:* string

---

##### `LocalProfileIdInput`<sup>Optional</sup> <a name="LocalProfileIdInput" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.localProfileIdInput"></a>

```csharp
public string LocalProfileIdInput { get; }
```

- *Type:* string

---

##### `MdnResponseInput`<sup>Optional</sup> <a name="MdnResponseInput" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.mdnResponseInput"></a>

```csharp
public string MdnResponseInput { get; }
```

- *Type:* string

---

##### `MdnSigningAlgorithmInput`<sup>Optional</sup> <a name="MdnSigningAlgorithmInput" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.mdnSigningAlgorithmInput"></a>

```csharp
public string MdnSigningAlgorithmInput { get; }
```

- *Type:* string

---

##### `MessageSubjectInput`<sup>Optional</sup> <a name="MessageSubjectInput" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.messageSubjectInput"></a>

```csharp
public string MessageSubjectInput { get; }
```

- *Type:* string

---

##### `PartnerProfileIdInput`<sup>Optional</sup> <a name="PartnerProfileIdInput" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.partnerProfileIdInput"></a>

```csharp
public string PartnerProfileIdInput { get; }
```

- *Type:* string

---

##### `PreserveContentTypeInput`<sup>Optional</sup> <a name="PreserveContentTypeInput" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.preserveContentTypeInput"></a>

```csharp
public string PreserveContentTypeInput { get; }
```

- *Type:* string

---

##### `SigningAlgorithmInput`<sup>Optional</sup> <a name="SigningAlgorithmInput" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.signingAlgorithmInput"></a>

```csharp
public string SigningAlgorithmInput { get; }
```

- *Type:* string

---

##### `BasicAuthSecretId`<sup>Required</sup> <a name="BasicAuthSecretId" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.basicAuthSecretId"></a>

```csharp
public string BasicAuthSecretId { get; }
```

- *Type:* string

---

##### `Compression`<sup>Required</sup> <a name="Compression" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.compression"></a>

```csharp
public string Compression { get; }
```

- *Type:* string

---

##### `EncryptionAlgorithm`<sup>Required</sup> <a name="EncryptionAlgorithm" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.encryptionAlgorithm"></a>

```csharp
public string EncryptionAlgorithm { get; }
```

- *Type:* string

---

##### `LocalProfileId`<sup>Required</sup> <a name="LocalProfileId" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.localProfileId"></a>

```csharp
public string LocalProfileId { get; }
```

- *Type:* string

---

##### `MdnResponse`<sup>Required</sup> <a name="MdnResponse" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.mdnResponse"></a>

```csharp
public string MdnResponse { get; }
```

- *Type:* string

---

##### `MdnSigningAlgorithm`<sup>Required</sup> <a name="MdnSigningAlgorithm" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.mdnSigningAlgorithm"></a>

```csharp
public string MdnSigningAlgorithm { get; }
```

- *Type:* string

---

##### `MessageSubject`<sup>Required</sup> <a name="MessageSubject" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.messageSubject"></a>

```csharp
public string MessageSubject { get; }
```

- *Type:* string

---

##### `PartnerProfileId`<sup>Required</sup> <a name="PartnerProfileId" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.partnerProfileId"></a>

```csharp
public string PartnerProfileId { get; }
```

- *Type:* string

---

##### `PreserveContentType`<sup>Required</sup> <a name="PreserveContentType" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.preserveContentType"></a>

```csharp
public string PreserveContentType { get; }
```

- *Type:* string

---

##### `SigningAlgorithm`<sup>Required</sup> <a name="SigningAlgorithm" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.signingAlgorithm"></a>

```csharp
public string SigningAlgorithm { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|TransferConnectorAs2Config InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2Config">TransferConnectorAs2Config</a>

---


### TransferConnectorEgressConfigOutputReference <a name="TransferConnectorEgressConfigOutputReference" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new TransferConnectorEgressConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.putVpcLattice">PutVpcLattice</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.resetVpcLattice">ResetVpcLattice</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutVpcLattice` <a name="PutVpcLattice" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.putVpcLattice"></a>

```csharp
private void PutVpcLattice(TransferConnectorEgressConfigVpcLattice Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.putVpcLattice.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLattice">TransferConnectorEgressConfigVpcLattice</a>

---

##### `ResetVpcLattice` <a name="ResetVpcLattice" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.resetVpcLattice"></a>

```csharp
private void ResetVpcLattice()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.property.vpcLattice">VpcLattice</a></code> | <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference">TransferConnectorEgressConfigVpcLatticeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.property.vpcLatticeInput">VpcLatticeInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLattice">TransferConnectorEgressConfigVpcLattice</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfig">TransferConnectorEgressConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `VpcLattice`<sup>Required</sup> <a name="VpcLattice" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.property.vpcLattice"></a>

```csharp
public TransferConnectorEgressConfigVpcLatticeOutputReference VpcLattice { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference">TransferConnectorEgressConfigVpcLatticeOutputReference</a>

---

##### `VpcLatticeInput`<sup>Optional</sup> <a name="VpcLatticeInput" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.property.vpcLatticeInput"></a>

```csharp
public IResolvable|TransferConnectorEgressConfigVpcLattice VpcLatticeInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLattice">TransferConnectorEgressConfigVpcLattice</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|TransferConnectorEgressConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfig">TransferConnectorEgressConfig</a>

---


### TransferConnectorEgressConfigVpcLatticeOutputReference <a name="TransferConnectorEgressConfigVpcLatticeOutputReference" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new TransferConnectorEgressConfigVpcLatticeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.resetPortNumber">ResetPortNumber</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.resetResourceConfigurationArn">ResetResourceConfigurationArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPortNumber` <a name="ResetPortNumber" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.resetPortNumber"></a>

```csharp
private void ResetPortNumber()
```

##### `ResetResourceConfigurationArn` <a name="ResetResourceConfigurationArn" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.resetResourceConfigurationArn"></a>

```csharp
private void ResetResourceConfigurationArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.property.portNumberInput">PortNumberInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.property.resourceConfigurationArnInput">ResourceConfigurationArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.property.portNumber">PortNumber</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.property.resourceConfigurationArn">ResourceConfigurationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLattice">TransferConnectorEgressConfigVpcLattice</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PortNumberInput`<sup>Optional</sup> <a name="PortNumberInput" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.property.portNumberInput"></a>

```csharp
public double PortNumberInput { get; }
```

- *Type:* double

---

##### `ResourceConfigurationArnInput`<sup>Optional</sup> <a name="ResourceConfigurationArnInput" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.property.resourceConfigurationArnInput"></a>

```csharp
public string ResourceConfigurationArnInput { get; }
```

- *Type:* string

---

##### `PortNumber`<sup>Required</sup> <a name="PortNumber" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.property.portNumber"></a>

```csharp
public double PortNumber { get; }
```

- *Type:* double

---

##### `ResourceConfigurationArn`<sup>Required</sup> <a name="ResourceConfigurationArn" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.property.resourceConfigurationArn"></a>

```csharp
public string ResourceConfigurationArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.property.internalValue"></a>

```csharp
public IResolvable|TransferConnectorEgressConfigVpcLattice InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLattice">TransferConnectorEgressConfigVpcLattice</a>

---


### TransferConnectorSftpConfigOutputReference <a name="TransferConnectorSftpConfigOutputReference" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new TransferConnectorSftpConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.resetMaxConcurrentConnections">ResetMaxConcurrentConnections</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.resetTrustedHostKeys">ResetTrustedHostKeys</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.resetUserSecretId">ResetUserSecretId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxConcurrentConnections` <a name="ResetMaxConcurrentConnections" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.resetMaxConcurrentConnections"></a>

```csharp
private void ResetMaxConcurrentConnections()
```

##### `ResetTrustedHostKeys` <a name="ResetTrustedHostKeys" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.resetTrustedHostKeys"></a>

```csharp
private void ResetTrustedHostKeys()
```

##### `ResetUserSecretId` <a name="ResetUserSecretId" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.resetUserSecretId"></a>

```csharp
private void ResetUserSecretId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.property.maxConcurrentConnectionsInput">MaxConcurrentConnectionsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.property.trustedHostKeysInput">TrustedHostKeysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.property.userSecretIdInput">UserSecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.property.maxConcurrentConnections">MaxConcurrentConnections</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.property.trustedHostKeys">TrustedHostKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.property.userSecretId">UserSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfig">TransferConnectorSftpConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxConcurrentConnectionsInput`<sup>Optional</sup> <a name="MaxConcurrentConnectionsInput" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.property.maxConcurrentConnectionsInput"></a>

```csharp
public double MaxConcurrentConnectionsInput { get; }
```

- *Type:* double

---

##### `TrustedHostKeysInput`<sup>Optional</sup> <a name="TrustedHostKeysInput" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.property.trustedHostKeysInput"></a>

```csharp
public string[] TrustedHostKeysInput { get; }
```

- *Type:* string[]

---

##### `UserSecretIdInput`<sup>Optional</sup> <a name="UserSecretIdInput" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.property.userSecretIdInput"></a>

```csharp
public string UserSecretIdInput { get; }
```

- *Type:* string

---

##### `MaxConcurrentConnections`<sup>Required</sup> <a name="MaxConcurrentConnections" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.property.maxConcurrentConnections"></a>

```csharp
public double MaxConcurrentConnections { get; }
```

- *Type:* double

---

##### `TrustedHostKeys`<sup>Required</sup> <a name="TrustedHostKeys" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.property.trustedHostKeys"></a>

```csharp
public string[] TrustedHostKeys { get; }
```

- *Type:* string[]

---

##### `UserSecretId`<sup>Required</sup> <a name="UserSecretId" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.property.userSecretId"></a>

```csharp
public string UserSecretId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|TransferConnectorSftpConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfig">TransferConnectorSftpConfig</a>

---


### TransferConnectorTagsList <a name="TransferConnectorTagsList" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new TransferConnectorTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsList.get"></a>

```csharp
private TransferConnectorTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTags">TransferConnectorTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsList.property.internalValue"></a>

```csharp
public IResolvable|TransferConnectorTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTags">TransferConnectorTags</a>[]

---


### TransferConnectorTagsOutputReference <a name="TransferConnectorTagsOutputReference" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new TransferConnectorTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTags">TransferConnectorTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|TransferConnectorTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTags">TransferConnectorTags</a>

---



