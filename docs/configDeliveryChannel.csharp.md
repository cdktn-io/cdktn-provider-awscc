# `configDeliveryChannel` Submodule <a name="`configDeliveryChannel` Submodule" id="@cdktn/provider-awscc.configDeliveryChannel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConfigDeliveryChannel <a name="ConfigDeliveryChannel" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/config_delivery_channel awscc_config_delivery_channel}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConfigDeliveryChannel(Construct Scope, string Id, ConfigDeliveryChannelConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfig">ConfigDeliveryChannelConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfig">ConfigDeliveryChannelConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.putConfigSnapshotDeliveryProperties">PutConfigSnapshotDeliveryProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.resetConfigSnapshotDeliveryProperties">ResetConfigSnapshotDeliveryProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.resetS3KeyPrefix">ResetS3KeyPrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.resetS3KmsKeyArn">ResetS3KmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.resetSnsTopicArn">ResetSnsTopicArn</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutConfigSnapshotDeliveryProperties` <a name="PutConfigSnapshotDeliveryProperties" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.putConfigSnapshotDeliveryProperties"></a>

```csharp
private void PutConfigSnapshotDeliveryProperties(ConfigDeliveryChannelConfigSnapshotDeliveryProperties Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.putConfigSnapshotDeliveryProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryProperties">ConfigDeliveryChannelConfigSnapshotDeliveryProperties</a>

---

##### `ResetConfigSnapshotDeliveryProperties` <a name="ResetConfigSnapshotDeliveryProperties" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.resetConfigSnapshotDeliveryProperties"></a>

```csharp
private void ResetConfigSnapshotDeliveryProperties()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetS3KeyPrefix` <a name="ResetS3KeyPrefix" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.resetS3KeyPrefix"></a>

```csharp
private void ResetS3KeyPrefix()
```

##### `ResetS3KmsKeyArn` <a name="ResetS3KmsKeyArn" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.resetS3KmsKeyArn"></a>

```csharp
private void ResetS3KmsKeyArn()
```

##### `ResetSnsTopicArn` <a name="ResetSnsTopicArn" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.resetSnsTopicArn"></a>

```csharp
private void ResetSnsTopicArn()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ConfigDeliveryChannel resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ConfigDeliveryChannel.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ConfigDeliveryChannel.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ConfigDeliveryChannel.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ConfigDeliveryChannel.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ConfigDeliveryChannel resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ConfigDeliveryChannel to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ConfigDeliveryChannel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/config_delivery_channel#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ConfigDeliveryChannel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.configSnapshotDeliveryProperties">ConfigSnapshotDeliveryProperties</a></code> | <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference">ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.configSnapshotDeliveryPropertiesInput">ConfigSnapshotDeliveryPropertiesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryProperties">ConfigDeliveryChannelConfigSnapshotDeliveryProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.s3BucketNameInput">S3BucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.s3KeyPrefixInput">S3KeyPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.s3KmsKeyArnInput">S3KmsKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.snsTopicArnInput">SnsTopicArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.s3BucketName">S3BucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.s3KeyPrefix">S3KeyPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.s3KmsKeyArn">S3KmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.snsTopicArn">SnsTopicArn</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ConfigSnapshotDeliveryProperties`<sup>Required</sup> <a name="ConfigSnapshotDeliveryProperties" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.configSnapshotDeliveryProperties"></a>

```csharp
public ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference ConfigSnapshotDeliveryProperties { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference">ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ConfigSnapshotDeliveryPropertiesInput`<sup>Optional</sup> <a name="ConfigSnapshotDeliveryPropertiesInput" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.configSnapshotDeliveryPropertiesInput"></a>

```csharp
public IResolvable|ConfigDeliveryChannelConfigSnapshotDeliveryProperties ConfigSnapshotDeliveryPropertiesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryProperties">ConfigDeliveryChannelConfigSnapshotDeliveryProperties</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `S3BucketNameInput`<sup>Optional</sup> <a name="S3BucketNameInput" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.s3BucketNameInput"></a>

```csharp
public string S3BucketNameInput { get; }
```

- *Type:* string

---

##### `S3KeyPrefixInput`<sup>Optional</sup> <a name="S3KeyPrefixInput" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.s3KeyPrefixInput"></a>

```csharp
public string S3KeyPrefixInput { get; }
```

- *Type:* string

---

##### `S3KmsKeyArnInput`<sup>Optional</sup> <a name="S3KmsKeyArnInput" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.s3KmsKeyArnInput"></a>

```csharp
public string S3KmsKeyArnInput { get; }
```

- *Type:* string

---

##### `SnsTopicArnInput`<sup>Optional</sup> <a name="SnsTopicArnInput" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.snsTopicArnInput"></a>

```csharp
public string SnsTopicArnInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `S3BucketName`<sup>Required</sup> <a name="S3BucketName" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.s3BucketName"></a>

```csharp
public string S3BucketName { get; }
```

- *Type:* string

---

##### `S3KeyPrefix`<sup>Required</sup> <a name="S3KeyPrefix" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.s3KeyPrefix"></a>

```csharp
public string S3KeyPrefix { get; }
```

- *Type:* string

---

##### `S3KmsKeyArn`<sup>Required</sup> <a name="S3KmsKeyArn" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.s3KmsKeyArn"></a>

```csharp
public string S3KmsKeyArn { get; }
```

- *Type:* string

---

##### `SnsTopicArn`<sup>Required</sup> <a name="SnsTopicArn" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.snsTopicArn"></a>

