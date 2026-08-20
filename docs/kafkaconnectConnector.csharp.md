# `kafkaconnectConnector` Submodule <a name="`kafkaconnectConnector` Submodule" id="@cdktn/provider-awscc.kafkaconnectConnector"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KafkaconnectConnector <a name="KafkaconnectConnector" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kafkaconnect_connector awscc_kafkaconnect_connector}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new KafkaconnectConnector(Construct Scope, string Id, KafkaconnectConnectorConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig">KafkaconnectConnectorConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig">KafkaconnectConnectorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.putCapacity">PutCapacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.putKafkaCluster">PutKafkaCluster</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.putKafkaClusterClientAuthentication">PutKafkaClusterClientAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.putKafkaClusterEncryptionInTransit">PutKafkaClusterEncryptionInTransit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.putLogDelivery">PutLogDelivery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.putPlugins">PutPlugins</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.putWorkerConfiguration">PutWorkerConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.resetConnectorDescription">ResetConnectorDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.resetLogDelivery">ResetLogDelivery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.resetNetworkType">ResetNetworkType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.resetWorkerConfiguration">ResetWorkerConfiguration</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCapacity` <a name="PutCapacity" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.putCapacity"></a>

```csharp
private void PutCapacity(KafkaconnectConnectorCapacity Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.putCapacity.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacity">KafkaconnectConnectorCapacity</a>

---

##### `PutKafkaCluster` <a name="PutKafkaCluster" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.putKafkaCluster"></a>

```csharp
private void PutKafkaCluster(KafkaconnectConnectorKafkaCluster Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.putKafkaCluster.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaCluster">KafkaconnectConnectorKafkaCluster</a>

---

##### `PutKafkaClusterClientAuthentication` <a name="PutKafkaClusterClientAuthentication" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.putKafkaClusterClientAuthentication"></a>

```csharp
private void PutKafkaClusterClientAuthentication(KafkaconnectConnectorKafkaClusterClientAuthentication Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.putKafkaClusterClientAuthentication.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthentication">KafkaconnectConnectorKafkaClusterClientAuthentication</a>

---

##### `PutKafkaClusterEncryptionInTransit` <a name="PutKafkaClusterEncryptionInTransit" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.putKafkaClusterEncryptionInTransit"></a>

```csharp
private void PutKafkaClusterEncryptionInTransit(KafkaconnectConnectorKafkaClusterEncryptionInTransit Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.putKafkaClusterEncryptionInTransit.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransit">KafkaconnectConnectorKafkaClusterEncryptionInTransit</a>

---

##### `PutLogDelivery` <a name="PutLogDelivery" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.putLogDelivery"></a>

```csharp
private void PutLogDelivery(KafkaconnectConnectorLogDelivery Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.putLogDelivery.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDelivery">KafkaconnectConnectorLogDelivery</a>

---

##### `PutPlugins` <a name="PutPlugins" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.putPlugins"></a>

```csharp
private void PutPlugins(IResolvable|KafkaconnectConnectorPlugins[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.putPlugins.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPlugins">KafkaconnectConnectorPlugins</a>[]

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.putTags"></a>

```csharp
private void PutTags(IResolvable|KafkaconnectConnectorTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTags">KafkaconnectConnectorTags</a>[]

---

##### `PutWorkerConfiguration` <a name="PutWorkerConfiguration" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.putWorkerConfiguration"></a>

```csharp
private void PutWorkerConfiguration(KafkaconnectConnectorWorkerConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.putWorkerConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfiguration">KafkaconnectConnectorWorkerConfiguration</a>

---

##### `ResetConnectorDescription` <a name="ResetConnectorDescription" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.resetConnectorDescription"></a>

```csharp
private void ResetConnectorDescription()
```

##### `ResetLogDelivery` <a name="ResetLogDelivery" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.resetLogDelivery"></a>

```csharp
private void ResetLogDelivery()
```

##### `ResetNetworkType` <a name="ResetNetworkType" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.resetNetworkType"></a>

```csharp
private void ResetNetworkType()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetWorkerConfiguration` <a name="ResetWorkerConfiguration" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.resetWorkerConfiguration"></a>

```csharp
private void ResetWorkerConfiguration()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a KafkaconnectConnector resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

KafkaconnectConnector.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

KafkaconnectConnector.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

KafkaconnectConnector.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

KafkaconnectConnector.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a KafkaconnectConnector resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the KafkaconnectConnector to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing KafkaconnectConnector that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kafkaconnect_connector#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the KafkaconnectConnector to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.capacity">Capacity</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference">KafkaconnectConnectorCapacityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.connectorArn">ConnectorArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.kafkaCluster">KafkaCluster</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference">KafkaconnectConnectorKafkaClusterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.kafkaClusterClientAuthentication">KafkaClusterClientAuthentication</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference">KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.kafkaClusterEncryptionInTransit">KafkaClusterEncryptionInTransit</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference">KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.logDelivery">LogDelivery</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference">KafkaconnectConnectorLogDeliveryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.plugins">Plugins</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsList">KafkaconnectConnectorPluginsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsList">KafkaconnectConnectorTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.workerConfiguration">WorkerConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference">KafkaconnectConnectorWorkerConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.capacityInput">CapacityInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacity">KafkaconnectConnectorCapacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.connectorConfigurationInput">ConnectorConfigurationInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.connectorDescriptionInput">ConnectorDescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.connectorNameInput">ConnectorNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.kafkaClusterClientAuthenticationInput">KafkaClusterClientAuthenticationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthentication">KafkaconnectConnectorKafkaClusterClientAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.kafkaClusterEncryptionInTransitInput">KafkaClusterEncryptionInTransitInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransit">KafkaconnectConnectorKafkaClusterEncryptionInTransit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.kafkaClusterInput">KafkaClusterInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaCluster">KafkaconnectConnectorKafkaCluster</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.kafkaConnectVersionInput">KafkaConnectVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.logDeliveryInput">LogDeliveryInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDelivery">KafkaconnectConnectorLogDelivery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.networkTypeInput">NetworkTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.pluginsInput">PluginsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPlugins">KafkaconnectConnectorPlugins</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.serviceExecutionRoleArnInput">ServiceExecutionRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTags">KafkaconnectConnectorTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.workerConfigurationInput">WorkerConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfiguration">KafkaconnectConnectorWorkerConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.connectorConfiguration">ConnectorConfiguration</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.connectorDescription">ConnectorDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.connectorName">ConnectorName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.kafkaConnectVersion">KafkaConnectVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.networkType">NetworkType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.serviceExecutionRoleArn">ServiceExecutionRoleArn</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Capacity`<sup>Required</sup> <a name="Capacity" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.capacity"></a>

```csharp
public KafkaconnectConnectorCapacityOutputReference Capacity { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference">KafkaconnectConnectorCapacityOutputReference</a>

---

##### `ConnectorArn`<sup>Required</sup> <a name="ConnectorArn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.connectorArn"></a>

```csharp
public string ConnectorArn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `KafkaCluster`<sup>Required</sup> <a name="KafkaCluster" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.kafkaCluster"></a>

```csharp
public KafkaconnectConnectorKafkaClusterOutputReference KafkaCluster { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference">KafkaconnectConnectorKafkaClusterOutputReference</a>

---

##### `KafkaClusterClientAuthentication`<sup>Required</sup> <a name="KafkaClusterClientAuthentication" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.kafkaClusterClientAuthentication"></a>

```csharp
public KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference KafkaClusterClientAuthentication { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference">KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference</a>

---

##### `KafkaClusterEncryptionInTransit`<sup>Required</sup> <a name="KafkaClusterEncryptionInTransit" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.kafkaClusterEncryptionInTransit"></a>

```csharp
public KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference KafkaClusterEncryptionInTransit { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference">KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference</a>

---

##### `LogDelivery`<sup>Required</sup> <a name="LogDelivery" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.logDelivery"></a>

```csharp
public KafkaconnectConnectorLogDeliveryOutputReference LogDelivery { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference">KafkaconnectConnectorLogDeliveryOutputReference</a>

---

##### `Plugins`<sup>Required</sup> <a name="Plugins" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.plugins"></a>

```csharp
public KafkaconnectConnectorPluginsList Plugins { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsList">KafkaconnectConnectorPluginsList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.tags"></a>

```csharp
public KafkaconnectConnectorTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsList">KafkaconnectConnectorTagsList</a>

---

##### `WorkerConfiguration`<sup>Required</sup> <a name="WorkerConfiguration" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.workerConfiguration"></a>

```csharp
public KafkaconnectConnectorWorkerConfigurationOutputReference WorkerConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference">KafkaconnectConnectorWorkerConfigurationOutputReference</a>

---

##### `CapacityInput`<sup>Optional</sup> <a name="CapacityInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.capacityInput"></a>

```csharp
public IResolvable|KafkaconnectConnectorCapacity CapacityInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacity">KafkaconnectConnectorCapacity</a>

---

##### `ConnectorConfigurationInput`<sup>Optional</sup> <a name="ConnectorConfigurationInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.connectorConfigurationInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ConnectorConfigurationInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ConnectorDescriptionInput`<sup>Optional</sup> <a name="ConnectorDescriptionInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.connectorDescriptionInput"></a>

```csharp
public string ConnectorDescriptionInput { get; }
```

- *Type:* string

---

##### `ConnectorNameInput`<sup>Optional</sup> <a name="ConnectorNameInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.connectorNameInput"></a>

```csharp
public string ConnectorNameInput { get; }
```

- *Type:* string

---

##### `KafkaClusterClientAuthenticationInput`<sup>Optional</sup> <a name="KafkaClusterClientAuthenticationInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.kafkaClusterClientAuthenticationInput"></a>

```csharp
public IResolvable|KafkaconnectConnectorKafkaClusterClientAuthentication KafkaClusterClientAuthenticationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthentication">KafkaconnectConnectorKafkaClusterClientAuthentication</a>

---

##### `KafkaClusterEncryptionInTransitInput`<sup>Optional</sup> <a name="KafkaClusterEncryptionInTransitInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.kafkaClusterEncryptionInTransitInput"></a>

```csharp
public IResolvable|KafkaconnectConnectorKafkaClusterEncryptionInTransit KafkaClusterEncryptionInTransitInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransit">KafkaconnectConnectorKafkaClusterEncryptionInTransit</a>

---

##### `KafkaClusterInput`<sup>Optional</sup> <a name="KafkaClusterInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.kafkaClusterInput"></a>

```csharp
public IResolvable|KafkaconnectConnectorKafkaCluster KafkaClusterInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaCluster">KafkaconnectConnectorKafkaCluster</a>

---

##### `KafkaConnectVersionInput`<sup>Optional</sup> <a name="KafkaConnectVersionInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.kafkaConnectVersionInput"></a>

```csharp
public string KafkaConnectVersionInput { get; }
```

- *Type:* string

---

##### `LogDeliveryInput`<sup>Optional</sup> <a name="LogDeliveryInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.logDeliveryInput"></a>

```csharp
public IResolvable|KafkaconnectConnectorLogDelivery LogDeliveryInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDelivery">KafkaconnectConnectorLogDelivery</a>

---

##### `NetworkTypeInput`<sup>Optional</sup> <a name="NetworkTypeInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.networkTypeInput"></a>

```csharp
public string NetworkTypeInput { get; }
```

- *Type:* string

---

##### `PluginsInput`<sup>Optional</sup> <a name="PluginsInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.pluginsInput"></a>

```csharp
public IResolvable|KafkaconnectConnectorPlugins[] PluginsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPlugins">KafkaconnectConnectorPlugins</a>[]

---

##### `ServiceExecutionRoleArnInput`<sup>Optional</sup> <a name="ServiceExecutionRoleArnInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.serviceExecutionRoleArnInput"></a>

```csharp
public string ServiceExecutionRoleArnInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.tagsInput"></a>

```csharp
public IResolvable|KafkaconnectConnectorTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTags">KafkaconnectConnectorTags</a>[]

---

##### `WorkerConfigurationInput`<sup>Optional</sup> <a name="WorkerConfigurationInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.workerConfigurationInput"></a>

```csharp
public IResolvable|KafkaconnectConnectorWorkerConfiguration WorkerConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfiguration">KafkaconnectConnectorWorkerConfiguration</a>

---

##### `ConnectorConfiguration`<sup>Required</sup> <a name="ConnectorConfiguration" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.connectorConfiguration"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ConnectorConfiguration { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ConnectorDescription`<sup>Required</sup> <a name="ConnectorDescription" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.connectorDescription"></a>

```csharp
public string ConnectorDescription { get; }
```

- *Type:* string

---

##### `ConnectorName`<sup>Required</sup> <a name="ConnectorName" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.connectorName"></a>

```csharp
public string ConnectorName { get; }
```

- *Type:* string

---

##### `KafkaConnectVersion`<sup>Required</sup> <a name="KafkaConnectVersion" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.kafkaConnectVersion"></a>

```csharp
public string KafkaConnectVersion { get; }
```

- *Type:* string

---

##### `NetworkType`<sup>Required</sup> <a name="NetworkType" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.networkType"></a>

```csharp
public string NetworkType { get; }
```

- *Type:* string

---

##### `ServiceExecutionRoleArn`<sup>Required</sup> <a name="ServiceExecutionRoleArn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.serviceExecutionRoleArn"></a>

```csharp
public string ServiceExecutionRoleArn { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### KafkaconnectConnectorCapacity <a name="KafkaconnectConnectorCapacity" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacity.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new KafkaconnectConnectorCapacity {
    KafkaconnectConnectorCapacityAutoScaling AutoScaling = null,
    KafkaconnectConnectorCapacityProvisionedCapacity ProvisionedCapacity = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacity.property.autoScaling">AutoScaling</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScaling">KafkaconnectConnectorCapacityAutoScaling</a></code> | Details about auto scaling of a connector. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacity.property.provisionedCapacity">ProvisionedCapacity</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacity">KafkaconnectConnectorCapacityProvisionedCapacity</a></code> | Details about a fixed capacity allocated to a connector. |

---

##### `AutoScaling`<sup>Optional</sup> <a name="AutoScaling" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacity.property.autoScaling"></a>

```csharp
public KafkaconnectConnectorCapacityAutoScaling AutoScaling { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScaling">KafkaconnectConnectorCapacityAutoScaling</a>

Details about auto scaling of a connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kafkaconnect_connector#auto_scaling KafkaconnectConnector#auto_scaling}

---

##### `ProvisionedCapacity`<sup>Optional</sup> <a name="ProvisionedCapacity" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacity.property.provisionedCapacity"></a>

```csharp
public KafkaconnectConnectorCapacityProvisionedCapacity ProvisionedCapacity { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacity">KafkaconnectConnectorCapacityProvisionedCapacity</a>

Details about a fixed capacity allocated to a connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kafkaconnect_connector#provisioned_capacity KafkaconnectConnector#provisioned_capacity}

---

### KafkaconnectConnectorCapacityAutoScaling <a name="KafkaconnectConnectorCapacityAutoScaling" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScaling"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScaling.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new KafkaconnectConnectorCapacityAutoScaling {
    double MaxAutoscalingTaskCount = null,
    double MaxWorkerCount = null,
    double McuCount = null,
    double MinWorkerCount = null,
    KafkaconnectConnectorCapacityAutoScalingScaleInPolicy ScaleInPolicy = null,
    KafkaconnectConnectorCapacityAutoScalingScaleOutPolicy ScaleOutPolicy = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScaling.property.maxAutoscalingTaskCount">MaxAutoscalingTaskCount</a></code> | <code>double</code> | The maximum number of tasks allocated to the connector during autoscaling operations. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScaling.property.maxWorkerCount">MaxWorkerCount</a></code> | <code>double</code> | The maximum number of workers for a connector. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScaling.property.mcuCount">McuCount</a></code> | <code>double</code> | Specifies how many MSK Connect Units (MCU) as the minimum scaling unit. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScaling.property.minWorkerCount">MinWorkerCount</a></code> | <code>double</code> | The minimum number of workers for a connector. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScaling.property.scaleInPolicy">ScaleInPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicy">KafkaconnectConnectorCapacityAutoScalingScaleInPolicy</a></code> | Information about the scale in policy of the connector. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScaling.property.scaleOutPolicy">ScaleOutPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicy">KafkaconnectConnectorCapacityAutoScalingScaleOutPolicy</a></code> | Information about the scale out policy of the connector. |

---

##### `MaxAutoscalingTaskCount`<sup>Optional</sup> <a name="MaxAutoscalingTaskCount" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScaling.property.maxAutoscalingTaskCount"></a>

```csharp
public double MaxAutoscalingTaskCount { get; set; }
```

- *Type:* double

The maximum number of tasks allocated to the connector during autoscaling operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kafkaconnect_connector#max_autoscaling_task_count KafkaconnectConnector#max_autoscaling_task_count}

---

##### `MaxWorkerCount`<sup>Optional</sup> <a name="MaxWorkerCount" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScaling.property.maxWorkerCount"></a>

```csharp
public double MaxWorkerCount { get; set; }
```

- *Type:* double

The maximum number of workers for a connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kafkaconnect_connector#max_worker_count KafkaconnectConnector#max_worker_count}

---

##### `McuCount`<sup>Optional</sup> <a name="McuCount" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScaling.property.mcuCount"></a>

```csharp
public double McuCount { get; set; }
```

- *Type:* double

Specifies how many MSK Connect Units (MCU) as the minimum scaling unit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kafkaconnect_connector#mcu_count KafkaconnectConnector#mcu_count}

---

##### `MinWorkerCount`<sup>Optional</sup> <a name="MinWorkerCount" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScaling.property.minWorkerCount"></a>

```csharp
public double MinWorkerCount { get; set; }
```

- *Type:* double

The minimum number of workers for a connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kafkaconnect_connector#min_worker_count KafkaconnectConnector#min_worker_count}

---

##### `ScaleInPolicy`<sup>Optional</sup> <a name="ScaleInPolicy" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScaling.property.scaleInPolicy"></a>

```csharp
public KafkaconnectConnectorCapacityAutoScalingScaleInPolicy ScaleInPolicy { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicy">KafkaconnectConnectorCapacityAutoScalingScaleInPolicy</a>

Information about the scale in policy of the connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kafkaconnect_connector#scale_in_policy KafkaconnectConnector#scale_in_policy}

---

##### `ScaleOutPolicy`<sup>Optional</sup> <a name="ScaleOutPolicy" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScaling.property.scaleOutPolicy"></a>

```csharp
public KafkaconnectConnectorCapacityAutoScalingScaleOutPolicy ScaleOutPolicy { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicy">KafkaconnectConnectorCapacityAutoScalingScaleOutPolicy</a>

Information about the scale out policy of the connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kafkaconnect_connector#scale_out_policy KafkaconnectConnector#scale_out_policy}

---

### KafkaconnectConnectorCapacityAutoScalingScaleInPolicy <a name="KafkaconnectConnectorCapacityAutoScalingScaleInPolicy" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new KafkaconnectConnectorCapacityAutoScalingScaleInPolicy {
    double CpuUtilizationPercentage = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicy.property.cpuUtilizationPercentage">CpuUtilizationPercentage</a></code> | <code>double</code> | Specifies the CPU utilization percentage threshold at which connector scale in should trigger. |

---

##### `CpuUtilizationPercentage`<sup>Optional</sup> <a name="CpuUtilizationPercentage" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicy.property.cpuUtilizationPercentage"></a>

```csharp
public double CpuUtilizationPercentage { get; set; }
```

- *Type:* double

Specifies the CPU utilization percentage threshold at which connector scale in should trigger.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kafkaconnect_connector#cpu_utilization_percentage KafkaconnectConnector#cpu_utilization_percentage}

---

### KafkaconnectConnectorCapacityAutoScalingScaleOutPolicy <a name="KafkaconnectConnectorCapacityAutoScalingScaleOutPolicy" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new KafkaconnectConnectorCapacityAutoScalingScaleOutPolicy {
    double CpuUtilizationPercentage = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicy.property.cpuUtilizationPercentage">CpuUtilizationPercentage</a></code> | <code>double</code> | Specifies the CPU utilization percentage threshold at which connector scale out should trigger. |

---

##### `CpuUtilizationPercentage`<sup>Optional</sup> <a name="CpuUtilizationPercentage" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicy.property.cpuUtilizationPercentage"></a>

```csharp
public double CpuUtilizationPercentage { get; set; }
```

- *Type:* double

Specifies the CPU utilization percentage threshold at which connector scale out should trigger.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kafkaconnect_connector#cpu_utilization_percentage KafkaconnectConnector#cpu_utilization_percentage}

---

### KafkaconnectConnectorCapacityProvisionedCapacity <a name="KafkaconnectConnectorCapacityProvisionedCapacity" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacity.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new KafkaconnectConnectorCapacityProvisionedCapacity {
    double McuCount = null,
    double WorkerCount = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacity.property.mcuCount">McuCount</a></code> | <code>double</code> | Specifies how many MSK Connect Units (MCU) are allocated to the connector. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacity.property.workerCount">WorkerCount</a></code> | <code>double</code> | Number of workers for a connector. |

---

##### `McuCount`<sup>Optional</sup> <a name="McuCount" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacity.property.mcuCount"></a>

```csharp
public double McuCount { get; set; }
```

- *Type:* double

Specifies how many MSK Connect Units (MCU) are allocated to the connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kafkaconnect_connector#mcu_count KafkaconnectConnector#mcu_count}

---

##### `WorkerCount`<sup>Optional</sup> <a name="WorkerCount" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacity.property.workerCount"></a>

```csharp
public double WorkerCount { get; set; }
```

- *Type:* double

Number of workers for a connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kafkaconnect_connector#worker_count KafkaconnectConnector#worker_count}

---

### KafkaconnectConnectorConfig <a name="KafkaconnectConnectorConfig" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new KafkaconnectConnectorConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    KafkaconnectConnectorCapacity Capacity,
    System.Collections.Generic.IDictionary<string, string> ConnectorConfiguration,
    string ConnectorName,
    KafkaconnectConnectorKafkaCluster KafkaCluster,
    KafkaconnectConnectorKafkaClusterClientAuthentication KafkaClusterClientAuthentication,
    KafkaconnectConnectorKafkaClusterEncryptionInTransit KafkaClusterEncryptionInTransit,
    string KafkaConnectVersion,
    IResolvable|KafkaconnectConnectorPlugins[] Plugins,
    string ServiceExecutionRoleArn,
    string ConnectorDescription = null,
    KafkaconnectConnectorLogDelivery LogDelivery = null,
    string NetworkType = null,
    IResolvable|KafkaconnectConnectorTags[] Tags = null,
    KafkaconnectConnectorWorkerConfiguration WorkerConfiguration = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.capacity">Capacity</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacity">KafkaconnectConnectorCapacity</a></code> | Information about the capacity allocated to the connector. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.connectorConfiguration">ConnectorConfiguration</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | The configuration for the connector. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.connectorName">ConnectorName</a></code> | <code>string</code> | The name of the connector. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.kafkaCluster">KafkaCluster</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaCluster">KafkaconnectConnectorKafkaCluster</a></code> | Details of how to connect to the Kafka cluster. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.kafkaClusterClientAuthentication">KafkaClusterClientAuthentication</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthentication">KafkaconnectConnectorKafkaClusterClientAuthentication</a></code> | Details of the client authentication used by the Kafka cluster. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.kafkaClusterEncryptionInTransit">KafkaClusterEncryptionInTransit</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransit">KafkaconnectConnectorKafkaClusterEncryptionInTransit</a></code> | Details of encryption in transit to the Kafka cluster. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.kafkaConnectVersion">KafkaConnectVersion</a></code> | <code>string</code> | The version of Kafka Connect. It has to be compatible with both the Kafka cluster's version and the plugins. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.plugins">Plugins</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPlugins">KafkaconnectConnectorPlugins</a>[]</code> | List of plugins to use with the connector. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.serviceExecutionRoleArn">ServiceExecutionRoleArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the IAM role used by the connector to access Amazon S3 objects and other external resources. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.connectorDescription">ConnectorDescription</a></code> | <code>string</code> | A summary description of the connector. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.logDelivery">LogDelivery</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDelivery">KafkaconnectConnectorLogDelivery</a></code> | Details of what logs are delivered and where they are delivered. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.networkType">NetworkType</a></code> | <code>string</code> | The network type of the Connector. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTags">KafkaconnectConnectorTags</a>[]</code> | A collection of tags associated with a resource. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.workerConfiguration">WorkerConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfiguration">KafkaconnectConnectorWorkerConfiguration</a></code> | Specifies the worker configuration to use with the connector. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Capacity`<sup>Required</sup> <a name="Capacity" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.capacity"></a>

```csharp
public KafkaconnectConnectorCapacity Capacity { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacity">KafkaconnectConnectorCapacity</a>

Information about the capacity allocated to the connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kafkaconnect_connector#capacity KafkaconnectConnector#capacity}

---

##### `ConnectorConfiguration`<sup>Required</sup> <a name="ConnectorConfiguration" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.connectorConfiguration"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ConnectorConfiguration { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

The configuration for the connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kafkaconnect_connector#connector_configuration KafkaconnectConnector#connector_configuration}

---

##### `ConnectorName`<sup>Required</sup> <a name="ConnectorName" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.connectorName"></a>

```csharp
public string ConnectorName { get; set; }
```

- *Type:* string

The name of the connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kafkaconnect_connector#connector_name KafkaconnectConnector#connector_name}

---

##### `KafkaCluster`<sup>Required</sup> <a name="KafkaCluster" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.kafkaCluster"></a>

```csharp
public KafkaconnectConnectorKafkaCluster KafkaCluster { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaCluster">KafkaconnectConnectorKafkaCluster</a>

Details of how to connect to the Kafka cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kafkaconnect_connector#kafka_cluster KafkaconnectConnector#kafka_cluster}

---

##### `KafkaClusterClientAuthentication`<sup>Required</sup> <a name="KafkaClusterClientAuthentication" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.kafkaClusterClientAuthentication"></a>

```csharp
public KafkaconnectConnectorKafkaClusterClientAuthentication KafkaClusterClientAuthentication { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthentication">KafkaconnectConnectorKafkaClusterClientAuthentication</a>

Details of the client authentication used by the Kafka cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kafkaconnect_connector#kafka_cluster_client_authentication KafkaconnectConnector#kafka_cluster_client_authentication}

---

##### `KafkaClusterEncryptionInTransit`<sup>Required</sup> <a name="KafkaClusterEncryptionInTransit" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.kafkaClusterEncryptionInTransit"></a>

```csharp
public KafkaconnectConnectorKafkaClusterEncryptionInTransit KafkaClusterEncryptionInTransit { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransit">KafkaconnectConnectorKafkaClusterEncryptionInTransit</a>

Details of encryption in transit to the Kafka cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kafkaconnect_connector#kafka_cluster_encryption_in_transit KafkaconnectConnector#kafka_cluster_encryption_in_transit}

---

##### `KafkaConnectVersion`<sup>Required</sup> <a name="KafkaConnectVersion" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.kafkaConnectVersion"></a>

```csharp
public string KafkaConnectVersion { get; set; }
```

- *Type:* string

The version of Kafka Connect. It has to be compatible with both the Kafka cluster's version and the plugins.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kafkaconnect_connector#kafka_connect_version KafkaconnectConnector#kafka_connect_version}

---

##### `Plugins`<sup>Required</sup> <a name="Plugins" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.plugins"></a>

```csharp
public IResolvable|KafkaconnectConnectorPlugins[] Plugins { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPlugins">KafkaconnectConnectorPlugins</a>[]

List of plugins to use with the connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kafkaconnect_connector#plugins KafkaconnectConnector#plugins}

---

##### `ServiceExecutionRoleArn`<sup>Required</sup> <a name="ServiceExecutionRoleArn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.serviceExecutionRoleArn"></a>

```csharp
public string ServiceExecutionRoleArn { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) of the IAM role used by the connector to access Amazon S3 objects and other external resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kafkaconnect_connector#service_execution_role_arn KafkaconnectConnector#service_execution_role_arn}

---

##### `ConnectorDescription`<sup>Optional</sup> <a name="ConnectorDescription" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.connectorDescription"></a>

```csharp
public string ConnectorDescription { get; set; }
```

- *Type:* string

A summary description of the connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kafkaconnect_connector#connector_description KafkaconnectConnector#connector_description}

---

##### `LogDelivery`<sup>Optional</sup> <a name="LogDelivery" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.logDelivery"></a>

```csharp
public KafkaconnectConnectorLogDelivery LogDelivery { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDelivery">KafkaconnectConnectorLogDelivery</a>

Details of what logs are delivered and where they are delivered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kafkaconnect_connector#log_delivery KafkaconnectConnector#log_delivery}

---

##### `NetworkType`<sup>Optional</sup> <a name="NetworkType" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.networkType"></a>

```csharp
public string NetworkType { get; set; }
```

- *Type:* string

The network type of the Connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kafkaconnect_connector#network_type KafkaconnectConnector#network_type}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.tags"></a>

```csharp
public IResolvable|KafkaconnectConnectorTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTags">KafkaconnectConnectorTags</a>[]

A collection of tags associated with a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kafkaconnect_connector#tags KafkaconnectConnector#tags}

---

##### `WorkerConfiguration`<sup>Optional</sup> <a name="WorkerConfiguration" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.workerConfiguration"></a>

```csharp
public KafkaconnectConnectorWorkerConfiguration WorkerConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfiguration">KafkaconnectConnectorWorkerConfiguration</a>

Specifies the worker configuration to use with the connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kafkaconnect_connector#worker_configuration KafkaconnectConnector#worker_configuration}

---

### KafkaconnectConnectorKafkaCluster <a name="KafkaconnectConnectorKafkaCluster" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaCluster"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaCluster.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new KafkaconnectConnectorKafkaCluster {
    KafkaconnectConnectorKafkaClusterApacheKafkaCluster ApacheKafkaCluster
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaCluster.property.apacheKafkaCluster">ApacheKafkaCluster</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaCluster">KafkaconnectConnectorKafkaClusterApacheKafkaCluster</a></code> | Details of how to connect to an Apache Kafka cluster. |

---

##### `ApacheKafkaCluster`<sup>Required</sup> <a name="ApacheKafkaCluster" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaCluster.property.apacheKafkaCluster"></a>

```csharp
public KafkaconnectConnectorKafkaClusterApacheKafkaCluster ApacheKafkaCluster { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaCluster">KafkaconnectConnectorKafkaClusterApacheKafkaCluster</a>

Details of how to connect to an Apache Kafka cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kafkaconnect_connector#apache_kafka_cluster KafkaconnectConnector#apache_kafka_cluster}

---

### KafkaconnectConnectorKafkaClusterApacheKafkaCluster <a name="KafkaconnectConnectorKafkaClusterApacheKafkaCluster" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaCluster"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaCluster.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new KafkaconnectConnectorKafkaClusterApacheKafkaCluster {
    string BootstrapServers,
    KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpc Vpc
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaCluster.property.bootstrapServers">BootstrapServers</a></code> | <code>string</code> | The bootstrap servers string of the Apache Kafka cluster. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaCluster.property.vpc">Vpc</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpc">KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpc</a></code> | Information about a VPC used with the connector. |

---

##### `BootstrapServers`<sup>Required</sup> <a name="BootstrapServers" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaCluster.property.bootstrapServers"></a>

```csharp
public string BootstrapServers { get; set; }
```

- *Type:* string

The bootstrap servers string of the Apache Kafka cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kafkaconnect_connector#bootstrap_servers KafkaconnectConnector#bootstrap_servers}

---

##### `Vpc`<sup>Required</sup> <a name="Vpc" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaCluster.property.vpc"></a>

```csharp
public KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpc Vpc { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpc">KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpc</a>

Information about a VPC used with the connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kafkaconnect_connector#vpc KafkaconnectConnector#vpc}

---

### KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpc <a name="KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpc" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpc"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpc.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpc {
    string[] SecurityGroups,
    string[] Subnets
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpc.property.securityGroups">SecurityGroups</a></code> | <code>string[]</code> | The AWS security groups to associate with the elastic network interfaces in order to specify what the connector has access to. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpc.property.subnets">Subnets</a></code> | <code>string[]</code> | The list of subnets to connect to in the virtual private cloud (VPC). |

---

##### `SecurityGroups`<sup>Required</sup> <a name="SecurityGroups" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpc.property.securityGroups"></a>

```csharp
public string[] SecurityGroups { get; set; }
```

- *Type:* string[]

The AWS security groups to associate with the elastic network interfaces in order to specify what the connector has access to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kafkaconnect_connector#security_groups KafkaconnectConnector#security_groups}

---

##### `Subnets`<sup>Required</sup> <a name="Subnets" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpc.property.subnets"></a>

```csharp
public string[] Subnets { get; set; }
```

- *Type:* string[]

The list of subnets to connect to in the virtual private cloud (VPC).

AWS creates elastic network interfaces inside these subnets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kafkaconnect_connector#subnets KafkaconnectConnector#subnets}

---

### KafkaconnectConnectorKafkaClusterClientAuthentication <a name="KafkaconnectConnectorKafkaClusterClientAuthentication" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthentication.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new KafkaconnectConnectorKafkaClusterClientAuthentication {
    string AuthenticationType
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthentication.property.authenticationType">AuthenticationType</a></code> | <code>string</code> | The type of client authentication used to connect to the Kafka cluster. |

---

##### `AuthenticationType`<sup>Required</sup> <a name="AuthenticationType" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthentication.property.authenticationType"></a>

```csharp
public string AuthenticationType { get; set; }
```

- *Type:* string

The type of client authentication used to connect to the Kafka cluster.

Value NONE means that no client authentication is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kafkaconnect_connector#authentication_type KafkaconnectConnector#authentication_type}

---

### KafkaconnectConnectorKafkaClusterEncryptionInTransit <a name="KafkaconnectConnectorKafkaClusterEncryptionInTransit" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransit"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransit.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new KafkaconnectConnectorKafkaClusterEncryptionInTransit {
    string EncryptionType
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransit.property.encryptionType">EncryptionType</a></code> | <code>string</code> | The type of encryption in transit to the Kafka cluster. |

---

##### `EncryptionType`<sup>Required</sup> <a name="EncryptionType" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransit.property.encryptionType"></a>

```csharp
public string EncryptionType { get; set; }
```

- *Type:* string

The type of encryption in transit to the Kafka cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kafkaconnect_connector#encryption_type KafkaconnectConnector#encryption_type}

---

### KafkaconnectConnectorLogDelivery <a name="KafkaconnectConnectorLogDelivery" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDelivery"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDelivery.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new KafkaconnectConnectorLogDelivery {
    KafkaconnectConnectorLogDeliveryWorkerLogDelivery WorkerLogDelivery = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDelivery.property.workerLogDelivery">WorkerLogDelivery</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDelivery">KafkaconnectConnectorLogDeliveryWorkerLogDelivery</a></code> | Specifies where worker logs are delivered. |

---

##### `WorkerLogDelivery`<sup>Optional</sup> <a name="WorkerLogDelivery" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDelivery.property.workerLogDelivery"></a>

```csharp
public KafkaconnectConnectorLogDeliveryWorkerLogDelivery WorkerLogDelivery { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDelivery">KafkaconnectConnectorLogDeliveryWorkerLogDelivery</a>

Specifies where worker logs are delivered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kafkaconnect_connector#worker_log_delivery KafkaconnectConnector#worker_log_delivery}

---

### KafkaconnectConnectorLogDeliveryWorkerLogDelivery <a name="KafkaconnectConnectorLogDeliveryWorkerLogDelivery" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDelivery"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDelivery.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new KafkaconnectConnectorLogDeliveryWorkerLogDelivery {
    KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs CloudwatchLogs = null,
    KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehose Firehose = null,
    KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3 S3 = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDelivery.property.cloudwatchLogs">CloudwatchLogs</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs">KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs</a></code> | Details about delivering logs to Amazon CloudWatch Logs. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDelivery.property.firehose">Firehose</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehose">KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehose</a></code> | Details about delivering logs to Amazon Kinesis Data Firehose. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDelivery.property.s3">S3</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3">KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3</a></code> | Details about delivering logs to Amazon S3. |

---

##### `CloudwatchLogs`<sup>Optional</sup> <a name="CloudwatchLogs" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDelivery.property.cloudwatchLogs"></a>

```csharp
public KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs CloudwatchLogs { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs">KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs</a>

Details about delivering logs to Amazon CloudWatch Logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kafkaconnect_connector#cloudwatch_logs KafkaconnectConnector#cloudwatch_logs}

---

##### `Firehose`<sup>Optional</sup> <a name="Firehose" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDelivery.property.firehose"></a>

```csharp
public KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehose Firehose { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehose">KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehose</a>

Details about delivering logs to Amazon Kinesis Data Firehose.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kafkaconnect_connector#firehose KafkaconnectConnector#firehose}

---

##### `S3`<sup>Optional</sup> <a name="S3" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDelivery.property.s3"></a>

```csharp
public KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3 S3 { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3">KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3</a>

Details about delivering logs to Amazon S3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kafkaconnect_connector#s3 KafkaconnectConnector#s3}

---

### KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs <a name="KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs {
    bool|IResolvable Enabled = null,
    string LogGroup = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Specifies whether the logs get sent to the specified CloudWatch Logs destination. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs.property.logGroup">LogGroup</a></code> | <code>string</code> | The CloudWatch log group that is the destination for log delivery. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Specifies whether the logs get sent to the specified CloudWatch Logs destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kafkaconnect_connector#enabled KafkaconnectConnector#enabled}

---

##### `LogGroup`<sup>Optional</sup> <a name="LogGroup" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs.property.logGroup"></a>

```csharp
public string LogGroup { get; set; }
```

- *Type:* string

The CloudWatch log group that is the destination for log delivery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kafkaconnect_connector#log_group KafkaconnectConnector#log_group}

---

### KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehose <a name="KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehose" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehose"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehose.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehose {
    string DeliveryStream = null,
    bool|IResolvable Enabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehose.property.deliveryStream">DeliveryStream</a></code> | <code>string</code> | The Kinesis Data Firehose delivery stream that is the destination for log delivery. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehose.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Specifies whether the logs get sent to the specified Kinesis Data Firehose delivery stream. |

---

##### `DeliveryStream`<sup>Optional</sup> <a name="DeliveryStream" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehose.property.deliveryStream"></a>

```csharp
public string DeliveryStream { get; set; }
```

- *Type:* string

The Kinesis Data Firehose delivery stream that is the destination for log delivery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kafkaconnect_connector#delivery_stream KafkaconnectConnector#delivery_stream}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehose.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Specifies whether the logs get sent to the specified Kinesis Data Firehose delivery stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kafkaconnect_connector#enabled KafkaconnectConnector#enabled}

---

### KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3 <a name="KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3 {
    string Bucket = null,
    bool|IResolvable Enabled = null,
    string Prefix = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3.property.bucket">Bucket</a></code> | <code>string</code> | The name of the S3 bucket that is the destination for log delivery. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Specifies whether the logs get sent to the specified Amazon S3 destination. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3.property.prefix">Prefix</a></code> | <code>string</code> | The S3 prefix that is the destination for log delivery. |

---

##### `Bucket`<sup>Optional</sup> <a name="Bucket" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3.property.bucket"></a>

```csharp
public string Bucket { get; set; }
```

- *Type:* string

The name of the S3 bucket that is the destination for log delivery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kafkaconnect_connector#bucket KafkaconnectConnector#bucket}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Specifies whether the logs get sent to the specified Amazon S3 destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kafkaconnect_connector#enabled KafkaconnectConnector#enabled}

---

##### `Prefix`<sup>Optional</sup> <a name="Prefix" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3.property.prefix"></a>

```csharp
public string Prefix { get; set; }
```

- *Type:* string

The S3 prefix that is the destination for log delivery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kafkaconnect_connector#prefix KafkaconnectConnector#prefix}

---

### KafkaconnectConnectorPlugins <a name="KafkaconnectConnectorPlugins" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPlugins"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPlugins.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new KafkaconnectConnectorPlugins {
    KafkaconnectConnectorPluginsCustomPlugin CustomPlugin
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPlugins.property.customPlugin">CustomPlugin</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPlugin">KafkaconnectConnectorPluginsCustomPlugin</a></code> | Details about a custom plugin. |

---

##### `CustomPlugin`<sup>Required</sup> <a name="CustomPlugin" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPlugins.property.customPlugin"></a>

```csharp
public KafkaconnectConnectorPluginsCustomPlugin CustomPlugin { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPlugin">KafkaconnectConnectorPluginsCustomPlugin</a>

Details about a custom plugin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kafkaconnect_connector#custom_plugin KafkaconnectConnector#custom_plugin}

---

### KafkaconnectConnectorPluginsCustomPlugin <a name="KafkaconnectConnectorPluginsCustomPlugin" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPlugin"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPlugin.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new KafkaconnectConnectorPluginsCustomPlugin {
    string CustomPluginArn,
    double Revision
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPlugin.property.customPluginArn">CustomPluginArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the custom plugin to use. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPlugin.property.revision">Revision</a></code> | <code>double</code> | The revision of the custom plugin to use. |

---

##### `CustomPluginArn`<sup>Required</sup> <a name="CustomPluginArn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPlugin.property.customPluginArn"></a>

```csharp
public string CustomPluginArn { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) of the custom plugin to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kafkaconnect_connector#custom_plugin_arn KafkaconnectConnector#custom_plugin_arn}

---

##### `Revision`<sup>Required</sup> <a name="Revision" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPlugin.property.revision"></a>

```csharp
public double Revision { get; set; }
```

- *Type:* double

The revision of the custom plugin to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kafkaconnect_connector#revision KafkaconnectConnector#revision}

---

### KafkaconnectConnectorTags <a name="KafkaconnectConnectorTags" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new KafkaconnectConnectorTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kafkaconnect_connector#key KafkaconnectConnector#key}. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kafkaconnect_connector#value KafkaconnectConnector#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kafkaconnect_connector#key KafkaconnectConnector#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kafkaconnect_connector#value KafkaconnectConnector#value}.

---

### KafkaconnectConnectorWorkerConfiguration <a name="KafkaconnectConnectorWorkerConfiguration" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new KafkaconnectConnectorWorkerConfiguration {
    double Revision = null,
    string WorkerConfigurationArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfiguration.property.revision">Revision</a></code> | <code>double</code> | The revision of the worker configuration to use. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfiguration.property.workerConfigurationArn">WorkerConfigurationArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the worker configuration to use. |

---

##### `Revision`<sup>Optional</sup> <a name="Revision" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfiguration.property.revision"></a>

```csharp
public double Revision { get; set; }
```

- *Type:* double

The revision of the worker configuration to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kafkaconnect_connector#revision KafkaconnectConnector#revision}

---

##### `WorkerConfigurationArn`<sup>Optional</sup> <a name="WorkerConfigurationArn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfiguration.property.workerConfigurationArn"></a>

```csharp
public string WorkerConfigurationArn { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) of the worker configuration to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kafkaconnect_connector#worker_configuration_arn KafkaconnectConnector#worker_configuration_arn}

---

## Classes <a name="Classes" id="Classes"></a>

### KafkaconnectConnectorCapacityAutoScalingOutputReference <a name="KafkaconnectConnectorCapacityAutoScalingOutputReference" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new KafkaconnectConnectorCapacityAutoScalingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.putScaleInPolicy">PutScaleInPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.putScaleOutPolicy">PutScaleOutPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.resetMaxAutoscalingTaskCount">ResetMaxAutoscalingTaskCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.resetMaxWorkerCount">ResetMaxWorkerCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.resetMcuCount">ResetMcuCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.resetMinWorkerCount">ResetMinWorkerCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.resetScaleInPolicy">ResetScaleInPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.resetScaleOutPolicy">ResetScaleOutPolicy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutScaleInPolicy` <a name="PutScaleInPolicy" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.putScaleInPolicy"></a>

```csharp
private void PutScaleInPolicy(KafkaconnectConnectorCapacityAutoScalingScaleInPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.putScaleInPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicy">KafkaconnectConnectorCapacityAutoScalingScaleInPolicy</a>

---

##### `PutScaleOutPolicy` <a name="PutScaleOutPolicy" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.putScaleOutPolicy"></a>

```csharp
private void PutScaleOutPolicy(KafkaconnectConnectorCapacityAutoScalingScaleOutPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.putScaleOutPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicy">KafkaconnectConnectorCapacityAutoScalingScaleOutPolicy</a>

---

##### `ResetMaxAutoscalingTaskCount` <a name="ResetMaxAutoscalingTaskCount" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.resetMaxAutoscalingTaskCount"></a>

```csharp
private void ResetMaxAutoscalingTaskCount()
```

##### `ResetMaxWorkerCount` <a name="ResetMaxWorkerCount" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.resetMaxWorkerCount"></a>

```csharp
private void ResetMaxWorkerCount()
```

##### `ResetMcuCount` <a name="ResetMcuCount" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.resetMcuCount"></a>

```csharp
private void ResetMcuCount()
```

##### `ResetMinWorkerCount` <a name="ResetMinWorkerCount" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.resetMinWorkerCount"></a>

```csharp
private void ResetMinWorkerCount()
```

##### `ResetScaleInPolicy` <a name="ResetScaleInPolicy" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.resetScaleInPolicy"></a>

```csharp
private void ResetScaleInPolicy()
```

##### `ResetScaleOutPolicy` <a name="ResetScaleOutPolicy" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.resetScaleOutPolicy"></a>

```csharp
private void ResetScaleOutPolicy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.property.scaleInPolicy">ScaleInPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference">KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.property.scaleOutPolicy">ScaleOutPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference">KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.property.maxAutoscalingTaskCountInput">MaxAutoscalingTaskCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.property.maxWorkerCountInput">MaxWorkerCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.property.mcuCountInput">McuCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.property.minWorkerCountInput">MinWorkerCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.property.scaleInPolicyInput">ScaleInPolicyInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicy">KafkaconnectConnectorCapacityAutoScalingScaleInPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.property.scaleOutPolicyInput">ScaleOutPolicyInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicy">KafkaconnectConnectorCapacityAutoScalingScaleOutPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.property.maxAutoscalingTaskCount">MaxAutoscalingTaskCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.property.maxWorkerCount">MaxWorkerCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.property.mcuCount">McuCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.property.minWorkerCount">MinWorkerCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScaling">KafkaconnectConnectorCapacityAutoScaling</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ScaleInPolicy`<sup>Required</sup> <a name="ScaleInPolicy" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.property.scaleInPolicy"></a>

```csharp
public KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference ScaleInPolicy { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference">KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference</a>

---

##### `ScaleOutPolicy`<sup>Required</sup> <a name="ScaleOutPolicy" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.property.scaleOutPolicy"></a>

```csharp
public KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference ScaleOutPolicy { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference">KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference</a>

---

##### `MaxAutoscalingTaskCountInput`<sup>Optional</sup> <a name="MaxAutoscalingTaskCountInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.property.maxAutoscalingTaskCountInput"></a>

```csharp
public double MaxAutoscalingTaskCountInput { get; }
```

- *Type:* double

---

##### `MaxWorkerCountInput`<sup>Optional</sup> <a name="MaxWorkerCountInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.property.maxWorkerCountInput"></a>

```csharp
public double MaxWorkerCountInput { get; }
```

- *Type:* double

---

##### `McuCountInput`<sup>Optional</sup> <a name="McuCountInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.property.mcuCountInput"></a>

```csharp
public double McuCountInput { get; }
```

- *Type:* double

---

##### `MinWorkerCountInput`<sup>Optional</sup> <a name="MinWorkerCountInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.property.minWorkerCountInput"></a>

```csharp
public double MinWorkerCountInput { get; }
```

- *Type:* double

---

##### `ScaleInPolicyInput`<sup>Optional</sup> <a name="ScaleInPolicyInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.property.scaleInPolicyInput"></a>

```csharp
public IResolvable|KafkaconnectConnectorCapacityAutoScalingScaleInPolicy ScaleInPolicyInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicy">KafkaconnectConnectorCapacityAutoScalingScaleInPolicy</a>

---

##### `ScaleOutPolicyInput`<sup>Optional</sup> <a name="ScaleOutPolicyInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.property.scaleOutPolicyInput"></a>

```csharp
public IResolvable|KafkaconnectConnectorCapacityAutoScalingScaleOutPolicy ScaleOutPolicyInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicy">KafkaconnectConnectorCapacityAutoScalingScaleOutPolicy</a>

---

##### `MaxAutoscalingTaskCount`<sup>Required</sup> <a name="MaxAutoscalingTaskCount" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.property.maxAutoscalingTaskCount"></a>

```csharp
public double MaxAutoscalingTaskCount { get; }
```

- *Type:* double

---

##### `MaxWorkerCount`<sup>Required</sup> <a name="MaxWorkerCount" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.property.maxWorkerCount"></a>

```csharp
public double MaxWorkerCount { get; }
```

- *Type:* double

---

##### `McuCount`<sup>Required</sup> <a name="McuCount" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.property.mcuCount"></a>

```csharp
public double McuCount { get; }
```

- *Type:* double

---

##### `MinWorkerCount`<sup>Required</sup> <a name="MinWorkerCount" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.property.minWorkerCount"></a>

```csharp
public double MinWorkerCount { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.property.internalValue"></a>

```csharp
public IResolvable|KafkaconnectConnectorCapacityAutoScaling InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScaling">KafkaconnectConnectorCapacityAutoScaling</a>

---


### KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference <a name="KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.resetCpuUtilizationPercentage">ResetCpuUtilizationPercentage</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCpuUtilizationPercentage` <a name="ResetCpuUtilizationPercentage" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.resetCpuUtilizationPercentage"></a>

```csharp
private void ResetCpuUtilizationPercentage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.property.cpuUtilizationPercentageInput">CpuUtilizationPercentageInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.property.cpuUtilizationPercentage">CpuUtilizationPercentage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicy">KafkaconnectConnectorCapacityAutoScalingScaleInPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CpuUtilizationPercentageInput`<sup>Optional</sup> <a name="CpuUtilizationPercentageInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.property.cpuUtilizationPercentageInput"></a>

```csharp
public double CpuUtilizationPercentageInput { get; }
```

- *Type:* double

---

##### `CpuUtilizationPercentage`<sup>Required</sup> <a name="CpuUtilizationPercentage" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.property.cpuUtilizationPercentage"></a>

```csharp
public double CpuUtilizationPercentage { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.property.internalValue"></a>

```csharp
public IResolvable|KafkaconnectConnectorCapacityAutoScalingScaleInPolicy InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicy">KafkaconnectConnectorCapacityAutoScalingScaleInPolicy</a>

---


### KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference <a name="KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.resetCpuUtilizationPercentage">ResetCpuUtilizationPercentage</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCpuUtilizationPercentage` <a name="ResetCpuUtilizationPercentage" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.resetCpuUtilizationPercentage"></a>

```csharp
private void ResetCpuUtilizationPercentage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.property.cpuUtilizationPercentageInput">CpuUtilizationPercentageInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.property.cpuUtilizationPercentage">CpuUtilizationPercentage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicy">KafkaconnectConnectorCapacityAutoScalingScaleOutPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CpuUtilizationPercentageInput`<sup>Optional</sup> <a name="CpuUtilizationPercentageInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.property.cpuUtilizationPercentageInput"></a>

```csharp
public double CpuUtilizationPercentageInput { get; }
```

- *Type:* double

---

##### `CpuUtilizationPercentage`<sup>Required</sup> <a name="CpuUtilizationPercentage" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.property.cpuUtilizationPercentage"></a>

```csharp
public double CpuUtilizationPercentage { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.property.internalValue"></a>

```csharp
public IResolvable|KafkaconnectConnectorCapacityAutoScalingScaleOutPolicy InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicy">KafkaconnectConnectorCapacityAutoScalingScaleOutPolicy</a>

---


### KafkaconnectConnectorCapacityOutputReference <a name="KafkaconnectConnectorCapacityOutputReference" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new KafkaconnectConnectorCapacityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.putAutoScaling">PutAutoScaling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.putProvisionedCapacity">PutProvisionedCapacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.resetAutoScaling">ResetAutoScaling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.resetProvisionedCapacity">ResetProvisionedCapacity</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAutoScaling` <a name="PutAutoScaling" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.putAutoScaling"></a>

```csharp
private void PutAutoScaling(KafkaconnectConnectorCapacityAutoScaling Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.putAutoScaling.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScaling">KafkaconnectConnectorCapacityAutoScaling</a>

---

##### `PutProvisionedCapacity` <a name="PutProvisionedCapacity" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.putProvisionedCapacity"></a>

```csharp
private void PutProvisionedCapacity(KafkaconnectConnectorCapacityProvisionedCapacity Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.putProvisionedCapacity.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacity">KafkaconnectConnectorCapacityProvisionedCapacity</a>

---

##### `ResetAutoScaling` <a name="ResetAutoScaling" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.resetAutoScaling"></a>

```csharp
private void ResetAutoScaling()
```

##### `ResetProvisionedCapacity` <a name="ResetProvisionedCapacity" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.resetProvisionedCapacity"></a>

```csharp
private void ResetProvisionedCapacity()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.property.autoScaling">AutoScaling</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference">KafkaconnectConnectorCapacityAutoScalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.property.provisionedCapacity">ProvisionedCapacity</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference">KafkaconnectConnectorCapacityProvisionedCapacityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.property.autoScalingInput">AutoScalingInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScaling">KafkaconnectConnectorCapacityAutoScaling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.property.provisionedCapacityInput">ProvisionedCapacityInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacity">KafkaconnectConnectorCapacityProvisionedCapacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacity">KafkaconnectConnectorCapacity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AutoScaling`<sup>Required</sup> <a name="AutoScaling" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.property.autoScaling"></a>

```csharp
public KafkaconnectConnectorCapacityAutoScalingOutputReference AutoScaling { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference">KafkaconnectConnectorCapacityAutoScalingOutputReference</a>

---

##### `ProvisionedCapacity`<sup>Required</sup> <a name="ProvisionedCapacity" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.property.provisionedCapacity"></a>

```csharp
public KafkaconnectConnectorCapacityProvisionedCapacityOutputReference ProvisionedCapacity { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference">KafkaconnectConnectorCapacityProvisionedCapacityOutputReference</a>

---

##### `AutoScalingInput`<sup>Optional</sup> <a name="AutoScalingInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.property.autoScalingInput"></a>

```csharp
public IResolvable|KafkaconnectConnectorCapacityAutoScaling AutoScalingInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScaling">KafkaconnectConnectorCapacityAutoScaling</a>

---

##### `ProvisionedCapacityInput`<sup>Optional</sup> <a name="ProvisionedCapacityInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.property.provisionedCapacityInput"></a>

```csharp
public IResolvable|KafkaconnectConnectorCapacityProvisionedCapacity ProvisionedCapacityInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacity">KafkaconnectConnectorCapacityProvisionedCapacity</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.property.internalValue"></a>

```csharp
public IResolvable|KafkaconnectConnectorCapacity InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacity">KafkaconnectConnectorCapacity</a>

---


### KafkaconnectConnectorCapacityProvisionedCapacityOutputReference <a name="KafkaconnectConnectorCapacityProvisionedCapacityOutputReference" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new KafkaconnectConnectorCapacityProvisionedCapacityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.resetMcuCount">ResetMcuCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.resetWorkerCount">ResetWorkerCount</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMcuCount` <a name="ResetMcuCount" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.resetMcuCount"></a>

```csharp
private void ResetMcuCount()
```

##### `ResetWorkerCount` <a name="ResetWorkerCount" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.resetWorkerCount"></a>

```csharp
private void ResetWorkerCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.property.mcuCountInput">McuCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.property.workerCountInput">WorkerCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.property.mcuCount">McuCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.property.workerCount">WorkerCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacity">KafkaconnectConnectorCapacityProvisionedCapacity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `McuCountInput`<sup>Optional</sup> <a name="McuCountInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.property.mcuCountInput"></a>

```csharp
public double McuCountInput { get; }
```

- *Type:* double

---

##### `WorkerCountInput`<sup>Optional</sup> <a name="WorkerCountInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.property.workerCountInput"></a>

```csharp
public double WorkerCountInput { get; }
```

- *Type:* double

---

##### `McuCount`<sup>Required</sup> <a name="McuCount" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.property.mcuCount"></a>

```csharp
public double McuCount { get; }
```

- *Type:* double

---

##### `WorkerCount`<sup>Required</sup> <a name="WorkerCount" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.property.workerCount"></a>

```csharp
public double WorkerCount { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.property.internalValue"></a>

```csharp
public IResolvable|KafkaconnectConnectorCapacityProvisionedCapacity InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacity">KafkaconnectConnectorCapacityProvisionedCapacity</a>

---


### KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference <a name="KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.putVpc">PutVpc</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutVpc` <a name="PutVpc" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.putVpc"></a>

```csharp
private void PutVpc(KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpc Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.putVpc.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpc">KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpc</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.property.vpc">Vpc</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference">KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.property.bootstrapServersInput">BootstrapServersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.property.vpcInput">VpcInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpc">KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpc</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.property.bootstrapServers">BootstrapServers</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaCluster">KafkaconnectConnectorKafkaClusterApacheKafkaCluster</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Vpc`<sup>Required</sup> <a name="Vpc" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.property.vpc"></a>

```csharp
public KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference Vpc { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference">KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference</a>

---

##### `BootstrapServersInput`<sup>Optional</sup> <a name="BootstrapServersInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.property.bootstrapServersInput"></a>

```csharp
public string BootstrapServersInput { get; }
```

- *Type:* string

---

##### `VpcInput`<sup>Optional</sup> <a name="VpcInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.property.vpcInput"></a>

```csharp
public IResolvable|KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpc VpcInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpc">KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpc</a>

---

##### `BootstrapServers`<sup>Required</sup> <a name="BootstrapServers" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.property.bootstrapServers"></a>

```csharp
public string BootstrapServers { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.property.internalValue"></a>

```csharp
public IResolvable|KafkaconnectConnectorKafkaClusterApacheKafkaCluster InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaCluster">KafkaconnectConnectorKafkaClusterApacheKafkaCluster</a>

---


### KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference <a name="KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.property.securityGroupsInput">SecurityGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.property.subnetsInput">SubnetsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.property.securityGroups">SecurityGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.property.subnets">Subnets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpc">KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpc</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SecurityGroupsInput`<sup>Optional</sup> <a name="SecurityGroupsInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.property.securityGroupsInput"></a>

```csharp
public string[] SecurityGroupsInput { get; }
```

- *Type:* string[]

---

##### `SubnetsInput`<sup>Optional</sup> <a name="SubnetsInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.property.subnetsInput"></a>

```csharp
public string[] SubnetsInput { get; }
```

- *Type:* string[]

---

##### `SecurityGroups`<sup>Required</sup> <a name="SecurityGroups" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.property.securityGroups"></a>

```csharp
public string[] SecurityGroups { get; }
```

- *Type:* string[]

---

##### `Subnets`<sup>Required</sup> <a name="Subnets" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.property.subnets"></a>

```csharp
public string[] Subnets { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.property.internalValue"></a>

```csharp
public IResolvable|KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpc InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpc">KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpc</a>

---


### KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference <a name="KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.property.authenticationTypeInput">AuthenticationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.property.authenticationType">AuthenticationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthentication">KafkaconnectConnectorKafkaClusterClientAuthentication</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthenticationTypeInput`<sup>Optional</sup> <a name="AuthenticationTypeInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.property.authenticationTypeInput"></a>

```csharp
public string AuthenticationTypeInput { get; }
```

- *Type:* string

---

##### `AuthenticationType`<sup>Required</sup> <a name="AuthenticationType" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.property.authenticationType"></a>

```csharp
public string AuthenticationType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|KafkaconnectConnectorKafkaClusterClientAuthentication InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthentication">KafkaconnectConnectorKafkaClusterClientAuthentication</a>

---


### KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference <a name="KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.property.encryptionTypeInput">EncryptionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.property.encryptionType">EncryptionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransit">KafkaconnectConnectorKafkaClusterEncryptionInTransit</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EncryptionTypeInput`<sup>Optional</sup> <a name="EncryptionTypeInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.property.encryptionTypeInput"></a>

```csharp
public string EncryptionTypeInput { get; }
```

- *Type:* string

---

##### `EncryptionType`<sup>Required</sup> <a name="EncryptionType" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.property.encryptionType"></a>

```csharp
public string EncryptionType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.property.internalValue"></a>

```csharp
public IResolvable|KafkaconnectConnectorKafkaClusterEncryptionInTransit InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransit">KafkaconnectConnectorKafkaClusterEncryptionInTransit</a>

---


### KafkaconnectConnectorKafkaClusterOutputReference <a name="KafkaconnectConnectorKafkaClusterOutputReference" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new KafkaconnectConnectorKafkaClusterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.putApacheKafkaCluster">PutApacheKafkaCluster</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutApacheKafkaCluster` <a name="PutApacheKafkaCluster" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.putApacheKafkaCluster"></a>

```csharp
private void PutApacheKafkaCluster(KafkaconnectConnectorKafkaClusterApacheKafkaCluster Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.putApacheKafkaCluster.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaCluster">KafkaconnectConnectorKafkaClusterApacheKafkaCluster</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.property.apacheKafkaCluster">ApacheKafkaCluster</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference">KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.property.apacheKafkaClusterInput">ApacheKafkaClusterInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaCluster">KafkaconnectConnectorKafkaClusterApacheKafkaCluster</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaCluster">KafkaconnectConnectorKafkaCluster</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApacheKafkaCluster`<sup>Required</sup> <a name="ApacheKafkaCluster" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.property.apacheKafkaCluster"></a>

```csharp
public KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference ApacheKafkaCluster { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference">KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference</a>

---

##### `ApacheKafkaClusterInput`<sup>Optional</sup> <a name="ApacheKafkaClusterInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.property.apacheKafkaClusterInput"></a>

```csharp
public IResolvable|KafkaconnectConnectorKafkaClusterApacheKafkaCluster ApacheKafkaClusterInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaCluster">KafkaconnectConnectorKafkaClusterApacheKafkaCluster</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.property.internalValue"></a>

```csharp
public IResolvable|KafkaconnectConnectorKafkaCluster InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaCluster">KafkaconnectConnectorKafkaCluster</a>

---


### KafkaconnectConnectorLogDeliveryOutputReference <a name="KafkaconnectConnectorLogDeliveryOutputReference" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new KafkaconnectConnectorLogDeliveryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.putWorkerLogDelivery">PutWorkerLogDelivery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.resetWorkerLogDelivery">ResetWorkerLogDelivery</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutWorkerLogDelivery` <a name="PutWorkerLogDelivery" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.putWorkerLogDelivery"></a>

```csharp
private void PutWorkerLogDelivery(KafkaconnectConnectorLogDeliveryWorkerLogDelivery Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.putWorkerLogDelivery.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDelivery">KafkaconnectConnectorLogDeliveryWorkerLogDelivery</a>

---

##### `ResetWorkerLogDelivery` <a name="ResetWorkerLogDelivery" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.resetWorkerLogDelivery"></a>

```csharp
private void ResetWorkerLogDelivery()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.property.workerLogDelivery">WorkerLogDelivery</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference">KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.property.workerLogDeliveryInput">WorkerLogDeliveryInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDelivery">KafkaconnectConnectorLogDeliveryWorkerLogDelivery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDelivery">KafkaconnectConnectorLogDelivery</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `WorkerLogDelivery`<sup>Required</sup> <a name="WorkerLogDelivery" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.property.workerLogDelivery"></a>

```csharp
public KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference WorkerLogDelivery { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference">KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference</a>

---

##### `WorkerLogDeliveryInput`<sup>Optional</sup> <a name="WorkerLogDeliveryInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.property.workerLogDeliveryInput"></a>

```csharp
public IResolvable|KafkaconnectConnectorLogDeliveryWorkerLogDelivery WorkerLogDeliveryInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDelivery">KafkaconnectConnectorLogDeliveryWorkerLogDelivery</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.property.internalValue"></a>

```csharp
public IResolvable|KafkaconnectConnectorLogDelivery InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDelivery">KafkaconnectConnectorLogDelivery</a>

---


### KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference <a name="KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.resetLogGroup">ResetLogGroup</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetLogGroup` <a name="ResetLogGroup" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.resetLogGroup"></a>

```csharp
private void ResetLogGroup()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.property.logGroupInput">LogGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.property.logGroup">LogGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs">KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `LogGroupInput`<sup>Optional</sup> <a name="LogGroupInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.property.logGroupInput"></a>

```csharp
public string LogGroupInput { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `LogGroup`<sup>Required</sup> <a name="LogGroup" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.property.logGroup"></a>

```csharp
public string LogGroup { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs">KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs</a>

---


### KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference <a name="KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.resetDeliveryStream">ResetDeliveryStream</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDeliveryStream` <a name="ResetDeliveryStream" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.resetDeliveryStream"></a>

```csharp
private void ResetDeliveryStream()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.property.deliveryStreamInput">DeliveryStreamInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.property.deliveryStream">DeliveryStream</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehose">KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehose</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DeliveryStreamInput`<sup>Optional</sup> <a name="DeliveryStreamInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.property.deliveryStreamInput"></a>

```csharp
public string DeliveryStreamInput { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DeliveryStream`<sup>Required</sup> <a name="DeliveryStream" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.property.deliveryStream"></a>

```csharp
public string DeliveryStream { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.property.internalValue"></a>

```csharp
public IResolvable|KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehose InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehose">KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehose</a>

---


### KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference <a name="KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.putCloudwatchLogs">PutCloudwatchLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.putFirehose">PutFirehose</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.putS3">PutS3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.resetCloudwatchLogs">ResetCloudwatchLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.resetFirehose">ResetFirehose</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.resetS3">ResetS3</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCloudwatchLogs` <a name="PutCloudwatchLogs" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.putCloudwatchLogs"></a>

```csharp
private void PutCloudwatchLogs(KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.putCloudwatchLogs.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs">KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs</a>

---

##### `PutFirehose` <a name="PutFirehose" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.putFirehose"></a>

```csharp
private void PutFirehose(KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehose Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.putFirehose.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehose">KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehose</a>

---

##### `PutS3` <a name="PutS3" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.putS3"></a>

```csharp
private void PutS3(KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3 Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.putS3.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3">KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3</a>

---

##### `ResetCloudwatchLogs` <a name="ResetCloudwatchLogs" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.resetCloudwatchLogs"></a>

```csharp
private void ResetCloudwatchLogs()
```

##### `ResetFirehose` <a name="ResetFirehose" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.resetFirehose"></a>

```csharp
private void ResetFirehose()
```

##### `ResetS3` <a name="ResetS3" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.resetS3"></a>

```csharp
private void ResetS3()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.cloudwatchLogs">CloudwatchLogs</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference">KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.firehose">Firehose</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference">KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.s3">S3</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference">KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.cloudwatchLogsInput">CloudwatchLogsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs">KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.firehoseInput">FirehoseInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehose">KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehose</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.s3Input">S3Input</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3">KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDelivery">KafkaconnectConnectorLogDeliveryWorkerLogDelivery</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CloudwatchLogs`<sup>Required</sup> <a name="CloudwatchLogs" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.cloudwatchLogs"></a>

```csharp
public KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference CloudwatchLogs { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference">KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference</a>

---

##### `Firehose`<sup>Required</sup> <a name="Firehose" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.firehose"></a>

```csharp
public KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference Firehose { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference">KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference</a>

---

##### `S3`<sup>Required</sup> <a name="S3" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.s3"></a>

```csharp
public KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference S3 { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference">KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference</a>

---

##### `CloudwatchLogsInput`<sup>Optional</sup> <a name="CloudwatchLogsInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.cloudwatchLogsInput"></a>

```csharp
public IResolvable|KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs CloudwatchLogsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs">KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs</a>

---

##### `FirehoseInput`<sup>Optional</sup> <a name="FirehoseInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.firehoseInput"></a>

```csharp
public IResolvable|KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehose FirehoseInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehose">KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehose</a>

---

##### `S3Input`<sup>Optional</sup> <a name="S3Input" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.s3Input"></a>

```csharp
public IResolvable|KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3 S3Input { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3">KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.internalValue"></a>

```csharp
public IResolvable|KafkaconnectConnectorLogDeliveryWorkerLogDelivery InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDelivery">KafkaconnectConnectorLogDeliveryWorkerLogDelivery</a>

---


### KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference <a name="KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.resetBucket">ResetBucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.resetPrefix">ResetPrefix</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBucket` <a name="ResetBucket" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.resetBucket"></a>

```csharp
private void ResetBucket()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetPrefix` <a name="ResetPrefix" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.resetPrefix"></a>

```csharp
private void ResetPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.bucketInput">BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.prefixInput">PrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.prefix">Prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3">KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.bucketInput"></a>

```csharp
public string BucketInput { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `PrefixInput`<sup>Optional</sup> <a name="PrefixInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.prefixInput"></a>

```csharp
public string PrefixInput { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.prefix"></a>

```csharp
public string Prefix { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.internalValue"></a>

```csharp
public IResolvable|KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3 InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3">KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3</a>

---


### KafkaconnectConnectorPluginsCustomPluginOutputReference <a name="KafkaconnectConnectorPluginsCustomPluginOutputReference" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new KafkaconnectConnectorPluginsCustomPluginOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.property.customPluginArnInput">CustomPluginArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.property.revisionInput">RevisionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.property.customPluginArn">CustomPluginArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.property.revision">Revision</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPlugin">KafkaconnectConnectorPluginsCustomPlugin</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomPluginArnInput`<sup>Optional</sup> <a name="CustomPluginArnInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.property.customPluginArnInput"></a>

```csharp
public string CustomPluginArnInput { get; }
```

- *Type:* string

---

##### `RevisionInput`<sup>Optional</sup> <a name="RevisionInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.property.revisionInput"></a>

```csharp
public double RevisionInput { get; }
```

- *Type:* double

---

##### `CustomPluginArn`<sup>Required</sup> <a name="CustomPluginArn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.property.customPluginArn"></a>

```csharp
public string CustomPluginArn { get; }
```

- *Type:* string

---

##### `Revision`<sup>Required</sup> <a name="Revision" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.property.revision"></a>

```csharp
public double Revision { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.property.internalValue"></a>

```csharp
public IResolvable|KafkaconnectConnectorPluginsCustomPlugin InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPlugin">KafkaconnectConnectorPluginsCustomPlugin</a>

---


### KafkaconnectConnectorPluginsList <a name="KafkaconnectConnectorPluginsList" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new KafkaconnectConnectorPluginsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsList.get"></a>

```csharp
private KafkaconnectConnectorPluginsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPlugins">KafkaconnectConnectorPlugins</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsList.property.internalValue"></a>

```csharp
public IResolvable|KafkaconnectConnectorPlugins[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPlugins">KafkaconnectConnectorPlugins</a>[]

---


### KafkaconnectConnectorPluginsOutputReference <a name="KafkaconnectConnectorPluginsOutputReference" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new KafkaconnectConnectorPluginsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.putCustomPlugin">PutCustomPlugin</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCustomPlugin` <a name="PutCustomPlugin" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.putCustomPlugin"></a>

```csharp
private void PutCustomPlugin(KafkaconnectConnectorPluginsCustomPlugin Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.putCustomPlugin.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPlugin">KafkaconnectConnectorPluginsCustomPlugin</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.property.customPlugin">CustomPlugin</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference">KafkaconnectConnectorPluginsCustomPluginOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.property.customPluginInput">CustomPluginInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPlugin">KafkaconnectConnectorPluginsCustomPlugin</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPlugins">KafkaconnectConnectorPlugins</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomPlugin`<sup>Required</sup> <a name="CustomPlugin" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.property.customPlugin"></a>

```csharp
public KafkaconnectConnectorPluginsCustomPluginOutputReference CustomPlugin { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference">KafkaconnectConnectorPluginsCustomPluginOutputReference</a>

---

##### `CustomPluginInput`<sup>Optional</sup> <a name="CustomPluginInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.property.customPluginInput"></a>

```csharp
public IResolvable|KafkaconnectConnectorPluginsCustomPlugin CustomPluginInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPlugin">KafkaconnectConnectorPluginsCustomPlugin</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|KafkaconnectConnectorPlugins InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPlugins">KafkaconnectConnectorPlugins</a>

---


### KafkaconnectConnectorTagsList <a name="KafkaconnectConnectorTagsList" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new KafkaconnectConnectorTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsList.get"></a>

```csharp
private KafkaconnectConnectorTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTags">KafkaconnectConnectorTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsList.property.internalValue"></a>

```csharp
public IResolvable|KafkaconnectConnectorTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTags">KafkaconnectConnectorTags</a>[]

---


### KafkaconnectConnectorTagsOutputReference <a name="KafkaconnectConnectorTagsOutputReference" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new KafkaconnectConnectorTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTags">KafkaconnectConnectorTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|KafkaconnectConnectorTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTags">KafkaconnectConnectorTags</a>

---


### KafkaconnectConnectorWorkerConfigurationOutputReference <a name="KafkaconnectConnectorWorkerConfigurationOutputReference" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new KafkaconnectConnectorWorkerConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.resetRevision">ResetRevision</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.resetWorkerConfigurationArn">ResetWorkerConfigurationArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRevision` <a name="ResetRevision" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.resetRevision"></a>

```csharp
private void ResetRevision()
```

##### `ResetWorkerConfigurationArn` <a name="ResetWorkerConfigurationArn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.resetWorkerConfigurationArn"></a>

```csharp
private void ResetWorkerConfigurationArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.property.revisionInput">RevisionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.property.workerConfigurationArnInput">WorkerConfigurationArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.property.revision">Revision</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.property.workerConfigurationArn">WorkerConfigurationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfiguration">KafkaconnectConnectorWorkerConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RevisionInput`<sup>Optional</sup> <a name="RevisionInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.property.revisionInput"></a>

```csharp
public double RevisionInput { get; }
```

- *Type:* double

---

##### `WorkerConfigurationArnInput`<sup>Optional</sup> <a name="WorkerConfigurationArnInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.property.workerConfigurationArnInput"></a>

```csharp
public string WorkerConfigurationArnInput { get; }
```

- *Type:* string

---

##### `Revision`<sup>Required</sup> <a name="Revision" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.property.revision"></a>

```csharp
public double Revision { get; }
```

- *Type:* double

---

##### `WorkerConfigurationArn`<sup>Required</sup> <a name="WorkerConfigurationArn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.property.workerConfigurationArn"></a>

```csharp
public string WorkerConfigurationArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|KafkaconnectConnectorWorkerConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfiguration">KafkaconnectConnectorWorkerConfiguration</a>

---



