# `ec2VerifiedAccessEndpoint` Submodule <a name="`ec2VerifiedAccessEndpoint` Submodule" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2VerifiedAccessEndpoint <a name="Ec2VerifiedAccessEndpoint" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_verified_access_endpoint awscc_ec2_verified_access_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2VerifiedAccessEndpoint(Construct Scope, string Id, Ec2VerifiedAccessEndpointConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig">Ec2VerifiedAccessEndpointConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig">Ec2VerifiedAccessEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.putCidrOptions">PutCidrOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.putLoadBalancerOptions">PutLoadBalancerOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.putNetworkInterfaceOptions">PutNetworkInterfaceOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.putRdsOptions">PutRdsOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.putSseSpecification">PutSseSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.resetApplicationDomain">ResetApplicationDomain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.resetCidrOptions">ResetCidrOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.resetDomainCertificateArn">ResetDomainCertificateArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.resetEndpointDomainPrefix">ResetEndpointDomainPrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.resetLoadBalancerOptions">ResetLoadBalancerOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.resetNetworkInterfaceOptions">ResetNetworkInterfaceOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.resetPolicyDocument">ResetPolicyDocument</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.resetPolicyEnabled">ResetPolicyEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.resetRdsOptions">ResetRdsOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.resetSecurityGroupIds">ResetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.resetSseSpecification">ResetSseSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCidrOptions` <a name="PutCidrOptions" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.putCidrOptions"></a>