```csharp
public string SnsTopicArn { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ConfigDeliveryChannelConfig <a name="ConfigDeliveryChannelConfig" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConfigDeliveryChannelConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string S3BucketName,
    ConfigDeliveryChannelConfigSnapshotDeliveryProperties ConfigSnapshotDeliveryProperties = null,
    string Name = null,
    string S3KeyPrefix = null,
    string S3KmsKeyArn = null,
    string SnsTopicArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfig.property.s3BucketName">S3BucketName</a></code> | <code>string</code> | The name of the Amazon S3 bucket to which AWS Config delivers configuration snapshots and configuration history files. |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfig.property.configSnapshotDeliveryProperties">ConfigSnapshotDeliveryProperties</a></code> | <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryProperties">ConfigDeliveryChannelConfigSnapshotDeliveryProperties</a></code> | The options for how often AWS Config delivers configuration snapshots to the Amazon S3 bucket. |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfig.property.name">Name</a></code> | <code>string</code> | The name of the delivery channel. |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfig.property.s3KeyPrefix">S3KeyPrefix</a></code> | <code>string</code> | The prefix for the specified Amazon S3 bucket. |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfig.property.s3KmsKeyArn">S3KmsKeyArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the AWS Key Management Service (AWS KMS ) AWS KMS key (KMS key) used to encrypt objects delivered by AWS Config. |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfig.property.snsTopicArn">SnsTopicArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the Amazon SNS topic to which AWS Config sends notifications about configuration changes. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `S3BucketName`<sup>Required</sup> <a name="S3BucketName" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfig.property.s3BucketName"></a>

```csharp
public string S3BucketName { get; set; }
```

- *Type:* string

The name of the Amazon S3 bucket to which AWS Config delivers configuration snapshots and configuration history files.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/config_delivery_channel#s3_bucket_name ConfigDeliveryChannel#s3_bucket_name}

---

##### `ConfigSnapshotDeliveryProperties`<sup>Optional</sup> <a name="ConfigSnapshotDeliveryProperties" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfig.property.configSnapshotDeliveryProperties"></a>

```csharp
public ConfigDeliveryChannelConfigSnapshotDeliveryProperties ConfigSnapshotDeliveryProperties { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryProperties">ConfigDeliveryChannelConfigSnapshotDeliveryProperties</a>

The options for how often AWS Config delivers configuration snapshots to the Amazon S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/config_delivery_channel#config_snapshot_delivery_properties ConfigDeliveryChannel#config_snapshot_delivery_properties}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the delivery channel.

By default, AWS Config assigns the name "default" when creating the delivery channel. To change the delivery channel name, you must use the DeleteDeliveryChannel action to delete your current delivery channel, and then you must use the PutDeliveryChannel command to create a delivery channel that has the desired name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/config_delivery_channel#name ConfigDeliveryChannel#name}

---

##### `S3KeyPrefix`<sup>Optional</sup> <a name="S3KeyPrefix" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfig.property.s3KeyPrefix"></a>

```csharp
public string S3KeyPrefix { get; set; }
```

- *Type:* string

The prefix for the specified Amazon S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/config_delivery_channel#s3_key_prefix ConfigDeliveryChannel#s3_key_prefix}

---

##### `S3KmsKeyArn`<sup>Optional</sup> <a name="S3KmsKeyArn" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfig.property.s3KmsKeyArn"></a>

```csharp
public string S3KmsKeyArn { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) of the AWS Key Management Service (AWS KMS ) AWS KMS key (KMS key) used to encrypt objects delivered by AWS Config.

Must belong to the same Region as the destination S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/config_delivery_channel#s3_kms_key_arn ConfigDeliveryChannel#s3_kms_key_arn}

---

##### `SnsTopicArn`<sup>Optional</sup> <a name="SnsTopicArn" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfig.property.snsTopicArn"></a>

```csharp
public string SnsTopicArn { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) of the Amazon SNS topic to which AWS Config sends notifications about configuration changes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/config_delivery_channel#sns_topic_arn ConfigDeliveryChannel#sns_topic_arn}

---

### ConfigDeliveryChannelConfigSnapshotDeliveryProperties <a name="ConfigDeliveryChannelConfigSnapshotDeliveryProperties" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryProperties.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConfigDeliveryChannelConfigSnapshotDeliveryProperties {
    string DeliveryFrequency = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryProperties.property.deliveryFrequency">DeliveryFrequency</a></code> | <code>string</code> | The frequency with which AWS Config delivers configuration snapshots. |

---

##### `DeliveryFrequency`<sup>Optional</sup> <a name="DeliveryFrequency" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryProperties.property.deliveryFrequency"></a>

```csharp
public string DeliveryFrequency { get; set; }
```

- *Type:* string

The frequency with which AWS Config delivers configuration snapshots.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/config_delivery_channel#delivery_frequency ConfigDeliveryChannel#delivery_frequency}

---

## Classes <a name="Classes" id="Classes"></a>

### ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference <a name="ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.resetDeliveryFrequency">ResetDeliveryFrequency</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDeliveryFrequency` <a name="ResetDeliveryFrequency" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.resetDeliveryFrequency"></a>

```csharp
private void ResetDeliveryFrequency()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.property.deliveryFrequencyInput">DeliveryFrequencyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.property.deliveryFrequency">DeliveryFrequency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryProperties">ConfigDeliveryChannelConfigSnapshotDeliveryProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DeliveryFrequencyInput`<sup>Optional</sup> <a name="DeliveryFrequencyInput" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.property.deliveryFrequencyInput"></a>

```csharp
public string DeliveryFrequencyInput { get; }
```

- *Type:* string

---

##### `DeliveryFrequency`<sup>Required</sup> <a name="DeliveryFrequency" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.property.deliveryFrequency"></a>

```csharp
public string DeliveryFrequency { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ConfigDeliveryChannelConfigSnapshotDeliveryProperties InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryProperties">ConfigDeliveryChannelConfigSnapshotDeliveryProperties</a>

---



