# `vpclatticeResourceConfiguration` Submodule <a name="`vpclatticeResourceConfiguration` Submodule" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VpclatticeResourceConfiguration <a name="VpclatticeResourceConfiguration" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_resource_configuration awscc_vpclattice_resource_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new VpclatticeResourceConfiguration(Construct Scope, string Id, VpclatticeResourceConfigurationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig">VpclatticeResourceConfigurationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig">VpclatticeResourceConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.putResourceConfigurationDefinition">PutResourceConfigurationDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.resetAllowAssociationToSharableServiceNetwork">ResetAllowAssociationToSharableServiceNetwork</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.resetCustomDomainName">ResetCustomDomainName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.resetDomainVerificationId">ResetDomainVerificationId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.resetGroupDomain">ResetGroupDomain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.resetPortRanges">ResetPortRanges</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.resetProtocolType">ResetProtocolType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.resetResourceConfigurationAuthType">ResetResourceConfigurationAuthType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.resetResourceConfigurationDefinition">ResetResourceConfigurationDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.resetResourceConfigurationGroupId">ResetResourceConfigurationGroupId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.resetResourceGatewayId">ResetResourceGatewayId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutResourceConfigurationDefinition` <a name="PutResourceConfigurationDefinition" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.putResourceConfigurationDefinition"></a>