```csharp
private void PutCidrOptions(Ec2VerifiedAccessEndpointCidrOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.putCidrOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptions">Ec2VerifiedAccessEndpointCidrOptions</a>

---

##### `PutLoadBalancerOptions` <a name="PutLoadBalancerOptions" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.putLoadBalancerOptions"></a>

```csharp
private void PutLoadBalancerOptions(Ec2VerifiedAccessEndpointLoadBalancerOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.putLoadBalancerOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptions">Ec2VerifiedAccessEndpointLoadBalancerOptions</a>

---

##### `PutNetworkInterfaceOptions` <a name="PutNetworkInterfaceOptions" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.putNetworkInterfaceOptions"></a>

```csharp
private void PutNetworkInterfaceOptions(Ec2VerifiedAccessEndpointNetworkInterfaceOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.putNetworkInterfaceOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptions">Ec2VerifiedAccessEndpointNetworkInterfaceOptions</a>

---

##### `PutRdsOptions` <a name="PutRdsOptions" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.putRdsOptions"></a>

```csharp
private void PutRdsOptions(Ec2VerifiedAccessEndpointRdsOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.putRdsOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptions">Ec2VerifiedAccessEndpointRdsOptions</a>

---

##### `PutSseSpecification` <a name="PutSseSpecification" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.putSseSpecification"></a>

```csharp
private void PutSseSpecification(Ec2VerifiedAccessEndpointSseSpecification Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.putSseSpecification.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecification">Ec2VerifiedAccessEndpointSseSpecification</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.putTags"></a>

```csharp
private void PutTags(IResolvable|Ec2VerifiedAccessEndpointTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTags">Ec2VerifiedAccessEndpointTags</a>[]

---

##### `ResetApplicationDomain` <a name="ResetApplicationDomain" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.resetApplicationDomain"></a>

```csharp
private void ResetApplicationDomain()
```

##### `ResetCidrOptions` <a name="ResetCidrOptions" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.resetCidrOptions"></a>

```csharp
private void ResetCidrOptions()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDomainCertificateArn` <a name="ResetDomainCertificateArn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.resetDomainCertificateArn"></a>

```csharp
private void ResetDomainCertificateArn()
```

##### `ResetEndpointDomainPrefix` <a name="ResetEndpointDomainPrefix" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.resetEndpointDomainPrefix"></a>

```csharp
private void ResetEndpointDomainPrefix()
```

##### `ResetLoadBalancerOptions` <a name="ResetLoadBalancerOptions" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.resetLoadBalancerOptions"></a>

```csharp
private void ResetLoadBalancerOptions()
```

##### `ResetNetworkInterfaceOptions` <a name="ResetNetworkInterfaceOptions" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.resetNetworkInterfaceOptions"></a>

```csharp
private void ResetNetworkInterfaceOptions()
```

##### `ResetPolicyDocument` <a name="ResetPolicyDocument" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.resetPolicyDocument"></a>

```csharp
private void ResetPolicyDocument()
```

##### `ResetPolicyEnabled` <a name="ResetPolicyEnabled" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.resetPolicyEnabled"></a>

```csharp
private void ResetPolicyEnabled()
```

##### `ResetRdsOptions` <a name="ResetRdsOptions" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.resetRdsOptions"></a>

```csharp
private void ResetRdsOptions()
```

##### `ResetSecurityGroupIds` <a name="ResetSecurityGroupIds" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.resetSecurityGroupIds"></a>

```csharp
private void ResetSecurityGroupIds()
```

##### `ResetSseSpecification` <a name="ResetSseSpecification" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.resetSseSpecification"></a>

```csharp
private void ResetSseSpecification()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Ec2VerifiedAccessEndpoint resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Ec2VerifiedAccessEndpoint.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Ec2VerifiedAccessEndpoint.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Ec2VerifiedAccessEndpoint.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Ec2VerifiedAccessEndpoint.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a Ec2VerifiedAccessEndpoint resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Ec2VerifiedAccessEndpoint to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Ec2VerifiedAccessEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_verified_access_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the Ec2VerifiedAccessEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.cidrOptions">CidrOptions</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference">Ec2VerifiedAccessEndpointCidrOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.creationTime">CreationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.deviceValidationDomain">DeviceValidationDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.endpointDomain">EndpointDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.lastUpdatedTime">LastUpdatedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.loadBalancerOptions">LoadBalancerOptions</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference">Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.networkInterfaceOptions">NetworkInterfaceOptions</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference">Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.rdsOptions">RdsOptions</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference">Ec2VerifiedAccessEndpointRdsOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.sseSpecification">SseSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference">Ec2VerifiedAccessEndpointSseSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsList">Ec2VerifiedAccessEndpointTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.verifiedAccessEndpointId">VerifiedAccessEndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.verifiedAccessInstanceId">VerifiedAccessInstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.applicationDomainInput">ApplicationDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.attachmentTypeInput">AttachmentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.cidrOptionsInput">CidrOptionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptions">Ec2VerifiedAccessEndpointCidrOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.domainCertificateArnInput">DomainCertificateArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.endpointDomainPrefixInput">EndpointDomainPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.endpointTypeInput">EndpointTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.loadBalancerOptionsInput">LoadBalancerOptionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptions">Ec2VerifiedAccessEndpointLoadBalancerOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.networkInterfaceOptionsInput">NetworkInterfaceOptionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptions">Ec2VerifiedAccessEndpointNetworkInterfaceOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.policyDocumentInput">PolicyDocumentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.policyEnabledInput">PolicyEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.rdsOptionsInput">RdsOptionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptions">Ec2VerifiedAccessEndpointRdsOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.securityGroupIdsInput">SecurityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.sseSpecificationInput">SseSpecificationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecification">Ec2VerifiedAccessEndpointSseSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTags">Ec2VerifiedAccessEndpointTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.verifiedAccessGroupIdInput">VerifiedAccessGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.applicationDomain">ApplicationDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.attachmentType">AttachmentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.domainCertificateArn">DomainCertificateArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.endpointDomainPrefix">EndpointDomainPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.endpointType">EndpointType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.policyDocument">PolicyDocument</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.policyEnabled">PolicyEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.verifiedAccessGroupId">VerifiedAccessGroupId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CidrOptions`<sup>Required</sup> <a name="CidrOptions" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.cidrOptions"></a>

```csharp
public Ec2VerifiedAccessEndpointCidrOptionsOutputReference CidrOptions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference">Ec2VerifiedAccessEndpointCidrOptionsOutputReference</a>

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.creationTime"></a>

```csharp
public string CreationTime { get; }
```

- *Type:* string

---

##### `DeviceValidationDomain`<sup>Required</sup> <a name="DeviceValidationDomain" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.deviceValidationDomain"></a>

```csharp
public string DeviceValidationDomain { get; }
```

- *Type:* string

---

##### `EndpointDomain`<sup>Required</sup> <a name="EndpointDomain" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.endpointDomain"></a>

```csharp
public string EndpointDomain { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LastUpdatedTime`<sup>Required</sup> <a name="LastUpdatedTime" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.lastUpdatedTime"></a>

```csharp
public string LastUpdatedTime { get; }
```

- *Type:* string

---

##### `LoadBalancerOptions`<sup>Required</sup> <a name="LoadBalancerOptions" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.loadBalancerOptions"></a>

```csharp
public Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference LoadBalancerOptions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference">Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference</a>

---

##### `NetworkInterfaceOptions`<sup>Required</sup> <a name="NetworkInterfaceOptions" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.networkInterfaceOptions"></a>

```csharp
public Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference NetworkInterfaceOptions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference">Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference</a>

---

##### `RdsOptions`<sup>Required</sup> <a name="RdsOptions" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.rdsOptions"></a>

```csharp
public Ec2VerifiedAccessEndpointRdsOptionsOutputReference RdsOptions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference">Ec2VerifiedAccessEndpointRdsOptionsOutputReference</a>

---

##### `SseSpecification`<sup>Required</sup> <a name="SseSpecification" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.sseSpecification"></a>

```csharp
public Ec2VerifiedAccessEndpointSseSpecificationOutputReference SseSpecification { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference">Ec2VerifiedAccessEndpointSseSpecificationOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.tags"></a>

```csharp
public Ec2VerifiedAccessEndpointTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsList">Ec2VerifiedAccessEndpointTagsList</a>

---

##### `VerifiedAccessEndpointId`<sup>Required</sup> <a name="VerifiedAccessEndpointId" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.verifiedAccessEndpointId"></a>

```csharp
public string VerifiedAccessEndpointId { get; }
```

- *Type:* string

---

##### `VerifiedAccessInstanceId`<sup>Required</sup> <a name="VerifiedAccessInstanceId" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.verifiedAccessInstanceId"></a>

```csharp
public string VerifiedAccessInstanceId { get; }
```

- *Type:* string

---

##### `ApplicationDomainInput`<sup>Optional</sup> <a name="ApplicationDomainInput" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.applicationDomainInput"></a>

```csharp
public string ApplicationDomainInput { get; }
```

- *Type:* string

---

##### `AttachmentTypeInput`<sup>Optional</sup> <a name="AttachmentTypeInput" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.attachmentTypeInput"></a>

```csharp
public string AttachmentTypeInput { get; }
```

- *Type:* string

---

##### `CidrOptionsInput`<sup>Optional</sup> <a name="CidrOptionsInput" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.cidrOptionsInput"></a>

```csharp
public IResolvable|Ec2VerifiedAccessEndpointCidrOptions CidrOptionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptions">Ec2VerifiedAccessEndpointCidrOptions</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DomainCertificateArnInput`<sup>Optional</sup> <a name="DomainCertificateArnInput" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.domainCertificateArnInput"></a>

```csharp
public string DomainCertificateArnInput { get; }
```

- *Type:* string

---

##### `EndpointDomainPrefixInput`<sup>Optional</sup> <a name="EndpointDomainPrefixInput" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.endpointDomainPrefixInput"></a>

```csharp
public string EndpointDomainPrefixInput { get; }
```

- *Type:* string

---

##### `EndpointTypeInput`<sup>Optional</sup> <a name="EndpointTypeInput" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.endpointTypeInput"></a>

```csharp
public string EndpointTypeInput { get; }
```

- *Type:* string

---

##### `LoadBalancerOptionsInput`<sup>Optional</sup> <a name="LoadBalancerOptionsInput" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.loadBalancerOptionsInput"></a>

```csharp
public IResolvable|Ec2VerifiedAccessEndpointLoadBalancerOptions LoadBalancerOptionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptions">Ec2VerifiedAccessEndpointLoadBalancerOptions</a>

---

##### `NetworkInterfaceOptionsInput`<sup>Optional</sup> <a name="NetworkInterfaceOptionsInput" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.networkInterfaceOptionsInput"></a>

```csharp
public IResolvable|Ec2VerifiedAccessEndpointNetworkInterfaceOptions NetworkInterfaceOptionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptions">Ec2VerifiedAccessEndpointNetworkInterfaceOptions</a>

---

##### `PolicyDocumentInput`<sup>Optional</sup> <a name="PolicyDocumentInput" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.policyDocumentInput"></a>

```csharp
public string PolicyDocumentInput { get; }
```

- *Type:* string

---

##### `PolicyEnabledInput`<sup>Optional</sup> <a name="PolicyEnabledInput" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.policyEnabledInput"></a>

```csharp
public bool|IResolvable PolicyEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `RdsOptionsInput`<sup>Optional</sup> <a name="RdsOptionsInput" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.rdsOptionsInput"></a>

```csharp
public IResolvable|Ec2VerifiedAccessEndpointRdsOptions RdsOptionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptions">Ec2VerifiedAccessEndpointRdsOptions</a>

---

##### `SecurityGroupIdsInput`<sup>Optional</sup> <a name="SecurityGroupIdsInput" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.securityGroupIdsInput"></a>

```csharp
public string[] SecurityGroupIdsInput { get; }
```

- *Type:* string[]

---

##### `SseSpecificationInput`<sup>Optional</sup> <a name="SseSpecificationInput" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.sseSpecificationInput"></a>

```csharp
public IResolvable|Ec2VerifiedAccessEndpointSseSpecification SseSpecificationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecification">Ec2VerifiedAccessEndpointSseSpecification</a>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.tagsInput"></a>

```csharp
public IResolvable|Ec2VerifiedAccessEndpointTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTags">Ec2VerifiedAccessEndpointTags</a>[]

---

##### `VerifiedAccessGroupIdInput`<sup>Optional</sup> <a name="VerifiedAccessGroupIdInput" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.verifiedAccessGroupIdInput"></a>

```csharp
public string VerifiedAccessGroupIdInput { get; }
```

- *Type:* string

---

##### `ApplicationDomain`<sup>Required</sup> <a name="ApplicationDomain" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.applicationDomain"></a>

```csharp
public string ApplicationDomain { get; }
```

- *Type:* string

---

##### `AttachmentType`<sup>Required</sup> <a name="AttachmentType" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.attachmentType"></a>

```csharp
public string AttachmentType { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DomainCertificateArn`<sup>Required</sup> <a name="DomainCertificateArn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.domainCertificateArn"></a>

```csharp
public string DomainCertificateArn { get; }
```

- *Type:* string

---

##### `EndpointDomainPrefix`<sup>Required</sup> <a name="EndpointDomainPrefix" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.endpointDomainPrefix"></a>

```csharp
public string EndpointDomainPrefix { get; }
```

- *Type:* string

---

##### `EndpointType`<sup>Required</sup> <a name="EndpointType" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.endpointType"></a>

```csharp
public string EndpointType { get; }
```

- *Type:* string

---

##### `PolicyDocument`<sup>Required</sup> <a name="PolicyDocument" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.policyDocument"></a>

```csharp
public string PolicyDocument { get; }
```

- *Type:* string

---

##### `PolicyEnabled`<sup>Required</sup> <a name="PolicyEnabled" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.policyEnabled"></a>

```csharp
public bool|IResolvable PolicyEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; }
```

- *Type:* string[]

---

##### `VerifiedAccessGroupId`<sup>Required</sup> <a name="VerifiedAccessGroupId" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.verifiedAccessGroupId"></a>

```csharp
public string VerifiedAccessGroupId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2VerifiedAccessEndpointCidrOptions <a name="Ec2VerifiedAccessEndpointCidrOptions" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2VerifiedAccessEndpointCidrOptions {
    string Cidr = null,
    IResolvable|Ec2VerifiedAccessEndpointCidrOptionsPortRanges[] PortRanges = null,
    string Protocol = null,
    string[] SubnetIds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptions.property.cidr">Cidr</a></code> | <code>string</code> | The IP address range, in CIDR notation. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptions.property.portRanges">PortRanges</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRanges">Ec2VerifiedAccessEndpointCidrOptionsPortRanges</a>[]</code> | The list of port range. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptions.property.protocol">Protocol</a></code> | <code>string</code> | The IP protocol. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptions.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | The IDs of the subnets. |

---

##### `Cidr`<sup>Optional</sup> <a name="Cidr" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptions.property.cidr"></a>

```csharp
public string Cidr { get; set; }
```

- *Type:* string

The IP address range, in CIDR notation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_verified_access_endpoint#cidr Ec2VerifiedAccessEndpoint#cidr}

---

##### `PortRanges`<sup>Optional</sup> <a name="PortRanges" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptions.property.portRanges"></a>

```csharp
public IResolvable|Ec2VerifiedAccessEndpointCidrOptionsPortRanges[] PortRanges { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRanges">Ec2VerifiedAccessEndpointCidrOptionsPortRanges</a>[]

The list of port range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_verified_access_endpoint#port_ranges Ec2VerifiedAccessEndpoint#port_ranges}

---

##### `Protocol`<sup>Optional</sup> <a name="Protocol" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptions.property.protocol"></a>

```csharp
public string Protocol { get; set; }
```

- *Type:* string

The IP protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_verified_access_endpoint#protocol Ec2VerifiedAccessEndpoint#protocol}

---

##### `SubnetIds`<sup>Optional</sup> <a name="SubnetIds" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptions.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; set; }
```

- *Type:* string[]

The IDs of the subnets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_verified_access_endpoint#subnet_ids Ec2VerifiedAccessEndpoint#subnet_ids}

---

### Ec2VerifiedAccessEndpointCidrOptionsPortRanges <a name="Ec2VerifiedAccessEndpointCidrOptionsPortRanges" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRanges"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRanges.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2VerifiedAccessEndpointCidrOptionsPortRanges {
    double FromPort = null,
    double ToPort = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRanges.property.fromPort">FromPort</a></code> | <code>double</code> | The first port in the range. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRanges.property.toPort">ToPort</a></code> | <code>double</code> | The last port in the range. |

---

##### `FromPort`<sup>Optional</sup> <a name="FromPort" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRanges.property.fromPort"></a>

```csharp
public double FromPort { get; set; }
```

- *Type:* double

The first port in the range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_verified_access_endpoint#from_port Ec2VerifiedAccessEndpoint#from_port}

---

##### `ToPort`<sup>Optional</sup> <a name="ToPort" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRanges.property.toPort"></a>

```csharp
public double ToPort { get; set; }
```

- *Type:* double

The last port in the range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_verified_access_endpoint#to_port Ec2VerifiedAccessEndpoint#to_port}

---

### Ec2VerifiedAccessEndpointConfig <a name="Ec2VerifiedAccessEndpointConfig" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2VerifiedAccessEndpointConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AttachmentType,
    string EndpointType,
    string VerifiedAccessGroupId,
    string ApplicationDomain = null,
    Ec2VerifiedAccessEndpointCidrOptions CidrOptions = null,
    string Description = null,
    string DomainCertificateArn = null,
    string EndpointDomainPrefix = null,
    Ec2VerifiedAccessEndpointLoadBalancerOptions LoadBalancerOptions = null,
    Ec2VerifiedAccessEndpointNetworkInterfaceOptions NetworkInterfaceOptions = null,
    string PolicyDocument = null,
    bool|IResolvable PolicyEnabled = null,
    Ec2VerifiedAccessEndpointRdsOptions RdsOptions = null,
    string[] SecurityGroupIds = null,
    Ec2VerifiedAccessEndpointSseSpecification SseSpecification = null,
    IResolvable|Ec2VerifiedAccessEndpointTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.attachmentType">AttachmentType</a></code> | <code>string</code> | The type of attachment used to provide connectivity between the AWS Verified Access endpoint and the application. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.endpointType">EndpointType</a></code> | <code>string</code> | The type of AWS Verified Access endpoint. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.verifiedAccessGroupId">VerifiedAccessGroupId</a></code> | <code>string</code> | The ID of the AWS Verified Access group. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.applicationDomain">ApplicationDomain</a></code> | <code>string</code> | The DNS name for users to reach your application. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.cidrOptions">CidrOptions</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptions">Ec2VerifiedAccessEndpointCidrOptions</a></code> | The options for cidr type endpoint. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.description">Description</a></code> | <code>string</code> | A description for the AWS Verified Access endpoint. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.domainCertificateArn">DomainCertificateArn</a></code> | <code>string</code> | The ARN of a public TLS/SSL certificate imported into or created with ACM. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.endpointDomainPrefix">EndpointDomainPrefix</a></code> | <code>string</code> | A custom identifier that gets prepended to a DNS name that is generated for the endpoint. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.loadBalancerOptions">LoadBalancerOptions</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptions">Ec2VerifiedAccessEndpointLoadBalancerOptions</a></code> | The load balancer details if creating the AWS Verified Access endpoint as load-balancer type. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.networkInterfaceOptions">NetworkInterfaceOptions</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptions">Ec2VerifiedAccessEndpointNetworkInterfaceOptions</a></code> | The options for network-interface type endpoint. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.policyDocument">PolicyDocument</a></code> | <code>string</code> | The AWS Verified Access policy document. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.policyEnabled">PolicyEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | The status of the Verified Access policy. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.rdsOptions">RdsOptions</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptions">Ec2VerifiedAccessEndpointRdsOptions</a></code> | The options for rds type endpoint. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | The IDs of the security groups for the endpoint. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.sseSpecification">SseSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecification">Ec2VerifiedAccessEndpointSseSpecification</a></code> | The configuration options for customer provided KMS encryption. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTags">Ec2VerifiedAccessEndpointTags</a>[]</code> | An array of key-value pairs to apply to this resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AttachmentType`<sup>Required</sup> <a name="AttachmentType" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.attachmentType"></a>

```csharp
public string AttachmentType { get; set; }
```

- *Type:* string

The type of attachment used to provide connectivity between the AWS Verified Access endpoint and the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_verified_access_endpoint#attachment_type Ec2VerifiedAccessEndpoint#attachment_type}

---

##### `EndpointType`<sup>Required</sup> <a name="EndpointType" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.endpointType"></a>

```csharp
public string EndpointType { get; set; }
```

- *Type:* string

The type of AWS Verified Access endpoint.

Incoming application requests will be sent to an IP address, load balancer or a network interface depending on the endpoint type specified.The type of AWS Verified Access endpoint. Incoming application requests will be sent to an IP address, load balancer or a network interface depending on the endpoint type specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_verified_access_endpoint#endpoint_type Ec2VerifiedAccessEndpoint#endpoint_type}

---

##### `VerifiedAccessGroupId`<sup>Required</sup> <a name="VerifiedAccessGroupId" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.verifiedAccessGroupId"></a>

```csharp
public string VerifiedAccessGroupId { get; set; }
```

- *Type:* string

The ID of the AWS Verified Access group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_verified_access_endpoint#verified_access_group_id Ec2VerifiedAccessEndpoint#verified_access_group_id}

---

##### `ApplicationDomain`<sup>Optional</sup> <a name="ApplicationDomain" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.applicationDomain"></a>

```csharp
public string ApplicationDomain { get; set; }
```

- *Type:* string

The DNS name for users to reach your application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_verified_access_endpoint#application_domain Ec2VerifiedAccessEndpoint#application_domain}

---

##### `CidrOptions`<sup>Optional</sup> <a name="CidrOptions" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.cidrOptions"></a>

```csharp
public Ec2VerifiedAccessEndpointCidrOptions CidrOptions { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptions">Ec2VerifiedAccessEndpointCidrOptions</a>

The options for cidr type endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_verified_access_endpoint#cidr_options Ec2VerifiedAccessEndpoint#cidr_options}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A description for the AWS Verified Access endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_verified_access_endpoint#description Ec2VerifiedAccessEndpoint#description}

---

##### `DomainCertificateArn`<sup>Optional</sup> <a name="DomainCertificateArn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.domainCertificateArn"></a>

```csharp
public string DomainCertificateArn { get; set; }
```

- *Type:* string

The ARN of a public TLS/SSL certificate imported into or created with ACM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_verified_access_endpoint#domain_certificate_arn Ec2VerifiedAccessEndpoint#domain_certificate_arn}

---

##### `EndpointDomainPrefix`<sup>Optional</sup> <a name="EndpointDomainPrefix" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.endpointDomainPrefix"></a>

```csharp
public string EndpointDomainPrefix { get; set; }
```

- *Type:* string

A custom identifier that gets prepended to a DNS name that is generated for the endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_verified_access_endpoint#endpoint_domain_prefix Ec2VerifiedAccessEndpoint#endpoint_domain_prefix}

---

##### `LoadBalancerOptions`<sup>Optional</sup> <a name="LoadBalancerOptions" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.loadBalancerOptions"></a>

```csharp
public Ec2VerifiedAccessEndpointLoadBalancerOptions LoadBalancerOptions { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptions">Ec2VerifiedAccessEndpointLoadBalancerOptions</a>

The load balancer details if creating the AWS Verified Access endpoint as load-balancer type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_verified_access_endpoint#load_balancer_options Ec2VerifiedAccessEndpoint#load_balancer_options}

---

##### `NetworkInterfaceOptions`<sup>Optional</sup> <a name="NetworkInterfaceOptions" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.networkInterfaceOptions"></a>

```csharp
public Ec2VerifiedAccessEndpointNetworkInterfaceOptions NetworkInterfaceOptions { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptions">Ec2VerifiedAccessEndpointNetworkInterfaceOptions</a>

The options for network-interface type endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_verified_access_endpoint#network_interface_options Ec2VerifiedAccessEndpoint#network_interface_options}

---

##### `PolicyDocument`<sup>Optional</sup> <a name="PolicyDocument" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.policyDocument"></a>

```csharp
public string PolicyDocument { get; set; }
```

- *Type:* string

The AWS Verified Access policy document.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_verified_access_endpoint#policy_document Ec2VerifiedAccessEndpoint#policy_document}

---

##### `PolicyEnabled`<sup>Optional</sup> <a name="PolicyEnabled" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.policyEnabled"></a>

```csharp
public bool|IResolvable PolicyEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

The status of the Verified Access policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_verified_access_endpoint#policy_enabled Ec2VerifiedAccessEndpoint#policy_enabled}

---

##### `RdsOptions`<sup>Optional</sup> <a name="RdsOptions" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.rdsOptions"></a>

```csharp
public Ec2VerifiedAccessEndpointRdsOptions RdsOptions { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptions">Ec2VerifiedAccessEndpointRdsOptions</a>

The options for rds type endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_verified_access_endpoint#rds_options Ec2VerifiedAccessEndpoint#rds_options}

---

##### `SecurityGroupIds`<sup>Optional</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; set; }
```

- *Type:* string[]

The IDs of the security groups for the endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_verified_access_endpoint#security_group_ids Ec2VerifiedAccessEndpoint#security_group_ids}

---

##### `SseSpecification`<sup>Optional</sup> <a name="SseSpecification" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.sseSpecification"></a>

```csharp
public Ec2VerifiedAccessEndpointSseSpecification SseSpecification { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecification">Ec2VerifiedAccessEndpointSseSpecification</a>

The configuration options for customer provided KMS encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_verified_access_endpoint#sse_specification Ec2VerifiedAccessEndpoint#sse_specification}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.tags"></a>

```csharp
public IResolvable|Ec2VerifiedAccessEndpointTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTags">Ec2VerifiedAccessEndpointTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_verified_access_endpoint#tags Ec2VerifiedAccessEndpoint#tags}

---

### Ec2VerifiedAccessEndpointLoadBalancerOptions <a name="Ec2VerifiedAccessEndpointLoadBalancerOptions" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2VerifiedAccessEndpointLoadBalancerOptions {
    string LoadBalancerArn = null,
    double Port = null,
    IResolvable|Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRanges[] PortRanges = null,
    string Protocol = null,
    string[] SubnetIds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptions.property.loadBalancerArn">LoadBalancerArn</a></code> | <code>string</code> | The ARN of the load balancer. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptions.property.port">Port</a></code> | <code>double</code> | The IP port number. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptions.property.portRanges">PortRanges</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRanges">Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRanges</a>[]</code> | The list of port range. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptions.property.protocol">Protocol</a></code> | <code>string</code> | The IP protocol. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptions.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | The IDs of the subnets. |

---

##### `LoadBalancerArn`<sup>Optional</sup> <a name="LoadBalancerArn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptions.property.loadBalancerArn"></a>

```csharp
public string LoadBalancerArn { get; set; }
```

- *Type:* string

The ARN of the load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_verified_access_endpoint#load_balancer_arn Ec2VerifiedAccessEndpoint#load_balancer_arn}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptions.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

The IP port number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_verified_access_endpoint#port Ec2VerifiedAccessEndpoint#port}

---

##### `PortRanges`<sup>Optional</sup> <a name="PortRanges" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptions.property.portRanges"></a>

```csharp
public IResolvable|Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRanges[] PortRanges { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRanges">Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRanges</a>[]

The list of port range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_verified_access_endpoint#port_ranges Ec2VerifiedAccessEndpoint#port_ranges}

---

##### `Protocol`<sup>Optional</sup> <a name="Protocol" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptions.property.protocol"></a>

```csharp
public string Protocol { get; set; }
```

- *Type:* string

The IP protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_verified_access_endpoint#protocol Ec2VerifiedAccessEndpoint#protocol}

---

##### `SubnetIds`<sup>Optional</sup> <a name="SubnetIds" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptions.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; set; }
```

- *Type:* string[]

The IDs of the subnets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_verified_access_endpoint#subnet_ids Ec2VerifiedAccessEndpoint#subnet_ids}

---

### Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRanges <a name="Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRanges" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRanges"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRanges.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRanges {
    double FromPort = null,
    double ToPort = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRanges.property.fromPort">FromPort</a></code> | <code>double</code> | The first port in the range. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRanges.property.toPort">ToPort</a></code> | <code>double</code> | The last port in the range. |

---

##### `FromPort`<sup>Optional</sup> <a name="FromPort" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRanges.property.fromPort"></a>

```csharp
public double FromPort { get; set; }
```

- *Type:* double

The first port in the range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_verified_access_endpoint#from_port Ec2VerifiedAccessEndpoint#from_port}

---

##### `ToPort`<sup>Optional</sup> <a name="ToPort" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRanges.property.toPort"></a>

```csharp
public double ToPort { get; set; }
```

- *Type:* double

The last port in the range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_verified_access_endpoint#to_port Ec2VerifiedAccessEndpoint#to_port}

---

### Ec2VerifiedAccessEndpointNetworkInterfaceOptions <a name="Ec2VerifiedAccessEndpointNetworkInterfaceOptions" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2VerifiedAccessEndpointNetworkInterfaceOptions {
    string NetworkInterfaceId = null,
    double Port = null,
    IResolvable|Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRanges[] PortRanges = null,
    string Protocol = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptions.property.networkInterfaceId">NetworkInterfaceId</a></code> | <code>string</code> | The ID of the network interface. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptions.property.port">Port</a></code> | <code>double</code> | The IP port number. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptions.property.portRanges">PortRanges</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRanges">Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRanges</a>[]</code> | The list of port ranges. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptions.property.protocol">Protocol</a></code> | <code>string</code> | The IP protocol. |

---

##### `NetworkInterfaceId`<sup>Optional</sup> <a name="NetworkInterfaceId" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptions.property.networkInterfaceId"></a>

```csharp
public string NetworkInterfaceId { get; set; }
```

- *Type:* string

The ID of the network interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_verified_access_endpoint#network_interface_id Ec2VerifiedAccessEndpoint#network_interface_id}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptions.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

The IP port number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_verified_access_endpoint#port Ec2VerifiedAccessEndpoint#port}

---

##### `PortRanges`<sup>Optional</sup> <a name="PortRanges" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptions.property.portRanges"></a>

```csharp
public IResolvable|Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRanges[] PortRanges { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRanges">Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRanges</a>[]

The list of port ranges.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_verified_access_endpoint#port_ranges Ec2VerifiedAccessEndpoint#port_ranges}

---

##### `Protocol`<sup>Optional</sup> <a name="Protocol" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptions.property.protocol"></a>

```csharp
public string Protocol { get; set; }
```

- *Type:* string

The IP protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_verified_access_endpoint#protocol Ec2VerifiedAccessEndpoint#protocol}

---

### Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRanges <a name="Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRanges" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRanges"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRanges.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRanges {
    double FromPort = null,
    double ToPort = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRanges.property.fromPort">FromPort</a></code> | <code>double</code> | The first port in the range. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRanges.property.toPort">ToPort</a></code> | <code>double</code> | The last port in the range. |

---

##### `FromPort`<sup>Optional</sup> <a name="FromPort" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRanges.property.fromPort"></a>

```csharp
public double FromPort { get; set; }
```

- *Type:* double

The first port in the range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_verified_access_endpoint#from_port Ec2VerifiedAccessEndpoint#from_port}

---

##### `ToPort`<sup>Optional</sup> <a name="ToPort" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRanges.property.toPort"></a>

```csharp
public double ToPort { get; set; }
```

- *Type:* double

The last port in the range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_verified_access_endpoint#to_port Ec2VerifiedAccessEndpoint#to_port}

---

### Ec2VerifiedAccessEndpointRdsOptions <a name="Ec2VerifiedAccessEndpointRdsOptions" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2VerifiedAccessEndpointRdsOptions {
    double Port = null,
    string Protocol = null,
    string RdsDbClusterArn = null,
    string RdsDbInstanceArn = null,
    string RdsDbProxyArn = null,
    string RdsEndpoint = null,
    string[] SubnetIds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptions.property.port">Port</a></code> | <code>double</code> | The IP port number. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptions.property.protocol">Protocol</a></code> | <code>string</code> | The IP protocol. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptions.property.rdsDbClusterArn">RdsDbClusterArn</a></code> | <code>string</code> | The ARN of the RDS DB cluster. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptions.property.rdsDbInstanceArn">RdsDbInstanceArn</a></code> | <code>string</code> | The ARN of the RDS DB instance. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptions.property.rdsDbProxyArn">RdsDbProxyArn</a></code> | <code>string</code> | The ARN of the RDS DB proxy. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptions.property.rdsEndpoint">RdsEndpoint</a></code> | <code>string</code> | The RDS endpoint. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptions.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | The IDs of the subnets. |

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptions.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

The IP port number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_verified_access_endpoint#port Ec2VerifiedAccessEndpoint#port}

---

##### `Protocol`<sup>Optional</sup> <a name="Protocol" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptions.property.protocol"></a>

```csharp
public string Protocol { get; set; }
```

- *Type:* string

The IP protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_verified_access_endpoint#protocol Ec2VerifiedAccessEndpoint#protocol}

---

##### `RdsDbClusterArn`<sup>Optional</sup> <a name="RdsDbClusterArn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptions.property.rdsDbClusterArn"></a>

```csharp
public string RdsDbClusterArn { get; set; }
```

- *Type:* string

The ARN of the RDS DB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_verified_access_endpoint#rds_db_cluster_arn Ec2VerifiedAccessEndpoint#rds_db_cluster_arn}

---

##### `RdsDbInstanceArn`<sup>Optional</sup> <a name="RdsDbInstanceArn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptions.property.rdsDbInstanceArn"></a>

```csharp
public string RdsDbInstanceArn { get; set; }
```

- *Type:* string

The ARN of the RDS DB instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_verified_access_endpoint#rds_db_instance_arn Ec2VerifiedAccessEndpoint#rds_db_instance_arn}

---

##### `RdsDbProxyArn`<sup>Optional</sup> <a name="RdsDbProxyArn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptions.property.rdsDbProxyArn"></a>

```csharp
public string RdsDbProxyArn { get; set; }
```

- *Type:* string

The ARN of the RDS DB proxy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_verified_access_endpoint#rds_db_proxy_arn Ec2VerifiedAccessEndpoint#rds_db_proxy_arn}

---

##### `RdsEndpoint`<sup>Optional</sup> <a name="RdsEndpoint" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptions.property.rdsEndpoint"></a>

```csharp
public string RdsEndpoint { get; set; }
```

- *Type:* string

The RDS endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_verified_access_endpoint#rds_endpoint Ec2VerifiedAccessEndpoint#rds_endpoint}

---

##### `SubnetIds`<sup>Optional</sup> <a name="SubnetIds" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptions.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; set; }
```

- *Type:* string[]

The IDs of the subnets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_verified_access_endpoint#subnet_ids Ec2VerifiedAccessEndpoint#subnet_ids}

---

### Ec2VerifiedAccessEndpointSseSpecification <a name="Ec2VerifiedAccessEndpointSseSpecification" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecification.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2VerifiedAccessEndpointSseSpecification {
    bool|IResolvable CustomerManagedKeyEnabled = null,
    string KmsKeyArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecification.property.customerManagedKeyEnabled">CustomerManagedKeyEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether to encrypt the policy with the provided key or disable encryption. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecification.property.kmsKeyArn">KmsKeyArn</a></code> | <code>string</code> | KMS Key Arn used to encrypt the group policy. |

---

##### `CustomerManagedKeyEnabled`<sup>Optional</sup> <a name="CustomerManagedKeyEnabled" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecification.property.customerManagedKeyEnabled"></a>

```csharp
public bool|IResolvable CustomerManagedKeyEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether to encrypt the policy with the provided key or disable encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_verified_access_endpoint#customer_managed_key_enabled Ec2VerifiedAccessEndpoint#customer_managed_key_enabled}

---

##### `KmsKeyArn`<sup>Optional</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecification.property.kmsKeyArn"></a>

```csharp
public string KmsKeyArn { get; set; }
```

- *Type:* string

KMS Key Arn used to encrypt the group policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_verified_access_endpoint#kms_key_arn Ec2VerifiedAccessEndpoint#kms_key_arn}

---

### Ec2VerifiedAccessEndpointTags <a name="Ec2VerifiedAccessEndpointTags" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2VerifiedAccessEndpointTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTags.property.key">Key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTags.property.value">Value</a></code> | <code>string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_verified_access_endpoint#key Ec2VerifiedAccessEndpoint#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_verified_access_endpoint#value Ec2VerifiedAccessEndpoint#value}

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2VerifiedAccessEndpointCidrOptionsOutputReference <a name="Ec2VerifiedAccessEndpointCidrOptionsOutputReference" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2VerifiedAccessEndpointCidrOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.putPortRanges">PutPortRanges</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.resetCidr">ResetCidr</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.resetPortRanges">ResetPortRanges</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.resetProtocol">ResetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.resetSubnetIds">ResetSubnetIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPortRanges` <a name="PutPortRanges" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.putPortRanges"></a>

```csharp
private void PutPortRanges(IResolvable|Ec2VerifiedAccessEndpointCidrOptionsPortRanges[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.putPortRanges.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRanges">Ec2VerifiedAccessEndpointCidrOptionsPortRanges</a>[]

---

##### `ResetCidr` <a name="ResetCidr" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.resetCidr"></a>

```csharp
private void ResetCidr()
```

##### `ResetPortRanges` <a name="ResetPortRanges" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.resetPortRanges"></a>

```csharp
private void ResetPortRanges()
```

##### `ResetProtocol` <a name="ResetProtocol" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.resetProtocol"></a>

```csharp
private void ResetProtocol()
```

##### `ResetSubnetIds` <a name="ResetSubnetIds" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.resetSubnetIds"></a>

```csharp
private void ResetSubnetIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.property.portRanges">PortRanges</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesList">Ec2VerifiedAccessEndpointCidrOptionsPortRangesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.property.cidrInput">CidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.property.portRangesInput">PortRangesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRanges">Ec2VerifiedAccessEndpointCidrOptionsPortRanges</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.property.subnetIdsInput">SubnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.property.cidr">Cidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.property.protocol">Protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptions">Ec2VerifiedAccessEndpointCidrOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PortRanges`<sup>Required</sup> <a name="PortRanges" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.property.portRanges"></a>

```csharp
public Ec2VerifiedAccessEndpointCidrOptionsPortRangesList PortRanges { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesList">Ec2VerifiedAccessEndpointCidrOptionsPortRangesList</a>

---

##### `CidrInput`<sup>Optional</sup> <a name="CidrInput" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.property.cidrInput"></a>

```csharp
public string CidrInput { get; }
```

- *Type:* string

---

##### `PortRangesInput`<sup>Optional</sup> <a name="PortRangesInput" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.property.portRangesInput"></a>

```csharp
public IResolvable|Ec2VerifiedAccessEndpointCidrOptionsPortRanges[] PortRangesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRanges">Ec2VerifiedAccessEndpointCidrOptionsPortRanges</a>[]

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.property.protocolInput"></a>

```csharp
public string ProtocolInput { get; }
```

- *Type:* string

---

##### `SubnetIdsInput`<sup>Optional</sup> <a name="SubnetIdsInput" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.property.subnetIdsInput"></a>

```csharp
public string[] SubnetIdsInput { get; }
```

- *Type:* string[]

---

##### `Cidr`<sup>Required</sup> <a name="Cidr" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.property.cidr"></a>

```csharp
public string Cidr { get; }
```

- *Type:* string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.property.protocol"></a>

```csharp
public string Protocol { get; }
```

- *Type:* string

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Ec2VerifiedAccessEndpointCidrOptions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptions">Ec2VerifiedAccessEndpointCidrOptions</a>

---


### Ec2VerifiedAccessEndpointCidrOptionsPortRangesList <a name="Ec2VerifiedAccessEndpointCidrOptionsPortRangesList" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2VerifiedAccessEndpointCidrOptionsPortRangesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesList.get"></a>

```csharp
private Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRanges">Ec2VerifiedAccessEndpointCidrOptionsPortRanges</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesList.property.internalValue"></a>

```csharp
public IResolvable|Ec2VerifiedAccessEndpointCidrOptionsPortRanges[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRanges">Ec2VerifiedAccessEndpointCidrOptionsPortRanges</a>[]

---


### Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference <a name="Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.resetFromPort">ResetFromPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.resetToPort">ResetToPort</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFromPort` <a name="ResetFromPort" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.resetFromPort"></a>

```csharp
private void ResetFromPort()
```

##### `ResetToPort` <a name="ResetToPort" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.resetToPort"></a>

```csharp
private void ResetToPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.property.fromPortInput">FromPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.property.toPortInput">ToPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.property.fromPort">FromPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.property.toPort">ToPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRanges">Ec2VerifiedAccessEndpointCidrOptionsPortRanges</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FromPortInput`<sup>Optional</sup> <a name="FromPortInput" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.property.fromPortInput"></a>

```csharp
public double FromPortInput { get; }
```

- *Type:* double

---

##### `ToPortInput`<sup>Optional</sup> <a name="ToPortInput" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.property.toPortInput"></a>

```csharp
public double ToPortInput { get; }
```

- *Type:* double

---

##### `FromPort`<sup>Required</sup> <a name="FromPort" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.property.fromPort"></a>

```csharp
public double FromPort { get; }
```

- *Type:* double

---

##### `ToPort`<sup>Required</sup> <a name="ToPort" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.property.toPort"></a>

```csharp
public double ToPort { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Ec2VerifiedAccessEndpointCidrOptionsPortRanges InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRanges">Ec2VerifiedAccessEndpointCidrOptionsPortRanges</a>

---


### Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference <a name="Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.putPortRanges">PutPortRanges</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.resetLoadBalancerArn">ResetLoadBalancerArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.resetPortRanges">ResetPortRanges</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.resetProtocol">ResetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.resetSubnetIds">ResetSubnetIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPortRanges` <a name="PutPortRanges" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.putPortRanges"></a>

```csharp
private void PutPortRanges(IResolvable|Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRanges[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.putPortRanges.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRanges">Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRanges</a>[]

---

##### `ResetLoadBalancerArn` <a name="ResetLoadBalancerArn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.resetLoadBalancerArn"></a>

```csharp
private void ResetLoadBalancerArn()
```

##### `ResetPort` <a name="ResetPort" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.resetPort"></a>

```csharp
private void ResetPort()
```

##### `ResetPortRanges` <a name="ResetPortRanges" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.resetPortRanges"></a>

```csharp
private void ResetPortRanges()
```

##### `ResetProtocol` <a name="ResetProtocol" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.resetProtocol"></a>

```csharp
private void ResetProtocol()
```

##### `ResetSubnetIds` <a name="ResetSubnetIds" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.resetSubnetIds"></a>

```csharp
private void ResetSubnetIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.property.portRanges">PortRanges</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList">Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.property.loadBalancerArnInput">LoadBalancerArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.property.portRangesInput">PortRangesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRanges">Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRanges</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.property.subnetIdsInput">SubnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.property.loadBalancerArn">LoadBalancerArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.property.protocol">Protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptions">Ec2VerifiedAccessEndpointLoadBalancerOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PortRanges`<sup>Required</sup> <a name="PortRanges" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.property.portRanges"></a>

```csharp
public Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList PortRanges { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList">Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList</a>

---

##### `LoadBalancerArnInput`<sup>Optional</sup> <a name="LoadBalancerArnInput" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.property.loadBalancerArnInput"></a>

```csharp
public string LoadBalancerArnInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `PortRangesInput`<sup>Optional</sup> <a name="PortRangesInput" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.property.portRangesInput"></a>

```csharp
public IResolvable|Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRanges[] PortRangesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRanges">Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRanges</a>[]

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.property.protocolInput"></a>

```csharp
public string ProtocolInput { get; }
```

- *Type:* string

---

##### `SubnetIdsInput`<sup>Optional</sup> <a name="SubnetIdsInput" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.property.subnetIdsInput"></a>

```csharp
public string[] SubnetIdsInput { get; }
```

- *Type:* string[]

---

##### `LoadBalancerArn`<sup>Required</sup> <a name="LoadBalancerArn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.property.loadBalancerArn"></a>

```csharp
public string LoadBalancerArn { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.property.protocol"></a>

```csharp
public string Protocol { get; }
```

- *Type:* string

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Ec2VerifiedAccessEndpointLoadBalancerOptions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptions">Ec2VerifiedAccessEndpointLoadBalancerOptions</a>

---


### Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList <a name="Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.get"></a>

```csharp
private Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRanges">Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRanges</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.property.internalValue"></a>

```csharp
public IResolvable|Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRanges[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRanges">Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRanges</a>[]

---


### Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference <a name="Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.resetFromPort">ResetFromPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.resetToPort">ResetToPort</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFromPort` <a name="ResetFromPort" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.resetFromPort"></a>

```csharp
private void ResetFromPort()
```

##### `ResetToPort` <a name="ResetToPort" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.resetToPort"></a>

```csharp
private void ResetToPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.property.fromPortInput">FromPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.property.toPortInput">ToPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.property.fromPort">FromPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.property.toPort">ToPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRanges">Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRanges</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FromPortInput`<sup>Optional</sup> <a name="FromPortInput" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.property.fromPortInput"></a>

```csharp
public double FromPortInput { get; }
```

- *Type:* double

---

##### `ToPortInput`<sup>Optional</sup> <a name="ToPortInput" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.property.toPortInput"></a>

```csharp
public double ToPortInput { get; }
```

- *Type:* double

---

##### `FromPort`<sup>Required</sup> <a name="FromPort" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.property.fromPort"></a>

```csharp
public double FromPort { get; }
```

- *Type:* double

---

##### `ToPort`<sup>Required</sup> <a name="ToPort" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.property.toPort"></a>

```csharp
public double ToPort { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRanges InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRanges">Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRanges</a>

---


### Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference <a name="Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.putPortRanges">PutPortRanges</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.resetNetworkInterfaceId">ResetNetworkInterfaceId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.resetPortRanges">ResetPortRanges</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.resetProtocol">ResetProtocol</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPortRanges` <a name="PutPortRanges" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.putPortRanges"></a>

```csharp
private void PutPortRanges(IResolvable|Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRanges[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.putPortRanges.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRanges">Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRanges</a>[]

---

##### `ResetNetworkInterfaceId` <a name="ResetNetworkInterfaceId" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.resetNetworkInterfaceId"></a>

```csharp
private void ResetNetworkInterfaceId()
```

##### `ResetPort` <a name="ResetPort" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.resetPort"></a>

```csharp
private void ResetPort()
```

##### `ResetPortRanges` <a name="ResetPortRanges" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.resetPortRanges"></a>

```csharp
private void ResetPortRanges()
```

##### `ResetProtocol` <a name="ResetProtocol" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.resetProtocol"></a>

```csharp
private void ResetProtocol()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.property.portRanges">PortRanges</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList">Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.property.networkInterfaceIdInput">NetworkInterfaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.property.portRangesInput">PortRangesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRanges">Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRanges</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.property.networkInterfaceId">NetworkInterfaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.property.protocol">Protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptions">Ec2VerifiedAccessEndpointNetworkInterfaceOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PortRanges`<sup>Required</sup> <a name="PortRanges" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.property.portRanges"></a>

```csharp
public Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList PortRanges { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList">Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList</a>

---

##### `NetworkInterfaceIdInput`<sup>Optional</sup> <a name="NetworkInterfaceIdInput" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.property.networkInterfaceIdInput"></a>

```csharp
public string NetworkInterfaceIdInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `PortRangesInput`<sup>Optional</sup> <a name="PortRangesInput" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.property.portRangesInput"></a>

```csharp
public IResolvable|Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRanges[] PortRangesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRanges">Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRanges</a>[]

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.property.protocolInput"></a>

```csharp
public string ProtocolInput { get; }
```

- *Type:* string

---

##### `NetworkInterfaceId`<sup>Required</sup> <a name="NetworkInterfaceId" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.property.networkInterfaceId"></a>

```csharp
public string NetworkInterfaceId { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.property.protocol"></a>

```csharp
public string Protocol { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Ec2VerifiedAccessEndpointNetworkInterfaceOptions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptions">Ec2VerifiedAccessEndpointNetworkInterfaceOptions</a>

---


### Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList <a name="Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.get"></a>

```csharp
private Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRanges">Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRanges</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.property.internalValue"></a>

```csharp
public IResolvable|Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRanges[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRanges">Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRanges</a>[]

---


### Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference <a name="Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.resetFromPort">ResetFromPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.resetToPort">ResetToPort</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFromPort` <a name="ResetFromPort" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.resetFromPort"></a>

```csharp
private void ResetFromPort()
```

##### `ResetToPort` <a name="ResetToPort" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.resetToPort"></a>

```csharp
private void ResetToPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.property.fromPortInput">FromPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.property.toPortInput">ToPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.property.fromPort">FromPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.property.toPort">ToPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRanges">Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRanges</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FromPortInput`<sup>Optional</sup> <a name="FromPortInput" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.property.fromPortInput"></a>

```csharp
public double FromPortInput { get; }
```

- *Type:* double

---

##### `ToPortInput`<sup>Optional</sup> <a name="ToPortInput" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.property.toPortInput"></a>

```csharp
public double ToPortInput { get; }
```

- *Type:* double

---

##### `FromPort`<sup>Required</sup> <a name="FromPort" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.property.fromPort"></a>

```csharp
public double FromPort { get; }
```

- *Type:* double

---

##### `ToPort`<sup>Required</sup> <a name="ToPort" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.property.toPort"></a>

```csharp
public double ToPort { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRanges InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRanges">Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRanges</a>

---


### Ec2VerifiedAccessEndpointRdsOptionsOutputReference <a name="Ec2VerifiedAccessEndpointRdsOptionsOutputReference" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2VerifiedAccessEndpointRdsOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.resetProtocol">ResetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.resetRdsDbClusterArn">ResetRdsDbClusterArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.resetRdsDbInstanceArn">ResetRdsDbInstanceArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.resetRdsDbProxyArn">ResetRdsDbProxyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.resetRdsEndpoint">ResetRdsEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.resetSubnetIds">ResetSubnetIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPort` <a name="ResetPort" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.resetPort"></a>

```csharp
private void ResetPort()
```

##### `ResetProtocol` <a name="ResetProtocol" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.resetProtocol"></a>

```csharp
private void ResetProtocol()
```

##### `ResetRdsDbClusterArn` <a name="ResetRdsDbClusterArn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.resetRdsDbClusterArn"></a>

```csharp
private void ResetRdsDbClusterArn()
```

##### `ResetRdsDbInstanceArn` <a name="ResetRdsDbInstanceArn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.resetRdsDbInstanceArn"></a>

```csharp
private void ResetRdsDbInstanceArn()
```

##### `ResetRdsDbProxyArn` <a name="ResetRdsDbProxyArn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.resetRdsDbProxyArn"></a>

```csharp
private void ResetRdsDbProxyArn()
```

##### `ResetRdsEndpoint` <a name="ResetRdsEndpoint" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.resetRdsEndpoint"></a>

```csharp
private void ResetRdsEndpoint()
```

##### `ResetSubnetIds` <a name="ResetSubnetIds" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.resetSubnetIds"></a>

```csharp
private void ResetSubnetIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.property.rdsDbClusterArnInput">RdsDbClusterArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.property.rdsDbInstanceArnInput">RdsDbInstanceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.property.rdsDbProxyArnInput">RdsDbProxyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.property.rdsEndpointInput">RdsEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.property.subnetIdsInput">SubnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.property.protocol">Protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.property.rdsDbClusterArn">RdsDbClusterArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.property.rdsDbInstanceArn">RdsDbInstanceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.property.rdsDbProxyArn">RdsDbProxyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.property.rdsEndpoint">RdsEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptions">Ec2VerifiedAccessEndpointRdsOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.property.protocolInput"></a>

```csharp
public string ProtocolInput { get; }
```

- *Type:* string

---

##### `RdsDbClusterArnInput`<sup>Optional</sup> <a name="RdsDbClusterArnInput" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.property.rdsDbClusterArnInput"></a>

```csharp
public string RdsDbClusterArnInput { get; }
```

- *Type:* string

---

##### `RdsDbInstanceArnInput`<sup>Optional</sup> <a name="RdsDbInstanceArnInput" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.property.rdsDbInstanceArnInput"></a>

```csharp
public string RdsDbInstanceArnInput { get; }
```

- *Type:* string

---

##### `RdsDbProxyArnInput`<sup>Optional</sup> <a name="RdsDbProxyArnInput" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.property.rdsDbProxyArnInput"></a>

```csharp
public string RdsDbProxyArnInput { get; }
```

- *Type:* string

---

##### `RdsEndpointInput`<sup>Optional</sup> <a name="RdsEndpointInput" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.property.rdsEndpointInput"></a>

```csharp
public string RdsEndpointInput { get; }
```

- *Type:* string

---

##### `SubnetIdsInput`<sup>Optional</sup> <a name="SubnetIdsInput" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.property.subnetIdsInput"></a>

```csharp
public string[] SubnetIdsInput { get; }
```

- *Type:* string[]

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.property.protocol"></a>

```csharp
public string Protocol { get; }
```

- *Type:* string

---

##### `RdsDbClusterArn`<sup>Required</sup> <a name="RdsDbClusterArn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.property.rdsDbClusterArn"></a>

```csharp
public string RdsDbClusterArn { get; }
```

- *Type:* string

---

##### `RdsDbInstanceArn`<sup>Required</sup> <a name="RdsDbInstanceArn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.property.rdsDbInstanceArn"></a>

```csharp
public string RdsDbInstanceArn { get; }
```

- *Type:* string

---

##### `RdsDbProxyArn`<sup>Required</sup> <a name="RdsDbProxyArn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.property.rdsDbProxyArn"></a>

```csharp
public string RdsDbProxyArn { get; }
```

- *Type:* string

---

##### `RdsEndpoint`<sup>Required</sup> <a name="RdsEndpoint" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.property.rdsEndpoint"></a>

```csharp
public string RdsEndpoint { get; }
```

- *Type:* string

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Ec2VerifiedAccessEndpointRdsOptions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptions">Ec2VerifiedAccessEndpointRdsOptions</a>

---


### Ec2VerifiedAccessEndpointSseSpecificationOutputReference <a name="Ec2VerifiedAccessEndpointSseSpecificationOutputReference" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2VerifiedAccessEndpointSseSpecificationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.resetCustomerManagedKeyEnabled">ResetCustomerManagedKeyEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.resetKmsKeyArn">ResetKmsKeyArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCustomerManagedKeyEnabled` <a name="ResetCustomerManagedKeyEnabled" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.resetCustomerManagedKeyEnabled"></a>

```csharp
private void ResetCustomerManagedKeyEnabled()
```

##### `ResetKmsKeyArn` <a name="ResetKmsKeyArn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.resetKmsKeyArn"></a>

```csharp
private void ResetKmsKeyArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.property.customerManagedKeyEnabledInput">CustomerManagedKeyEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.property.kmsKeyArnInput">KmsKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.property.customerManagedKeyEnabled">CustomerManagedKeyEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.property.kmsKeyArn">KmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecification">Ec2VerifiedAccessEndpointSseSpecification</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomerManagedKeyEnabledInput`<sup>Optional</sup> <a name="CustomerManagedKeyEnabledInput" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.property.customerManagedKeyEnabledInput"></a>

```csharp
public bool|IResolvable CustomerManagedKeyEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `KmsKeyArnInput`<sup>Optional</sup> <a name="KmsKeyArnInput" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.property.kmsKeyArnInput"></a>

```csharp
public string KmsKeyArnInput { get; }
```

- *Type:* string

---

##### `CustomerManagedKeyEnabled`<sup>Required</sup> <a name="CustomerManagedKeyEnabled" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.property.customerManagedKeyEnabled"></a>

```csharp
public bool|IResolvable CustomerManagedKeyEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.property.kmsKeyArn"></a>

```csharp
public string KmsKeyArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Ec2VerifiedAccessEndpointSseSpecification InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecification">Ec2VerifiedAccessEndpointSseSpecification</a>

---


### Ec2VerifiedAccessEndpointTagsList <a name="Ec2VerifiedAccessEndpointTagsList" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2VerifiedAccessEndpointTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsList.get"></a>

```csharp
private Ec2VerifiedAccessEndpointTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTags">Ec2VerifiedAccessEndpointTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsList.property.internalValue"></a>

```csharp
public IResolvable|Ec2VerifiedAccessEndpointTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTags">Ec2VerifiedAccessEndpointTags</a>[]

---


### Ec2VerifiedAccessEndpointTagsOutputReference <a name="Ec2VerifiedAccessEndpointTagsOutputReference" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2VerifiedAccessEndpointTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTags">Ec2VerifiedAccessEndpointTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Ec2VerifiedAccessEndpointTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTags">Ec2VerifiedAccessEndpointTags</a>

---



