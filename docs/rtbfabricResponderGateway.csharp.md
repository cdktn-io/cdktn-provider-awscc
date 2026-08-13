# `rtbfabricResponderGateway` Submodule <a name="`rtbfabricResponderGateway` Submodule" id="@cdktn/provider-awscc.rtbfabricResponderGateway"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RtbfabricResponderGateway <a name="RtbfabricResponderGateway" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway awscc_rtbfabric_responder_gateway}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RtbfabricResponderGateway(Construct Scope, string Id, RtbfabricResponderGatewayConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig">RtbfabricResponderGatewayConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig">RtbfabricResponderGatewayConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.putListenerConfig">PutListenerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.putManagedEndpointConfiguration">PutManagedEndpointConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.putTrustStoreConfiguration">PutTrustStoreConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.resetAcmCertificateArn">ResetAcmCertificateArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.resetDomainName">ResetDomainName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.resetGatewayType">ResetGatewayType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.resetListenerConfig">ResetListenerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.resetManagedEndpointConfiguration">ResetManagedEndpointConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.resetTrustStoreConfiguration">ResetTrustStoreConfiguration</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutListenerConfig` <a name="PutListenerConfig" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.putListenerConfig"></a>

```csharp
private void PutListenerConfig(RtbfabricResponderGatewayListenerConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.putListenerConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfig">RtbfabricResponderGatewayListenerConfig</a>

---

##### `PutManagedEndpointConfiguration` <a name="PutManagedEndpointConfiguration" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.putManagedEndpointConfiguration"></a>

```csharp
private void PutManagedEndpointConfiguration(RtbfabricResponderGatewayManagedEndpointConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.putManagedEndpointConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfiguration">RtbfabricResponderGatewayManagedEndpointConfiguration</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.putTags"></a>

```csharp
private void PutTags(IResolvable|RtbfabricResponderGatewayTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTags">RtbfabricResponderGatewayTags</a>[]

---

##### `PutTrustStoreConfiguration` <a name="PutTrustStoreConfiguration" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.putTrustStoreConfiguration"></a>

```csharp
private void PutTrustStoreConfiguration(RtbfabricResponderGatewayTrustStoreConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.putTrustStoreConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfiguration">RtbfabricResponderGatewayTrustStoreConfiguration</a>

---

##### `ResetAcmCertificateArn` <a name="ResetAcmCertificateArn" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.resetAcmCertificateArn"></a>

```csharp
private void ResetAcmCertificateArn()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDomainName` <a name="ResetDomainName" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.resetDomainName"></a>

```csharp
private void ResetDomainName()
```

##### `ResetGatewayType` <a name="ResetGatewayType" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.resetGatewayType"></a>

```csharp
private void ResetGatewayType()
```

##### `ResetListenerConfig` <a name="ResetListenerConfig" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.resetListenerConfig"></a>

```csharp
private void ResetListenerConfig()
```

##### `ResetManagedEndpointConfiguration` <a name="ResetManagedEndpointConfiguration" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.resetManagedEndpointConfiguration"></a>

```csharp
private void ResetManagedEndpointConfiguration()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTrustStoreConfiguration` <a name="ResetTrustStoreConfiguration" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.resetTrustStoreConfiguration"></a>

```csharp
private void ResetTrustStoreConfiguration()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a RtbfabricResponderGateway resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

RtbfabricResponderGateway.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

RtbfabricResponderGateway.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

RtbfabricResponderGateway.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

RtbfabricResponderGateway.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a RtbfabricResponderGateway resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the RtbfabricResponderGateway to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing RtbfabricResponderGateway that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the RtbfabricResponderGateway to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.certificateAssociationStatus">CertificateAssociationStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.createdTimestamp">CreatedTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.externalInboundEndpoint">ExternalInboundEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.gatewayId">GatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.listenerConfig">ListenerConfig</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference">RtbfabricResponderGatewayListenerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.managedEndpointConfiguration">ManagedEndpointConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference">RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.responderGatewayStatus">ResponderGatewayStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsList">RtbfabricResponderGatewayTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.trustStoreConfiguration">TrustStoreConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference">RtbfabricResponderGatewayTrustStoreConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.updatedTimestamp">UpdatedTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.acmCertificateArnInput">AcmCertificateArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.domainNameInput">DomainNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.gatewayTypeInput">GatewayTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.listenerConfigInput">ListenerConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfig">RtbfabricResponderGatewayListenerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.managedEndpointConfigurationInput">ManagedEndpointConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfiguration">RtbfabricResponderGatewayManagedEndpointConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.protocolInput">ProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.securityGroupIdsInput">SecurityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.subnetIdsInput">SubnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTags">RtbfabricResponderGatewayTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.trustStoreConfigurationInput">TrustStoreConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfiguration">RtbfabricResponderGatewayTrustStoreConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.vpcIdInput">VpcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.acmCertificateArn">AcmCertificateArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.domainName">DomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.gatewayType">GatewayType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.protocol">Protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.vpcId">VpcId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CertificateAssociationStatus`<sup>Required</sup> <a name="CertificateAssociationStatus" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.certificateAssociationStatus"></a>

```csharp
public string CertificateAssociationStatus { get; }
```

- *Type:* string

---

##### `CreatedTimestamp`<sup>Required</sup> <a name="CreatedTimestamp" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.createdTimestamp"></a>

```csharp
public string CreatedTimestamp { get; }
```

- *Type:* string

---

##### `ExternalInboundEndpoint`<sup>Required</sup> <a name="ExternalInboundEndpoint" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.externalInboundEndpoint"></a>

```csharp
public string ExternalInboundEndpoint { get; }
```

- *Type:* string

---

##### `GatewayId`<sup>Required</sup> <a name="GatewayId" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.gatewayId"></a>

```csharp
public string GatewayId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ListenerConfig`<sup>Required</sup> <a name="ListenerConfig" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.listenerConfig"></a>

```csharp
public RtbfabricResponderGatewayListenerConfigOutputReference ListenerConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference">RtbfabricResponderGatewayListenerConfigOutputReference</a>

---

##### `ManagedEndpointConfiguration`<sup>Required</sup> <a name="ManagedEndpointConfiguration" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.managedEndpointConfiguration"></a>

```csharp
public RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference ManagedEndpointConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference">RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference</a>

---

##### `ResponderGatewayStatus`<sup>Required</sup> <a name="ResponderGatewayStatus" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.responderGatewayStatus"></a>

```csharp
public string ResponderGatewayStatus { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.tags"></a>

```csharp
public RtbfabricResponderGatewayTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsList">RtbfabricResponderGatewayTagsList</a>

---

##### `TrustStoreConfiguration`<sup>Required</sup> <a name="TrustStoreConfiguration" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.trustStoreConfiguration"></a>

```csharp
public RtbfabricResponderGatewayTrustStoreConfigurationOutputReference TrustStoreConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference">RtbfabricResponderGatewayTrustStoreConfigurationOutputReference</a>

---

##### `UpdatedTimestamp`<sup>Required</sup> <a name="UpdatedTimestamp" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.updatedTimestamp"></a>

```csharp
public string UpdatedTimestamp { get; }
```

- *Type:* string

---

##### `AcmCertificateArnInput`<sup>Optional</sup> <a name="AcmCertificateArnInput" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.acmCertificateArnInput"></a>

```csharp
public string AcmCertificateArnInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DomainNameInput`<sup>Optional</sup> <a name="DomainNameInput" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.domainNameInput"></a>

```csharp
public string DomainNameInput { get; }
```

- *Type:* string

---

##### `GatewayTypeInput`<sup>Optional</sup> <a name="GatewayTypeInput" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.gatewayTypeInput"></a>

```csharp
public string GatewayTypeInput { get; }
```

- *Type:* string

---

##### `ListenerConfigInput`<sup>Optional</sup> <a name="ListenerConfigInput" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.listenerConfigInput"></a>

```csharp
public IResolvable|RtbfabricResponderGatewayListenerConfig ListenerConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfig">RtbfabricResponderGatewayListenerConfig</a>

---

##### `ManagedEndpointConfigurationInput`<sup>Optional</sup> <a name="ManagedEndpointConfigurationInput" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.managedEndpointConfigurationInput"></a>

```csharp
public IResolvable|RtbfabricResponderGatewayManagedEndpointConfiguration ManagedEndpointConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfiguration">RtbfabricResponderGatewayManagedEndpointConfiguration</a>

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.protocolInput"></a>

```csharp
public string ProtocolInput { get; }
```

- *Type:* string

---

##### `SecurityGroupIdsInput`<sup>Optional</sup> <a name="SecurityGroupIdsInput" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.securityGroupIdsInput"></a>

```csharp
public string[] SecurityGroupIdsInput { get; }
```

- *Type:* string[]

---

##### `SubnetIdsInput`<sup>Optional</sup> <a name="SubnetIdsInput" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.subnetIdsInput"></a>

```csharp
public string[] SubnetIdsInput { get; }
```

- *Type:* string[]

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.tagsInput"></a>

```csharp
public IResolvable|RtbfabricResponderGatewayTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTags">RtbfabricResponderGatewayTags</a>[]

---

##### `TrustStoreConfigurationInput`<sup>Optional</sup> <a name="TrustStoreConfigurationInput" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.trustStoreConfigurationInput"></a>

```csharp
public IResolvable|RtbfabricResponderGatewayTrustStoreConfiguration TrustStoreConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfiguration">RtbfabricResponderGatewayTrustStoreConfiguration</a>

---

##### `VpcIdInput`<sup>Optional</sup> <a name="VpcIdInput" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.vpcIdInput"></a>

```csharp
public string VpcIdInput { get; }
```

- *Type:* string

---

##### `AcmCertificateArn`<sup>Required</sup> <a name="AcmCertificateArn" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.acmCertificateArn"></a>

```csharp
public string AcmCertificateArn { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.domainName"></a>

```csharp
public string DomainName { get; }
```

- *Type:* string

---

##### `GatewayType`<sup>Required</sup> <a name="GatewayType" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.gatewayType"></a>

```csharp
public string GatewayType { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.protocol"></a>

```csharp
public string Protocol { get; }
```

- *Type:* string

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; }
```

- *Type:* string[]

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; }
```

- *Type:* string[]

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.vpcId"></a>

```csharp
public string VpcId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RtbfabricResponderGatewayConfig <a name="RtbfabricResponderGatewayConfig" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RtbfabricResponderGatewayConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    double Port,
    string Protocol,
    string[] SecurityGroupIds,
    string[] SubnetIds,
    string VpcId,
    string AcmCertificateArn = null,
    string Description = null,
    string DomainName = null,
    string GatewayType = null,
    RtbfabricResponderGatewayListenerConfig ListenerConfig = null,
    RtbfabricResponderGatewayManagedEndpointConfiguration ManagedEndpointConfiguration = null,
    IResolvable|RtbfabricResponderGatewayTags[] Tags = null,
    RtbfabricResponderGatewayTrustStoreConfiguration TrustStoreConfiguration = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.port">Port</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#port RtbfabricResponderGateway#port}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.protocol">Protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#protocol RtbfabricResponderGateway#protocol}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | The ID of one or more security groups in order to create a gateway. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | The ID of one or more subnets in order to create a gateway. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.vpcId">VpcId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#vpc_id RtbfabricResponderGateway#vpc_id}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.acmCertificateArn">AcmCertificateArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#acm_certificate_arn RtbfabricResponderGateway#acm_certificate_arn}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#description RtbfabricResponderGateway#description}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.domainName">DomainName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#domain_name RtbfabricResponderGateway#domain_name}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.gatewayType">GatewayType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#gateway_type RtbfabricResponderGateway#gateway_type}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.listenerConfig">ListenerConfig</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfig">RtbfabricResponderGatewayListenerConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#listener_config RtbfabricResponderGateway#listener_config}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.managedEndpointConfiguration">ManagedEndpointConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfiguration">RtbfabricResponderGatewayManagedEndpointConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#managed_endpoint_configuration RtbfabricResponderGateway#managed_endpoint_configuration}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTags">RtbfabricResponderGatewayTags</a>[]</code> | Tags to assign to the Responder Gateway. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.trustStoreConfiguration">TrustStoreConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfiguration">RtbfabricResponderGatewayTrustStoreConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#trust_store_configuration RtbfabricResponderGateway#trust_store_configuration}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#port RtbfabricResponderGateway#port}.

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.protocol"></a>

```csharp
public string Protocol { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#protocol RtbfabricResponderGateway#protocol}.

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; set; }
```

- *Type:* string[]

The ID of one or more security groups in order to create a gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#security_group_ids RtbfabricResponderGateway#security_group_ids}

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; set; }
```

- *Type:* string[]

The ID of one or more subnets in order to create a gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#subnet_ids RtbfabricResponderGateway#subnet_ids}

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.vpcId"></a>

```csharp
public string VpcId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#vpc_id RtbfabricResponderGateway#vpc_id}.

---

##### `AcmCertificateArn`<sup>Optional</sup> <a name="AcmCertificateArn" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.acmCertificateArn"></a>

```csharp
public string AcmCertificateArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#acm_certificate_arn RtbfabricResponderGateway#acm_certificate_arn}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#description RtbfabricResponderGateway#description}.

---

##### `DomainName`<sup>Optional</sup> <a name="DomainName" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.domainName"></a>

```csharp
public string DomainName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#domain_name RtbfabricResponderGateway#domain_name}.

---

##### `GatewayType`<sup>Optional</sup> <a name="GatewayType" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.gatewayType"></a>

```csharp
public string GatewayType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#gateway_type RtbfabricResponderGateway#gateway_type}.

---

##### `ListenerConfig`<sup>Optional</sup> <a name="ListenerConfig" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.listenerConfig"></a>

```csharp
public RtbfabricResponderGatewayListenerConfig ListenerConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfig">RtbfabricResponderGatewayListenerConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#listener_config RtbfabricResponderGateway#listener_config}.

---

##### `ManagedEndpointConfiguration`<sup>Optional</sup> <a name="ManagedEndpointConfiguration" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.managedEndpointConfiguration"></a>

```csharp
public RtbfabricResponderGatewayManagedEndpointConfiguration ManagedEndpointConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfiguration">RtbfabricResponderGatewayManagedEndpointConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#managed_endpoint_configuration RtbfabricResponderGateway#managed_endpoint_configuration}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.tags"></a>

```csharp
public IResolvable|RtbfabricResponderGatewayTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTags">RtbfabricResponderGatewayTags</a>[]

Tags to assign to the Responder Gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#tags RtbfabricResponderGateway#tags}

---

##### `TrustStoreConfiguration`<sup>Optional</sup> <a name="TrustStoreConfiguration" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.trustStoreConfiguration"></a>

```csharp
public RtbfabricResponderGatewayTrustStoreConfiguration TrustStoreConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfiguration">RtbfabricResponderGatewayTrustStoreConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#trust_store_configuration RtbfabricResponderGateway#trust_store_configuration}.

---

### RtbfabricResponderGatewayListenerConfig <a name="RtbfabricResponderGatewayListenerConfig" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RtbfabricResponderGatewayListenerConfig {
    string[] Protocols = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfig.property.protocols">Protocols</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#protocols RtbfabricResponderGateway#protocols}. |

---

##### `Protocols`<sup>Optional</sup> <a name="Protocols" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfig.property.protocols"></a>

```csharp
public string[] Protocols { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#protocols RtbfabricResponderGateway#protocols}.

---

### RtbfabricResponderGatewayManagedEndpointConfiguration <a name="RtbfabricResponderGatewayManagedEndpointConfiguration" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RtbfabricResponderGatewayManagedEndpointConfiguration {
    RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration AutoScalingGroupsConfiguration = null,
    RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration EksEndpointsConfiguration = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfiguration.property.autoScalingGroupsConfiguration">AutoScalingGroupsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration">RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#auto_scaling_groups_configuration RtbfabricResponderGateway#auto_scaling_groups_configuration}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfiguration.property.eksEndpointsConfiguration">EksEndpointsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration">RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#eks_endpoints_configuration RtbfabricResponderGateway#eks_endpoints_configuration}. |

---

##### `AutoScalingGroupsConfiguration`<sup>Optional</sup> <a name="AutoScalingGroupsConfiguration" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfiguration.property.autoScalingGroupsConfiguration"></a>

```csharp
public RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration AutoScalingGroupsConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration">RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#auto_scaling_groups_configuration RtbfabricResponderGateway#auto_scaling_groups_configuration}.

---

##### `EksEndpointsConfiguration`<sup>Optional</sup> <a name="EksEndpointsConfiguration" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfiguration.property.eksEndpointsConfiguration"></a>

```csharp
public RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration EksEndpointsConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration">RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#eks_endpoints_configuration RtbfabricResponderGateway#eks_endpoints_configuration}.

---

### RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration <a name="RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration {
    string[] AutoScalingGroupNameList = null,
    RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig HealthCheckConfig = null,
    string RoleArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration.property.autoScalingGroupNameList">AutoScalingGroupNameList</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#auto_scaling_group_name_list RtbfabricResponderGateway#auto_scaling_group_name_list}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration.property.healthCheckConfig">HealthCheckConfig</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig">RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#health_check_config RtbfabricResponderGateway#health_check_config}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration.property.roleArn">RoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#role_arn RtbfabricResponderGateway#role_arn}. |

---

##### `AutoScalingGroupNameList`<sup>Optional</sup> <a name="AutoScalingGroupNameList" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration.property.autoScalingGroupNameList"></a>

```csharp
public string[] AutoScalingGroupNameList { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#auto_scaling_group_name_list RtbfabricResponderGateway#auto_scaling_group_name_list}.

---

##### `HealthCheckConfig`<sup>Optional</sup> <a name="HealthCheckConfig" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration.property.healthCheckConfig"></a>

```csharp
public RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig HealthCheckConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig">RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#health_check_config RtbfabricResponderGateway#health_check_config}.

---

##### `RoleArn`<sup>Optional</sup> <a name="RoleArn" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration.property.roleArn"></a>

```csharp
public string RoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#role_arn RtbfabricResponderGateway#role_arn}.

---

### RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig <a name="RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig {
    double HealthyThresholdCount = null,
    double IntervalSeconds = null,
    string Path = null,
    double Port = null,
    string Protocol = null,
    string StatusCodeMatcher = null,
    double TimeoutMs = null,
    double UnhealthyThresholdCount = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig.property.healthyThresholdCount">HealthyThresholdCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#healthy_threshold_count RtbfabricResponderGateway#healthy_threshold_count}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig.property.intervalSeconds">IntervalSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#interval_seconds RtbfabricResponderGateway#interval_seconds}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig.property.path">Path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#path RtbfabricResponderGateway#path}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig.property.port">Port</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#port RtbfabricResponderGateway#port}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig.property.protocol">Protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#protocol RtbfabricResponderGateway#protocol}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig.property.statusCodeMatcher">StatusCodeMatcher</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#status_code_matcher RtbfabricResponderGateway#status_code_matcher}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig.property.timeoutMs">TimeoutMs</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#timeout_ms RtbfabricResponderGateway#timeout_ms}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig.property.unhealthyThresholdCount">UnhealthyThresholdCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#unhealthy_threshold_count RtbfabricResponderGateway#unhealthy_threshold_count}. |

---

##### `HealthyThresholdCount`<sup>Optional</sup> <a name="HealthyThresholdCount" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig.property.healthyThresholdCount"></a>

```csharp
public double HealthyThresholdCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#healthy_threshold_count RtbfabricResponderGateway#healthy_threshold_count}.

---

##### `IntervalSeconds`<sup>Optional</sup> <a name="IntervalSeconds" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig.property.intervalSeconds"></a>

```csharp
public double IntervalSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#interval_seconds RtbfabricResponderGateway#interval_seconds}.

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#path RtbfabricResponderGateway#path}.

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#port RtbfabricResponderGateway#port}.

---

##### `Protocol`<sup>Optional</sup> <a name="Protocol" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig.property.protocol"></a>

```csharp
public string Protocol { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#protocol RtbfabricResponderGateway#protocol}.

---

##### `StatusCodeMatcher`<sup>Optional</sup> <a name="StatusCodeMatcher" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig.property.statusCodeMatcher"></a>

```csharp
public string StatusCodeMatcher { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#status_code_matcher RtbfabricResponderGateway#status_code_matcher}.

---

##### `TimeoutMs`<sup>Optional</sup> <a name="TimeoutMs" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig.property.timeoutMs"></a>

```csharp
public double TimeoutMs { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#timeout_ms RtbfabricResponderGateway#timeout_ms}.

---

##### `UnhealthyThresholdCount`<sup>Optional</sup> <a name="UnhealthyThresholdCount" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig.property.unhealthyThresholdCount"></a>

```csharp
public double UnhealthyThresholdCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#unhealthy_threshold_count RtbfabricResponderGateway#unhealthy_threshold_count}.

---

### RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration <a name="RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration {
    string ClusterApiServerCaCertificateChain = null,
    string ClusterApiServerEndpointUri = null,
    string ClusterName = null,
    string EndpointsResourceName = null,
    string EndpointsResourceNamespace = null,
    string RoleArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration.property.clusterApiServerCaCertificateChain">ClusterApiServerCaCertificateChain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#cluster_api_server_ca_certificate_chain RtbfabricResponderGateway#cluster_api_server_ca_certificate_chain}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration.property.clusterApiServerEndpointUri">ClusterApiServerEndpointUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#cluster_api_server_endpoint_uri RtbfabricResponderGateway#cluster_api_server_endpoint_uri}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration.property.clusterName">ClusterName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#cluster_name RtbfabricResponderGateway#cluster_name}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration.property.endpointsResourceName">EndpointsResourceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#endpoints_resource_name RtbfabricResponderGateway#endpoints_resource_name}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration.property.endpointsResourceNamespace">EndpointsResourceNamespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#endpoints_resource_namespace RtbfabricResponderGateway#endpoints_resource_namespace}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration.property.roleArn">RoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#role_arn RtbfabricResponderGateway#role_arn}. |

---

##### `ClusterApiServerCaCertificateChain`<sup>Optional</sup> <a name="ClusterApiServerCaCertificateChain" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration.property.clusterApiServerCaCertificateChain"></a>

```csharp
public string ClusterApiServerCaCertificateChain { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#cluster_api_server_ca_certificate_chain RtbfabricResponderGateway#cluster_api_server_ca_certificate_chain}.

---

##### `ClusterApiServerEndpointUri`<sup>Optional</sup> <a name="ClusterApiServerEndpointUri" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration.property.clusterApiServerEndpointUri"></a>

```csharp
public string ClusterApiServerEndpointUri { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#cluster_api_server_endpoint_uri RtbfabricResponderGateway#cluster_api_server_endpoint_uri}.

---

##### `ClusterName`<sup>Optional</sup> <a name="ClusterName" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration.property.clusterName"></a>

```csharp
public string ClusterName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#cluster_name RtbfabricResponderGateway#cluster_name}.

---

##### `EndpointsResourceName`<sup>Optional</sup> <a name="EndpointsResourceName" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration.property.endpointsResourceName"></a>

```csharp
public string EndpointsResourceName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#endpoints_resource_name RtbfabricResponderGateway#endpoints_resource_name}.

---

##### `EndpointsResourceNamespace`<sup>Optional</sup> <a name="EndpointsResourceNamespace" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration.property.endpointsResourceNamespace"></a>

```csharp
public string EndpointsResourceNamespace { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#endpoints_resource_namespace RtbfabricResponderGateway#endpoints_resource_namespace}.

---

##### `RoleArn`<sup>Optional</sup> <a name="RoleArn" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration.property.roleArn"></a>

```csharp
public string RoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#role_arn RtbfabricResponderGateway#role_arn}.

---

### RtbfabricResponderGatewayTags <a name="RtbfabricResponderGatewayTags" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RtbfabricResponderGatewayTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTags.property.key">Key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTags.property.value">Value</a></code> | <code>string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#key RtbfabricResponderGateway#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#value RtbfabricResponderGateway#value}

---

### RtbfabricResponderGatewayTrustStoreConfiguration <a name="RtbfabricResponderGatewayTrustStoreConfiguration" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RtbfabricResponderGatewayTrustStoreConfiguration {
    string[] CertificateAuthorityCertificates = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfiguration.property.certificateAuthorityCertificates">CertificateAuthorityCertificates</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#certificate_authority_certificates RtbfabricResponderGateway#certificate_authority_certificates}. |

---

##### `CertificateAuthorityCertificates`<sup>Optional</sup> <a name="CertificateAuthorityCertificates" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfiguration.property.certificateAuthorityCertificates"></a>

```csharp
public string[] CertificateAuthorityCertificates { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#certificate_authority_certificates RtbfabricResponderGateway#certificate_authority_certificates}.

---

## Classes <a name="Classes" id="Classes"></a>

### RtbfabricResponderGatewayListenerConfigOutputReference <a name="RtbfabricResponderGatewayListenerConfigOutputReference" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RtbfabricResponderGatewayListenerConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.resetProtocols">ResetProtocols</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetProtocols` <a name="ResetProtocols" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.resetProtocols"></a>

```csharp
private void ResetProtocols()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.property.protocolsInput">ProtocolsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.property.protocols">Protocols</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfig">RtbfabricResponderGatewayListenerConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ProtocolsInput`<sup>Optional</sup> <a name="ProtocolsInput" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.property.protocolsInput"></a>

```csharp
public string[] ProtocolsInput { get; }
```

- *Type:* string[]

---

##### `Protocols`<sup>Required</sup> <a name="Protocols" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.property.protocols"></a>

```csharp
public string[] Protocols { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|RtbfabricResponderGatewayListenerConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfig">RtbfabricResponderGatewayListenerConfig</a>

---


### RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference <a name="RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.resetHealthyThresholdCount">ResetHealthyThresholdCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.resetIntervalSeconds">ResetIntervalSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.resetPath">ResetPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.resetProtocol">ResetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.resetStatusCodeMatcher">ResetStatusCodeMatcher</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.resetTimeoutMs">ResetTimeoutMs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.resetUnhealthyThresholdCount">ResetUnhealthyThresholdCount</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHealthyThresholdCount` <a name="ResetHealthyThresholdCount" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.resetHealthyThresholdCount"></a>

```csharp
private void ResetHealthyThresholdCount()
```

##### `ResetIntervalSeconds` <a name="ResetIntervalSeconds" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.resetIntervalSeconds"></a>

```csharp
private void ResetIntervalSeconds()
```

##### `ResetPath` <a name="ResetPath" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.resetPath"></a>

```csharp
private void ResetPath()
```

##### `ResetPort` <a name="ResetPort" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.resetPort"></a>

```csharp
private void ResetPort()
```

##### `ResetProtocol` <a name="ResetProtocol" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.resetProtocol"></a>

```csharp
private void ResetProtocol()
```

##### `ResetStatusCodeMatcher` <a name="ResetStatusCodeMatcher" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.resetStatusCodeMatcher"></a>

```csharp
private void ResetStatusCodeMatcher()
```

##### `ResetTimeoutMs` <a name="ResetTimeoutMs" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.resetTimeoutMs"></a>

```csharp
private void ResetTimeoutMs()
```

##### `ResetUnhealthyThresholdCount` <a name="ResetUnhealthyThresholdCount" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.resetUnhealthyThresholdCount"></a>

```csharp
private void ResetUnhealthyThresholdCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.healthyThresholdCountInput">HealthyThresholdCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.intervalSecondsInput">IntervalSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.statusCodeMatcherInput">StatusCodeMatcherInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.timeoutMsInput">TimeoutMsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.unhealthyThresholdCountInput">UnhealthyThresholdCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.healthyThresholdCount">HealthyThresholdCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.intervalSeconds">IntervalSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.protocol">Protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.statusCodeMatcher">StatusCodeMatcher</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.timeoutMs">TimeoutMs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.unhealthyThresholdCount">UnhealthyThresholdCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig">RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HealthyThresholdCountInput`<sup>Optional</sup> <a name="HealthyThresholdCountInput" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.healthyThresholdCountInput"></a>

```csharp
public double HealthyThresholdCountInput { get; }
```

- *Type:* double

---

##### `IntervalSecondsInput`<sup>Optional</sup> <a name="IntervalSecondsInput" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.intervalSecondsInput"></a>

```csharp
public double IntervalSecondsInput { get; }
```

- *Type:* double

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.protocolInput"></a>

```csharp
public string ProtocolInput { get; }
```

- *Type:* string

---

##### `StatusCodeMatcherInput`<sup>Optional</sup> <a name="StatusCodeMatcherInput" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.statusCodeMatcherInput"></a>

```csharp
public string StatusCodeMatcherInput { get; }
```

- *Type:* string

---

##### `TimeoutMsInput`<sup>Optional</sup> <a name="TimeoutMsInput" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.timeoutMsInput"></a>

```csharp
public double TimeoutMsInput { get; }
```

- *Type:* double

---

##### `UnhealthyThresholdCountInput`<sup>Optional</sup> <a name="UnhealthyThresholdCountInput" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.unhealthyThresholdCountInput"></a>

```csharp
public double UnhealthyThresholdCountInput { get; }
```

- *Type:* double

---

##### `HealthyThresholdCount`<sup>Required</sup> <a name="HealthyThresholdCount" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.healthyThresholdCount"></a>

```csharp
public double HealthyThresholdCount { get; }
```

- *Type:* double

---

##### `IntervalSeconds`<sup>Required</sup> <a name="IntervalSeconds" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.intervalSeconds"></a>

```csharp
public double IntervalSeconds { get; }
```

- *Type:* double

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.protocol"></a>

```csharp
public string Protocol { get; }
```

- *Type:* string

---

##### `StatusCodeMatcher`<sup>Required</sup> <a name="StatusCodeMatcher" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.statusCodeMatcher"></a>

```csharp
public string StatusCodeMatcher { get; }
```

- *Type:* string

---

##### `TimeoutMs`<sup>Required</sup> <a name="TimeoutMs" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.timeoutMs"></a>

```csharp
public double TimeoutMs { get; }
```

- *Type:* double

---

##### `UnhealthyThresholdCount`<sup>Required</sup> <a name="UnhealthyThresholdCount" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.unhealthyThresholdCount"></a>

```csharp
public double UnhealthyThresholdCount { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig">RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig</a>

---


### RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference <a name="RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.putHealthCheckConfig">PutHealthCheckConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.resetAutoScalingGroupNameList">ResetAutoScalingGroupNameList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.resetHealthCheckConfig">ResetHealthCheckConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.resetRoleArn">ResetRoleArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHealthCheckConfig` <a name="PutHealthCheckConfig" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.putHealthCheckConfig"></a>

```csharp
private void PutHealthCheckConfig(RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.putHealthCheckConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig">RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig</a>

---

##### `ResetAutoScalingGroupNameList` <a name="ResetAutoScalingGroupNameList" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.resetAutoScalingGroupNameList"></a>

```csharp
private void ResetAutoScalingGroupNameList()
```

##### `ResetHealthCheckConfig` <a name="ResetHealthCheckConfig" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.resetHealthCheckConfig"></a>

```csharp
private void ResetHealthCheckConfig()
```

##### `ResetRoleArn` <a name="ResetRoleArn" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.resetRoleArn"></a>

```csharp
private void ResetRoleArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.property.healthCheckConfig">HealthCheckConfig</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference">RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.property.autoScalingGroupNameListInput">AutoScalingGroupNameListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.property.healthCheckConfigInput">HealthCheckConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig">RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.property.roleArnInput">RoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.property.autoScalingGroupNameList">AutoScalingGroupNameList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration">RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HealthCheckConfig`<sup>Required</sup> <a name="HealthCheckConfig" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.property.healthCheckConfig"></a>

```csharp
public RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference HealthCheckConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference">RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference</a>

---

##### `AutoScalingGroupNameListInput`<sup>Optional</sup> <a name="AutoScalingGroupNameListInput" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.property.autoScalingGroupNameListInput"></a>

```csharp
public string[] AutoScalingGroupNameListInput { get; }
```

- *Type:* string[]

---

##### `HealthCheckConfigInput`<sup>Optional</sup> <a name="HealthCheckConfigInput" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.property.healthCheckConfigInput"></a>

```csharp
public IResolvable|RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig HealthCheckConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig">RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig</a>

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.property.roleArnInput"></a>

```csharp
public string RoleArnInput { get; }
```

- *Type:* string

---

##### `AutoScalingGroupNameList`<sup>Required</sup> <a name="AutoScalingGroupNameList" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.property.autoScalingGroupNameList"></a>

```csharp
public string[] AutoScalingGroupNameList { get; }
```

- *Type:* string[]

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration">RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration</a>

---


### RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference <a name="RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.resetClusterApiServerCaCertificateChain">ResetClusterApiServerCaCertificateChain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.resetClusterApiServerEndpointUri">ResetClusterApiServerEndpointUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.resetClusterName">ResetClusterName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.resetEndpointsResourceName">ResetEndpointsResourceName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.resetEndpointsResourceNamespace">ResetEndpointsResourceNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.resetRoleArn">ResetRoleArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetClusterApiServerCaCertificateChain` <a name="ResetClusterApiServerCaCertificateChain" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.resetClusterApiServerCaCertificateChain"></a>

```csharp
private void ResetClusterApiServerCaCertificateChain()
```

##### `ResetClusterApiServerEndpointUri` <a name="ResetClusterApiServerEndpointUri" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.resetClusterApiServerEndpointUri"></a>

```csharp
private void ResetClusterApiServerEndpointUri()
```

##### `ResetClusterName` <a name="ResetClusterName" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.resetClusterName"></a>

```csharp
private void ResetClusterName()
```

##### `ResetEndpointsResourceName` <a name="ResetEndpointsResourceName" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.resetEndpointsResourceName"></a>

```csharp
private void ResetEndpointsResourceName()
```

##### `ResetEndpointsResourceNamespace` <a name="ResetEndpointsResourceNamespace" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.resetEndpointsResourceNamespace"></a>

```csharp
private void ResetEndpointsResourceNamespace()
```

##### `ResetRoleArn` <a name="ResetRoleArn" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.resetRoleArn"></a>

```csharp
private void ResetRoleArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.clusterApiServerCaCertificateChainInput">ClusterApiServerCaCertificateChainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.clusterApiServerEndpointUriInput">ClusterApiServerEndpointUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.clusterNameInput">ClusterNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.endpointsResourceNameInput">EndpointsResourceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.endpointsResourceNamespaceInput">EndpointsResourceNamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.roleArnInput">RoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.clusterApiServerCaCertificateChain">ClusterApiServerCaCertificateChain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.clusterApiServerEndpointUri">ClusterApiServerEndpointUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.clusterName">ClusterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.endpointsResourceName">EndpointsResourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.endpointsResourceNamespace">EndpointsResourceNamespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration">RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClusterApiServerCaCertificateChainInput`<sup>Optional</sup> <a name="ClusterApiServerCaCertificateChainInput" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.clusterApiServerCaCertificateChainInput"></a>

```csharp
public string ClusterApiServerCaCertificateChainInput { get; }
```

- *Type:* string

---

##### `ClusterApiServerEndpointUriInput`<sup>Optional</sup> <a name="ClusterApiServerEndpointUriInput" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.clusterApiServerEndpointUriInput"></a>

```csharp
public string ClusterApiServerEndpointUriInput { get; }
```

- *Type:* string

---

##### `ClusterNameInput`<sup>Optional</sup> <a name="ClusterNameInput" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.clusterNameInput"></a>

```csharp
public string ClusterNameInput { get; }
```

- *Type:* string

---

##### `EndpointsResourceNameInput`<sup>Optional</sup> <a name="EndpointsResourceNameInput" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.endpointsResourceNameInput"></a>

```csharp
public string EndpointsResourceNameInput { get; }
```

- *Type:* string

---

##### `EndpointsResourceNamespaceInput`<sup>Optional</sup> <a name="EndpointsResourceNamespaceInput" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.endpointsResourceNamespaceInput"></a>

```csharp
public string EndpointsResourceNamespaceInput { get; }
```

- *Type:* string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.roleArnInput"></a>

```csharp
public string RoleArnInput { get; }
```

- *Type:* string

---

##### `ClusterApiServerCaCertificateChain`<sup>Required</sup> <a name="ClusterApiServerCaCertificateChain" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.clusterApiServerCaCertificateChain"></a>

```csharp
public string ClusterApiServerCaCertificateChain { get; }
```

- *Type:* string

---

##### `ClusterApiServerEndpointUri`<sup>Required</sup> <a name="ClusterApiServerEndpointUri" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.clusterApiServerEndpointUri"></a>

```csharp
public string ClusterApiServerEndpointUri { get; }
```

- *Type:* string

---

##### `ClusterName`<sup>Required</sup> <a name="ClusterName" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.clusterName"></a>

```csharp
public string ClusterName { get; }
```

- *Type:* string

---

##### `EndpointsResourceName`<sup>Required</sup> <a name="EndpointsResourceName" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.endpointsResourceName"></a>

```csharp
public string EndpointsResourceName { get; }
```

- *Type:* string

---

##### `EndpointsResourceNamespace`<sup>Required</sup> <a name="EndpointsResourceNamespace" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.endpointsResourceNamespace"></a>

```csharp
public string EndpointsResourceNamespace { get; }
```

- *Type:* string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration">RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration</a>

---


### RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference <a name="RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.putAutoScalingGroupsConfiguration">PutAutoScalingGroupsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.putEksEndpointsConfiguration">PutEksEndpointsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.resetAutoScalingGroupsConfiguration">ResetAutoScalingGroupsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.resetEksEndpointsConfiguration">ResetEksEndpointsConfiguration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAutoScalingGroupsConfiguration` <a name="PutAutoScalingGroupsConfiguration" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.putAutoScalingGroupsConfiguration"></a>

```csharp
private void PutAutoScalingGroupsConfiguration(RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.putAutoScalingGroupsConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration">RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration</a>

---

##### `PutEksEndpointsConfiguration` <a name="PutEksEndpointsConfiguration" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.putEksEndpointsConfiguration"></a>

```csharp
private void PutEksEndpointsConfiguration(RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.putEksEndpointsConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration">RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration</a>

---

##### `ResetAutoScalingGroupsConfiguration` <a name="ResetAutoScalingGroupsConfiguration" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.resetAutoScalingGroupsConfiguration"></a>

```csharp
private void ResetAutoScalingGroupsConfiguration()
```

##### `ResetEksEndpointsConfiguration` <a name="ResetEksEndpointsConfiguration" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.resetEksEndpointsConfiguration"></a>

```csharp
private void ResetEksEndpointsConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.property.autoScalingGroupsConfiguration">AutoScalingGroupsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference">RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.property.eksEndpointsConfiguration">EksEndpointsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference">RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.property.autoScalingGroupsConfigurationInput">AutoScalingGroupsConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration">RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.property.eksEndpointsConfigurationInput">EksEndpointsConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration">RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfiguration">RtbfabricResponderGatewayManagedEndpointConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AutoScalingGroupsConfiguration`<sup>Required</sup> <a name="AutoScalingGroupsConfiguration" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.property.autoScalingGroupsConfiguration"></a>

```csharp
public RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference AutoScalingGroupsConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference">RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference</a>

---

##### `EksEndpointsConfiguration`<sup>Required</sup> <a name="EksEndpointsConfiguration" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.property.eksEndpointsConfiguration"></a>

```csharp
public RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference EksEndpointsConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference">RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference</a>

---

##### `AutoScalingGroupsConfigurationInput`<sup>Optional</sup> <a name="AutoScalingGroupsConfigurationInput" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.property.autoScalingGroupsConfigurationInput"></a>

```csharp
public IResolvable|RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration AutoScalingGroupsConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration">RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration</a>

---

##### `EksEndpointsConfigurationInput`<sup>Optional</sup> <a name="EksEndpointsConfigurationInput" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.property.eksEndpointsConfigurationInput"></a>

```csharp
public IResolvable|RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration EksEndpointsConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration">RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|RtbfabricResponderGatewayManagedEndpointConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfiguration">RtbfabricResponderGatewayManagedEndpointConfiguration</a>

---


### RtbfabricResponderGatewayTagsList <a name="RtbfabricResponderGatewayTagsList" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RtbfabricResponderGatewayTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsList.get"></a>

```csharp
private RtbfabricResponderGatewayTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTags">RtbfabricResponderGatewayTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsList.property.internalValue"></a>

```csharp
public IResolvable|RtbfabricResponderGatewayTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTags">RtbfabricResponderGatewayTags</a>[]

---


### RtbfabricResponderGatewayTagsOutputReference <a name="RtbfabricResponderGatewayTagsOutputReference" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RtbfabricResponderGatewayTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTags">RtbfabricResponderGatewayTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|RtbfabricResponderGatewayTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTags">RtbfabricResponderGatewayTags</a>

---


### RtbfabricResponderGatewayTrustStoreConfigurationOutputReference <a name="RtbfabricResponderGatewayTrustStoreConfigurationOutputReference" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RtbfabricResponderGatewayTrustStoreConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.resetCertificateAuthorityCertificates">ResetCertificateAuthorityCertificates</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCertificateAuthorityCertificates` <a name="ResetCertificateAuthorityCertificates" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.resetCertificateAuthorityCertificates"></a>

```csharp
private void ResetCertificateAuthorityCertificates()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.property.certificateAuthorityCertificatesInput">CertificateAuthorityCertificatesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.property.certificateAuthorityCertificates">CertificateAuthorityCertificates</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfiguration">RtbfabricResponderGatewayTrustStoreConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CertificateAuthorityCertificatesInput`<sup>Optional</sup> <a name="CertificateAuthorityCertificatesInput" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.property.certificateAuthorityCertificatesInput"></a>

```csharp
public string[] CertificateAuthorityCertificatesInput { get; }
```

- *Type:* string[]

---

##### `CertificateAuthorityCertificates`<sup>Required</sup> <a name="CertificateAuthorityCertificates" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.property.certificateAuthorityCertificates"></a>

```csharp
public string[] CertificateAuthorityCertificates { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|RtbfabricResponderGatewayTrustStoreConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfiguration">RtbfabricResponderGatewayTrustStoreConfiguration</a>

---