```csharp
private void PutResourceConfigurationDefinition(VpclatticeResourceConfigurationResourceConfigurationDefinition Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.putResourceConfigurationDefinition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinition">VpclatticeResourceConfigurationResourceConfigurationDefinition</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.putTags"></a>

```csharp
private void PutTags(IResolvable|VpclatticeResourceConfigurationTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTags">VpclatticeResourceConfigurationTags</a>[]

---

##### `ResetAllowAssociationToSharableServiceNetwork` <a name="ResetAllowAssociationToSharableServiceNetwork" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.resetAllowAssociationToSharableServiceNetwork"></a>

```csharp
private void ResetAllowAssociationToSharableServiceNetwork()
```

##### `ResetCustomDomainName` <a name="ResetCustomDomainName" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.resetCustomDomainName"></a>

```csharp
private void ResetCustomDomainName()
```

##### `ResetDomainVerificationId` <a name="ResetDomainVerificationId" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.resetDomainVerificationId"></a>

```csharp
private void ResetDomainVerificationId()
```

##### `ResetGroupDomain` <a name="ResetGroupDomain" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.resetGroupDomain"></a>

```csharp
private void ResetGroupDomain()
```

##### `ResetPortRanges` <a name="ResetPortRanges" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.resetPortRanges"></a>

```csharp
private void ResetPortRanges()
```

##### `ResetProtocolType` <a name="ResetProtocolType" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.resetProtocolType"></a>

```csharp
private void ResetProtocolType()
```

##### `ResetResourceConfigurationAuthType` <a name="ResetResourceConfigurationAuthType" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.resetResourceConfigurationAuthType"></a>

```csharp
private void ResetResourceConfigurationAuthType()
```

##### `ResetResourceConfigurationDefinition` <a name="ResetResourceConfigurationDefinition" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.resetResourceConfigurationDefinition"></a>

```csharp
private void ResetResourceConfigurationDefinition()
```

##### `ResetResourceConfigurationGroupId` <a name="ResetResourceConfigurationGroupId" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.resetResourceConfigurationGroupId"></a>

```csharp
private void ResetResourceConfigurationGroupId()
```

##### `ResetResourceGatewayId` <a name="ResetResourceGatewayId" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.resetResourceGatewayId"></a>

```csharp
private void ResetResourceGatewayId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a VpclatticeResourceConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

VpclatticeResourceConfiguration.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

VpclatticeResourceConfiguration.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

VpclatticeResourceConfiguration.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

VpclatticeResourceConfiguration.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a VpclatticeResourceConfiguration resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the VpclatticeResourceConfiguration to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing VpclatticeResourceConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_resource_configuration#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the VpclatticeResourceConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.resourceConfigurationDefinition">ResourceConfigurationDefinition</a></code> | <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference">VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.resourceConfigurationId">ResourceConfigurationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsList">VpclatticeResourceConfigurationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.allowAssociationToSharableServiceNetworkInput">AllowAssociationToSharableServiceNetworkInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.customDomainNameInput">CustomDomainNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.domainVerificationIdInput">DomainVerificationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.groupDomainInput">GroupDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.portRangesInput">PortRangesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.protocolTypeInput">ProtocolTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.resourceConfigurationAuthTypeInput">ResourceConfigurationAuthTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.resourceConfigurationDefinitionInput">ResourceConfigurationDefinitionInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinition">VpclatticeResourceConfigurationResourceConfigurationDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.resourceConfigurationGroupIdInput">ResourceConfigurationGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.resourceConfigurationTypeInput">ResourceConfigurationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.resourceGatewayIdInput">ResourceGatewayIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTags">VpclatticeResourceConfigurationTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.allowAssociationToSharableServiceNetwork">AllowAssociationToSharableServiceNetwork</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.customDomainName">CustomDomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.domainVerificationId">DomainVerificationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.groupDomain">GroupDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.portRanges">PortRanges</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.protocolType">ProtocolType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.resourceConfigurationAuthType">ResourceConfigurationAuthType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.resourceConfigurationGroupId">ResourceConfigurationGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.resourceConfigurationType">ResourceConfigurationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.resourceGatewayId">ResourceGatewayId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ResourceConfigurationDefinition`<sup>Required</sup> <a name="ResourceConfigurationDefinition" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.resourceConfigurationDefinition"></a>

```csharp
public VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference ResourceConfigurationDefinition { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference">VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference</a>

---

##### `ResourceConfigurationId`<sup>Required</sup> <a name="ResourceConfigurationId" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.resourceConfigurationId"></a>

```csharp
public string ResourceConfigurationId { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.tags"></a>

```csharp
public VpclatticeResourceConfigurationTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsList">VpclatticeResourceConfigurationTagsList</a>

---

##### `AllowAssociationToSharableServiceNetworkInput`<sup>Optional</sup> <a name="AllowAssociationToSharableServiceNetworkInput" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.allowAssociationToSharableServiceNetworkInput"></a>

```csharp
public bool|IResolvable AllowAssociationToSharableServiceNetworkInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `CustomDomainNameInput`<sup>Optional</sup> <a name="CustomDomainNameInput" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.customDomainNameInput"></a>

```csharp
public string CustomDomainNameInput { get; }
```

- *Type:* string

---

##### `DomainVerificationIdInput`<sup>Optional</sup> <a name="DomainVerificationIdInput" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.domainVerificationIdInput"></a>

```csharp
public string DomainVerificationIdInput { get; }
```

- *Type:* string

---

##### `GroupDomainInput`<sup>Optional</sup> <a name="GroupDomainInput" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.groupDomainInput"></a>

```csharp
public string GroupDomainInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PortRangesInput`<sup>Optional</sup> <a name="PortRangesInput" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.portRangesInput"></a>

```csharp
public string[] PortRangesInput { get; }
```

- *Type:* string[]

---

##### `ProtocolTypeInput`<sup>Optional</sup> <a name="ProtocolTypeInput" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.protocolTypeInput"></a>

```csharp
public string ProtocolTypeInput { get; }
```

- *Type:* string

---

##### `ResourceConfigurationAuthTypeInput`<sup>Optional</sup> <a name="ResourceConfigurationAuthTypeInput" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.resourceConfigurationAuthTypeInput"></a>

```csharp
public string ResourceConfigurationAuthTypeInput { get; }
```

- *Type:* string

---

##### `ResourceConfigurationDefinitionInput`<sup>Optional</sup> <a name="ResourceConfigurationDefinitionInput" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.resourceConfigurationDefinitionInput"></a>

```csharp
public IResolvable|VpclatticeResourceConfigurationResourceConfigurationDefinition ResourceConfigurationDefinitionInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinition">VpclatticeResourceConfigurationResourceConfigurationDefinition</a>

---

##### `ResourceConfigurationGroupIdInput`<sup>Optional</sup> <a name="ResourceConfigurationGroupIdInput" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.resourceConfigurationGroupIdInput"></a>

```csharp
public string ResourceConfigurationGroupIdInput { get; }
```

- *Type:* string

---

##### `ResourceConfigurationTypeInput`<sup>Optional</sup> <a name="ResourceConfigurationTypeInput" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.resourceConfigurationTypeInput"></a>

```csharp
public string ResourceConfigurationTypeInput { get; }
```

- *Type:* string

---

##### `ResourceGatewayIdInput`<sup>Optional</sup> <a name="ResourceGatewayIdInput" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.resourceGatewayIdInput"></a>

```csharp
public string ResourceGatewayIdInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.tagsInput"></a>

```csharp
public IResolvable|VpclatticeResourceConfigurationTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTags">VpclatticeResourceConfigurationTags</a>[]

---

##### `AllowAssociationToSharableServiceNetwork`<sup>Required</sup> <a name="AllowAssociationToSharableServiceNetwork" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.allowAssociationToSharableServiceNetwork"></a>

```csharp
public bool|IResolvable AllowAssociationToSharableServiceNetwork { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `CustomDomainName`<sup>Required</sup> <a name="CustomDomainName" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.customDomainName"></a>

```csharp
public string CustomDomainName { get; }
```

- *Type:* string

---

##### `DomainVerificationId`<sup>Required</sup> <a name="DomainVerificationId" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.domainVerificationId"></a>

```csharp
public string DomainVerificationId { get; }
```

- *Type:* string

---

##### `GroupDomain`<sup>Required</sup> <a name="GroupDomain" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.groupDomain"></a>

```csharp
public string GroupDomain { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PortRanges`<sup>Required</sup> <a name="PortRanges" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.portRanges"></a>

```csharp
public string[] PortRanges { get; }
```

- *Type:* string[]

---

##### `ProtocolType`<sup>Required</sup> <a name="ProtocolType" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.protocolType"></a>

```csharp
public string ProtocolType { get; }
```

- *Type:* string

---

##### `ResourceConfigurationAuthType`<sup>Required</sup> <a name="ResourceConfigurationAuthType" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.resourceConfigurationAuthType"></a>

```csharp
public string ResourceConfigurationAuthType { get; }
```

- *Type:* string

---

##### `ResourceConfigurationGroupId`<sup>Required</sup> <a name="ResourceConfigurationGroupId" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.resourceConfigurationGroupId"></a>

```csharp
public string ResourceConfigurationGroupId { get; }
```

- *Type:* string

---

##### `ResourceConfigurationType`<sup>Required</sup> <a name="ResourceConfigurationType" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.resourceConfigurationType"></a>

```csharp
public string ResourceConfigurationType { get; }
```

- *Type:* string

---

##### `ResourceGatewayId`<sup>Required</sup> <a name="ResourceGatewayId" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.resourceGatewayId"></a>

```csharp
public string ResourceGatewayId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VpclatticeResourceConfigurationConfig <a name="VpclatticeResourceConfigurationConfig" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new VpclatticeResourceConfigurationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    string ResourceConfigurationType,
    bool|IResolvable AllowAssociationToSharableServiceNetwork = null,
    string CustomDomainName = null,
    string DomainVerificationId = null,
    string GroupDomain = null,
    string[] PortRanges = null,
    string ProtocolType = null,
    string ResourceConfigurationAuthType = null,
    VpclatticeResourceConfigurationResourceConfigurationDefinition ResourceConfigurationDefinition = null,
    string ResourceConfigurationGroupId = null,
    string ResourceGatewayId = null,
    IResolvable|VpclatticeResourceConfigurationTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_resource_configuration#name VpclatticeResourceConfiguration#name}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig.property.resourceConfigurationType">ResourceConfigurationType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_resource_configuration#resource_configuration_type VpclatticeResourceConfiguration#resource_configuration_type}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig.property.allowAssociationToSharableServiceNetwork">AllowAssociationToSharableServiceNetwork</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_resource_configuration#allow_association_to_sharable_service_network VpclatticeResourceConfiguration#allow_association_to_sharable_service_network}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig.property.customDomainName">CustomDomainName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_resource_configuration#custom_domain_name VpclatticeResourceConfiguration#custom_domain_name}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig.property.domainVerificationId">DomainVerificationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_resource_configuration#domain_verification_id VpclatticeResourceConfiguration#domain_verification_id}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig.property.groupDomain">GroupDomain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_resource_configuration#group_domain VpclatticeResourceConfiguration#group_domain}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig.property.portRanges">PortRanges</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_resource_configuration#port_ranges VpclatticeResourceConfiguration#port_ranges}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig.property.protocolType">ProtocolType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_resource_configuration#protocol_type VpclatticeResourceConfiguration#protocol_type}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig.property.resourceConfigurationAuthType">ResourceConfigurationAuthType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_resource_configuration#resource_configuration_auth_type VpclatticeResourceConfiguration#resource_configuration_auth_type}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig.property.resourceConfigurationDefinition">ResourceConfigurationDefinition</a></code> | <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinition">VpclatticeResourceConfigurationResourceConfigurationDefinition</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_resource_configuration#resource_configuration_definition VpclatticeResourceConfiguration#resource_configuration_definition}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig.property.resourceConfigurationGroupId">ResourceConfigurationGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_resource_configuration#resource_configuration_group_id VpclatticeResourceConfiguration#resource_configuration_group_id}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig.property.resourceGatewayId">ResourceGatewayId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_resource_configuration#resource_gateway_id VpclatticeResourceConfiguration#resource_gateway_id}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTags">VpclatticeResourceConfigurationTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_resource_configuration#tags VpclatticeResourceConfiguration#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_resource_configuration#name VpclatticeResourceConfiguration#name}.

---

##### `ResourceConfigurationType`<sup>Required</sup> <a name="ResourceConfigurationType" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig.property.resourceConfigurationType"></a>

```csharp
public string ResourceConfigurationType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_resource_configuration#resource_configuration_type VpclatticeResourceConfiguration#resource_configuration_type}.

---

##### `AllowAssociationToSharableServiceNetwork`<sup>Optional</sup> <a name="AllowAssociationToSharableServiceNetwork" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig.property.allowAssociationToSharableServiceNetwork"></a>

```csharp
public bool|IResolvable AllowAssociationToSharableServiceNetwork { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_resource_configuration#allow_association_to_sharable_service_network VpclatticeResourceConfiguration#allow_association_to_sharable_service_network}.

---

##### `CustomDomainName`<sup>Optional</sup> <a name="CustomDomainName" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig.property.customDomainName"></a>

```csharp
public string CustomDomainName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_resource_configuration#custom_domain_name VpclatticeResourceConfiguration#custom_domain_name}.

---

##### `DomainVerificationId`<sup>Optional</sup> <a name="DomainVerificationId" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig.property.domainVerificationId"></a>

```csharp
public string DomainVerificationId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_resource_configuration#domain_verification_id VpclatticeResourceConfiguration#domain_verification_id}.

---

##### `GroupDomain`<sup>Optional</sup> <a name="GroupDomain" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig.property.groupDomain"></a>

```csharp
public string GroupDomain { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_resource_configuration#group_domain VpclatticeResourceConfiguration#group_domain}.

---

##### `PortRanges`<sup>Optional</sup> <a name="PortRanges" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig.property.portRanges"></a>

```csharp
public string[] PortRanges { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_resource_configuration#port_ranges VpclatticeResourceConfiguration#port_ranges}.

---

##### `ProtocolType`<sup>Optional</sup> <a name="ProtocolType" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig.property.protocolType"></a>

```csharp
public string ProtocolType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_resource_configuration#protocol_type VpclatticeResourceConfiguration#protocol_type}.

---

##### `ResourceConfigurationAuthType`<sup>Optional</sup> <a name="ResourceConfigurationAuthType" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig.property.resourceConfigurationAuthType"></a>

```csharp
public string ResourceConfigurationAuthType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_resource_configuration#resource_configuration_auth_type VpclatticeResourceConfiguration#resource_configuration_auth_type}.

---

##### `ResourceConfigurationDefinition`<sup>Optional</sup> <a name="ResourceConfigurationDefinition" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig.property.resourceConfigurationDefinition"></a>

```csharp
public VpclatticeResourceConfigurationResourceConfigurationDefinition ResourceConfigurationDefinition { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinition">VpclatticeResourceConfigurationResourceConfigurationDefinition</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_resource_configuration#resource_configuration_definition VpclatticeResourceConfiguration#resource_configuration_definition}.

---

##### `ResourceConfigurationGroupId`<sup>Optional</sup> <a name="ResourceConfigurationGroupId" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig.property.resourceConfigurationGroupId"></a>

```csharp
public string ResourceConfigurationGroupId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_resource_configuration#resource_configuration_group_id VpclatticeResourceConfiguration#resource_configuration_group_id}.

---

##### `ResourceGatewayId`<sup>Optional</sup> <a name="ResourceGatewayId" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig.property.resourceGatewayId"></a>

```csharp
public string ResourceGatewayId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_resource_configuration#resource_gateway_id VpclatticeResourceConfiguration#resource_gateway_id}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig.property.tags"></a>

```csharp
public IResolvable|VpclatticeResourceConfigurationTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTags">VpclatticeResourceConfigurationTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_resource_configuration#tags VpclatticeResourceConfiguration#tags}.

---

### VpclatticeResourceConfigurationResourceConfigurationDefinition <a name="VpclatticeResourceConfigurationResourceConfigurationDefinition" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinition.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new VpclatticeResourceConfigurationResourceConfigurationDefinition {
    string ArnResource = null,
    VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResource DnsResource = null,
    string IpResource = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinition.property.arnResource">ArnResource</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_resource_configuration#arn_resource VpclatticeResourceConfiguration#arn_resource}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinition.property.dnsResource">DnsResource</a></code> | <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResource">VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResource</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_resource_configuration#dns_resource VpclatticeResourceConfiguration#dns_resource}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinition.property.ipResource">IpResource</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_resource_configuration#ip_resource VpclatticeResourceConfiguration#ip_resource}. |

---

##### `ArnResource`<sup>Optional</sup> <a name="ArnResource" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinition.property.arnResource"></a>

```csharp
public string ArnResource { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_resource_configuration#arn_resource VpclatticeResourceConfiguration#arn_resource}.

---

##### `DnsResource`<sup>Optional</sup> <a name="DnsResource" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinition.property.dnsResource"></a>

```csharp
public VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResource DnsResource { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResource">VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResource</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_resource_configuration#dns_resource VpclatticeResourceConfiguration#dns_resource}.

---

##### `IpResource`<sup>Optional</sup> <a name="IpResource" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinition.property.ipResource"></a>

```csharp
public string IpResource { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_resource_configuration#ip_resource VpclatticeResourceConfiguration#ip_resource}.

---

### VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResource <a name="VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResource" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResource.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResource {
    string DomainName = null,
    string IpAddressType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResource.property.domainName">DomainName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_resource_configuration#domain_name VpclatticeResourceConfiguration#domain_name}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResource.property.ipAddressType">IpAddressType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_resource_configuration#ip_address_type VpclatticeResourceConfiguration#ip_address_type}. |

---

##### `DomainName`<sup>Optional</sup> <a name="DomainName" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResource.property.domainName"></a>

```csharp
public string DomainName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_resource_configuration#domain_name VpclatticeResourceConfiguration#domain_name}.

---

##### `IpAddressType`<sup>Optional</sup> <a name="IpAddressType" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResource.property.ipAddressType"></a>

```csharp
public string IpAddressType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_resource_configuration#ip_address_type VpclatticeResourceConfiguration#ip_address_type}.

---

### VpclatticeResourceConfigurationTags <a name="VpclatticeResourceConfigurationTags" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new VpclatticeResourceConfigurationTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_resource_configuration#key VpclatticeResourceConfiguration#key}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_resource_configuration#value VpclatticeResourceConfiguration#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_resource_configuration#key VpclatticeResourceConfiguration#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_resource_configuration#value VpclatticeResourceConfiguration#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference <a name="VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.resetDomainName">ResetDomainName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.resetIpAddressType">ResetIpAddressType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDomainName` <a name="ResetDomainName" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.resetDomainName"></a>

```csharp
private void ResetDomainName()
```

##### `ResetIpAddressType` <a name="ResetIpAddressType" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.resetIpAddressType"></a>

```csharp
private void ResetIpAddressType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.property.domainNameInput">DomainNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.property.ipAddressTypeInput">IpAddressTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.property.domainName">DomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.property.ipAddressType">IpAddressType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResource">VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DomainNameInput`<sup>Optional</sup> <a name="DomainNameInput" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.property.domainNameInput"></a>

```csharp
public string DomainNameInput { get; }
```

- *Type:* string

---

##### `IpAddressTypeInput`<sup>Optional</sup> <a name="IpAddressTypeInput" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.property.ipAddressTypeInput"></a>

```csharp
public string IpAddressTypeInput { get; }
```

- *Type:* string

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.property.domainName"></a>

```csharp
public string DomainName { get; }
```

- *Type:* string

---

##### `IpAddressType`<sup>Required</sup> <a name="IpAddressType" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.property.ipAddressType"></a>

```csharp
public string IpAddressType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.property.internalValue"></a>

```csharp
public IResolvable|VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResource InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResource">VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResource</a>

---


### VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference <a name="VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.putDnsResource">PutDnsResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.resetArnResource">ResetArnResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.resetDnsResource">ResetDnsResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.resetIpResource">ResetIpResource</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDnsResource` <a name="PutDnsResource" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.putDnsResource"></a>

```csharp
private void PutDnsResource(VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResource Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.putDnsResource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResource">VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResource</a>

---

##### `ResetArnResource` <a name="ResetArnResource" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.resetArnResource"></a>

```csharp
private void ResetArnResource()
```

##### `ResetDnsResource` <a name="ResetDnsResource" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.resetDnsResource"></a>

```csharp
private void ResetDnsResource()
```

##### `ResetIpResource` <a name="ResetIpResource" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.resetIpResource"></a>

```csharp
private void ResetIpResource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.property.dnsResource">DnsResource</a></code> | <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference">VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.property.arnResourceInput">ArnResourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.property.dnsResourceInput">DnsResourceInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResource">VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.property.ipResourceInput">IpResourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.property.arnResource">ArnResource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.property.ipResource">IpResource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinition">VpclatticeResourceConfigurationResourceConfigurationDefinition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DnsResource`<sup>Required</sup> <a name="DnsResource" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.property.dnsResource"></a>

```csharp
public VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference DnsResource { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference">VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference</a>

---

##### `ArnResourceInput`<sup>Optional</sup> <a name="ArnResourceInput" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.property.arnResourceInput"></a>

```csharp
public string ArnResourceInput { get; }
```

- *Type:* string

---

##### `DnsResourceInput`<sup>Optional</sup> <a name="DnsResourceInput" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.property.dnsResourceInput"></a>

```csharp
public IResolvable|VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResource DnsResourceInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResource">VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResource</a>

---

##### `IpResourceInput`<sup>Optional</sup> <a name="IpResourceInput" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.property.ipResourceInput"></a>

```csharp
public string IpResourceInput { get; }
```

- *Type:* string

---

##### `ArnResource`<sup>Required</sup> <a name="ArnResource" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.property.arnResource"></a>

```csharp
public string ArnResource { get; }
```

- *Type:* string

---

##### `IpResource`<sup>Required</sup> <a name="IpResource" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.property.ipResource"></a>

```csharp
public string IpResource { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.property.internalValue"></a>

```csharp
public IResolvable|VpclatticeResourceConfigurationResourceConfigurationDefinition InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinition">VpclatticeResourceConfigurationResourceConfigurationDefinition</a>

---


### VpclatticeResourceConfigurationTagsList <a name="VpclatticeResourceConfigurationTagsList" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new VpclatticeResourceConfigurationTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsList.get"></a>

```csharp
private VpclatticeResourceConfigurationTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTags">VpclatticeResourceConfigurationTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsList.property.internalValue"></a>

```csharp
public IResolvable|VpclatticeResourceConfigurationTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTags">VpclatticeResourceConfigurationTags</a>[]

---


### VpclatticeResourceConfigurationTagsOutputReference <a name="VpclatticeResourceConfigurationTagsOutputReference" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new VpclatticeResourceConfigurationTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTags">VpclatticeResourceConfigurationTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|VpclatticeResourceConfigurationTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTags">VpclatticeResourceConfigurationTags</a>

---



