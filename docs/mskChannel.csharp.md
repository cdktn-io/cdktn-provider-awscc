# `mskChannel` Submodule <a name="`mskChannel` Submodule" id="@cdktn/provider-awscc.mskChannel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MskChannel <a name="MskChannel" id="@cdktn/provider-awscc.mskChannel.MskChannel"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_channel awscc_msk_channel}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskChannel.MskChannel.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MskChannel(Construct Scope, string Id, MskChannelConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelConfig">MskChannelConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.mskChannel.MskChannel.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.mskChannel.MskChannel.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.mskChannel.MskChannel.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskChannel.MskChannelConfig">MskChannelConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.putEncryptionConfiguration">PutEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.putIcebergDestinationConfiguration">PutIcebergDestinationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.putLoggingInfo">PutLoggingInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.putS3DestinationConfiguration">PutS3DestinationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.putTopicConfigurationList">PutTopicConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.resetClusterArn">ResetClusterArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.resetEncryptionConfiguration">ResetEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.resetIcebergDestinationConfiguration">ResetIcebergDestinationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.resetLoggingInfo">ResetLoggingInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.resetS3DestinationConfiguration">ResetS3DestinationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mskChannel.MskChannel.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.mskChannel.MskChannel.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.mskChannel.MskChannel.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.mskChannel.MskChannel.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.mskChannel.MskChannel.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mskChannel.MskChannel.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.mskChannel.MskChannel.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.mskChannel.MskChannel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.mskChannel.MskChannel.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.mskChannel.MskChannel.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.mskChannel.MskChannel.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.mskChannel.MskChannel.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.mskChannel.MskChannel.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.mskChannel.MskChannel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannel.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannel.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannel.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannel.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannel.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannel.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannel.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannel.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannel.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.mskChannel.MskChannel.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.mskChannel.MskChannel.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.mskChannel.MskChannel.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.mskChannel.MskChannel.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannel.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.mskChannel.MskChannel.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.mskChannel.MskChannel.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.mskChannel.MskChannel.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.mskChannel.MskChannel.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.mskChannel.MskChannel.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.mskChannel.MskChannel.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.mskChannel.MskChannel.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEncryptionConfiguration` <a name="PutEncryptionConfiguration" id="@cdktn/provider-awscc.mskChannel.MskChannel.putEncryptionConfiguration"></a>

```csharp
private void PutEncryptionConfiguration(MskChannelEncryptionConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mskChannel.MskChannel.putEncryptionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfiguration">MskChannelEncryptionConfiguration</a>

---

##### `PutIcebergDestinationConfiguration` <a name="PutIcebergDestinationConfiguration" id="@cdktn/provider-awscc.mskChannel.MskChannel.putIcebergDestinationConfiguration"></a>

```csharp
private void PutIcebergDestinationConfiguration(MskChannelIcebergDestinationConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mskChannel.MskChannel.putIcebergDestinationConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfiguration">MskChannelIcebergDestinationConfiguration</a>

---

##### `PutLoggingInfo` <a name="PutLoggingInfo" id="@cdktn/provider-awscc.mskChannel.MskChannel.putLoggingInfo"></a>

```csharp
private void PutLoggingInfo(MskChannelLoggingInfo Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mskChannel.MskChannel.putLoggingInfo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfo">MskChannelLoggingInfo</a>

---

##### `PutS3DestinationConfiguration` <a name="PutS3DestinationConfiguration" id="@cdktn/provider-awscc.mskChannel.MskChannel.putS3DestinationConfiguration"></a>

```csharp
private void PutS3DestinationConfiguration(MskChannelS3DestinationConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mskChannel.MskChannel.putS3DestinationConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfiguration">MskChannelS3DestinationConfiguration</a>

---

##### `PutTopicConfigurationList` <a name="PutTopicConfigurationList" id="@cdktn/provider-awscc.mskChannel.MskChannel.putTopicConfigurationList"></a>

```csharp
private void PutTopicConfigurationList(IResolvable|MskChannelTopicConfigurationListStruct[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mskChannel.MskChannel.putTopicConfigurationList.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStruct">MskChannelTopicConfigurationListStruct</a>[]

---

##### `ResetClusterArn` <a name="ResetClusterArn" id="@cdktn/provider-awscc.mskChannel.MskChannel.resetClusterArn"></a>

```csharp
private void ResetClusterArn()
```

##### `ResetEncryptionConfiguration` <a name="ResetEncryptionConfiguration" id="@cdktn/provider-awscc.mskChannel.MskChannel.resetEncryptionConfiguration"></a>

```csharp
private void ResetEncryptionConfiguration()
```

##### `ResetIcebergDestinationConfiguration` <a name="ResetIcebergDestinationConfiguration" id="@cdktn/provider-awscc.mskChannel.MskChannel.resetIcebergDestinationConfiguration"></a>

```csharp
private void ResetIcebergDestinationConfiguration()
```

##### `ResetLoggingInfo` <a name="ResetLoggingInfo" id="@cdktn/provider-awscc.mskChannel.MskChannel.resetLoggingInfo"></a>

```csharp
private void ResetLoggingInfo()
```

##### `ResetS3DestinationConfiguration` <a name="ResetS3DestinationConfiguration" id="@cdktn/provider-awscc.mskChannel.MskChannel.resetS3DestinationConfiguration"></a>

```csharp
private void ResetS3DestinationConfiguration()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.mskChannel.MskChannel.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a MskChannel resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.mskChannel.MskChannel.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

MskChannel.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.mskChannel.MskChannel.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.mskChannel.MskChannel.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

MskChannel.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.mskChannel.MskChannel.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.mskChannel.MskChannel.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

MskChannel.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.mskChannel.MskChannel.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.mskChannel.MskChannel.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

MskChannel.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a MskChannel resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.mskChannel.MskChannel.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.mskChannel.MskChannel.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MskChannel to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.mskChannel.MskChannel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MskChannel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_channel#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.mskChannel.MskChannel.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the MskChannel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.property.channelArn">ChannelArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.property.encryptionConfiguration">EncryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfigurationOutputReference">MskChannelEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.property.icebergDestinationConfiguration">IcebergDestinationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference">MskChannelIcebergDestinationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.property.loggingInfo">LoggingInfo</a></code> | <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference">MskChannelLoggingInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.property.s3DestinationConfiguration">S3DestinationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference">MskChannelS3DestinationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.property.stateInfo">StateInfo</a></code> | <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelStateInfoOutputReference">MskChannelStateInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.property.topicConfigurationList">TopicConfigurationList</a></code> | <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructList">MskChannelTopicConfigurationListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.property.channelNameInput">ChannelNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.property.clusterArnInput">ClusterArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.property.encryptionConfigurationInput">EncryptionConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfiguration">MskChannelEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.property.icebergDestinationConfigurationInput">IcebergDestinationConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfiguration">MskChannelIcebergDestinationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.property.loggingInfoInput">LoggingInfoInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfo">MskChannelLoggingInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.property.s3DestinationConfigurationInput">S3DestinationConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfiguration">MskChannelS3DestinationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.property.topicConfigurationListInput">TopicConfigurationListInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStruct">MskChannelTopicConfigurationListStruct</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.property.channelName">ChannelName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.property.clusterArn">ClusterArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.mskChannel.MskChannel.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.mskChannel.MskChannel.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mskChannel.MskChannel.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.mskChannel.MskChannel.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.mskChannel.MskChannel.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.mskChannel.MskChannel.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.mskChannel.MskChannel.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.mskChannel.MskChannel.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.mskChannel.MskChannel.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.mskChannel.MskChannel.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.mskChannel.MskChannel.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.mskChannel.MskChannel.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.mskChannel.MskChannel.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.mskChannel.MskChannel.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ChannelArn`<sup>Required</sup> <a name="ChannelArn" id="@cdktn/provider-awscc.mskChannel.MskChannel.property.channelArn"></a>

```csharp
public string ChannelArn { get; }
```

- *Type:* string

---

##### `EncryptionConfiguration`<sup>Required</sup> <a name="EncryptionConfiguration" id="@cdktn/provider-awscc.mskChannel.MskChannel.property.encryptionConfiguration"></a>

```csharp
public MskChannelEncryptionConfigurationOutputReference EncryptionConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfigurationOutputReference">MskChannelEncryptionConfigurationOutputReference</a>

---

##### `IcebergDestinationConfiguration`<sup>Required</sup> <a name="IcebergDestinationConfiguration" id="@cdktn/provider-awscc.mskChannel.MskChannel.property.icebergDestinationConfiguration"></a>

```csharp
public MskChannelIcebergDestinationConfigurationOutputReference IcebergDestinationConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference">MskChannelIcebergDestinationConfigurationOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.mskChannel.MskChannel.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LoggingInfo`<sup>Required</sup> <a name="LoggingInfo" id="@cdktn/provider-awscc.mskChannel.MskChannel.property.loggingInfo"></a>

```csharp
public MskChannelLoggingInfoOutputReference LoggingInfo { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference">MskChannelLoggingInfoOutputReference</a>

---

##### `S3DestinationConfiguration`<sup>Required</sup> <a name="S3DestinationConfiguration" id="@cdktn/provider-awscc.mskChannel.MskChannel.property.s3DestinationConfiguration"></a>

```csharp
public MskChannelS3DestinationConfigurationOutputReference S3DestinationConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference">MskChannelS3DestinationConfigurationOutputReference</a>

---

##### `StateInfo`<sup>Required</sup> <a name="StateInfo" id="@cdktn/provider-awscc.mskChannel.MskChannel.property.stateInfo"></a>

```csharp
public MskChannelStateInfoOutputReference StateInfo { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mskChannel.MskChannelStateInfoOutputReference">MskChannelStateInfoOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.mskChannel.MskChannel.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `TopicConfigurationList`<sup>Required</sup> <a name="TopicConfigurationList" id="@cdktn/provider-awscc.mskChannel.MskChannel.property.topicConfigurationList"></a>

```csharp
public MskChannelTopicConfigurationListStructList TopicConfigurationList { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructList">MskChannelTopicConfigurationListStructList</a>

---

##### `ChannelNameInput`<sup>Optional</sup> <a name="ChannelNameInput" id="@cdktn/provider-awscc.mskChannel.MskChannel.property.channelNameInput"></a>

```csharp
public string ChannelNameInput { get; }
```

- *Type:* string

---

##### `ClusterArnInput`<sup>Optional</sup> <a name="ClusterArnInput" id="@cdktn/provider-awscc.mskChannel.MskChannel.property.clusterArnInput"></a>

```csharp
public string ClusterArnInput { get; }
```

- *Type:* string

---

##### `EncryptionConfigurationInput`<sup>Optional</sup> <a name="EncryptionConfigurationInput" id="@cdktn/provider-awscc.mskChannel.MskChannel.property.encryptionConfigurationInput"></a>

```csharp
public IResolvable|MskChannelEncryptionConfiguration EncryptionConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfiguration">MskChannelEncryptionConfiguration</a>

---

##### `IcebergDestinationConfigurationInput`<sup>Optional</sup> <a name="IcebergDestinationConfigurationInput" id="@cdktn/provider-awscc.mskChannel.MskChannel.property.icebergDestinationConfigurationInput"></a>

```csharp
public IResolvable|MskChannelIcebergDestinationConfiguration IcebergDestinationConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfiguration">MskChannelIcebergDestinationConfiguration</a>

---

##### `LoggingInfoInput`<sup>Optional</sup> <a name="LoggingInfoInput" id="@cdktn/provider-awscc.mskChannel.MskChannel.property.loggingInfoInput"></a>

```csharp
public IResolvable|MskChannelLoggingInfo LoggingInfoInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfo">MskChannelLoggingInfo</a>

---

##### `S3DestinationConfigurationInput`<sup>Optional</sup> <a name="S3DestinationConfigurationInput" id="@cdktn/provider-awscc.mskChannel.MskChannel.property.s3DestinationConfigurationInput"></a>

```csharp
public IResolvable|MskChannelS3DestinationConfiguration S3DestinationConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfiguration">MskChannelS3DestinationConfiguration</a>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.mskChannel.MskChannel.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TopicConfigurationListInput`<sup>Optional</sup> <a name="TopicConfigurationListInput" id="@cdktn/provider-awscc.mskChannel.MskChannel.property.topicConfigurationListInput"></a>

```csharp
public IResolvable|MskChannelTopicConfigurationListStruct[] TopicConfigurationListInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStruct">MskChannelTopicConfigurationListStruct</a>[]

---

##### `ChannelName`<sup>Required</sup> <a name="ChannelName" id="@cdktn/provider-awscc.mskChannel.MskChannel.property.channelName"></a>

```csharp
public string ChannelName { get; }
```

- *Type:* string

---

##### `ClusterArn`<sup>Required</sup> <a name="ClusterArn" id="@cdktn/provider-awscc.mskChannel.MskChannel.property.clusterArn"></a>

```csharp
public string ClusterArn { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.mskChannel.MskChannel.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.mskChannel.MskChannel.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MskChannelConfig <a name="MskChannelConfig" id="@cdktn/provider-awscc.mskChannel.MskChannelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskChannel.MskChannelConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MskChannelConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ChannelName,
    IResolvable|MskChannelTopicConfigurationListStruct[] TopicConfigurationList,
    string ClusterArn = null,
    MskChannelEncryptionConfiguration EncryptionConfiguration = null,
    MskChannelIcebergDestinationConfiguration IcebergDestinationConfiguration = null,
    MskChannelLoggingInfo LoggingInfo = null,
    MskChannelS3DestinationConfiguration S3DestinationConfiguration = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelConfig.property.channelName">ChannelName</a></code> | <code>string</code> | Name of the channel. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelConfig.property.topicConfigurationList">TopicConfigurationList</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStruct">MskChannelTopicConfigurationListStruct</a>[]</code> | Topic configuration. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelConfig.property.clusterArn">ClusterArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the cluster. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelConfig.property.encryptionConfiguration">EncryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfiguration">MskChannelEncryptionConfiguration</a></code> | Encryption configuration. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelConfig.property.icebergDestinationConfiguration">IcebergDestinationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfiguration">MskChannelIcebergDestinationConfiguration</a></code> | Iceberg destination configuration. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelConfig.property.loggingInfo">LoggingInfo</a></code> | <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfo">MskChannelLoggingInfo</a></code> | Log configuration details for Channel. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelConfig.property.s3DestinationConfiguration">S3DestinationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfiguration">MskChannelS3DestinationConfiguration</a></code> | S3 destination configuration. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Tags attached to the channel. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.mskChannel.MskChannelConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.mskChannel.MskChannelConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.mskChannel.MskChannelConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.mskChannel.MskChannelConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.mskChannel.MskChannelConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.mskChannel.MskChannelConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.mskChannel.MskChannelConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ChannelName`<sup>Required</sup> <a name="ChannelName" id="@cdktn/provider-awscc.mskChannel.MskChannelConfig.property.channelName"></a>

```csharp
public string ChannelName { get; set; }
```

- *Type:* string

Name of the channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_channel#channel_name MskChannel#channel_name}

---

##### `TopicConfigurationList`<sup>Required</sup> <a name="TopicConfigurationList" id="@cdktn/provider-awscc.mskChannel.MskChannelConfig.property.topicConfigurationList"></a>

```csharp
public IResolvable|MskChannelTopicConfigurationListStruct[] TopicConfigurationList { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStruct">MskChannelTopicConfigurationListStruct</a>[]

Topic configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_channel#topic_configuration_list MskChannel#topic_configuration_list}

---

##### `ClusterArn`<sup>Optional</sup> <a name="ClusterArn" id="@cdktn/provider-awscc.mskChannel.MskChannelConfig.property.clusterArn"></a>

```csharp
public string ClusterArn { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) of the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_channel#cluster_arn MskChannel#cluster_arn}

---

##### `EncryptionConfiguration`<sup>Optional</sup> <a name="EncryptionConfiguration" id="@cdktn/provider-awscc.mskChannel.MskChannelConfig.property.encryptionConfiguration"></a>

```csharp
public MskChannelEncryptionConfiguration EncryptionConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfiguration">MskChannelEncryptionConfiguration</a>

Encryption configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_channel#encryption_configuration MskChannel#encryption_configuration}

---

##### `IcebergDestinationConfiguration`<sup>Optional</sup> <a name="IcebergDestinationConfiguration" id="@cdktn/provider-awscc.mskChannel.MskChannelConfig.property.icebergDestinationConfiguration"></a>

```csharp
public MskChannelIcebergDestinationConfiguration IcebergDestinationConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfiguration">MskChannelIcebergDestinationConfiguration</a>

Iceberg destination configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_channel#iceberg_destination_configuration MskChannel#iceberg_destination_configuration}

---

##### `LoggingInfo`<sup>Optional</sup> <a name="LoggingInfo" id="@cdktn/provider-awscc.mskChannel.MskChannelConfig.property.loggingInfo"></a>

```csharp
public MskChannelLoggingInfo LoggingInfo { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfo">MskChannelLoggingInfo</a>

Log configuration details for Channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_channel#logging_info MskChannel#logging_info}

---

##### `S3DestinationConfiguration`<sup>Optional</sup> <a name="S3DestinationConfiguration" id="@cdktn/provider-awscc.mskChannel.MskChannelConfig.property.s3DestinationConfiguration"></a>

```csharp
public MskChannelS3DestinationConfiguration S3DestinationConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfiguration">MskChannelS3DestinationConfiguration</a>

S3 destination configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_channel#s3_destination_configuration MskChannel#s3_destination_configuration}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.mskChannel.MskChannelConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Tags attached to the channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_channel#tags MskChannel#tags}

---

### MskChannelEncryptionConfiguration <a name="MskChannelEncryptionConfiguration" id="@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MskChannelEncryptionConfiguration {
    string KmsKeyArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfiguration.property.kmsKeyArn">KmsKeyArn</a></code> | <code>string</code> | The ARN of the KMS key for encryption. |

---

##### `KmsKeyArn`<sup>Optional</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfiguration.property.kmsKeyArn"></a>

```csharp
public string KmsKeyArn { get; set; }
```

- *Type:* string

The ARN of the KMS key for encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_channel#kms_key_arn MskChannel#kms_key_arn}

---

### MskChannelIcebergDestinationConfiguration <a name="MskChannelIcebergDestinationConfiguration" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MskChannelIcebergDestinationConfiguration {
    bool|IResolvable AppendOnly = null,
    MskChannelIcebergDestinationConfigurationCatalog Catalog = null,
    string CompressionType = null,
    double DataFreshnessInSeconds = null,
    MskChannelIcebergDestinationConfigurationDeadLetterQueueS3 DeadLetterQueueS3 = null,
    IResolvable|MskChannelIcebergDestinationConfigurationDestinationTableListStruct[] DestinationTableList = null,
    MskChannelIcebergDestinationConfigurationSchemaEvolution SchemaEvolution = null,
    string ServiceExecutionRoleArn = null,
    MskChannelIcebergDestinationConfigurationTableCreation TableCreation = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfiguration.property.appendOnly">AppendOnly</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Append only mode. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfiguration.property.catalog">Catalog</a></code> | <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalog">MskChannelIcebergDestinationConfigurationCatalog</a></code> | Catalog configuration of the destination. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfiguration.property.compressionType">CompressionType</a></code> | <code>string</code> | Compression codec for Iceberg table data files. Defaults to ZSTD. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfiguration.property.dataFreshnessInSeconds">DataFreshnessInSeconds</a></code> | <code>double</code> | Data freshness in seconds. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfiguration.property.deadLetterQueueS3">DeadLetterQueueS3</a></code> | <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3">MskChannelIcebergDestinationConfigurationDeadLetterQueueS3</a></code> | Dead letter queue S3 configuration of the destination. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfiguration.property.destinationTableList">DestinationTableList</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStruct">MskChannelIcebergDestinationConfigurationDestinationTableListStruct</a>[]</code> | List of destination tables. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfiguration.property.schemaEvolution">SchemaEvolution</a></code> | <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolution">MskChannelIcebergDestinationConfigurationSchemaEvolution</a></code> | Schema evolution configuration of the destination. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfiguration.property.serviceExecutionRoleArn">ServiceExecutionRoleArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of an IAM role used by MSK to access the table. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfiguration.property.tableCreation">TableCreation</a></code> | <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreation">MskChannelIcebergDestinationConfigurationTableCreation</a></code> | Table creation configuration of the destination. |

---

##### `AppendOnly`<sup>Optional</sup> <a name="AppendOnly" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfiguration.property.appendOnly"></a>

```csharp
public bool|IResolvable AppendOnly { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Append only mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_channel#append_only MskChannel#append_only}

---

##### `Catalog`<sup>Optional</sup> <a name="Catalog" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfiguration.property.catalog"></a>

```csharp
public MskChannelIcebergDestinationConfigurationCatalog Catalog { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalog">MskChannelIcebergDestinationConfigurationCatalog</a>

Catalog configuration of the destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_channel#catalog MskChannel#catalog}

---

##### `CompressionType`<sup>Optional</sup> <a name="CompressionType" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfiguration.property.compressionType"></a>

```csharp
public string CompressionType { get; set; }
```

- *Type:* string

Compression codec for Iceberg table data files. Defaults to ZSTD.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_channel#compression_type MskChannel#compression_type}

---

##### `DataFreshnessInSeconds`<sup>Optional</sup> <a name="DataFreshnessInSeconds" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfiguration.property.dataFreshnessInSeconds"></a>

```csharp
public double DataFreshnessInSeconds { get; set; }
```

- *Type:* double

Data freshness in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_channel#data_freshness_in_seconds MskChannel#data_freshness_in_seconds}

---

##### `DeadLetterQueueS3`<sup>Optional</sup> <a name="DeadLetterQueueS3" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfiguration.property.deadLetterQueueS3"></a>

```csharp
public MskChannelIcebergDestinationConfigurationDeadLetterQueueS3 DeadLetterQueueS3 { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3">MskChannelIcebergDestinationConfigurationDeadLetterQueueS3</a>

Dead letter queue S3 configuration of the destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_channel#dead_letter_queue_s3 MskChannel#dead_letter_queue_s3}

---

##### `DestinationTableList`<sup>Optional</sup> <a name="DestinationTableList" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfiguration.property.destinationTableList"></a>

```csharp
public IResolvable|MskChannelIcebergDestinationConfigurationDestinationTableListStruct[] DestinationTableList { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStruct">MskChannelIcebergDestinationConfigurationDestinationTableListStruct</a>[]

List of destination tables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_channel#destination_table_list MskChannel#destination_table_list}

---

##### `SchemaEvolution`<sup>Optional</sup> <a name="SchemaEvolution" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfiguration.property.schemaEvolution"></a>

```csharp
public MskChannelIcebergDestinationConfigurationSchemaEvolution SchemaEvolution { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolution">MskChannelIcebergDestinationConfigurationSchemaEvolution</a>

Schema evolution configuration of the destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_channel#schema_evolution MskChannel#schema_evolution}

---

##### `ServiceExecutionRoleArn`<sup>Optional</sup> <a name="ServiceExecutionRoleArn" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfiguration.property.serviceExecutionRoleArn"></a>

```csharp
public string ServiceExecutionRoleArn { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) of an IAM role used by MSK to access the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_channel#service_execution_role_arn MskChannel#service_execution_role_arn}

---

##### `TableCreation`<sup>Optional</sup> <a name="TableCreation" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfiguration.property.tableCreation"></a>

```csharp
public MskChannelIcebergDestinationConfigurationTableCreation TableCreation { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreation">MskChannelIcebergDestinationConfigurationTableCreation</a>

Table creation configuration of the destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_channel#table_creation MskChannel#table_creation}

---

### MskChannelIcebergDestinationConfigurationCatalog <a name="MskChannelIcebergDestinationConfigurationCatalog" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalog"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalog.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MskChannelIcebergDestinationConfigurationCatalog {
    string CatalogArn = null,
    string WarehouseLocation = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalog.property.catalogArn">CatalogArn</a></code> | <code>string</code> | The ARN of the catalog. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalog.property.warehouseLocation">WarehouseLocation</a></code> | <code>string</code> | The warehouse location. |

---

##### `CatalogArn`<sup>Optional</sup> <a name="CatalogArn" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalog.property.catalogArn"></a>

```csharp
public string CatalogArn { get; set; }
```

- *Type:* string

The ARN of the catalog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_channel#catalog_arn MskChannel#catalog_arn}

---

##### `WarehouseLocation`<sup>Optional</sup> <a name="WarehouseLocation" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalog.property.warehouseLocation"></a>

```csharp
public string WarehouseLocation { get; set; }
```

- *Type:* string

The warehouse location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_channel#warehouse_location MskChannel#warehouse_location}

---

### MskChannelIcebergDestinationConfigurationDeadLetterQueueS3 <a name="MskChannelIcebergDestinationConfigurationDeadLetterQueueS3" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MskChannelIcebergDestinationConfigurationDeadLetterQueueS3 {
    string BucketArn = null,
    string ErrorOutputPrefix = null,
    string ExpectedBucketOwner = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3.property.bucketArn">BucketArn</a></code> | <code>string</code> | The ARN of the S3 bucket. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3.property.errorOutputPrefix">ErrorOutputPrefix</a></code> | <code>string</code> | The error output prefix. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3.property.expectedBucketOwner">ExpectedBucketOwner</a></code> | <code>string</code> | Optional 12-digit AWS account ID expected to own the dead-letter S3 bucket. |

---

##### `BucketArn`<sup>Optional</sup> <a name="BucketArn" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3.property.bucketArn"></a>

```csharp
public string BucketArn { get; set; }
```

- *Type:* string

The ARN of the S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_channel#bucket_arn MskChannel#bucket_arn}

---

##### `ErrorOutputPrefix`<sup>Optional</sup> <a name="ErrorOutputPrefix" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3.property.errorOutputPrefix"></a>

```csharp
public string ErrorOutputPrefix { get; set; }
```

- *Type:* string

The error output prefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_channel#error_output_prefix MskChannel#error_output_prefix}

---

##### `ExpectedBucketOwner`<sup>Optional</sup> <a name="ExpectedBucketOwner" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3.property.expectedBucketOwner"></a>

```csharp
public string ExpectedBucketOwner { get; set; }
```

- *Type:* string

Optional 12-digit AWS account ID expected to own the dead-letter S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_channel#expected_bucket_owner MskChannel#expected_bucket_owner}

---

### MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpec <a name="MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpec" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpec.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpec {
    string PartitionStrategy = null,
    IResolvable|MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStruct[] SourceList = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpec.property.partitionStrategy">PartitionStrategy</a></code> | <code>string</code> | Partition strategy for MSK channel. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpec.property.sourceList">SourceList</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStruct">MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStruct</a>[]</code> | Source list. |

---

##### `PartitionStrategy`<sup>Optional</sup> <a name="PartitionStrategy" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpec.property.partitionStrategy"></a>

```csharp
public string PartitionStrategy { get; set; }
```

- *Type:* string

Partition strategy for MSK channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_channel#partition_strategy MskChannel#partition_strategy}

---

##### `SourceList`<sup>Optional</sup> <a name="SourceList" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpec.property.sourceList"></a>

```csharp
public IResolvable|MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStruct[] SourceList { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStruct">MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStruct</a>[]

Source list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_channel#source_list MskChannel#source_list}

---

### MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStruct <a name="MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStruct" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStruct.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStruct {
    string SourceName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStruct.property.sourceName">SourceName</a></code> | <code>string</code> | Source name. |

---

##### `SourceName`<sup>Optional</sup> <a name="SourceName" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStruct.property.sourceName"></a>

```csharp
public string SourceName { get; set; }
```

- *Type:* string

Source name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_channel#source_name MskChannel#source_name}

---

### MskChannelIcebergDestinationConfigurationDestinationTableListStruct <a name="MskChannelIcebergDestinationConfigurationDestinationTableListStruct" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStruct.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MskChannelIcebergDestinationConfigurationDestinationTableListStruct {
    string DestinationDatabaseName = null,
    string DestinationTableName = null,
    MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpec PartitionSpec = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStruct.property.destinationDatabaseName">DestinationDatabaseName</a></code> | <code>string</code> | The destination database name. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStruct.property.destinationTableName">DestinationTableName</a></code> | <code>string</code> | The destination table name. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStruct.property.partitionSpec">PartitionSpec</a></code> | <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpec">MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpec</a></code> | Partition specification. |

---

##### `DestinationDatabaseName`<sup>Optional</sup> <a name="DestinationDatabaseName" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStruct.property.destinationDatabaseName"></a>

```csharp
public string DestinationDatabaseName { get; set; }
```

- *Type:* string

The destination database name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_channel#destination_database_name MskChannel#destination_database_name}

---

##### `DestinationTableName`<sup>Optional</sup> <a name="DestinationTableName" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStruct.property.destinationTableName"></a>

```csharp
public string DestinationTableName { get; set; }
```

- *Type:* string

The destination table name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_channel#destination_table_name MskChannel#destination_table_name}

---

##### `PartitionSpec`<sup>Optional</sup> <a name="PartitionSpec" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStruct.property.partitionSpec"></a>

```csharp
public MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpec PartitionSpec { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpec">MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpec</a>

Partition specification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_channel#partition_spec MskChannel#partition_spec}

---

### MskChannelIcebergDestinationConfigurationSchemaEvolution <a name="MskChannelIcebergDestinationConfigurationSchemaEvolution" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolution"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolution.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MskChannelIcebergDestinationConfigurationSchemaEvolution {
    bool|IResolvable EnableSchemaEvolution = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolution.property.enableSchemaEvolution">EnableSchemaEvolution</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether schema evolution is enabled. |

---

##### `EnableSchemaEvolution`<sup>Optional</sup> <a name="EnableSchemaEvolution" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolution.property.enableSchemaEvolution"></a>

```csharp
public bool|IResolvable EnableSchemaEvolution { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether schema evolution is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_channel#enable_schema_evolution MskChannel#enable_schema_evolution}

---

### MskChannelIcebergDestinationConfigurationTableCreation <a name="MskChannelIcebergDestinationConfigurationTableCreation" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreation.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MskChannelIcebergDestinationConfigurationTableCreation {
    bool|IResolvable EnableTableCreation = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreation.property.enableTableCreation">EnableTableCreation</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether table creation is enabled. |

---

##### `EnableTableCreation`<sup>Optional</sup> <a name="EnableTableCreation" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreation.property.enableTableCreation"></a>

```csharp
public bool|IResolvable EnableTableCreation { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether table creation is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_channel#enable_table_creation MskChannel#enable_table_creation}

---

### MskChannelLoggingInfo <a name="MskChannelLoggingInfo" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfo.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MskChannelLoggingInfo {
    MskChannelLoggingInfoCloudwatchLogs CloudwatchLogs = null,
    MskChannelLoggingInfoFirehose Firehose = null,
    MskChannelLoggingInfoS3 S3 = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfo.property.cloudwatchLogs">CloudwatchLogs</a></code> | <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogs">MskChannelLoggingInfoCloudwatchLogs</a></code> | CloudWatch Logs log destination details. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfo.property.firehose">Firehose</a></code> | <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehose">MskChannelLoggingInfoFirehose</a></code> | Firehose log destination details. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfo.property.s3">S3</a></code> | <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3">MskChannelLoggingInfoS3</a></code> | S3 log destination details. |

---

##### `CloudwatchLogs`<sup>Optional</sup> <a name="CloudwatchLogs" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfo.property.cloudwatchLogs"></a>

```csharp
public MskChannelLoggingInfoCloudwatchLogs CloudwatchLogs { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogs">MskChannelLoggingInfoCloudwatchLogs</a>

CloudWatch Logs log destination details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_channel#cloudwatch_logs MskChannel#cloudwatch_logs}

---

##### `Firehose`<sup>Optional</sup> <a name="Firehose" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfo.property.firehose"></a>

```csharp
public MskChannelLoggingInfoFirehose Firehose { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehose">MskChannelLoggingInfoFirehose</a>

Firehose log destination details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_channel#firehose MskChannel#firehose}

---

##### `S3`<sup>Optional</sup> <a name="S3" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfo.property.s3"></a>

```csharp
public MskChannelLoggingInfoS3 S3 { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3">MskChannelLoggingInfoS3</a>

S3 log destination details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_channel#s3 MskChannel#s3}

---

### MskChannelLoggingInfoCloudwatchLogs <a name="MskChannelLoggingInfoCloudwatchLogs" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogs.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MskChannelLoggingInfoCloudwatchLogs {
    bool|IResolvable Enabled = null,
    string LogGroup = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogs.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether CloudWatch Logs logging is enabled. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogs.property.logGroup">LogGroup</a></code> | <code>string</code> | The CloudWatch log group for log delivery. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogs.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether CloudWatch Logs logging is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_channel#enabled MskChannel#enabled}

---

##### `LogGroup`<sup>Optional</sup> <a name="LogGroup" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogs.property.logGroup"></a>

```csharp
public string LogGroup { get; set; }
```

- *Type:* string

The CloudWatch log group for log delivery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_channel#log_group MskChannel#log_group}

---

### MskChannelLoggingInfoFirehose <a name="MskChannelLoggingInfoFirehose" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehose"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehose.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MskChannelLoggingInfoFirehose {
    string DeliveryStream = null,
    bool|IResolvable Enabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehose.property.deliveryStream">DeliveryStream</a></code> | <code>string</code> | The Firehose delivery stream for log delivery. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehose.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether Firehose logging is enabled. |

---

##### `DeliveryStream`<sup>Optional</sup> <a name="DeliveryStream" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehose.property.deliveryStream"></a>

```csharp
public string DeliveryStream { get; set; }
```

- *Type:* string

The Firehose delivery stream for log delivery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_channel#delivery_stream MskChannel#delivery_stream}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehose.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether Firehose logging is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_channel#enabled MskChannel#enabled}

---

### MskChannelLoggingInfoS3 <a name="MskChannelLoggingInfoS3" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MskChannelLoggingInfoS3 {
    string Bucket = null,
    bool|IResolvable Enabled = null,
    string Prefix = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3.property.bucket">Bucket</a></code> | <code>string</code> | The name of the S3 bucket for log delivery. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether S3 logging is enabled. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3.property.prefix">Prefix</a></code> | <code>string</code> | The S3 prefix for log delivery. |

---

##### `Bucket`<sup>Optional</sup> <a name="Bucket" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3.property.bucket"></a>

```csharp
public string Bucket { get; set; }
```

- *Type:* string

The name of the S3 bucket for log delivery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_channel#bucket MskChannel#bucket}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether S3 logging is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_channel#enabled MskChannel#enabled}

---

##### `Prefix`<sup>Optional</sup> <a name="Prefix" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3.property.prefix"></a>

```csharp
public string Prefix { get; set; }
```

- *Type:* string

The S3 prefix for log delivery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_channel#prefix MskChannel#prefix}

---

### MskChannelS3DestinationConfiguration <a name="MskChannelS3DestinationConfiguration" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MskChannelS3DestinationConfiguration {
    double DataFreshnessInSeconds = null,
    MskChannelS3DestinationConfigurationDeadLetterQueueS3 DeadLetterQueueS3 = null,
    string ServiceExecutionRoleArn = null,
    MskChannelS3DestinationConfigurationStorage Storage = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfiguration.property.dataFreshnessInSeconds">DataFreshnessInSeconds</a></code> | <code>double</code> | Data freshness in seconds. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfiguration.property.deadLetterQueueS3">DeadLetterQueueS3</a></code> | <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3">MskChannelS3DestinationConfigurationDeadLetterQueueS3</a></code> | Dead letter queue S3 configuration of the destination. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfiguration.property.serviceExecutionRoleArn">ServiceExecutionRoleArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of an IAM role used by MSK to access S3. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfiguration.property.storage">Storage</a></code> | <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorage">MskChannelS3DestinationConfigurationStorage</a></code> | S3 storage configuration. |

---

##### `DataFreshnessInSeconds`<sup>Optional</sup> <a name="DataFreshnessInSeconds" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfiguration.property.dataFreshnessInSeconds"></a>

```csharp
public double DataFreshnessInSeconds { get; set; }
```

- *Type:* double

Data freshness in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_channel#data_freshness_in_seconds MskChannel#data_freshness_in_seconds}

---

##### `DeadLetterQueueS3`<sup>Optional</sup> <a name="DeadLetterQueueS3" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfiguration.property.deadLetterQueueS3"></a>

```csharp
public MskChannelS3DestinationConfigurationDeadLetterQueueS3 DeadLetterQueueS3 { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3">MskChannelS3DestinationConfigurationDeadLetterQueueS3</a>

Dead letter queue S3 configuration of the destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_channel#dead_letter_queue_s3 MskChannel#dead_letter_queue_s3}

---

##### `ServiceExecutionRoleArn`<sup>Optional</sup> <a name="ServiceExecutionRoleArn" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfiguration.property.serviceExecutionRoleArn"></a>

```csharp
public string ServiceExecutionRoleArn { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) of an IAM role used by MSK to access S3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_channel#service_execution_role_arn MskChannel#service_execution_role_arn}

---

##### `Storage`<sup>Optional</sup> <a name="Storage" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfiguration.property.storage"></a>

```csharp
public MskChannelS3DestinationConfigurationStorage Storage { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorage">MskChannelS3DestinationConfigurationStorage</a>

S3 storage configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_channel#storage MskChannel#storage}

---

### MskChannelS3DestinationConfigurationDeadLetterQueueS3 <a name="MskChannelS3DestinationConfigurationDeadLetterQueueS3" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MskChannelS3DestinationConfigurationDeadLetterQueueS3 {
    string BucketArn = null,
    string ErrorOutputPrefix = null,
    string ExpectedBucketOwner = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3.property.bucketArn">BucketArn</a></code> | <code>string</code> | The ARN of the S3 bucket. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3.property.errorOutputPrefix">ErrorOutputPrefix</a></code> | <code>string</code> | The error output prefix. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3.property.expectedBucketOwner">ExpectedBucketOwner</a></code> | <code>string</code> | Optional 12-digit AWS account ID expected to own the dead-letter S3 bucket. |

---

##### `BucketArn`<sup>Optional</sup> <a name="BucketArn" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3.property.bucketArn"></a>

```csharp
public string BucketArn { get; set; }
```

- *Type:* string

The ARN of the S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_channel#bucket_arn MskChannel#bucket_arn}

---

##### `ErrorOutputPrefix`<sup>Optional</sup> <a name="ErrorOutputPrefix" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3.property.errorOutputPrefix"></a>

```csharp
public string ErrorOutputPrefix { get; set; }
```

- *Type:* string

The error output prefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_channel#error_output_prefix MskChannel#error_output_prefix}

---

##### `ExpectedBucketOwner`<sup>Optional</sup> <a name="ExpectedBucketOwner" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3.property.expectedBucketOwner"></a>

```csharp
public string ExpectedBucketOwner { get; set; }
```

- *Type:* string

Optional 12-digit AWS account ID expected to own the dead-letter S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_channel#expected_bucket_owner MskChannel#expected_bucket_owner}

---

### MskChannelS3DestinationConfigurationStorage <a name="MskChannelS3DestinationConfigurationStorage" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorage.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MskChannelS3DestinationConfigurationStorage {
    string BucketArn = null,
    string CompressionType = null,
    string ExpectedBucketOwner = null,
    string OutputKeyTemplate = null,
    string OutputPrefix = null,
    string StorageClass = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorage.property.bucketArn">BucketArn</a></code> | <code>string</code> | ARN of the S3 bucket. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorage.property.compressionType">CompressionType</a></code> | <code>string</code> | S3 compression type. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorage.property.expectedBucketOwner">ExpectedBucketOwner</a></code> | <code>string</code> | Optional 12-digit AWS account ID expected to own the S3 bucket. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorage.property.outputKeyTemplate">OutputKeyTemplate</a></code> | <code>string</code> | Template for S3 key for output objects, used for partitioning. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorage.property.outputPrefix">OutputPrefix</a></code> | <code>string</code> | Optional prefix for output objects. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorage.property.storageClass">StorageClass</a></code> | <code>string</code> | S3 storage class. |

---

##### `BucketArn`<sup>Optional</sup> <a name="BucketArn" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorage.property.bucketArn"></a>

```csharp
public string BucketArn { get; set; }
```

- *Type:* string

ARN of the S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_channel#bucket_arn MskChannel#bucket_arn}

---

##### `CompressionType`<sup>Optional</sup> <a name="CompressionType" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorage.property.compressionType"></a>

```csharp
public string CompressionType { get; set; }
```

- *Type:* string

S3 compression type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_channel#compression_type MskChannel#compression_type}

---

##### `ExpectedBucketOwner`<sup>Optional</sup> <a name="ExpectedBucketOwner" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorage.property.expectedBucketOwner"></a>

```csharp
public string ExpectedBucketOwner { get; set; }
```

- *Type:* string

Optional 12-digit AWS account ID expected to own the S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_channel#expected_bucket_owner MskChannel#expected_bucket_owner}

---

##### `OutputKeyTemplate`<sup>Optional</sup> <a name="OutputKeyTemplate" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorage.property.outputKeyTemplate"></a>

```csharp
public string OutputKeyTemplate { get; set; }
```

- *Type:* string

Template for S3 key for output objects, used for partitioning.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_channel#output_key_template MskChannel#output_key_template}

---

##### `OutputPrefix`<sup>Optional</sup> <a name="OutputPrefix" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorage.property.outputPrefix"></a>

```csharp
public string OutputPrefix { get; set; }
```

- *Type:* string

Optional prefix for output objects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_channel#output_prefix MskChannel#output_prefix}

---

##### `StorageClass`<sup>Optional</sup> <a name="StorageClass" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorage.property.storageClass"></a>

```csharp
public string StorageClass { get; set; }
```

- *Type:* string

S3 storage class.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_channel#storage_class MskChannel#storage_class}

---

### MskChannelStateInfo <a name="MskChannelStateInfo" id="@cdktn/provider-awscc.mskChannel.MskChannelStateInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskChannel.MskChannelStateInfo.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MskChannelStateInfo {

};
```


### MskChannelTopicConfigurationListRecordConverter <a name="MskChannelTopicConfigurationListRecordConverter" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverter.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MskChannelTopicConfigurationListRecordConverter {
    string ValueConverter
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverter.property.valueConverter">ValueConverter</a></code> | <code>string</code> | Value converter for topic data. |

---

##### `ValueConverter`<sup>Required</sup> <a name="ValueConverter" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverter.property.valueConverter"></a>

```csharp
public string ValueConverter { get; set; }
```

- *Type:* string

Value converter for topic data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_channel#value_converter MskChannel#value_converter}

---

### MskChannelTopicConfigurationListRecordSchema <a name="MskChannelTopicConfigurationListRecordSchema" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchema"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchema.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MskChannelTopicConfigurationListRecordSchema {
    string GsrArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchema.property.gsrArn">GsrArn</a></code> | <code>string</code> | ARN of Glue Schema Registry resource used for table schema. |

---

##### `GsrArn`<sup>Optional</sup> <a name="GsrArn" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchema.property.gsrArn"></a>

```csharp
public string GsrArn { get; set; }
```

- *Type:* string

ARN of Glue Schema Registry resource used for table schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_channel#gsr_arn MskChannel#gsr_arn}

---

### MskChannelTopicConfigurationListStruct <a name="MskChannelTopicConfigurationListStruct" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStruct.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MskChannelTopicConfigurationListStruct {
    MskChannelTopicConfigurationListRecordConverter RecordConverter,
    string TopicArn,
    MskChannelTopicConfigurationListRecordSchema RecordSchema = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStruct.property.recordConverter">RecordConverter</a></code> | <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverter">MskChannelTopicConfigurationListRecordConverter</a></code> | Record converter configuration for a topic. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStruct.property.topicArn">TopicArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) that uniquely identifies the topic. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStruct.property.recordSchema">RecordSchema</a></code> | <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchema">MskChannelTopicConfigurationListRecordSchema</a></code> | Record schema configuration for a topic. |

---

##### `RecordConverter`<sup>Required</sup> <a name="RecordConverter" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStruct.property.recordConverter"></a>

```csharp
public MskChannelTopicConfigurationListRecordConverter RecordConverter { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverter">MskChannelTopicConfigurationListRecordConverter</a>

Record converter configuration for a topic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_channel#record_converter MskChannel#record_converter}

---

##### `TopicArn`<sup>Required</sup> <a name="TopicArn" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStruct.property.topicArn"></a>

```csharp
public string TopicArn { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) that uniquely identifies the topic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_channel#topic_arn MskChannel#topic_arn}

---

##### `RecordSchema`<sup>Optional</sup> <a name="RecordSchema" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStruct.property.recordSchema"></a>

```csharp
public MskChannelTopicConfigurationListRecordSchema RecordSchema { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchema">MskChannelTopicConfigurationListRecordSchema</a>

Record schema configuration for a topic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_channel#record_schema MskChannel#record_schema}

---

## Classes <a name="Classes" id="Classes"></a>

### MskChannelEncryptionConfigurationOutputReference <a name="MskChannelEncryptionConfigurationOutputReference" id="@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MskChannelEncryptionConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfigurationOutputReference.resetKmsKeyArn">ResetKmsKeyArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKmsKeyArn` <a name="ResetKmsKeyArn" id="@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfigurationOutputReference.resetKmsKeyArn"></a>

```csharp
private void ResetKmsKeyArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfigurationOutputReference.property.kmsKeyArnInput">KmsKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfigurationOutputReference.property.kmsKeyArn">KmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfiguration">MskChannelEncryptionConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KmsKeyArnInput`<sup>Optional</sup> <a name="KmsKeyArnInput" id="@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfigurationOutputReference.property.kmsKeyArnInput"></a>

```csharp
public string KmsKeyArnInput { get; }
```

- *Type:* string

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfigurationOutputReference.property.kmsKeyArn"></a>

```csharp
public string KmsKeyArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MskChannelEncryptionConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfiguration">MskChannelEncryptionConfiguration</a>

---


### MskChannelIcebergDestinationConfigurationCatalogOutputReference <a name="MskChannelIcebergDestinationConfigurationCatalogOutputReference" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MskChannelIcebergDestinationConfigurationCatalogOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.resetCatalogArn">ResetCatalogArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.resetWarehouseLocation">ResetWarehouseLocation</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCatalogArn` <a name="ResetCatalogArn" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.resetCatalogArn"></a>

```csharp
private void ResetCatalogArn()
```

##### `ResetWarehouseLocation` <a name="ResetWarehouseLocation" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.resetWarehouseLocation"></a>

```csharp
private void ResetWarehouseLocation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.property.catalogArnInput">CatalogArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.property.warehouseLocationInput">WarehouseLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.property.catalogArn">CatalogArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.property.warehouseLocation">WarehouseLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalog">MskChannelIcebergDestinationConfigurationCatalog</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CatalogArnInput`<sup>Optional</sup> <a name="CatalogArnInput" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.property.catalogArnInput"></a>

```csharp
public string CatalogArnInput { get; }
```

- *Type:* string

---

##### `WarehouseLocationInput`<sup>Optional</sup> <a name="WarehouseLocationInput" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.property.warehouseLocationInput"></a>

```csharp
public string WarehouseLocationInput { get; }
```

- *Type:* string

---

##### `CatalogArn`<sup>Required</sup> <a name="CatalogArn" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.property.catalogArn"></a>

```csharp
public string CatalogArn { get; }
```

- *Type:* string

---

##### `WarehouseLocation`<sup>Required</sup> <a name="WarehouseLocation" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.property.warehouseLocation"></a>

```csharp
public string WarehouseLocation { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MskChannelIcebergDestinationConfigurationCatalog InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalog">MskChannelIcebergDestinationConfigurationCatalog</a>

---


### MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference <a name="MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.resetBucketArn">ResetBucketArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.resetErrorOutputPrefix">ResetErrorOutputPrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.resetExpectedBucketOwner">ResetExpectedBucketOwner</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBucketArn` <a name="ResetBucketArn" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.resetBucketArn"></a>

```csharp
private void ResetBucketArn()
```

##### `ResetErrorOutputPrefix` <a name="ResetErrorOutputPrefix" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.resetErrorOutputPrefix"></a>

```csharp
private void ResetErrorOutputPrefix()
```

##### `ResetExpectedBucketOwner` <a name="ResetExpectedBucketOwner" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.resetExpectedBucketOwner"></a>

```csharp
private void ResetExpectedBucketOwner()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.property.bucketArnInput">BucketArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.property.errorOutputPrefixInput">ErrorOutputPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.property.expectedBucketOwnerInput">ExpectedBucketOwnerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.property.bucketArn">BucketArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.property.errorOutputPrefix">ErrorOutputPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.property.expectedBucketOwner">ExpectedBucketOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3">MskChannelIcebergDestinationConfigurationDeadLetterQueueS3</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BucketArnInput`<sup>Optional</sup> <a name="BucketArnInput" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.property.bucketArnInput"></a>

```csharp
public string BucketArnInput { get; }
```

- *Type:* string

---

##### `ErrorOutputPrefixInput`<sup>Optional</sup> <a name="ErrorOutputPrefixInput" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.property.errorOutputPrefixInput"></a>

```csharp
public string ErrorOutputPrefixInput { get; }
```

- *Type:* string

---

##### `ExpectedBucketOwnerInput`<sup>Optional</sup> <a name="ExpectedBucketOwnerInput" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.property.expectedBucketOwnerInput"></a>

```csharp
public string ExpectedBucketOwnerInput { get; }
```

- *Type:* string

---

##### `BucketArn`<sup>Required</sup> <a name="BucketArn" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.property.bucketArn"></a>

```csharp
public string BucketArn { get; }
```

- *Type:* string

---

##### `ErrorOutputPrefix`<sup>Required</sup> <a name="ErrorOutputPrefix" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.property.errorOutputPrefix"></a>

```csharp
public string ErrorOutputPrefix { get; }
```

- *Type:* string

---

##### `ExpectedBucketOwner`<sup>Required</sup> <a name="ExpectedBucketOwner" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.property.expectedBucketOwner"></a>

```csharp
public string ExpectedBucketOwner { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.property.internalValue"></a>

```csharp
public IResolvable|MskChannelIcebergDestinationConfigurationDeadLetterQueueS3 InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3">MskChannelIcebergDestinationConfigurationDeadLetterQueueS3</a>

---


### MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference <a name="MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.putSourceList">PutSourceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.resetPartitionStrategy">ResetPartitionStrategy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.resetSourceList">ResetSourceList</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSourceList` <a name="PutSourceList" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.putSourceList"></a>

```csharp
private void PutSourceList(IResolvable|MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStruct[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.putSourceList.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStruct">MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStruct</a>[]

---

##### `ResetPartitionStrategy` <a name="ResetPartitionStrategy" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.resetPartitionStrategy"></a>

```csharp
private void ResetPartitionStrategy()
```

##### `ResetSourceList` <a name="ResetSourceList" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.resetSourceList"></a>

```csharp
private void ResetSourceList()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.property.sourceList">SourceList</a></code> | <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructList">MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.property.partitionStrategyInput">PartitionStrategyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.property.sourceListInput">SourceListInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStruct">MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStruct</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.property.partitionStrategy">PartitionStrategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpec">MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SourceList`<sup>Required</sup> <a name="SourceList" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.property.sourceList"></a>

```csharp
public MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructList SourceList { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructList">MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructList</a>

---

##### `PartitionStrategyInput`<sup>Optional</sup> <a name="PartitionStrategyInput" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.property.partitionStrategyInput"></a>

```csharp
public string PartitionStrategyInput { get; }
```

- *Type:* string

---

##### `SourceListInput`<sup>Optional</sup> <a name="SourceListInput" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.property.sourceListInput"></a>

```csharp
public IResolvable|MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStruct[] SourceListInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStruct">MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStruct</a>[]

---

##### `PartitionStrategy`<sup>Required</sup> <a name="PartitionStrategy" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.property.partitionStrategy"></a>

```csharp
public string PartitionStrategy { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpec InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpec">MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpec</a>

---


### MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructList <a name="MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructList" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructList.get"></a>

```csharp
private MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStruct">MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStruct</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructList.property.internalValue"></a>

```csharp
public IResolvable|MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStruct[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStruct">MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStruct</a>[]

---


### MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference <a name="MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.resetSourceName">ResetSourceName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSourceName` <a name="ResetSourceName" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.resetSourceName"></a>

```csharp
private void ResetSourceName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.property.sourceNameInput">SourceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.property.sourceName">SourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStruct">MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStruct</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SourceNameInput`<sup>Optional</sup> <a name="SourceNameInput" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.property.sourceNameInput"></a>

```csharp
public string SourceNameInput { get; }
```

- *Type:* string

---

##### `SourceName`<sup>Required</sup> <a name="SourceName" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.property.sourceName"></a>

```csharp
public string SourceName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStruct InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStruct">MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStruct</a>

---


### MskChannelIcebergDestinationConfigurationDestinationTableListStructList <a name="MskChannelIcebergDestinationConfigurationDestinationTableListStructList" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MskChannelIcebergDestinationConfigurationDestinationTableListStructList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructList.get"></a>

```csharp
private MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStruct">MskChannelIcebergDestinationConfigurationDestinationTableListStruct</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructList.property.internalValue"></a>

```csharp
public IResolvable|MskChannelIcebergDestinationConfigurationDestinationTableListStruct[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStruct">MskChannelIcebergDestinationConfigurationDestinationTableListStruct</a>[]

---


### MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference <a name="MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.putPartitionSpec">PutPartitionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.resetDestinationDatabaseName">ResetDestinationDatabaseName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.resetDestinationTableName">ResetDestinationTableName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.resetPartitionSpec">ResetPartitionSpec</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPartitionSpec` <a name="PutPartitionSpec" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.putPartitionSpec"></a>

```csharp
private void PutPartitionSpec(MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpec Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.putPartitionSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpec">MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpec</a>

---

##### `ResetDestinationDatabaseName` <a name="ResetDestinationDatabaseName" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.resetDestinationDatabaseName"></a>

```csharp
private void ResetDestinationDatabaseName()
```

##### `ResetDestinationTableName` <a name="ResetDestinationTableName" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.resetDestinationTableName"></a>

```csharp
private void ResetDestinationTableName()
```

##### `ResetPartitionSpec` <a name="ResetPartitionSpec" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.resetPartitionSpec"></a>

```csharp
private void ResetPartitionSpec()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.property.partitionSpec">PartitionSpec</a></code> | <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference">MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.property.destinationDatabaseNameInput">DestinationDatabaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.property.destinationTableNameInput">DestinationTableNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.property.partitionSpecInput">PartitionSpecInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpec">MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.property.destinationDatabaseName">DestinationDatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.property.destinationTableName">DestinationTableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStruct">MskChannelIcebergDestinationConfigurationDestinationTableListStruct</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PartitionSpec`<sup>Required</sup> <a name="PartitionSpec" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.property.partitionSpec"></a>

```csharp
public MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference PartitionSpec { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference">MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference</a>

---

##### `DestinationDatabaseNameInput`<sup>Optional</sup> <a name="DestinationDatabaseNameInput" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.property.destinationDatabaseNameInput"></a>

```csharp
public string DestinationDatabaseNameInput { get; }
```

- *Type:* string

---

##### `DestinationTableNameInput`<sup>Optional</sup> <a name="DestinationTableNameInput" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.property.destinationTableNameInput"></a>

```csharp
public string DestinationTableNameInput { get; }
```

- *Type:* string

---

##### `PartitionSpecInput`<sup>Optional</sup> <a name="PartitionSpecInput" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.property.partitionSpecInput"></a>

```csharp
public IResolvable|MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpec PartitionSpecInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpec">MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpec</a>

---

##### `DestinationDatabaseName`<sup>Required</sup> <a name="DestinationDatabaseName" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.property.destinationDatabaseName"></a>

```csharp
public string DestinationDatabaseName { get; }
```

- *Type:* string

---

##### `DestinationTableName`<sup>Required</sup> <a name="DestinationTableName" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.property.destinationTableName"></a>

```csharp
public string DestinationTableName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MskChannelIcebergDestinationConfigurationDestinationTableListStruct InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStruct">MskChannelIcebergDestinationConfigurationDestinationTableListStruct</a>

---


### MskChannelIcebergDestinationConfigurationOutputReference <a name="MskChannelIcebergDestinationConfigurationOutputReference" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MskChannelIcebergDestinationConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.putCatalog">PutCatalog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.putDeadLetterQueueS3">PutDeadLetterQueueS3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.putDestinationTableList">PutDestinationTableList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.putSchemaEvolution">PutSchemaEvolution</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.putTableCreation">PutTableCreation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.resetAppendOnly">ResetAppendOnly</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.resetCatalog">ResetCatalog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.resetCompressionType">ResetCompressionType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.resetDataFreshnessInSeconds">ResetDataFreshnessInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.resetDeadLetterQueueS3">ResetDeadLetterQueueS3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.resetDestinationTableList">ResetDestinationTableList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.resetSchemaEvolution">ResetSchemaEvolution</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.resetServiceExecutionRoleArn">ResetServiceExecutionRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.resetTableCreation">ResetTableCreation</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCatalog` <a name="PutCatalog" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.putCatalog"></a>

```csharp
private void PutCatalog(MskChannelIcebergDestinationConfigurationCatalog Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.putCatalog.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalog">MskChannelIcebergDestinationConfigurationCatalog</a>

---

##### `PutDeadLetterQueueS3` <a name="PutDeadLetterQueueS3" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.putDeadLetterQueueS3"></a>

```csharp
private void PutDeadLetterQueueS3(MskChannelIcebergDestinationConfigurationDeadLetterQueueS3 Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.putDeadLetterQueueS3.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3">MskChannelIcebergDestinationConfigurationDeadLetterQueueS3</a>

---

##### `PutDestinationTableList` <a name="PutDestinationTableList" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.putDestinationTableList"></a>

```csharp
private void PutDestinationTableList(IResolvable|MskChannelIcebergDestinationConfigurationDestinationTableListStruct[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.putDestinationTableList.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStruct">MskChannelIcebergDestinationConfigurationDestinationTableListStruct</a>[]

---

##### `PutSchemaEvolution` <a name="PutSchemaEvolution" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.putSchemaEvolution"></a>

```csharp
private void PutSchemaEvolution(MskChannelIcebergDestinationConfigurationSchemaEvolution Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.putSchemaEvolution.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolution">MskChannelIcebergDestinationConfigurationSchemaEvolution</a>

---

##### `PutTableCreation` <a name="PutTableCreation" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.putTableCreation"></a>

```csharp
private void PutTableCreation(MskChannelIcebergDestinationConfigurationTableCreation Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.putTableCreation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreation">MskChannelIcebergDestinationConfigurationTableCreation</a>

---

##### `ResetAppendOnly` <a name="ResetAppendOnly" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.resetAppendOnly"></a>

```csharp
private void ResetAppendOnly()
```

##### `ResetCatalog` <a name="ResetCatalog" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.resetCatalog"></a>

```csharp
private void ResetCatalog()
```

##### `ResetCompressionType` <a name="ResetCompressionType" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.resetCompressionType"></a>

```csharp
private void ResetCompressionType()
```

##### `ResetDataFreshnessInSeconds` <a name="ResetDataFreshnessInSeconds" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.resetDataFreshnessInSeconds"></a>

```csharp
private void ResetDataFreshnessInSeconds()
```

##### `ResetDeadLetterQueueS3` <a name="ResetDeadLetterQueueS3" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.resetDeadLetterQueueS3"></a>

```csharp
private void ResetDeadLetterQueueS3()
```

##### `ResetDestinationTableList` <a name="ResetDestinationTableList" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.resetDestinationTableList"></a>

```csharp
private void ResetDestinationTableList()
```

##### `ResetSchemaEvolution` <a name="ResetSchemaEvolution" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.resetSchemaEvolution"></a>

```csharp
private void ResetSchemaEvolution()
```

##### `ResetServiceExecutionRoleArn` <a name="ResetServiceExecutionRoleArn" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.resetServiceExecutionRoleArn"></a>

```csharp
private void ResetServiceExecutionRoleArn()
```

##### `ResetTableCreation` <a name="ResetTableCreation" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.resetTableCreation"></a>

```csharp
private void ResetTableCreation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.property.catalog">Catalog</a></code> | <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference">MskChannelIcebergDestinationConfigurationCatalogOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.property.deadLetterQueueS3">DeadLetterQueueS3</a></code> | <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference">MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.property.destinationTableList">DestinationTableList</a></code> | <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructList">MskChannelIcebergDestinationConfigurationDestinationTableListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.property.schemaEvolution">SchemaEvolution</a></code> | <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference">MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.property.tableCreation">TableCreation</a></code> | <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference">MskChannelIcebergDestinationConfigurationTableCreationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.property.appendOnlyInput">AppendOnlyInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.property.catalogInput">CatalogInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalog">MskChannelIcebergDestinationConfigurationCatalog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.property.compressionTypeInput">CompressionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.property.dataFreshnessInSecondsInput">DataFreshnessInSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.property.deadLetterQueueS3Input">DeadLetterQueueS3Input</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3">MskChannelIcebergDestinationConfigurationDeadLetterQueueS3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.property.destinationTableListInput">DestinationTableListInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStruct">MskChannelIcebergDestinationConfigurationDestinationTableListStruct</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.property.schemaEvolutionInput">SchemaEvolutionInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolution">MskChannelIcebergDestinationConfigurationSchemaEvolution</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.property.serviceExecutionRoleArnInput">ServiceExecutionRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.property.tableCreationInput">TableCreationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreation">MskChannelIcebergDestinationConfigurationTableCreation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.property.appendOnly">AppendOnly</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.property.compressionType">CompressionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.property.dataFreshnessInSeconds">DataFreshnessInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.property.serviceExecutionRoleArn">ServiceExecutionRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfiguration">MskChannelIcebergDestinationConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Catalog`<sup>Required</sup> <a name="Catalog" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.property.catalog"></a>

```csharp
public MskChannelIcebergDestinationConfigurationCatalogOutputReference Catalog { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference">MskChannelIcebergDestinationConfigurationCatalogOutputReference</a>

---

##### `DeadLetterQueueS3`<sup>Required</sup> <a name="DeadLetterQueueS3" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.property.deadLetterQueueS3"></a>

```csharp
public MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference DeadLetterQueueS3 { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference">MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference</a>

---

##### `DestinationTableList`<sup>Required</sup> <a name="DestinationTableList" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.property.destinationTableList"></a>

```csharp
public MskChannelIcebergDestinationConfigurationDestinationTableListStructList DestinationTableList { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructList">MskChannelIcebergDestinationConfigurationDestinationTableListStructList</a>

---

##### `SchemaEvolution`<sup>Required</sup> <a name="SchemaEvolution" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.property.schemaEvolution"></a>

```csharp
public MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference SchemaEvolution { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference">MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference</a>

---

##### `TableCreation`<sup>Required</sup> <a name="TableCreation" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.property.tableCreation"></a>

```csharp
public MskChannelIcebergDestinationConfigurationTableCreationOutputReference TableCreation { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference">MskChannelIcebergDestinationConfigurationTableCreationOutputReference</a>

---

##### `AppendOnlyInput`<sup>Optional</sup> <a name="AppendOnlyInput" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.property.appendOnlyInput"></a>

```csharp
public bool|IResolvable AppendOnlyInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `CatalogInput`<sup>Optional</sup> <a name="CatalogInput" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.property.catalogInput"></a>

```csharp
public IResolvable|MskChannelIcebergDestinationConfigurationCatalog CatalogInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalog">MskChannelIcebergDestinationConfigurationCatalog</a>

---

##### `CompressionTypeInput`<sup>Optional</sup> <a name="CompressionTypeInput" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.property.compressionTypeInput"></a>

```csharp
public string CompressionTypeInput { get; }
```

- *Type:* string

---

##### `DataFreshnessInSecondsInput`<sup>Optional</sup> <a name="DataFreshnessInSecondsInput" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.property.dataFreshnessInSecondsInput"></a>

```csharp
public double DataFreshnessInSecondsInput { get; }
```

- *Type:* double

---

##### `DeadLetterQueueS3Input`<sup>Optional</sup> <a name="DeadLetterQueueS3Input" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.property.deadLetterQueueS3Input"></a>

```csharp
public IResolvable|MskChannelIcebergDestinationConfigurationDeadLetterQueueS3 DeadLetterQueueS3Input { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3">MskChannelIcebergDestinationConfigurationDeadLetterQueueS3</a>

---

##### `DestinationTableListInput`<sup>Optional</sup> <a name="DestinationTableListInput" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.property.destinationTableListInput"></a>

```csharp
public IResolvable|MskChannelIcebergDestinationConfigurationDestinationTableListStruct[] DestinationTableListInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStruct">MskChannelIcebergDestinationConfigurationDestinationTableListStruct</a>[]

---

##### `SchemaEvolutionInput`<sup>Optional</sup> <a name="SchemaEvolutionInput" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.property.schemaEvolutionInput"></a>

```csharp
public IResolvable|MskChannelIcebergDestinationConfigurationSchemaEvolution SchemaEvolutionInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolution">MskChannelIcebergDestinationConfigurationSchemaEvolution</a>

---

##### `ServiceExecutionRoleArnInput`<sup>Optional</sup> <a name="ServiceExecutionRoleArnInput" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.property.serviceExecutionRoleArnInput"></a>

```csharp
public string ServiceExecutionRoleArnInput { get; }
```

- *Type:* string

---

##### `TableCreationInput`<sup>Optional</sup> <a name="TableCreationInput" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.property.tableCreationInput"></a>

```csharp
public IResolvable|MskChannelIcebergDestinationConfigurationTableCreation TableCreationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreation">MskChannelIcebergDestinationConfigurationTableCreation</a>

---

##### `AppendOnly`<sup>Required</sup> <a name="AppendOnly" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.property.appendOnly"></a>

```csharp
public bool|IResolvable AppendOnly { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `CompressionType`<sup>Required</sup> <a name="CompressionType" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.property.compressionType"></a>

```csharp
public string CompressionType { get; }
```

- *Type:* string

---

##### `DataFreshnessInSeconds`<sup>Required</sup> <a name="DataFreshnessInSeconds" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.property.dataFreshnessInSeconds"></a>

```csharp
public double DataFreshnessInSeconds { get; }
```

- *Type:* double

---

##### `ServiceExecutionRoleArn`<sup>Required</sup> <a name="ServiceExecutionRoleArn" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.property.serviceExecutionRoleArn"></a>

```csharp
public string ServiceExecutionRoleArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MskChannelIcebergDestinationConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfiguration">MskChannelIcebergDestinationConfiguration</a>

---


### MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference <a name="MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.resetEnableSchemaEvolution">ResetEnableSchemaEvolution</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnableSchemaEvolution` <a name="ResetEnableSchemaEvolution" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.resetEnableSchemaEvolution"></a>

```csharp
private void ResetEnableSchemaEvolution()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.property.enableSchemaEvolutionInput">EnableSchemaEvolutionInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.property.enableSchemaEvolution">EnableSchemaEvolution</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolution">MskChannelIcebergDestinationConfigurationSchemaEvolution</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnableSchemaEvolutionInput`<sup>Optional</sup> <a name="EnableSchemaEvolutionInput" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.property.enableSchemaEvolutionInput"></a>

```csharp
public bool|IResolvable EnableSchemaEvolutionInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EnableSchemaEvolution`<sup>Required</sup> <a name="EnableSchemaEvolution" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.property.enableSchemaEvolution"></a>

```csharp
public bool|IResolvable EnableSchemaEvolution { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MskChannelIcebergDestinationConfigurationSchemaEvolution InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolution">MskChannelIcebergDestinationConfigurationSchemaEvolution</a>

---


### MskChannelIcebergDestinationConfigurationTableCreationOutputReference <a name="MskChannelIcebergDestinationConfigurationTableCreationOutputReference" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MskChannelIcebergDestinationConfigurationTableCreationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference.resetEnableTableCreation">ResetEnableTableCreation</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnableTableCreation` <a name="ResetEnableTableCreation" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference.resetEnableTableCreation"></a>

```csharp
private void ResetEnableTableCreation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference.property.enableTableCreationInput">EnableTableCreationInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference.property.enableTableCreation">EnableTableCreation</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreation">MskChannelIcebergDestinationConfigurationTableCreation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnableTableCreationInput`<sup>Optional</sup> <a name="EnableTableCreationInput" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference.property.enableTableCreationInput"></a>

```csharp
public bool|IResolvable EnableTableCreationInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EnableTableCreation`<sup>Required</sup> <a name="EnableTableCreation" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference.property.enableTableCreation"></a>

```csharp
public bool|IResolvable EnableTableCreation { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MskChannelIcebergDestinationConfigurationTableCreation InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreation">MskChannelIcebergDestinationConfigurationTableCreation</a>

---


### MskChannelLoggingInfoCloudwatchLogsOutputReference <a name="MskChannelLoggingInfoCloudwatchLogsOutputReference" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MskChannelLoggingInfoCloudwatchLogsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.resetLogGroup">ResetLogGroup</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetLogGroup` <a name="ResetLogGroup" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.resetLogGroup"></a>

```csharp
private void ResetLogGroup()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.property.logGroupInput">LogGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.property.logGroup">LogGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogs">MskChannelLoggingInfoCloudwatchLogs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `LogGroupInput`<sup>Optional</sup> <a name="LogGroupInput" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.property.logGroupInput"></a>

```csharp
public string LogGroupInput { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `LogGroup`<sup>Required</sup> <a name="LogGroup" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.property.logGroup"></a>

```csharp
public string LogGroup { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MskChannelLoggingInfoCloudwatchLogs InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogs">MskChannelLoggingInfoCloudwatchLogs</a>

---


### MskChannelLoggingInfoFirehoseOutputReference <a name="MskChannelLoggingInfoFirehoseOutputReference" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MskChannelLoggingInfoFirehoseOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.resetDeliveryStream">ResetDeliveryStream</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDeliveryStream` <a name="ResetDeliveryStream" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.resetDeliveryStream"></a>

```csharp
private void ResetDeliveryStream()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.property.deliveryStreamInput">DeliveryStreamInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.property.deliveryStream">DeliveryStream</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehose">MskChannelLoggingInfoFirehose</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DeliveryStreamInput`<sup>Optional</sup> <a name="DeliveryStreamInput" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.property.deliveryStreamInput"></a>

```csharp
public string DeliveryStreamInput { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DeliveryStream`<sup>Required</sup> <a name="DeliveryStream" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.property.deliveryStream"></a>

```csharp
public string DeliveryStream { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MskChannelLoggingInfoFirehose InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehose">MskChannelLoggingInfoFirehose</a>

---


### MskChannelLoggingInfoOutputReference <a name="MskChannelLoggingInfoOutputReference" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MskChannelLoggingInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.putCloudwatchLogs">PutCloudwatchLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.putFirehose">PutFirehose</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.putS3">PutS3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.resetCloudwatchLogs">ResetCloudwatchLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.resetFirehose">ResetFirehose</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.resetS3">ResetS3</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCloudwatchLogs` <a name="PutCloudwatchLogs" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.putCloudwatchLogs"></a>

```csharp
private void PutCloudwatchLogs(MskChannelLoggingInfoCloudwatchLogs Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.putCloudwatchLogs.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogs">MskChannelLoggingInfoCloudwatchLogs</a>

---

##### `PutFirehose` <a name="PutFirehose" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.putFirehose"></a>

```csharp
private void PutFirehose(MskChannelLoggingInfoFirehose Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.putFirehose.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehose">MskChannelLoggingInfoFirehose</a>

---

##### `PutS3` <a name="PutS3" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.putS3"></a>

```csharp
private void PutS3(MskChannelLoggingInfoS3 Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.putS3.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3">MskChannelLoggingInfoS3</a>

---

##### `ResetCloudwatchLogs` <a name="ResetCloudwatchLogs" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.resetCloudwatchLogs"></a>

```csharp
private void ResetCloudwatchLogs()
```

##### `ResetFirehose` <a name="ResetFirehose" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.resetFirehose"></a>

```csharp
private void ResetFirehose()
```

##### `ResetS3` <a name="ResetS3" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.resetS3"></a>

```csharp
private void ResetS3()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.property.cloudwatchLogs">CloudwatchLogs</a></code> | <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference">MskChannelLoggingInfoCloudwatchLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.property.firehose">Firehose</a></code> | <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference">MskChannelLoggingInfoFirehoseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.property.s3">S3</a></code> | <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference">MskChannelLoggingInfoS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.property.cloudwatchLogsInput">CloudwatchLogsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogs">MskChannelLoggingInfoCloudwatchLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.property.firehoseInput">FirehoseInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehose">MskChannelLoggingInfoFirehose</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.property.s3Input">S3Input</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3">MskChannelLoggingInfoS3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfo">MskChannelLoggingInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CloudwatchLogs`<sup>Required</sup> <a name="CloudwatchLogs" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.property.cloudwatchLogs"></a>

```csharp
public MskChannelLoggingInfoCloudwatchLogsOutputReference CloudwatchLogs { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference">MskChannelLoggingInfoCloudwatchLogsOutputReference</a>

---

##### `Firehose`<sup>Required</sup> <a name="Firehose" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.property.firehose"></a>

```csharp
public MskChannelLoggingInfoFirehoseOutputReference Firehose { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference">MskChannelLoggingInfoFirehoseOutputReference</a>

---

##### `S3`<sup>Required</sup> <a name="S3" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.property.s3"></a>

```csharp
public MskChannelLoggingInfoS3OutputReference S3 { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference">MskChannelLoggingInfoS3OutputReference</a>

---

##### `CloudwatchLogsInput`<sup>Optional</sup> <a name="CloudwatchLogsInput" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.property.cloudwatchLogsInput"></a>

```csharp
public IResolvable|MskChannelLoggingInfoCloudwatchLogs CloudwatchLogsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogs">MskChannelLoggingInfoCloudwatchLogs</a>

---

##### `FirehoseInput`<sup>Optional</sup> <a name="FirehoseInput" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.property.firehoseInput"></a>

```csharp
public IResolvable|MskChannelLoggingInfoFirehose FirehoseInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehose">MskChannelLoggingInfoFirehose</a>

---

##### `S3Input`<sup>Optional</sup> <a name="S3Input" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.property.s3Input"></a>

```csharp
public IResolvable|MskChannelLoggingInfoS3 S3Input { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3">MskChannelLoggingInfoS3</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MskChannelLoggingInfo InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfo">MskChannelLoggingInfo</a>

---


### MskChannelLoggingInfoS3OutputReference <a name="MskChannelLoggingInfoS3OutputReference" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MskChannelLoggingInfoS3OutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.resetBucket">ResetBucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.resetPrefix">ResetPrefix</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBucket` <a name="ResetBucket" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.resetBucket"></a>

```csharp
private void ResetBucket()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetPrefix` <a name="ResetPrefix" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.resetPrefix"></a>

```csharp
private void ResetPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.property.bucketInput">BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.property.prefixInput">PrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.property.prefix">Prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3">MskChannelLoggingInfoS3</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.property.bucketInput"></a>

```csharp
public string BucketInput { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `PrefixInput`<sup>Optional</sup> <a name="PrefixInput" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.property.prefixInput"></a>

```csharp
public string PrefixInput { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.property.prefix"></a>

```csharp
public string Prefix { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.property.internalValue"></a>

```csharp
public IResolvable|MskChannelLoggingInfoS3 InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3">MskChannelLoggingInfoS3</a>

---


### MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference <a name="MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.resetBucketArn">ResetBucketArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.resetErrorOutputPrefix">ResetErrorOutputPrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.resetExpectedBucketOwner">ResetExpectedBucketOwner</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBucketArn` <a name="ResetBucketArn" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.resetBucketArn"></a>

```csharp
private void ResetBucketArn()
```

##### `ResetErrorOutputPrefix` <a name="ResetErrorOutputPrefix" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.resetErrorOutputPrefix"></a>

```csharp
private void ResetErrorOutputPrefix()
```

##### `ResetExpectedBucketOwner` <a name="ResetExpectedBucketOwner" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.resetExpectedBucketOwner"></a>

```csharp
private void ResetExpectedBucketOwner()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.property.bucketArnInput">BucketArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.property.errorOutputPrefixInput">ErrorOutputPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.property.expectedBucketOwnerInput">ExpectedBucketOwnerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.property.bucketArn">BucketArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.property.errorOutputPrefix">ErrorOutputPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.property.expectedBucketOwner">ExpectedBucketOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3">MskChannelS3DestinationConfigurationDeadLetterQueueS3</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BucketArnInput`<sup>Optional</sup> <a name="BucketArnInput" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.property.bucketArnInput"></a>

```csharp
public string BucketArnInput { get; }
```

- *Type:* string

---

##### `ErrorOutputPrefixInput`<sup>Optional</sup> <a name="ErrorOutputPrefixInput" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.property.errorOutputPrefixInput"></a>

```csharp
public string ErrorOutputPrefixInput { get; }
```

- *Type:* string

---

##### `ExpectedBucketOwnerInput`<sup>Optional</sup> <a name="ExpectedBucketOwnerInput" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.property.expectedBucketOwnerInput"></a>

```csharp
public string ExpectedBucketOwnerInput { get; }
```

- *Type:* string

---

##### `BucketArn`<sup>Required</sup> <a name="BucketArn" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.property.bucketArn"></a>

```csharp
public string BucketArn { get; }
```

- *Type:* string

---

##### `ErrorOutputPrefix`<sup>Required</sup> <a name="ErrorOutputPrefix" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.property.errorOutputPrefix"></a>

```csharp
public string ErrorOutputPrefix { get; }
```

- *Type:* string

---

##### `ExpectedBucketOwner`<sup>Required</sup> <a name="ExpectedBucketOwner" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.property.expectedBucketOwner"></a>

```csharp
public string ExpectedBucketOwner { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.property.internalValue"></a>

```csharp
public IResolvable|MskChannelS3DestinationConfigurationDeadLetterQueueS3 InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3">MskChannelS3DestinationConfigurationDeadLetterQueueS3</a>

---


### MskChannelS3DestinationConfigurationOutputReference <a name="MskChannelS3DestinationConfigurationOutputReference" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MskChannelS3DestinationConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.putDeadLetterQueueS3">PutDeadLetterQueueS3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.putStorage">PutStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.resetDataFreshnessInSeconds">ResetDataFreshnessInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.resetDeadLetterQueueS3">ResetDeadLetterQueueS3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.resetServiceExecutionRoleArn">ResetServiceExecutionRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.resetStorage">ResetStorage</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDeadLetterQueueS3` <a name="PutDeadLetterQueueS3" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.putDeadLetterQueueS3"></a>

```csharp
private void PutDeadLetterQueueS3(MskChannelS3DestinationConfigurationDeadLetterQueueS3 Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.putDeadLetterQueueS3.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3">MskChannelS3DestinationConfigurationDeadLetterQueueS3</a>

---

##### `PutStorage` <a name="PutStorage" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.putStorage"></a>

```csharp
private void PutStorage(MskChannelS3DestinationConfigurationStorage Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.putStorage.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorage">MskChannelS3DestinationConfigurationStorage</a>

---

##### `ResetDataFreshnessInSeconds` <a name="ResetDataFreshnessInSeconds" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.resetDataFreshnessInSeconds"></a>

```csharp
private void ResetDataFreshnessInSeconds()
```

##### `ResetDeadLetterQueueS3` <a name="ResetDeadLetterQueueS3" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.resetDeadLetterQueueS3"></a>

```csharp
private void ResetDeadLetterQueueS3()
```

##### `ResetServiceExecutionRoleArn` <a name="ResetServiceExecutionRoleArn" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.resetServiceExecutionRoleArn"></a>

```csharp
private void ResetServiceExecutionRoleArn()
```

##### `ResetStorage` <a name="ResetStorage" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.resetStorage"></a>

```csharp
private void ResetStorage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.property.deadLetterQueueS3">DeadLetterQueueS3</a></code> | <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference">MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.property.storage">Storage</a></code> | <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference">MskChannelS3DestinationConfigurationStorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.property.dataFreshnessInSecondsInput">DataFreshnessInSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.property.deadLetterQueueS3Input">DeadLetterQueueS3Input</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3">MskChannelS3DestinationConfigurationDeadLetterQueueS3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.property.serviceExecutionRoleArnInput">ServiceExecutionRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.property.storageInput">StorageInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorage">MskChannelS3DestinationConfigurationStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.property.dataFreshnessInSeconds">DataFreshnessInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.property.serviceExecutionRoleArn">ServiceExecutionRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfiguration">MskChannelS3DestinationConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DeadLetterQueueS3`<sup>Required</sup> <a name="DeadLetterQueueS3" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.property.deadLetterQueueS3"></a>

```csharp
public MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference DeadLetterQueueS3 { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference">MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference</a>

---

##### `Storage`<sup>Required</sup> <a name="Storage" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.property.storage"></a>

```csharp
public MskChannelS3DestinationConfigurationStorageOutputReference Storage { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference">MskChannelS3DestinationConfigurationStorageOutputReference</a>

---

##### `DataFreshnessInSecondsInput`<sup>Optional</sup> <a name="DataFreshnessInSecondsInput" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.property.dataFreshnessInSecondsInput"></a>

```csharp
public double DataFreshnessInSecondsInput { get; }
```

- *Type:* double

---

##### `DeadLetterQueueS3Input`<sup>Optional</sup> <a name="DeadLetterQueueS3Input" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.property.deadLetterQueueS3Input"></a>

```csharp
public IResolvable|MskChannelS3DestinationConfigurationDeadLetterQueueS3 DeadLetterQueueS3Input { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3">MskChannelS3DestinationConfigurationDeadLetterQueueS3</a>

---

##### `ServiceExecutionRoleArnInput`<sup>Optional</sup> <a name="ServiceExecutionRoleArnInput" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.property.serviceExecutionRoleArnInput"></a>

```csharp
public string ServiceExecutionRoleArnInput { get; }
```

- *Type:* string

---

##### `StorageInput`<sup>Optional</sup> <a name="StorageInput" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.property.storageInput"></a>

```csharp
public IResolvable|MskChannelS3DestinationConfigurationStorage StorageInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorage">MskChannelS3DestinationConfigurationStorage</a>

---

##### `DataFreshnessInSeconds`<sup>Required</sup> <a name="DataFreshnessInSeconds" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.property.dataFreshnessInSeconds"></a>

```csharp
public double DataFreshnessInSeconds { get; }
```

- *Type:* double

---

##### `ServiceExecutionRoleArn`<sup>Required</sup> <a name="ServiceExecutionRoleArn" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.property.serviceExecutionRoleArn"></a>

```csharp
public string ServiceExecutionRoleArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MskChannelS3DestinationConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfiguration">MskChannelS3DestinationConfiguration</a>

---


### MskChannelS3DestinationConfigurationStorageOutputReference <a name="MskChannelS3DestinationConfigurationStorageOutputReference" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MskChannelS3DestinationConfigurationStorageOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.resetBucketArn">ResetBucketArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.resetCompressionType">ResetCompressionType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.resetExpectedBucketOwner">ResetExpectedBucketOwner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.resetOutputKeyTemplate">ResetOutputKeyTemplate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.resetOutputPrefix">ResetOutputPrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.resetStorageClass">ResetStorageClass</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBucketArn` <a name="ResetBucketArn" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.resetBucketArn"></a>

```csharp
private void ResetBucketArn()
```

##### `ResetCompressionType` <a name="ResetCompressionType" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.resetCompressionType"></a>

```csharp
private void ResetCompressionType()
```

##### `ResetExpectedBucketOwner` <a name="ResetExpectedBucketOwner" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.resetExpectedBucketOwner"></a>

```csharp
private void ResetExpectedBucketOwner()
```

##### `ResetOutputKeyTemplate` <a name="ResetOutputKeyTemplate" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.resetOutputKeyTemplate"></a>

```csharp
private void ResetOutputKeyTemplate()
```

##### `ResetOutputPrefix` <a name="ResetOutputPrefix" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.resetOutputPrefix"></a>

```csharp
private void ResetOutputPrefix()
```

##### `ResetStorageClass` <a name="ResetStorageClass" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.resetStorageClass"></a>

```csharp
private void ResetStorageClass()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.property.bucketArnInput">BucketArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.property.compressionTypeInput">CompressionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.property.expectedBucketOwnerInput">ExpectedBucketOwnerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.property.outputKeyTemplateInput">OutputKeyTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.property.outputPrefixInput">OutputPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.property.storageClassInput">StorageClassInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.property.bucketArn">BucketArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.property.compressionType">CompressionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.property.expectedBucketOwner">ExpectedBucketOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.property.outputKeyTemplate">OutputKeyTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.property.outputPrefix">OutputPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.property.storageClass">StorageClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorage">MskChannelS3DestinationConfigurationStorage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BucketArnInput`<sup>Optional</sup> <a name="BucketArnInput" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.property.bucketArnInput"></a>

```csharp
public string BucketArnInput { get; }
```

- *Type:* string

---

##### `CompressionTypeInput`<sup>Optional</sup> <a name="CompressionTypeInput" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.property.compressionTypeInput"></a>

```csharp
public string CompressionTypeInput { get; }
```

- *Type:* string

---

##### `ExpectedBucketOwnerInput`<sup>Optional</sup> <a name="ExpectedBucketOwnerInput" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.property.expectedBucketOwnerInput"></a>

```csharp
public string ExpectedBucketOwnerInput { get; }
```

- *Type:* string

---

##### `OutputKeyTemplateInput`<sup>Optional</sup> <a name="OutputKeyTemplateInput" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.property.outputKeyTemplateInput"></a>

```csharp
public string OutputKeyTemplateInput { get; }
```

- *Type:* string

---

##### `OutputPrefixInput`<sup>Optional</sup> <a name="OutputPrefixInput" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.property.outputPrefixInput"></a>

```csharp
public string OutputPrefixInput { get; }
```

- *Type:* string

---

##### `StorageClassInput`<sup>Optional</sup> <a name="StorageClassInput" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.property.storageClassInput"></a>

```csharp
public string StorageClassInput { get; }
```

- *Type:* string

---

##### `BucketArn`<sup>Required</sup> <a name="BucketArn" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.property.bucketArn"></a>

```csharp
public string BucketArn { get; }
```

- *Type:* string

---

##### `CompressionType`<sup>Required</sup> <a name="CompressionType" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.property.compressionType"></a>

```csharp
public string CompressionType { get; }
```

- *Type:* string

---

##### `ExpectedBucketOwner`<sup>Required</sup> <a name="ExpectedBucketOwner" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.property.expectedBucketOwner"></a>

```csharp
public string ExpectedBucketOwner { get; }
```

- *Type:* string

---

##### `OutputKeyTemplate`<sup>Required</sup> <a name="OutputKeyTemplate" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.property.outputKeyTemplate"></a>

```csharp
public string OutputKeyTemplate { get; }
```

- *Type:* string

---

##### `OutputPrefix`<sup>Required</sup> <a name="OutputPrefix" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.property.outputPrefix"></a>

```csharp
public string OutputPrefix { get; }
```

- *Type:* string

---

##### `StorageClass`<sup>Required</sup> <a name="StorageClass" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.property.storageClass"></a>

```csharp
public string StorageClass { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MskChannelS3DestinationConfigurationStorage InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorage">MskChannelS3DestinationConfigurationStorage</a>

---


### MskChannelStateInfoOutputReference <a name="MskChannelStateInfoOutputReference" id="@cdktn/provider-awscc.mskChannel.MskChannelStateInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskChannel.MskChannelStateInfoOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MskChannelStateInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelStateInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelStateInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mskChannel.MskChannelStateInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelStateInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelStateInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelStateInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelStateInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelStateInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelStateInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelStateInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelStateInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelStateInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelStateInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelStateInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelStateInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelStateInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelStateInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mskChannel.MskChannelStateInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelStateInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelStateInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelStateInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelStateInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelStateInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelStateInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelStateInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelStateInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelStateInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelStateInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelStateInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelStateInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelStateInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelStateInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelStateInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelStateInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelStateInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelStateInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelStateInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mskChannel.MskChannelStateInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mskChannel.MskChannelStateInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mskChannel.MskChannelStateInfoOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mskChannel.MskChannelStateInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelStateInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelStateInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelStateInfoOutputReference.property.code">Code</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelStateInfoOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelStateInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelStateInfo">MskChannelStateInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mskChannel.MskChannelStateInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mskChannel.MskChannelStateInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktn/provider-awscc.mskChannel.MskChannelStateInfoOutputReference.property.code"></a>

```csharp
public string Code { get; }
```

- *Type:* string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktn/provider-awscc.mskChannel.MskChannelStateInfoOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mskChannel.MskChannelStateInfoOutputReference.property.internalValue"></a>

```csharp
public MskChannelStateInfo InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mskChannel.MskChannelStateInfo">MskChannelStateInfo</a>

---


### MskChannelTopicConfigurationListRecordConverterOutputReference <a name="MskChannelTopicConfigurationListRecordConverterOutputReference" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverterOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MskChannelTopicConfigurationListRecordConverterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverterOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverterOutputReference.property.valueConverterInput">ValueConverterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverterOutputReference.property.valueConverter">ValueConverter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverterOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverter">MskChannelTopicConfigurationListRecordConverter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ValueConverterInput`<sup>Optional</sup> <a name="ValueConverterInput" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverterOutputReference.property.valueConverterInput"></a>

```csharp
public string ValueConverterInput { get; }
```

- *Type:* string

---

##### `ValueConverter`<sup>Required</sup> <a name="ValueConverter" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverterOutputReference.property.valueConverter"></a>

```csharp
public string ValueConverter { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverterOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MskChannelTopicConfigurationListRecordConverter InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverter">MskChannelTopicConfigurationListRecordConverter</a>

---


### MskChannelTopicConfigurationListRecordSchemaOutputReference <a name="MskChannelTopicConfigurationListRecordSchemaOutputReference" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MskChannelTopicConfigurationListRecordSchemaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference.resetGsrArn">ResetGsrArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetGsrArn` <a name="ResetGsrArn" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference.resetGsrArn"></a>

```csharp
private void ResetGsrArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference.property.gsrArnInput">GsrArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference.property.gsrArn">GsrArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchema">MskChannelTopicConfigurationListRecordSchema</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GsrArnInput`<sup>Optional</sup> <a name="GsrArnInput" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference.property.gsrArnInput"></a>

```csharp
public string GsrArnInput { get; }
```

- *Type:* string

---

##### `GsrArn`<sup>Required</sup> <a name="GsrArn" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference.property.gsrArn"></a>

```csharp
public string GsrArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MskChannelTopicConfigurationListRecordSchema InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchema">MskChannelTopicConfigurationListRecordSchema</a>

---


### MskChannelTopicConfigurationListStructList <a name="MskChannelTopicConfigurationListStructList" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MskChannelTopicConfigurationListStructList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructList.get"></a>

```csharp
private MskChannelTopicConfigurationListStructOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStruct">MskChannelTopicConfigurationListStruct</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructList.property.internalValue"></a>

```csharp
public IResolvable|MskChannelTopicConfigurationListStruct[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStruct">MskChannelTopicConfigurationListStruct</a>[]

---


### MskChannelTopicConfigurationListStructOutputReference <a name="MskChannelTopicConfigurationListStructOutputReference" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MskChannelTopicConfigurationListStructOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.putRecordConverter">PutRecordConverter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.putRecordSchema">PutRecordSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.resetRecordSchema">ResetRecordSchema</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRecordConverter` <a name="PutRecordConverter" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.putRecordConverter"></a>

```csharp
private void PutRecordConverter(MskChannelTopicConfigurationListRecordConverter Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.putRecordConverter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverter">MskChannelTopicConfigurationListRecordConverter</a>

---

##### `PutRecordSchema` <a name="PutRecordSchema" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.putRecordSchema"></a>

```csharp
private void PutRecordSchema(MskChannelTopicConfigurationListRecordSchema Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.putRecordSchema.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchema">MskChannelTopicConfigurationListRecordSchema</a>

---

##### `ResetRecordSchema` <a name="ResetRecordSchema" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.resetRecordSchema"></a>

```csharp
private void ResetRecordSchema()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.property.recordConverter">RecordConverter</a></code> | <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverterOutputReference">MskChannelTopicConfigurationListRecordConverterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.property.recordSchema">RecordSchema</a></code> | <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference">MskChannelTopicConfigurationListRecordSchemaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.property.recordConverterInput">RecordConverterInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverter">MskChannelTopicConfigurationListRecordConverter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.property.recordSchemaInput">RecordSchemaInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchema">MskChannelTopicConfigurationListRecordSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.property.topicArnInput">TopicArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.property.topicArn">TopicArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStruct">MskChannelTopicConfigurationListStruct</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RecordConverter`<sup>Required</sup> <a name="RecordConverter" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.property.recordConverter"></a>

```csharp
public MskChannelTopicConfigurationListRecordConverterOutputReference RecordConverter { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverterOutputReference">MskChannelTopicConfigurationListRecordConverterOutputReference</a>

---

##### `RecordSchema`<sup>Required</sup> <a name="RecordSchema" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.property.recordSchema"></a>

```csharp
public MskChannelTopicConfigurationListRecordSchemaOutputReference RecordSchema { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference">MskChannelTopicConfigurationListRecordSchemaOutputReference</a>

---

##### `RecordConverterInput`<sup>Optional</sup> <a name="RecordConverterInput" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.property.recordConverterInput"></a>

```csharp
public IResolvable|MskChannelTopicConfigurationListRecordConverter RecordConverterInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverter">MskChannelTopicConfigurationListRecordConverter</a>

---

##### `RecordSchemaInput`<sup>Optional</sup> <a name="RecordSchemaInput" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.property.recordSchemaInput"></a>

```csharp
public IResolvable|MskChannelTopicConfigurationListRecordSchema RecordSchemaInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchema">MskChannelTopicConfigurationListRecordSchema</a>

---

##### `TopicArnInput`<sup>Optional</sup> <a name="TopicArnInput" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.property.topicArnInput"></a>

```csharp
public string TopicArnInput { get; }
```

- *Type:* string

---

##### `TopicArn`<sup>Required</sup> <a name="TopicArn" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.property.topicArn"></a>

```csharp
public string TopicArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MskChannelTopicConfigurationListStruct InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStruct">MskChannelTopicConfigurationListStruct</a>

---



