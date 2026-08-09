# `opensearchserviceDomain` Submodule <a name="`opensearchserviceDomain` Submodule" id="@cdktn/provider-awscc.opensearchserviceDomain"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OpensearchserviceDomain <a name="OpensearchserviceDomain" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain awscc_opensearchservice_domain}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OpensearchserviceDomain(Construct Scope, string Id, OpensearchserviceDomainConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig">OpensearchserviceDomainConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig">OpensearchserviceDomainConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putAdvancedSecurityOptions">PutAdvancedSecurityOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putAimlOptions">PutAimlOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putAutomatedSnapshotPauseOptions">PutAutomatedSnapshotPauseOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putClusterConfig">PutClusterConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putCognitoOptions">PutCognitoOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putDeploymentStrategyOptions">PutDeploymentStrategyOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putDomainEndpointOptions">PutDomainEndpointOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putEbsOptions">PutEbsOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putEncryptionAtRestOptions">PutEncryptionAtRestOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putIdentityCenterOptions">PutIdentityCenterOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putLogPublishingOptions">PutLogPublishingOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putNodeToNodeEncryptionOptions">PutNodeToNodeEncryptionOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putOffPeakWindowOptions">PutOffPeakWindowOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putSnapshotOptions">PutSnapshotOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putSoftwareUpdateOptions">PutSoftwareUpdateOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putVpcOptions">PutVpcOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetAccessPolicies">ResetAccessPolicies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetAdvancedOptions">ResetAdvancedOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetAdvancedSecurityOptions">ResetAdvancedSecurityOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetAimlOptions">ResetAimlOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetAutomatedSnapshotPauseOptions">ResetAutomatedSnapshotPauseOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetClusterConfig">ResetClusterConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetCognitoOptions">ResetCognitoOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetDeploymentStrategyOptions">ResetDeploymentStrategyOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetDomainEndpointOptions">ResetDomainEndpointOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetDomainName">ResetDomainName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetEbsOptions">ResetEbsOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetEncryptionAtRestOptions">ResetEncryptionAtRestOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetEngineMode">ResetEngineMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetEngineVersion">ResetEngineVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetIdentityCenterOptions">ResetIdentityCenterOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetIpAddressType">ResetIpAddressType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetLogPublishingOptions">ResetLogPublishingOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetNodeToNodeEncryptionOptions">ResetNodeToNodeEncryptionOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetOffPeakWindowOptions">ResetOffPeakWindowOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetSkipShardMigrationWait">ResetSkipShardMigrationWait</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetSnapshotOptions">ResetSnapshotOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetSoftwareUpdateOptions">ResetSoftwareUpdateOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetUseCase">ResetUseCase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetVpcOptions">ResetVpcOptions</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAdvancedSecurityOptions` <a name="PutAdvancedSecurityOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putAdvancedSecurityOptions"></a>

```csharp
private void PutAdvancedSecurityOptions(OpensearchserviceDomainAdvancedSecurityOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putAdvancedSecurityOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptions">OpensearchserviceDomainAdvancedSecurityOptions</a>

---

##### `PutAimlOptions` <a name="PutAimlOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putAimlOptions"></a>

```csharp
private void PutAimlOptions(OpensearchserviceDomainAimlOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putAimlOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptions">OpensearchserviceDomainAimlOptions</a>

---

##### `PutAutomatedSnapshotPauseOptions` <a name="PutAutomatedSnapshotPauseOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putAutomatedSnapshotPauseOptions"></a>

```csharp
private void PutAutomatedSnapshotPauseOptions(OpensearchserviceDomainAutomatedSnapshotPauseOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putAutomatedSnapshotPauseOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptions">OpensearchserviceDomainAutomatedSnapshotPauseOptions</a>

---

##### `PutClusterConfig` <a name="PutClusterConfig" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putClusterConfig"></a>

```csharp
private void PutClusterConfig(OpensearchserviceDomainClusterConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putClusterConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfig">OpensearchserviceDomainClusterConfig</a>

---

##### `PutCognitoOptions` <a name="PutCognitoOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putCognitoOptions"></a>

```csharp
private void PutCognitoOptions(OpensearchserviceDomainCognitoOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putCognitoOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptions">OpensearchserviceDomainCognitoOptions</a>

---

##### `PutDeploymentStrategyOptions` <a name="PutDeploymentStrategyOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putDeploymentStrategyOptions"></a>

```csharp
private void PutDeploymentStrategyOptions(OpensearchserviceDomainDeploymentStrategyOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putDeploymentStrategyOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptions">OpensearchserviceDomainDeploymentStrategyOptions</a>

---

##### `PutDomainEndpointOptions` <a name="PutDomainEndpointOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putDomainEndpointOptions"></a>

```csharp
private void PutDomainEndpointOptions(OpensearchserviceDomainDomainEndpointOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putDomainEndpointOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptions">OpensearchserviceDomainDomainEndpointOptions</a>

---

##### `PutEbsOptions` <a name="PutEbsOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putEbsOptions"></a>

```csharp
private void PutEbsOptions(OpensearchserviceDomainEbsOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putEbsOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptions">OpensearchserviceDomainEbsOptions</a>

---

##### `PutEncryptionAtRestOptions` <a name="PutEncryptionAtRestOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putEncryptionAtRestOptions"></a>

```csharp
private void PutEncryptionAtRestOptions(OpensearchserviceDomainEncryptionAtRestOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putEncryptionAtRestOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptions">OpensearchserviceDomainEncryptionAtRestOptions</a>

---

##### `PutIdentityCenterOptions` <a name="PutIdentityCenterOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putIdentityCenterOptions"></a>

```csharp
private void PutIdentityCenterOptions(OpensearchserviceDomainIdentityCenterOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putIdentityCenterOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptions">OpensearchserviceDomainIdentityCenterOptions</a>

---

##### `PutLogPublishingOptions` <a name="PutLogPublishingOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putLogPublishingOptions"></a>

```csharp
private void PutLogPublishingOptions(IResolvable|System.Collections.Generic.IDictionary<string, OpensearchserviceDomainLogPublishingOptions> Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putLogPublishingOptions.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|System.Collections.Generic.IDictionary<string, <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptions">OpensearchserviceDomainLogPublishingOptions</a>>

---

##### `PutNodeToNodeEncryptionOptions` <a name="PutNodeToNodeEncryptionOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putNodeToNodeEncryptionOptions"></a>

```csharp
private void PutNodeToNodeEncryptionOptions(OpensearchserviceDomainNodeToNodeEncryptionOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putNodeToNodeEncryptionOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptions">OpensearchserviceDomainNodeToNodeEncryptionOptions</a>

---

##### `PutOffPeakWindowOptions` <a name="PutOffPeakWindowOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putOffPeakWindowOptions"></a>

```csharp
private void PutOffPeakWindowOptions(OpensearchserviceDomainOffPeakWindowOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putOffPeakWindowOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptions">OpensearchserviceDomainOffPeakWindowOptions</a>

---

##### `PutSnapshotOptions` <a name="PutSnapshotOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putSnapshotOptions"></a>

```csharp
private void PutSnapshotOptions(OpensearchserviceDomainSnapshotOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putSnapshotOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptions">OpensearchserviceDomainSnapshotOptions</a>

---

##### `PutSoftwareUpdateOptions` <a name="PutSoftwareUpdateOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putSoftwareUpdateOptions"></a>

```csharp
private void PutSoftwareUpdateOptions(OpensearchserviceDomainSoftwareUpdateOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putSoftwareUpdateOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptions">OpensearchserviceDomainSoftwareUpdateOptions</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putTags"></a>

```csharp
private void PutTags(IResolvable|OpensearchserviceDomainTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTags">OpensearchserviceDomainTags</a>[]

---

##### `PutVpcOptions` <a name="PutVpcOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putVpcOptions"></a>

```csharp
private void PutVpcOptions(OpensearchserviceDomainVpcOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putVpcOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptions">OpensearchserviceDomainVpcOptions</a>

---

##### `ResetAccessPolicies` <a name="ResetAccessPolicies" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetAccessPolicies"></a>

```csharp
private void ResetAccessPolicies()
```

##### `ResetAdvancedOptions` <a name="ResetAdvancedOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetAdvancedOptions"></a>

```csharp
private void ResetAdvancedOptions()
```

##### `ResetAdvancedSecurityOptions` <a name="ResetAdvancedSecurityOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetAdvancedSecurityOptions"></a>

```csharp
private void ResetAdvancedSecurityOptions()
```

##### `ResetAimlOptions` <a name="ResetAimlOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetAimlOptions"></a>

```csharp
private void ResetAimlOptions()
```

##### `ResetAutomatedSnapshotPauseOptions` <a name="ResetAutomatedSnapshotPauseOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetAutomatedSnapshotPauseOptions"></a>

```csharp
private void ResetAutomatedSnapshotPauseOptions()
```

##### `ResetClusterConfig` <a name="ResetClusterConfig" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetClusterConfig"></a>

```csharp
private void ResetClusterConfig()
```

##### `ResetCognitoOptions` <a name="ResetCognitoOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetCognitoOptions"></a>

```csharp
private void ResetCognitoOptions()
```

##### `ResetDeploymentStrategyOptions` <a name="ResetDeploymentStrategyOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetDeploymentStrategyOptions"></a>

```csharp
private void ResetDeploymentStrategyOptions()
```

##### `ResetDomainEndpointOptions` <a name="ResetDomainEndpointOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetDomainEndpointOptions"></a>

```csharp
private void ResetDomainEndpointOptions()
```

##### `ResetDomainName` <a name="ResetDomainName" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetDomainName"></a>

```csharp
private void ResetDomainName()
```

##### `ResetEbsOptions` <a name="ResetEbsOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetEbsOptions"></a>

```csharp
private void ResetEbsOptions()
```

##### `ResetEncryptionAtRestOptions` <a name="ResetEncryptionAtRestOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetEncryptionAtRestOptions"></a>

```csharp
private void ResetEncryptionAtRestOptions()
```

##### `ResetEngineMode` <a name="ResetEngineMode" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetEngineMode"></a>

```csharp
private void ResetEngineMode()
```

##### `ResetEngineVersion` <a name="ResetEngineVersion" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetEngineVersion"></a>

```csharp
private void ResetEngineVersion()
```

##### `ResetIdentityCenterOptions` <a name="ResetIdentityCenterOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetIdentityCenterOptions"></a>

```csharp
private void ResetIdentityCenterOptions()
```

##### `ResetIpAddressType` <a name="ResetIpAddressType" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetIpAddressType"></a>

```csharp
private void ResetIpAddressType()
```

##### `ResetLogPublishingOptions` <a name="ResetLogPublishingOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetLogPublishingOptions"></a>

```csharp
private void ResetLogPublishingOptions()
```

##### `ResetNodeToNodeEncryptionOptions` <a name="ResetNodeToNodeEncryptionOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetNodeToNodeEncryptionOptions"></a>

```csharp
private void ResetNodeToNodeEncryptionOptions()
```

##### `ResetOffPeakWindowOptions` <a name="ResetOffPeakWindowOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetOffPeakWindowOptions"></a>

```csharp
private void ResetOffPeakWindowOptions()
```

##### `ResetSkipShardMigrationWait` <a name="ResetSkipShardMigrationWait" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetSkipShardMigrationWait"></a>

```csharp
private void ResetSkipShardMigrationWait()
```

##### `ResetSnapshotOptions` <a name="ResetSnapshotOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetSnapshotOptions"></a>

```csharp
private void ResetSnapshotOptions()
```

##### `ResetSoftwareUpdateOptions` <a name="ResetSoftwareUpdateOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetSoftwareUpdateOptions"></a>

```csharp
private void ResetSoftwareUpdateOptions()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetUseCase` <a name="ResetUseCase" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetUseCase"></a>

```csharp
private void ResetUseCase()
```

##### `ResetVpcOptions` <a name="ResetVpcOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetVpcOptions"></a>

```csharp
private void ResetVpcOptions()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a OpensearchserviceDomain resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

OpensearchserviceDomain.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

OpensearchserviceDomain.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

OpensearchserviceDomain.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

OpensearchserviceDomain.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a OpensearchserviceDomain resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OpensearchserviceDomain to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OpensearchserviceDomain that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the OpensearchserviceDomain to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.advancedSecurityOptions">AdvancedSecurityOptions</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference">OpensearchserviceDomainAdvancedSecurityOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.aimlOptions">AimlOptions</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference">OpensearchserviceDomainAimlOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.automatedSnapshotPauseOptions">AutomatedSnapshotPauseOptions</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference">OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.clusterConfig">ClusterConfig</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference">OpensearchserviceDomainClusterConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.cognitoOptions">CognitoOptions</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference">OpensearchserviceDomainCognitoOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.deploymentStrategyOptions">DeploymentStrategyOptions</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference">OpensearchserviceDomainDeploymentStrategyOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.domainArn">DomainArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.domainEndpoint">DomainEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.domainEndpointOptions">DomainEndpointOptions</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference">OpensearchserviceDomainDomainEndpointOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.domainEndpoints">DomainEndpoints</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.domainEndpointV2">DomainEndpointV2</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.domainId">DomainId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.ebsOptions">EbsOptions</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference">OpensearchserviceDomainEbsOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.encryptionAtRestOptions">EncryptionAtRestOptions</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference">OpensearchserviceDomainEncryptionAtRestOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.identityCenterOptions">IdentityCenterOptions</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference">OpensearchserviceDomainIdentityCenterOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.logPublishingOptions">LogPublishingOptions</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsMap">OpensearchserviceDomainLogPublishingOptionsMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.nodeToNodeEncryptionOptions">NodeToNodeEncryptionOptions</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference">OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.offPeakWindowOptions">OffPeakWindowOptions</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference">OpensearchserviceDomainOffPeakWindowOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.serviceSoftwareOptions">ServiceSoftwareOptions</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference">OpensearchserviceDomainServiceSoftwareOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.snapshotOptions">SnapshotOptions</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference">OpensearchserviceDomainSnapshotOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.softwareUpdateOptions">SoftwareUpdateOptions</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference">OpensearchserviceDomainSoftwareUpdateOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsList">OpensearchserviceDomainTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.vpcOptions">VpcOptions</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference">OpensearchserviceDomainVpcOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.accessPoliciesInput">AccessPoliciesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.advancedOptionsInput">AdvancedOptionsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.advancedSecurityOptionsInput">AdvancedSecurityOptionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptions">OpensearchserviceDomainAdvancedSecurityOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.aimlOptionsInput">AimlOptionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptions">OpensearchserviceDomainAimlOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.automatedSnapshotPauseOptionsInput">AutomatedSnapshotPauseOptionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptions">OpensearchserviceDomainAutomatedSnapshotPauseOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.clusterConfigInput">ClusterConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfig">OpensearchserviceDomainClusterConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.cognitoOptionsInput">CognitoOptionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptions">OpensearchserviceDomainCognitoOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.deploymentStrategyOptionsInput">DeploymentStrategyOptionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptions">OpensearchserviceDomainDeploymentStrategyOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.domainEndpointOptionsInput">DomainEndpointOptionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptions">OpensearchserviceDomainDomainEndpointOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.domainNameInput">DomainNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.ebsOptionsInput">EbsOptionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptions">OpensearchserviceDomainEbsOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.encryptionAtRestOptionsInput">EncryptionAtRestOptionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptions">OpensearchserviceDomainEncryptionAtRestOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.engineModeInput">EngineModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.engineVersionInput">EngineVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.identityCenterOptionsInput">IdentityCenterOptionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptions">OpensearchserviceDomainIdentityCenterOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.ipAddressTypeInput">IpAddressTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.logPublishingOptionsInput">LogPublishingOptionsInput</a></code> | <code>Io.Cdktn.IResolvable\|System.Collections.Generic.IDictionary<string, <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptions">OpensearchserviceDomainLogPublishingOptions</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.nodeToNodeEncryptionOptionsInput">NodeToNodeEncryptionOptionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptions">OpensearchserviceDomainNodeToNodeEncryptionOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.offPeakWindowOptionsInput">OffPeakWindowOptionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptions">OpensearchserviceDomainOffPeakWindowOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.skipShardMigrationWaitInput">SkipShardMigrationWaitInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.snapshotOptionsInput">SnapshotOptionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptions">OpensearchserviceDomainSnapshotOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.softwareUpdateOptionsInput">SoftwareUpdateOptionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptions">OpensearchserviceDomainSoftwareUpdateOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTags">OpensearchserviceDomainTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.useCaseInput">UseCaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.vpcOptionsInput">VpcOptionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptions">OpensearchserviceDomainVpcOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.accessPolicies">AccessPolicies</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.advancedOptions">AdvancedOptions</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.domainName">DomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.engineMode">EngineMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.engineVersion">EngineVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.ipAddressType">IpAddressType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.skipShardMigrationWait">SkipShardMigrationWait</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.useCase">UseCase</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AdvancedSecurityOptions`<sup>Required</sup> <a name="AdvancedSecurityOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.advancedSecurityOptions"></a>

```csharp
public OpensearchserviceDomainAdvancedSecurityOptionsOutputReference AdvancedSecurityOptions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference">OpensearchserviceDomainAdvancedSecurityOptionsOutputReference</a>

---

##### `AimlOptions`<sup>Required</sup> <a name="AimlOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.aimlOptions"></a>

```csharp
public OpensearchserviceDomainAimlOptionsOutputReference AimlOptions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference">OpensearchserviceDomainAimlOptionsOutputReference</a>

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `AutomatedSnapshotPauseOptions`<sup>Required</sup> <a name="AutomatedSnapshotPauseOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.automatedSnapshotPauseOptions"></a>

```csharp
public OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference AutomatedSnapshotPauseOptions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference">OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference</a>

---

##### `ClusterConfig`<sup>Required</sup> <a name="ClusterConfig" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.clusterConfig"></a>

```csharp
public OpensearchserviceDomainClusterConfigOutputReference ClusterConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference">OpensearchserviceDomainClusterConfigOutputReference</a>

---

##### `CognitoOptions`<sup>Required</sup> <a name="CognitoOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.cognitoOptions"></a>

```csharp
public OpensearchserviceDomainCognitoOptionsOutputReference CognitoOptions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference">OpensearchserviceDomainCognitoOptionsOutputReference</a>

---

##### `DeploymentStrategyOptions`<sup>Required</sup> <a name="DeploymentStrategyOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.deploymentStrategyOptions"></a>

```csharp
public OpensearchserviceDomainDeploymentStrategyOptionsOutputReference DeploymentStrategyOptions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference">OpensearchserviceDomainDeploymentStrategyOptionsOutputReference</a>

---

##### `DomainArn`<sup>Required</sup> <a name="DomainArn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.domainArn"></a>

```csharp
public string DomainArn { get; }
```

- *Type:* string

---

##### `DomainEndpoint`<sup>Required</sup> <a name="DomainEndpoint" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.domainEndpoint"></a>

```csharp
public string DomainEndpoint { get; }
```

- *Type:* string

---

##### `DomainEndpointOptions`<sup>Required</sup> <a name="DomainEndpointOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.domainEndpointOptions"></a>

```csharp
public OpensearchserviceDomainDomainEndpointOptionsOutputReference DomainEndpointOptions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference">OpensearchserviceDomainDomainEndpointOptionsOutputReference</a>

---

##### `DomainEndpoints`<sup>Required</sup> <a name="DomainEndpoints" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.domainEndpoints"></a>

```csharp
public StringMap DomainEndpoints { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `DomainEndpointV2`<sup>Required</sup> <a name="DomainEndpointV2" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.domainEndpointV2"></a>

```csharp
public string DomainEndpointV2 { get; }
```

- *Type:* string

---

##### `DomainId`<sup>Required</sup> <a name="DomainId" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.domainId"></a>

```csharp
public string DomainId { get; }
```

- *Type:* string

---

##### `EbsOptions`<sup>Required</sup> <a name="EbsOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.ebsOptions"></a>

```csharp
public OpensearchserviceDomainEbsOptionsOutputReference EbsOptions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference">OpensearchserviceDomainEbsOptionsOutputReference</a>

---

##### `EncryptionAtRestOptions`<sup>Required</sup> <a name="EncryptionAtRestOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.encryptionAtRestOptions"></a>

```csharp
public OpensearchserviceDomainEncryptionAtRestOptionsOutputReference EncryptionAtRestOptions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference">OpensearchserviceDomainEncryptionAtRestOptionsOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IdentityCenterOptions`<sup>Required</sup> <a name="IdentityCenterOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.identityCenterOptions"></a>

```csharp
public OpensearchserviceDomainIdentityCenterOptionsOutputReference IdentityCenterOptions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference">OpensearchserviceDomainIdentityCenterOptionsOutputReference</a>

---

##### `LogPublishingOptions`<sup>Required</sup> <a name="LogPublishingOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.logPublishingOptions"></a>

```csharp
public OpensearchserviceDomainLogPublishingOptionsMap LogPublishingOptions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsMap">OpensearchserviceDomainLogPublishingOptionsMap</a>

---

##### `NodeToNodeEncryptionOptions`<sup>Required</sup> <a name="NodeToNodeEncryptionOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.nodeToNodeEncryptionOptions"></a>

```csharp
public OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference NodeToNodeEncryptionOptions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference">OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference</a>

---

##### `OffPeakWindowOptions`<sup>Required</sup> <a name="OffPeakWindowOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.offPeakWindowOptions"></a>

```csharp
public OpensearchserviceDomainOffPeakWindowOptionsOutputReference OffPeakWindowOptions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference">OpensearchserviceDomainOffPeakWindowOptionsOutputReference</a>

---

##### `ServiceSoftwareOptions`<sup>Required</sup> <a name="ServiceSoftwareOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.serviceSoftwareOptions"></a>

```csharp
public OpensearchserviceDomainServiceSoftwareOptionsOutputReference ServiceSoftwareOptions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference">OpensearchserviceDomainServiceSoftwareOptionsOutputReference</a>

---

##### `SnapshotOptions`<sup>Required</sup> <a name="SnapshotOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.snapshotOptions"></a>

```csharp
public OpensearchserviceDomainSnapshotOptionsOutputReference SnapshotOptions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference">OpensearchserviceDomainSnapshotOptionsOutputReference</a>

---

##### `SoftwareUpdateOptions`<sup>Required</sup> <a name="SoftwareUpdateOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.softwareUpdateOptions"></a>

```csharp
public OpensearchserviceDomainSoftwareUpdateOptionsOutputReference SoftwareUpdateOptions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference">OpensearchserviceDomainSoftwareUpdateOptionsOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.tags"></a>

```csharp
public OpensearchserviceDomainTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsList">OpensearchserviceDomainTagsList</a>

---

##### `VpcOptions`<sup>Required</sup> <a name="VpcOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.vpcOptions"></a>

```csharp
public OpensearchserviceDomainVpcOptionsOutputReference VpcOptions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference">OpensearchserviceDomainVpcOptionsOutputReference</a>

---

##### `AccessPoliciesInput`<sup>Optional</sup> <a name="AccessPoliciesInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.accessPoliciesInput"></a>

```csharp
public string AccessPoliciesInput { get; }
```

- *Type:* string

---

##### `AdvancedOptionsInput`<sup>Optional</sup> <a name="AdvancedOptionsInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.advancedOptionsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AdvancedOptionsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `AdvancedSecurityOptionsInput`<sup>Optional</sup> <a name="AdvancedSecurityOptionsInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.advancedSecurityOptionsInput"></a>

```csharp
public IResolvable|OpensearchserviceDomainAdvancedSecurityOptions AdvancedSecurityOptionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptions">OpensearchserviceDomainAdvancedSecurityOptions</a>

---

##### `AimlOptionsInput`<sup>Optional</sup> <a name="AimlOptionsInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.aimlOptionsInput"></a>

```csharp
public IResolvable|OpensearchserviceDomainAimlOptions AimlOptionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptions">OpensearchserviceDomainAimlOptions</a>

---

##### `AutomatedSnapshotPauseOptionsInput`<sup>Optional</sup> <a name="AutomatedSnapshotPauseOptionsInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.automatedSnapshotPauseOptionsInput"></a>

```csharp
public IResolvable|OpensearchserviceDomainAutomatedSnapshotPauseOptions AutomatedSnapshotPauseOptionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptions">OpensearchserviceDomainAutomatedSnapshotPauseOptions</a>

---

##### `ClusterConfigInput`<sup>Optional</sup> <a name="ClusterConfigInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.clusterConfigInput"></a>

```csharp
public IResolvable|OpensearchserviceDomainClusterConfig ClusterConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfig">OpensearchserviceDomainClusterConfig</a>

---

##### `CognitoOptionsInput`<sup>Optional</sup> <a name="CognitoOptionsInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.cognitoOptionsInput"></a>

```csharp
public IResolvable|OpensearchserviceDomainCognitoOptions CognitoOptionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptions">OpensearchserviceDomainCognitoOptions</a>

---

##### `DeploymentStrategyOptionsInput`<sup>Optional</sup> <a name="DeploymentStrategyOptionsInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.deploymentStrategyOptionsInput"></a>

```csharp
public IResolvable|OpensearchserviceDomainDeploymentStrategyOptions DeploymentStrategyOptionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptions">OpensearchserviceDomainDeploymentStrategyOptions</a>

---

##### `DomainEndpointOptionsInput`<sup>Optional</sup> <a name="DomainEndpointOptionsInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.domainEndpointOptionsInput"></a>

```csharp
public IResolvable|OpensearchserviceDomainDomainEndpointOptions DomainEndpointOptionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptions">OpensearchserviceDomainDomainEndpointOptions</a>

---

##### `DomainNameInput`<sup>Optional</sup> <a name="DomainNameInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.domainNameInput"></a>

```csharp
public string DomainNameInput { get; }
```

- *Type:* string

---

##### `EbsOptionsInput`<sup>Optional</sup> <a name="EbsOptionsInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.ebsOptionsInput"></a>

```csharp
public IResolvable|OpensearchserviceDomainEbsOptions EbsOptionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptions">OpensearchserviceDomainEbsOptions</a>

---

##### `EncryptionAtRestOptionsInput`<sup>Optional</sup> <a name="EncryptionAtRestOptionsInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.encryptionAtRestOptionsInput"></a>

```csharp
public IResolvable|OpensearchserviceDomainEncryptionAtRestOptions EncryptionAtRestOptionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptions">OpensearchserviceDomainEncryptionAtRestOptions</a>

---

##### `EngineModeInput`<sup>Optional</sup> <a name="EngineModeInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.engineModeInput"></a>

```csharp
public string EngineModeInput { get; }
```

- *Type:* string

---

##### `EngineVersionInput`<sup>Optional</sup> <a name="EngineVersionInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.engineVersionInput"></a>

```csharp
public string EngineVersionInput { get; }
```

- *Type:* string

---

##### `IdentityCenterOptionsInput`<sup>Optional</sup> <a name="IdentityCenterOptionsInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.identityCenterOptionsInput"></a>

```csharp
public IResolvable|OpensearchserviceDomainIdentityCenterOptions IdentityCenterOptionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptions">OpensearchserviceDomainIdentityCenterOptions</a>

---

##### `IpAddressTypeInput`<sup>Optional</sup> <a name="IpAddressTypeInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.ipAddressTypeInput"></a>

```csharp
public string IpAddressTypeInput { get; }
```

- *Type:* string

---

##### `LogPublishingOptionsInput`<sup>Optional</sup> <a name="LogPublishingOptionsInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.logPublishingOptionsInput"></a>

```csharp
public IResolvable|System.Collections.Generic.IDictionary<string, OpensearchserviceDomainLogPublishingOptions> LogPublishingOptionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|System.Collections.Generic.IDictionary<string, <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptions">OpensearchserviceDomainLogPublishingOptions</a>>

---

##### `NodeToNodeEncryptionOptionsInput`<sup>Optional</sup> <a name="NodeToNodeEncryptionOptionsInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.nodeToNodeEncryptionOptionsInput"></a>

```csharp
public IResolvable|OpensearchserviceDomainNodeToNodeEncryptionOptions NodeToNodeEncryptionOptionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptions">OpensearchserviceDomainNodeToNodeEncryptionOptions</a>

---

##### `OffPeakWindowOptionsInput`<sup>Optional</sup> <a name="OffPeakWindowOptionsInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.offPeakWindowOptionsInput"></a>

```csharp
public IResolvable|OpensearchserviceDomainOffPeakWindowOptions OffPeakWindowOptionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptions">OpensearchserviceDomainOffPeakWindowOptions</a>

---

##### `SkipShardMigrationWaitInput`<sup>Optional</sup> <a name="SkipShardMigrationWaitInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.skipShardMigrationWaitInput"></a>

```csharp
public bool|IResolvable SkipShardMigrationWaitInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SnapshotOptionsInput`<sup>Optional</sup> <a name="SnapshotOptionsInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.snapshotOptionsInput"></a>

```csharp
public IResolvable|OpensearchserviceDomainSnapshotOptions SnapshotOptionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptions">OpensearchserviceDomainSnapshotOptions</a>

---

##### `SoftwareUpdateOptionsInput`<sup>Optional</sup> <a name="SoftwareUpdateOptionsInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.softwareUpdateOptionsInput"></a>

```csharp
public IResolvable|OpensearchserviceDomainSoftwareUpdateOptions SoftwareUpdateOptionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptions">OpensearchserviceDomainSoftwareUpdateOptions</a>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.tagsInput"></a>

```csharp
public IResolvable|OpensearchserviceDomainTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTags">OpensearchserviceDomainTags</a>[]

---

##### `UseCaseInput`<sup>Optional</sup> <a name="UseCaseInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.useCaseInput"></a>

```csharp
public string UseCaseInput { get; }
```

- *Type:* string

---

##### `VpcOptionsInput`<sup>Optional</sup> <a name="VpcOptionsInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.vpcOptionsInput"></a>

```csharp
public IResolvable|OpensearchserviceDomainVpcOptions VpcOptionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptions">OpensearchserviceDomainVpcOptions</a>

---

##### `AccessPolicies`<sup>Required</sup> <a name="AccessPolicies" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.accessPolicies"></a>

```csharp
public string AccessPolicies { get; }
```

- *Type:* string

---

##### `AdvancedOptions`<sup>Required</sup> <a name="AdvancedOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.advancedOptions"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AdvancedOptions { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.domainName"></a>

```csharp
public string DomainName { get; }
```

- *Type:* string

---

##### `EngineMode`<sup>Required</sup> <a name="EngineMode" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.engineMode"></a>

```csharp
public string EngineMode { get; }
```

- *Type:* string

---

##### `EngineVersion`<sup>Required</sup> <a name="EngineVersion" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.engineVersion"></a>

```csharp
public string EngineVersion { get; }
```

- *Type:* string

---

##### `IpAddressType`<sup>Required</sup> <a name="IpAddressType" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.ipAddressType"></a>

```csharp
public string IpAddressType { get; }
```

- *Type:* string

---

##### `SkipShardMigrationWait`<sup>Required</sup> <a name="SkipShardMigrationWait" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.skipShardMigrationWait"></a>

```csharp
public bool|IResolvable SkipShardMigrationWait { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `UseCase`<sup>Required</sup> <a name="UseCase" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.useCase"></a>

```csharp
public string UseCase { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OpensearchserviceDomainAdvancedSecurityOptions <a name="OpensearchserviceDomainAdvancedSecurityOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OpensearchserviceDomainAdvancedSecurityOptions {
    bool|IResolvable AnonymousAuthEnabled = null,
    bool|IResolvable Enabled = null,
    OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptions IamFederationOptions = null,
    bool|IResolvable InternalUserDatabaseEnabled = null,
    OpensearchserviceDomainAdvancedSecurityOptionsJwtOptions JwtOptions = null,
    OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptions MasterUserOptions = null,
    OpensearchserviceDomainAdvancedSecurityOptionsSamlOptions SamlOptions = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptions.property.anonymousAuthEnabled">AnonymousAuthEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#anonymous_auth_enabled OpensearchserviceDomain#anonymous_auth_enabled}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptions.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#enabled OpensearchserviceDomain#enabled}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptions.property.iamFederationOptions">IamFederationOptions</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptions">OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#iam_federation_options OpensearchserviceDomain#iam_federation_options}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptions.property.internalUserDatabaseEnabled">InternalUserDatabaseEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#internal_user_database_enabled OpensearchserviceDomain#internal_user_database_enabled}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptions.property.jwtOptions">JwtOptions</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptions">OpensearchserviceDomainAdvancedSecurityOptionsJwtOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#jwt_options OpensearchserviceDomain#jwt_options}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptions.property.masterUserOptions">MasterUserOptions</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptions">OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#master_user_options OpensearchserviceDomain#master_user_options}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptions.property.samlOptions">SamlOptions</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptions">OpensearchserviceDomainAdvancedSecurityOptionsSamlOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#saml_options OpensearchserviceDomain#saml_options}. |

---

##### `AnonymousAuthEnabled`<sup>Optional</sup> <a name="AnonymousAuthEnabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptions.property.anonymousAuthEnabled"></a>

```csharp
public bool|IResolvable AnonymousAuthEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#anonymous_auth_enabled OpensearchserviceDomain#anonymous_auth_enabled}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptions.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#enabled OpensearchserviceDomain#enabled}.

---

##### `IamFederationOptions`<sup>Optional</sup> <a name="IamFederationOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptions.property.iamFederationOptions"></a>

```csharp
public OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptions IamFederationOptions { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptions">OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#iam_federation_options OpensearchserviceDomain#iam_federation_options}.

---

##### `InternalUserDatabaseEnabled`<sup>Optional</sup> <a name="InternalUserDatabaseEnabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptions.property.internalUserDatabaseEnabled"></a>

```csharp
public bool|IResolvable InternalUserDatabaseEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#internal_user_database_enabled OpensearchserviceDomain#internal_user_database_enabled}.

---

##### `JwtOptions`<sup>Optional</sup> <a name="JwtOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptions.property.jwtOptions"></a>

```csharp
public OpensearchserviceDomainAdvancedSecurityOptionsJwtOptions JwtOptions { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptions">OpensearchserviceDomainAdvancedSecurityOptionsJwtOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#jwt_options OpensearchserviceDomain#jwt_options}.

---

##### `MasterUserOptions`<sup>Optional</sup> <a name="MasterUserOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptions.property.masterUserOptions"></a>

```csharp
public OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptions MasterUserOptions { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptions">OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#master_user_options OpensearchserviceDomain#master_user_options}.

---

##### `SamlOptions`<sup>Optional</sup> <a name="SamlOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptions.property.samlOptions"></a>

```csharp
public OpensearchserviceDomainAdvancedSecurityOptionsSamlOptions SamlOptions { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptions">OpensearchserviceDomainAdvancedSecurityOptionsSamlOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#saml_options OpensearchserviceDomain#saml_options}.

---

### OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptions <a name="OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptions {
    bool|IResolvable Enabled = null,
    string RolesKey = null,
    string SubjectKey = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptions.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#enabled OpensearchserviceDomain#enabled}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptions.property.rolesKey">RolesKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#roles_key OpensearchserviceDomain#roles_key}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptions.property.subjectKey">SubjectKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#subject_key OpensearchserviceDomain#subject_key}. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptions.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#enabled OpensearchserviceDomain#enabled}.

---

##### `RolesKey`<sup>Optional</sup> <a name="RolesKey" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptions.property.rolesKey"></a>

```csharp
public string RolesKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#roles_key OpensearchserviceDomain#roles_key}.

---

##### `SubjectKey`<sup>Optional</sup> <a name="SubjectKey" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptions.property.subjectKey"></a>

```csharp
public string SubjectKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#subject_key OpensearchserviceDomain#subject_key}.

---

### OpensearchserviceDomainAdvancedSecurityOptionsJwtOptions <a name="OpensearchserviceDomainAdvancedSecurityOptionsJwtOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OpensearchserviceDomainAdvancedSecurityOptionsJwtOptions {
    bool|IResolvable Enabled = null,
    string PublicKey = null,
    string RolesKey = null,
    string SubjectKey = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptions.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#enabled OpensearchserviceDomain#enabled}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptions.property.publicKey">PublicKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#public_key OpensearchserviceDomain#public_key}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptions.property.rolesKey">RolesKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#roles_key OpensearchserviceDomain#roles_key}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptions.property.subjectKey">SubjectKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#subject_key OpensearchserviceDomain#subject_key}. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptions.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#enabled OpensearchserviceDomain#enabled}.

---

##### `PublicKey`<sup>Optional</sup> <a name="PublicKey" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptions.property.publicKey"></a>

```csharp
public string PublicKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#public_key OpensearchserviceDomain#public_key}.

---

##### `RolesKey`<sup>Optional</sup> <a name="RolesKey" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptions.property.rolesKey"></a>

```csharp
public string RolesKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#roles_key OpensearchserviceDomain#roles_key}.

---

##### `SubjectKey`<sup>Optional</sup> <a name="SubjectKey" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptions.property.subjectKey"></a>

```csharp
public string SubjectKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#subject_key OpensearchserviceDomain#subject_key}.

---

### OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptions <a name="OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptions {
    string MasterUserArn = null,
    string MasterUserName = null,
    string MasterUserPassword = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptions.property.masterUserArn">MasterUserArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#master_user_arn OpensearchserviceDomain#master_user_arn}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptions.property.masterUserName">MasterUserName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#master_user_name OpensearchserviceDomain#master_user_name}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptions.property.masterUserPassword">MasterUserPassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#master_user_password OpensearchserviceDomain#master_user_password}. |

---

##### `MasterUserArn`<sup>Optional</sup> <a name="MasterUserArn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptions.property.masterUserArn"></a>

```csharp
public string MasterUserArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#master_user_arn OpensearchserviceDomain#master_user_arn}.

---

##### `MasterUserName`<sup>Optional</sup> <a name="MasterUserName" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptions.property.masterUserName"></a>

```csharp
public string MasterUserName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#master_user_name OpensearchserviceDomain#master_user_name}.

---

##### `MasterUserPassword`<sup>Optional</sup> <a name="MasterUserPassword" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptions.property.masterUserPassword"></a>

```csharp
public string MasterUserPassword { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#master_user_password OpensearchserviceDomain#master_user_password}.

---

### OpensearchserviceDomainAdvancedSecurityOptionsSamlOptions <a name="OpensearchserviceDomainAdvancedSecurityOptionsSamlOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OpensearchserviceDomainAdvancedSecurityOptionsSamlOptions {
    bool|IResolvable Enabled = null,
    OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdp Idp = null,
    string MasterBackendRole = null,
    string MasterUserName = null,
    string RolesKey = null,
    double SessionTimeoutMinutes = null,
    string SubjectKey = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptions.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#enabled OpensearchserviceDomain#enabled}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptions.property.idp">Idp</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdp">OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdp</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#idp OpensearchserviceDomain#idp}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptions.property.masterBackendRole">MasterBackendRole</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#master_backend_role OpensearchserviceDomain#master_backend_role}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptions.property.masterUserName">MasterUserName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#master_user_name OpensearchserviceDomain#master_user_name}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptions.property.rolesKey">RolesKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#roles_key OpensearchserviceDomain#roles_key}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptions.property.sessionTimeoutMinutes">SessionTimeoutMinutes</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#session_timeout_minutes OpensearchserviceDomain#session_timeout_minutes}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptions.property.subjectKey">SubjectKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#subject_key OpensearchserviceDomain#subject_key}. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptions.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#enabled OpensearchserviceDomain#enabled}.

---

##### `Idp`<sup>Optional</sup> <a name="Idp" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptions.property.idp"></a>

```csharp
public OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdp Idp { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdp">OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdp</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#idp OpensearchserviceDomain#idp}.

---

##### `MasterBackendRole`<sup>Optional</sup> <a name="MasterBackendRole" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptions.property.masterBackendRole"></a>

```csharp
public string MasterBackendRole { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#master_backend_role OpensearchserviceDomain#master_backend_role}.

---

##### `MasterUserName`<sup>Optional</sup> <a name="MasterUserName" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptions.property.masterUserName"></a>

```csharp
public string MasterUserName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#master_user_name OpensearchserviceDomain#master_user_name}.

---

##### `RolesKey`<sup>Optional</sup> <a name="RolesKey" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptions.property.rolesKey"></a>

```csharp
public string RolesKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#roles_key OpensearchserviceDomain#roles_key}.

---

##### `SessionTimeoutMinutes`<sup>Optional</sup> <a name="SessionTimeoutMinutes" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptions.property.sessionTimeoutMinutes"></a>

```csharp
public double SessionTimeoutMinutes { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#session_timeout_minutes OpensearchserviceDomain#session_timeout_minutes}.

---

##### `SubjectKey`<sup>Optional</sup> <a name="SubjectKey" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptions.property.subjectKey"></a>

```csharp
public string SubjectKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#subject_key OpensearchserviceDomain#subject_key}.

---

### OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdp <a name="OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdp" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdp"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdp.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdp {
    string EntityId = null,
    string MetadataContent = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdp.property.entityId">EntityId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#entity_id OpensearchserviceDomain#entity_id}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdp.property.metadataContent">MetadataContent</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#metadata_content OpensearchserviceDomain#metadata_content}. |

---

##### `EntityId`<sup>Optional</sup> <a name="EntityId" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdp.property.entityId"></a>

```csharp
public string EntityId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#entity_id OpensearchserviceDomain#entity_id}.

---

##### `MetadataContent`<sup>Optional</sup> <a name="MetadataContent" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdp.property.metadataContent"></a>

```csharp
public string MetadataContent { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#metadata_content OpensearchserviceDomain#metadata_content}.

---

### OpensearchserviceDomainAimlOptions <a name="OpensearchserviceDomainAimlOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OpensearchserviceDomainAimlOptions {
    OpensearchserviceDomainAimlOptionsS3VectorsEngine S3VectorsEngine = null,
    OpensearchserviceDomainAimlOptionsServerlessVectorAcceleration ServerlessVectorAcceleration = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptions.property.s3VectorsEngine">S3VectorsEngine</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngine">OpensearchserviceDomainAimlOptionsS3VectorsEngine</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#s3_vectors_engine OpensearchserviceDomain#s3_vectors_engine}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptions.property.serverlessVectorAcceleration">ServerlessVectorAcceleration</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAcceleration">OpensearchserviceDomainAimlOptionsServerlessVectorAcceleration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#serverless_vector_acceleration OpensearchserviceDomain#serverless_vector_acceleration}. |

---

##### `S3VectorsEngine`<sup>Optional</sup> <a name="S3VectorsEngine" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptions.property.s3VectorsEngine"></a>

```csharp
public OpensearchserviceDomainAimlOptionsS3VectorsEngine S3VectorsEngine { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngine">OpensearchserviceDomainAimlOptionsS3VectorsEngine</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#s3_vectors_engine OpensearchserviceDomain#s3_vectors_engine}.

---

##### `ServerlessVectorAcceleration`<sup>Optional</sup> <a name="ServerlessVectorAcceleration" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptions.property.serverlessVectorAcceleration"></a>

```csharp
public OpensearchserviceDomainAimlOptionsServerlessVectorAcceleration ServerlessVectorAcceleration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAcceleration">OpensearchserviceDomainAimlOptionsServerlessVectorAcceleration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#serverless_vector_acceleration OpensearchserviceDomain#serverless_vector_acceleration}.

---

### OpensearchserviceDomainAimlOptionsS3VectorsEngine <a name="OpensearchserviceDomainAimlOptionsS3VectorsEngine" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngine"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngine.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OpensearchserviceDomainAimlOptionsS3VectorsEngine {
    bool|IResolvable Enabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngine.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether to enable S3 vectors engine. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngine.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether to enable S3 vectors engine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#enabled OpensearchserviceDomain#enabled}

---

### OpensearchserviceDomainAimlOptionsServerlessVectorAcceleration <a name="OpensearchserviceDomainAimlOptionsServerlessVectorAcceleration" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAcceleration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAcceleration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OpensearchserviceDomainAimlOptionsServerlessVectorAcceleration {
    bool|IResolvable Enabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAcceleration.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether to enable serverless vector acceleration. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAcceleration.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether to enable serverless vector acceleration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#enabled OpensearchserviceDomain#enabled}

---

### OpensearchserviceDomainAutomatedSnapshotPauseOptions <a name="OpensearchserviceDomainAutomatedSnapshotPauseOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OpensearchserviceDomainAutomatedSnapshotPauseOptions {
    bool|IResolvable Enabled = null,
    string EndTime = null,
    string StartTime = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptions.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#enabled OpensearchserviceDomain#enabled}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptions.property.endTime">EndTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#end_time OpensearchserviceDomain#end_time}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptions.property.startTime">StartTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#start_time OpensearchserviceDomain#start_time}. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptions.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#enabled OpensearchserviceDomain#enabled}.

---

##### `EndTime`<sup>Optional</sup> <a name="EndTime" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptions.property.endTime"></a>

```csharp
public string EndTime { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#end_time OpensearchserviceDomain#end_time}.

---

##### `StartTime`<sup>Optional</sup> <a name="StartTime" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptions.property.startTime"></a>

```csharp
public string StartTime { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#start_time OpensearchserviceDomain#start_time}.

---

### OpensearchserviceDomainClusterConfig <a name="OpensearchserviceDomainClusterConfig" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OpensearchserviceDomainClusterConfig {
    OpensearchserviceDomainClusterConfigColdStorageOptions ColdStorageOptions = null,
    double DedicatedMasterCount = null,
    bool|IResolvable DedicatedMasterEnabled = null,
    string DedicatedMasterType = null,
    double InstanceCount = null,
    string InstanceType = null,
    bool|IResolvable MultiAzWithStandbyEnabled = null,
    IResolvable|OpensearchserviceDomainClusterConfigNodeOptions[] NodeOptions = null,
    double WarmCount = null,
    bool|IResolvable WarmEnabled = null,
    string WarmType = null,
    OpensearchserviceDomainClusterConfigZoneAwarenessConfig ZoneAwarenessConfig = null,
    bool|IResolvable ZoneAwarenessEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfig.property.coldStorageOptions">ColdStorageOptions</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptions">OpensearchserviceDomainClusterConfigColdStorageOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#cold_storage_options OpensearchserviceDomain#cold_storage_options}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfig.property.dedicatedMasterCount">DedicatedMasterCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#dedicated_master_count OpensearchserviceDomain#dedicated_master_count}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfig.property.dedicatedMasterEnabled">DedicatedMasterEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#dedicated_master_enabled OpensearchserviceDomain#dedicated_master_enabled}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfig.property.dedicatedMasterType">DedicatedMasterType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#dedicated_master_type OpensearchserviceDomain#dedicated_master_type}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfig.property.instanceCount">InstanceCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#instance_count OpensearchserviceDomain#instance_count}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfig.property.instanceType">InstanceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#instance_type OpensearchserviceDomain#instance_type}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfig.property.multiAzWithStandbyEnabled">MultiAzWithStandbyEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#multi_az_with_standby_enabled OpensearchserviceDomain#multi_az_with_standby_enabled}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfig.property.nodeOptions">NodeOptions</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptions">OpensearchserviceDomainClusterConfigNodeOptions</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#node_options OpensearchserviceDomain#node_options}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfig.property.warmCount">WarmCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#warm_count OpensearchserviceDomain#warm_count}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfig.property.warmEnabled">WarmEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#warm_enabled OpensearchserviceDomain#warm_enabled}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfig.property.warmType">WarmType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#warm_type OpensearchserviceDomain#warm_type}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfig.property.zoneAwarenessConfig">ZoneAwarenessConfig</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfig">OpensearchserviceDomainClusterConfigZoneAwarenessConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#zone_awareness_config OpensearchserviceDomain#zone_awareness_config}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfig.property.zoneAwarenessEnabled">ZoneAwarenessEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#zone_awareness_enabled OpensearchserviceDomain#zone_awareness_enabled}. |

---

##### `ColdStorageOptions`<sup>Optional</sup> <a name="ColdStorageOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfig.property.coldStorageOptions"></a>

```csharp
public OpensearchserviceDomainClusterConfigColdStorageOptions ColdStorageOptions { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptions">OpensearchserviceDomainClusterConfigColdStorageOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#cold_storage_options OpensearchserviceDomain#cold_storage_options}.

---

##### `DedicatedMasterCount`<sup>Optional</sup> <a name="DedicatedMasterCount" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfig.property.dedicatedMasterCount"></a>

```csharp
public double DedicatedMasterCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#dedicated_master_count OpensearchserviceDomain#dedicated_master_count}.

---

##### `DedicatedMasterEnabled`<sup>Optional</sup> <a name="DedicatedMasterEnabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfig.property.dedicatedMasterEnabled"></a>

```csharp
public bool|IResolvable DedicatedMasterEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#dedicated_master_enabled OpensearchserviceDomain#dedicated_master_enabled}.

---

##### `DedicatedMasterType`<sup>Optional</sup> <a name="DedicatedMasterType" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfig.property.dedicatedMasterType"></a>

```csharp
public string DedicatedMasterType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#dedicated_master_type OpensearchserviceDomain#dedicated_master_type}.

---

##### `InstanceCount`<sup>Optional</sup> <a name="InstanceCount" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfig.property.instanceCount"></a>

```csharp
public double InstanceCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#instance_count OpensearchserviceDomain#instance_count}.

---

##### `InstanceType`<sup>Optional</sup> <a name="InstanceType" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfig.property.instanceType"></a>

```csharp
public string InstanceType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#instance_type OpensearchserviceDomain#instance_type}.

---

##### `MultiAzWithStandbyEnabled`<sup>Optional</sup> <a name="MultiAzWithStandbyEnabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfig.property.multiAzWithStandbyEnabled"></a>

```csharp
public bool|IResolvable MultiAzWithStandbyEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#multi_az_with_standby_enabled OpensearchserviceDomain#multi_az_with_standby_enabled}.

---

##### `NodeOptions`<sup>Optional</sup> <a name="NodeOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfig.property.nodeOptions"></a>

```csharp
public IResolvable|OpensearchserviceDomainClusterConfigNodeOptions[] NodeOptions { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptions">OpensearchserviceDomainClusterConfigNodeOptions</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#node_options OpensearchserviceDomain#node_options}.

---

##### `WarmCount`<sup>Optional</sup> <a name="WarmCount" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfig.property.warmCount"></a>

```csharp
public double WarmCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#warm_count OpensearchserviceDomain#warm_count}.

---

##### `WarmEnabled`<sup>Optional</sup> <a name="WarmEnabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfig.property.warmEnabled"></a>

```csharp
public bool|IResolvable WarmEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#warm_enabled OpensearchserviceDomain#warm_enabled}.

---

##### `WarmType`<sup>Optional</sup> <a name="WarmType" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfig.property.warmType"></a>

```csharp
public string WarmType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#warm_type OpensearchserviceDomain#warm_type}.

---

##### `ZoneAwarenessConfig`<sup>Optional</sup> <a name="ZoneAwarenessConfig" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfig.property.zoneAwarenessConfig"></a>

```csharp
public OpensearchserviceDomainClusterConfigZoneAwarenessConfig ZoneAwarenessConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfig">OpensearchserviceDomainClusterConfigZoneAwarenessConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#zone_awareness_config OpensearchserviceDomain#zone_awareness_config}.

---

##### `ZoneAwarenessEnabled`<sup>Optional</sup> <a name="ZoneAwarenessEnabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfig.property.zoneAwarenessEnabled"></a>

```csharp
public bool|IResolvable ZoneAwarenessEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#zone_awareness_enabled OpensearchserviceDomain#zone_awareness_enabled}.

---

### OpensearchserviceDomainClusterConfigColdStorageOptions <a name="OpensearchserviceDomainClusterConfigColdStorageOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OpensearchserviceDomainClusterConfigColdStorageOptions {
    bool|IResolvable Enabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptions.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#enabled OpensearchserviceDomain#enabled}. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptions.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#enabled OpensearchserviceDomain#enabled}.

---

### OpensearchserviceDomainClusterConfigNodeOptions <a name="OpensearchserviceDomainClusterConfigNodeOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OpensearchserviceDomainClusterConfigNodeOptions {
    OpensearchserviceDomainClusterConfigNodeOptionsNodeConfig NodeConfig = null,
    string NodeType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptions.property.nodeConfig">NodeConfig</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfig">OpensearchserviceDomainClusterConfigNodeOptionsNodeConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#node_config OpensearchserviceDomain#node_config}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptions.property.nodeType">NodeType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#node_type OpensearchserviceDomain#node_type}. |

---

##### `NodeConfig`<sup>Optional</sup> <a name="NodeConfig" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptions.property.nodeConfig"></a>

```csharp
public OpensearchserviceDomainClusterConfigNodeOptionsNodeConfig NodeConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfig">OpensearchserviceDomainClusterConfigNodeOptionsNodeConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#node_config OpensearchserviceDomain#node_config}.

---

##### `NodeType`<sup>Optional</sup> <a name="NodeType" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptions.property.nodeType"></a>

```csharp
public string NodeType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#node_type OpensearchserviceDomain#node_type}.

---

### OpensearchserviceDomainClusterConfigNodeOptionsNodeConfig <a name="OpensearchserviceDomainClusterConfigNodeOptionsNodeConfig" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OpensearchserviceDomainClusterConfigNodeOptionsNodeConfig {
    double Count = null,
    bool|IResolvable Enabled = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfig.property.count">Count</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#count OpensearchserviceDomain#count}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfig.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#enabled OpensearchserviceDomain#enabled}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfig.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#type OpensearchserviceDomain#type}. |

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#count OpensearchserviceDomain#count}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfig.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#enabled OpensearchserviceDomain#enabled}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#type OpensearchserviceDomain#type}.

---

### OpensearchserviceDomainClusterConfigZoneAwarenessConfig <a name="OpensearchserviceDomainClusterConfigZoneAwarenessConfig" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OpensearchserviceDomainClusterConfigZoneAwarenessConfig {
    double AvailabilityZoneCount = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfig.property.availabilityZoneCount">AvailabilityZoneCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#availability_zone_count OpensearchserviceDomain#availability_zone_count}. |

---

##### `AvailabilityZoneCount`<sup>Optional</sup> <a name="AvailabilityZoneCount" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfig.property.availabilityZoneCount"></a>

```csharp
public double AvailabilityZoneCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#availability_zone_count OpensearchserviceDomain#availability_zone_count}.

---

### OpensearchserviceDomainCognitoOptions <a name="OpensearchserviceDomainCognitoOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OpensearchserviceDomainCognitoOptions {
    bool|IResolvable Enabled = null,
    string IdentityPoolId = null,
    string RoleArn = null,
    string UserPoolId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptions.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#enabled OpensearchserviceDomain#enabled}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptions.property.identityPoolId">IdentityPoolId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#identity_pool_id OpensearchserviceDomain#identity_pool_id}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptions.property.roleArn">RoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#role_arn OpensearchserviceDomain#role_arn}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptions.property.userPoolId">UserPoolId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#user_pool_id OpensearchserviceDomain#user_pool_id}. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptions.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#enabled OpensearchserviceDomain#enabled}.

---

##### `IdentityPoolId`<sup>Optional</sup> <a name="IdentityPoolId" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptions.property.identityPoolId"></a>

```csharp
public string IdentityPoolId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#identity_pool_id OpensearchserviceDomain#identity_pool_id}.

---

##### `RoleArn`<sup>Optional</sup> <a name="RoleArn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptions.property.roleArn"></a>

```csharp
public string RoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#role_arn OpensearchserviceDomain#role_arn}.

---

##### `UserPoolId`<sup>Optional</sup> <a name="UserPoolId" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptions.property.userPoolId"></a>

```csharp
public string UserPoolId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#user_pool_id OpensearchserviceDomain#user_pool_id}.

---

### OpensearchserviceDomainConfig <a name="OpensearchserviceDomainConfig" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OpensearchserviceDomainConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AccessPolicies = null,
    System.Collections.Generic.IDictionary<string, string> AdvancedOptions = null,
    OpensearchserviceDomainAdvancedSecurityOptions AdvancedSecurityOptions = null,
    OpensearchserviceDomainAimlOptions AimlOptions = null,
    OpensearchserviceDomainAutomatedSnapshotPauseOptions AutomatedSnapshotPauseOptions = null,
    OpensearchserviceDomainClusterConfig ClusterConfig = null,
    OpensearchserviceDomainCognitoOptions CognitoOptions = null,
    OpensearchserviceDomainDeploymentStrategyOptions DeploymentStrategyOptions = null,
    OpensearchserviceDomainDomainEndpointOptions DomainEndpointOptions = null,
    string DomainName = null,
    OpensearchserviceDomainEbsOptions EbsOptions = null,
    OpensearchserviceDomainEncryptionAtRestOptions EncryptionAtRestOptions = null,
    string EngineMode = null,
    string EngineVersion = null,
    OpensearchserviceDomainIdentityCenterOptions IdentityCenterOptions = null,
    string IpAddressType = null,
    IResolvable|System.Collections.Generic.IDictionary<string, OpensearchserviceDomainLogPublishingOptions> LogPublishingOptions = null,
    OpensearchserviceDomainNodeToNodeEncryptionOptions NodeToNodeEncryptionOptions = null,
    OpensearchserviceDomainOffPeakWindowOptions OffPeakWindowOptions = null,
    bool|IResolvable SkipShardMigrationWait = null,
    OpensearchserviceDomainSnapshotOptions SnapshotOptions = null,
    OpensearchserviceDomainSoftwareUpdateOptions SoftwareUpdateOptions = null,
    IResolvable|OpensearchserviceDomainTags[] Tags = null,
    string UseCase = null,
    OpensearchserviceDomainVpcOptions VpcOptions = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.accessPolicies">AccessPolicies</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#access_policies OpensearchserviceDomain#access_policies}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.advancedOptions">AdvancedOptions</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#advanced_options OpensearchserviceDomain#advanced_options}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.advancedSecurityOptions">AdvancedSecurityOptions</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptions">OpensearchserviceDomainAdvancedSecurityOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#advanced_security_options OpensearchserviceDomain#advanced_security_options}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.aimlOptions">AimlOptions</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptions">OpensearchserviceDomainAimlOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#aiml_options OpensearchserviceDomain#aiml_options}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.automatedSnapshotPauseOptions">AutomatedSnapshotPauseOptions</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptions">OpensearchserviceDomainAutomatedSnapshotPauseOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#automated_snapshot_pause_options OpensearchserviceDomain#automated_snapshot_pause_options}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.clusterConfig">ClusterConfig</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfig">OpensearchserviceDomainClusterConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#cluster_config OpensearchserviceDomain#cluster_config}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.cognitoOptions">CognitoOptions</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptions">OpensearchserviceDomainCognitoOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#cognito_options OpensearchserviceDomain#cognito_options}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.deploymentStrategyOptions">DeploymentStrategyOptions</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptions">OpensearchserviceDomainDeploymentStrategyOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#deployment_strategy_options OpensearchserviceDomain#deployment_strategy_options}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.domainEndpointOptions">DomainEndpointOptions</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptions">OpensearchserviceDomainDomainEndpointOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#domain_endpoint_options OpensearchserviceDomain#domain_endpoint_options}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.domainName">DomainName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#domain_name OpensearchserviceDomain#domain_name}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.ebsOptions">EbsOptions</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptions">OpensearchserviceDomainEbsOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#ebs_options OpensearchserviceDomain#ebs_options}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.encryptionAtRestOptions">EncryptionAtRestOptions</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptions">OpensearchserviceDomainEncryptionAtRestOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#encryption_at_rest_options OpensearchserviceDomain#encryption_at_rest_options}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.engineMode">EngineMode</a></code> | <code>string</code> | The engine mode of the domain. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.engineVersion">EngineVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#engine_version OpensearchserviceDomain#engine_version}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.identityCenterOptions">IdentityCenterOptions</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptions">OpensearchserviceDomainIdentityCenterOptions</a></code> | Options for configuring Identity Center. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.ipAddressType">IpAddressType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#ip_address_type OpensearchserviceDomain#ip_address_type}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.logPublishingOptions">LogPublishingOptions</a></code> | <code>Io.Cdktn.IResolvable\|System.Collections.Generic.IDictionary<string, <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptions">OpensearchserviceDomainLogPublishingOptions</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#log_publishing_options OpensearchserviceDomain#log_publishing_options}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.nodeToNodeEncryptionOptions">NodeToNodeEncryptionOptions</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptions">OpensearchserviceDomainNodeToNodeEncryptionOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#node_to_node_encryption_options OpensearchserviceDomain#node_to_node_encryption_options}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.offPeakWindowOptions">OffPeakWindowOptions</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptions">OpensearchserviceDomainOffPeakWindowOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#off_peak_window_options OpensearchserviceDomain#off_peak_window_options}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.skipShardMigrationWait">SkipShardMigrationWait</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#skip_shard_migration_wait OpensearchserviceDomain#skip_shard_migration_wait}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.snapshotOptions">SnapshotOptions</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptions">OpensearchserviceDomainSnapshotOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#snapshot_options OpensearchserviceDomain#snapshot_options}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.softwareUpdateOptions">SoftwareUpdateOptions</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptions">OpensearchserviceDomainSoftwareUpdateOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#software_update_options OpensearchserviceDomain#software_update_options}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTags">OpensearchserviceDomainTags</a>[]</code> | An arbitrary set of tags (key-value pairs) for this Domain. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.useCase">UseCase</a></code> | <code>string</code> | The primary use case of the domain. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.vpcOptions">VpcOptions</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptions">OpensearchserviceDomainVpcOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#vpc_options OpensearchserviceDomain#vpc_options}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AccessPolicies`<sup>Optional</sup> <a name="AccessPolicies" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.accessPolicies"></a>

```csharp
public string AccessPolicies { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#access_policies OpensearchserviceDomain#access_policies}.

---

##### `AdvancedOptions`<sup>Optional</sup> <a name="AdvancedOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.advancedOptions"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AdvancedOptions { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#advanced_options OpensearchserviceDomain#advanced_options}.

---

##### `AdvancedSecurityOptions`<sup>Optional</sup> <a name="AdvancedSecurityOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.advancedSecurityOptions"></a>

```csharp
public OpensearchserviceDomainAdvancedSecurityOptions AdvancedSecurityOptions { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptions">OpensearchserviceDomainAdvancedSecurityOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#advanced_security_options OpensearchserviceDomain#advanced_security_options}.

---

##### `AimlOptions`<sup>Optional</sup> <a name="AimlOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.aimlOptions"></a>

```csharp
public OpensearchserviceDomainAimlOptions AimlOptions { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptions">OpensearchserviceDomainAimlOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#aiml_options OpensearchserviceDomain#aiml_options}.

---

##### `AutomatedSnapshotPauseOptions`<sup>Optional</sup> <a name="AutomatedSnapshotPauseOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.automatedSnapshotPauseOptions"></a>

```csharp
public OpensearchserviceDomainAutomatedSnapshotPauseOptions AutomatedSnapshotPauseOptions { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptions">OpensearchserviceDomainAutomatedSnapshotPauseOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#automated_snapshot_pause_options OpensearchserviceDomain#automated_snapshot_pause_options}.

---

##### `ClusterConfig`<sup>Optional</sup> <a name="ClusterConfig" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.clusterConfig"></a>

```csharp
public OpensearchserviceDomainClusterConfig ClusterConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfig">OpensearchserviceDomainClusterConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#cluster_config OpensearchserviceDomain#cluster_config}.

---

##### `CognitoOptions`<sup>Optional</sup> <a name="CognitoOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.cognitoOptions"></a>

```csharp
public OpensearchserviceDomainCognitoOptions CognitoOptions { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptions">OpensearchserviceDomainCognitoOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#cognito_options OpensearchserviceDomain#cognito_options}.

---

##### `DeploymentStrategyOptions`<sup>Optional</sup> <a name="DeploymentStrategyOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.deploymentStrategyOptions"></a>

```csharp
public OpensearchserviceDomainDeploymentStrategyOptions DeploymentStrategyOptions { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptions">OpensearchserviceDomainDeploymentStrategyOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#deployment_strategy_options OpensearchserviceDomain#deployment_strategy_options}.

---

##### `DomainEndpointOptions`<sup>Optional</sup> <a name="DomainEndpointOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.domainEndpointOptions"></a>

```csharp
public OpensearchserviceDomainDomainEndpointOptions DomainEndpointOptions { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptions">OpensearchserviceDomainDomainEndpointOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#domain_endpoint_options OpensearchserviceDomain#domain_endpoint_options}.

---

##### `DomainName`<sup>Optional</sup> <a name="DomainName" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.domainName"></a>

```csharp
public string DomainName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#domain_name OpensearchserviceDomain#domain_name}.

---

##### `EbsOptions`<sup>Optional</sup> <a name="EbsOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.ebsOptions"></a>

```csharp
public OpensearchserviceDomainEbsOptions EbsOptions { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptions">OpensearchserviceDomainEbsOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#ebs_options OpensearchserviceDomain#ebs_options}.

---

##### `EncryptionAtRestOptions`<sup>Optional</sup> <a name="EncryptionAtRestOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.encryptionAtRestOptions"></a>

```csharp
public OpensearchserviceDomainEncryptionAtRestOptions EncryptionAtRestOptions { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptions">OpensearchserviceDomainEncryptionAtRestOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#encryption_at_rest_options OpensearchserviceDomain#encryption_at_rest_options}.

---

##### `EngineMode`<sup>Optional</sup> <a name="EngineMode" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.engineMode"></a>

```csharp
public string EngineMode { get; set; }
```

- *Type:* string

The engine mode of the domain.

Determines whether the domain runs the standard (GENERAL) engine or the optimized multi-engine (OPTIMIZED) engine. This value cannot be changed after the domain is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#engine_mode OpensearchserviceDomain#engine_mode}

---

##### `EngineVersion`<sup>Optional</sup> <a name="EngineVersion" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.engineVersion"></a>

```csharp
public string EngineVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#engine_version OpensearchserviceDomain#engine_version}.

---

##### `IdentityCenterOptions`<sup>Optional</sup> <a name="IdentityCenterOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.identityCenterOptions"></a>

```csharp
public OpensearchserviceDomainIdentityCenterOptions IdentityCenterOptions { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptions">OpensearchserviceDomainIdentityCenterOptions</a>

Options for configuring Identity Center.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#identity_center_options OpensearchserviceDomain#identity_center_options}

---

##### `IpAddressType`<sup>Optional</sup> <a name="IpAddressType" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.ipAddressType"></a>

```csharp
public string IpAddressType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#ip_address_type OpensearchserviceDomain#ip_address_type}.

---

##### `LogPublishingOptions`<sup>Optional</sup> <a name="LogPublishingOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.logPublishingOptions"></a>

```csharp
public IResolvable|System.Collections.Generic.IDictionary<string, OpensearchserviceDomainLogPublishingOptions> LogPublishingOptions { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|System.Collections.Generic.IDictionary<string, <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptions">OpensearchserviceDomainLogPublishingOptions</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#log_publishing_options OpensearchserviceDomain#log_publishing_options}.

---

##### `NodeToNodeEncryptionOptions`<sup>Optional</sup> <a name="NodeToNodeEncryptionOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.nodeToNodeEncryptionOptions"></a>

```csharp
public OpensearchserviceDomainNodeToNodeEncryptionOptions NodeToNodeEncryptionOptions { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptions">OpensearchserviceDomainNodeToNodeEncryptionOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#node_to_node_encryption_options OpensearchserviceDomain#node_to_node_encryption_options}.

---

##### `OffPeakWindowOptions`<sup>Optional</sup> <a name="OffPeakWindowOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.offPeakWindowOptions"></a>

```csharp
public OpensearchserviceDomainOffPeakWindowOptions OffPeakWindowOptions { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptions">OpensearchserviceDomainOffPeakWindowOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#off_peak_window_options OpensearchserviceDomain#off_peak_window_options}.

---

##### `SkipShardMigrationWait`<sup>Optional</sup> <a name="SkipShardMigrationWait" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.skipShardMigrationWait"></a>

```csharp
public bool|IResolvable SkipShardMigrationWait { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#skip_shard_migration_wait OpensearchserviceDomain#skip_shard_migration_wait}.

---

##### `SnapshotOptions`<sup>Optional</sup> <a name="SnapshotOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.snapshotOptions"></a>

```csharp
public OpensearchserviceDomainSnapshotOptions SnapshotOptions { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptions">OpensearchserviceDomainSnapshotOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#snapshot_options OpensearchserviceDomain#snapshot_options}.

---

##### `SoftwareUpdateOptions`<sup>Optional</sup> <a name="SoftwareUpdateOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.softwareUpdateOptions"></a>

```csharp
public OpensearchserviceDomainSoftwareUpdateOptions SoftwareUpdateOptions { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptions">OpensearchserviceDomainSoftwareUpdateOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#software_update_options OpensearchserviceDomain#software_update_options}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.tags"></a>

```csharp
public IResolvable|OpensearchserviceDomainTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTags">OpensearchserviceDomainTags</a>[]

An arbitrary set of tags (key-value pairs) for this Domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#tags OpensearchserviceDomain#tags}

---

##### `UseCase`<sup>Optional</sup> <a name="UseCase" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.useCase"></a>

```csharp
public string UseCase { get; set; }
```

- *Type:* string

The primary use case of the domain.

Determines the default configuration tuned for the workload. For GENERAL engine-mode domains, this value can be changed after creation. For OPTIMIZED engine-mode domains, this value cannot be changed after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#use_case OpensearchserviceDomain#use_case}

---

##### `VpcOptions`<sup>Optional</sup> <a name="VpcOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.vpcOptions"></a>

```csharp
public OpensearchserviceDomainVpcOptions VpcOptions { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptions">OpensearchserviceDomainVpcOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#vpc_options OpensearchserviceDomain#vpc_options}.

---

### OpensearchserviceDomainDeploymentStrategyOptions <a name="OpensearchserviceDomainDeploymentStrategyOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OpensearchserviceDomainDeploymentStrategyOptions {
    string DeploymentStrategy = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptions.property.deploymentStrategy">DeploymentStrategy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#deployment_strategy OpensearchserviceDomain#deployment_strategy}. |

---

##### `DeploymentStrategy`<sup>Optional</sup> <a name="DeploymentStrategy" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptions.property.deploymentStrategy"></a>

```csharp
public string DeploymentStrategy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#deployment_strategy OpensearchserviceDomain#deployment_strategy}.

---

### OpensearchserviceDomainDomainEndpointOptions <a name="OpensearchserviceDomainDomainEndpointOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OpensearchserviceDomainDomainEndpointOptions {
    string CustomEndpoint = null,
    string CustomEndpointCertificateArn = null,
    bool|IResolvable CustomEndpointEnabled = null,
    bool|IResolvable EnforceHttps = null,
    string TlsSecurityPolicy = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptions.property.customEndpoint">CustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#custom_endpoint OpensearchserviceDomain#custom_endpoint}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptions.property.customEndpointCertificateArn">CustomEndpointCertificateArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#custom_endpoint_certificate_arn OpensearchserviceDomain#custom_endpoint_certificate_arn}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptions.property.customEndpointEnabled">CustomEndpointEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#custom_endpoint_enabled OpensearchserviceDomain#custom_endpoint_enabled}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptions.property.enforceHttps">EnforceHttps</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#enforce_https OpensearchserviceDomain#enforce_https}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptions.property.tlsSecurityPolicy">TlsSecurityPolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#tls_security_policy OpensearchserviceDomain#tls_security_policy}. |

---

##### `CustomEndpoint`<sup>Optional</sup> <a name="CustomEndpoint" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptions.property.customEndpoint"></a>

```csharp
public string CustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#custom_endpoint OpensearchserviceDomain#custom_endpoint}.

---

##### `CustomEndpointCertificateArn`<sup>Optional</sup> <a name="CustomEndpointCertificateArn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptions.property.customEndpointCertificateArn"></a>

```csharp
public string CustomEndpointCertificateArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#custom_endpoint_certificate_arn OpensearchserviceDomain#custom_endpoint_certificate_arn}.

---

##### `CustomEndpointEnabled`<sup>Optional</sup> <a name="CustomEndpointEnabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptions.property.customEndpointEnabled"></a>

```csharp
public bool|IResolvable CustomEndpointEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#custom_endpoint_enabled OpensearchserviceDomain#custom_endpoint_enabled}.

---

##### `EnforceHttps`<sup>Optional</sup> <a name="EnforceHttps" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptions.property.enforceHttps"></a>

```csharp
public bool|IResolvable EnforceHttps { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#enforce_https OpensearchserviceDomain#enforce_https}.

---

##### `TlsSecurityPolicy`<sup>Optional</sup> <a name="TlsSecurityPolicy" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptions.property.tlsSecurityPolicy"></a>

```csharp
public string TlsSecurityPolicy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#tls_security_policy OpensearchserviceDomain#tls_security_policy}.

---

### OpensearchserviceDomainEbsOptions <a name="OpensearchserviceDomainEbsOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OpensearchserviceDomainEbsOptions {
    bool|IResolvable EbsEnabled = null,
    double Iops = null,
    double Throughput = null,
    double VolumeSize = null,
    string VolumeType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptions.property.ebsEnabled">EbsEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#ebs_enabled OpensearchserviceDomain#ebs_enabled}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptions.property.iops">Iops</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#iops OpensearchserviceDomain#iops}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptions.property.throughput">Throughput</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#throughput OpensearchserviceDomain#throughput}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptions.property.volumeSize">VolumeSize</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#volume_size OpensearchserviceDomain#volume_size}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptions.property.volumeType">VolumeType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#volume_type OpensearchserviceDomain#volume_type}. |

---

##### `EbsEnabled`<sup>Optional</sup> <a name="EbsEnabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptions.property.ebsEnabled"></a>

```csharp
public bool|IResolvable EbsEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#ebs_enabled OpensearchserviceDomain#ebs_enabled}.

---

##### `Iops`<sup>Optional</sup> <a name="Iops" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptions.property.iops"></a>

```csharp
public double Iops { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#iops OpensearchserviceDomain#iops}.

---

##### `Throughput`<sup>Optional</sup> <a name="Throughput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptions.property.throughput"></a>

```csharp
public double Throughput { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#throughput OpensearchserviceDomain#throughput}.

---

##### `VolumeSize`<sup>Optional</sup> <a name="VolumeSize" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptions.property.volumeSize"></a>

```csharp
public double VolumeSize { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#volume_size OpensearchserviceDomain#volume_size}.

---

##### `VolumeType`<sup>Optional</sup> <a name="VolumeType" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptions.property.volumeType"></a>

```csharp
public string VolumeType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#volume_type OpensearchserviceDomain#volume_type}.

---

### OpensearchserviceDomainEncryptionAtRestOptions <a name="OpensearchserviceDomainEncryptionAtRestOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OpensearchserviceDomainEncryptionAtRestOptions {
    bool|IResolvable Enabled = null,
    string KmsKeyId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptions.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#enabled OpensearchserviceDomain#enabled}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptions.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#kms_key_id OpensearchserviceDomain#kms_key_id}. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptions.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#enabled OpensearchserviceDomain#enabled}.

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptions.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#kms_key_id OpensearchserviceDomain#kms_key_id}.

---

### OpensearchserviceDomainIdentityCenterOptions <a name="OpensearchserviceDomainIdentityCenterOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OpensearchserviceDomainIdentityCenterOptions {
    bool|IResolvable EnabledApiAccess = null,
    string IdentityCenterInstanceArn = null,
    string RolesKey = null,
    string SubjectKey = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptions.property.enabledApiAccess">EnabledApiAccess</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether Identity Center is enabled. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptions.property.identityCenterInstanceArn">IdentityCenterInstanceArn</a></code> | <code>string</code> | The ARN of the Identity Center instance. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptions.property.rolesKey">RolesKey</a></code> | <code>string</code> | The roles key for Identity Center options. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptions.property.subjectKey">SubjectKey</a></code> | <code>string</code> | The subject key for Identity Center options. |

---

##### `EnabledApiAccess`<sup>Optional</sup> <a name="EnabledApiAccess" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptions.property.enabledApiAccess"></a>

```csharp
public bool|IResolvable EnabledApiAccess { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether Identity Center is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#enabled_api_access OpensearchserviceDomain#enabled_api_access}

---

##### `IdentityCenterInstanceArn`<sup>Optional</sup> <a name="IdentityCenterInstanceArn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptions.property.identityCenterInstanceArn"></a>

```csharp
public string IdentityCenterInstanceArn { get; set; }
```

- *Type:* string

The ARN of the Identity Center instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#identity_center_instance_arn OpensearchserviceDomain#identity_center_instance_arn}

---

##### `RolesKey`<sup>Optional</sup> <a name="RolesKey" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptions.property.rolesKey"></a>

```csharp
public string RolesKey { get; set; }
```

- *Type:* string

The roles key for Identity Center options.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#roles_key OpensearchserviceDomain#roles_key}

---

##### `SubjectKey`<sup>Optional</sup> <a name="SubjectKey" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptions.property.subjectKey"></a>

```csharp
public string SubjectKey { get; set; }
```

- *Type:* string

The subject key for Identity Center options.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#subject_key OpensearchserviceDomain#subject_key}

---

### OpensearchserviceDomainLogPublishingOptions <a name="OpensearchserviceDomainLogPublishingOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OpensearchserviceDomainLogPublishingOptions {
    string CloudwatchLogsLogGroupArn = null,
    bool|IResolvable Enabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptions.property.cloudwatchLogsLogGroupArn">CloudwatchLogsLogGroupArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#cloudwatch_logs_log_group_arn OpensearchserviceDomain#cloudwatch_logs_log_group_arn}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptions.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#enabled OpensearchserviceDomain#enabled}. |

---

##### `CloudwatchLogsLogGroupArn`<sup>Optional</sup> <a name="CloudwatchLogsLogGroupArn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptions.property.cloudwatchLogsLogGroupArn"></a>

```csharp
public string CloudwatchLogsLogGroupArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#cloudwatch_logs_log_group_arn OpensearchserviceDomain#cloudwatch_logs_log_group_arn}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptions.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#enabled OpensearchserviceDomain#enabled}.

---

### OpensearchserviceDomainNodeToNodeEncryptionOptions <a name="OpensearchserviceDomainNodeToNodeEncryptionOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OpensearchserviceDomainNodeToNodeEncryptionOptions {
    bool|IResolvable Enabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptions.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#enabled OpensearchserviceDomain#enabled}. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptions.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#enabled OpensearchserviceDomain#enabled}.

---

### OpensearchserviceDomainOffPeakWindowOptions <a name="OpensearchserviceDomainOffPeakWindowOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OpensearchserviceDomainOffPeakWindowOptions {
    bool|IResolvable Enabled = null,
    OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindow OffPeakWindow = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptions.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#enabled OpensearchserviceDomain#enabled}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptions.property.offPeakWindow">OffPeakWindow</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindow">OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindow</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#off_peak_window OpensearchserviceDomain#off_peak_window}. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptions.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#enabled OpensearchserviceDomain#enabled}.

---

##### `OffPeakWindow`<sup>Optional</sup> <a name="OffPeakWindow" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptions.property.offPeakWindow"></a>

```csharp
public OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindow OffPeakWindow { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindow">OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindow</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#off_peak_window OpensearchserviceDomain#off_peak_window}.

---

### OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindow <a name="OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindow" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindow.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindow {
    OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime WindowStartTime = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindow.property.windowStartTime">WindowStartTime</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime">OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#window_start_time OpensearchserviceDomain#window_start_time}. |

---

##### `WindowStartTime`<sup>Optional</sup> <a name="WindowStartTime" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindow.property.windowStartTime"></a>

```csharp
public OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime WindowStartTime { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime">OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#window_start_time OpensearchserviceDomain#window_start_time}.

---

### OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime <a name="OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime {
    double Hours = null,
    double Minutes = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime.property.hours">Hours</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#hours OpensearchserviceDomain#hours}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime.property.minutes">Minutes</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#minutes OpensearchserviceDomain#minutes}. |

---

##### `Hours`<sup>Optional</sup> <a name="Hours" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime.property.hours"></a>

```csharp
public double Hours { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#hours OpensearchserviceDomain#hours}.

---

##### `Minutes`<sup>Optional</sup> <a name="Minutes" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime.property.minutes"></a>

```csharp
public double Minutes { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#minutes OpensearchserviceDomain#minutes}.

---

### OpensearchserviceDomainServiceSoftwareOptions <a name="OpensearchserviceDomainServiceSoftwareOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OpensearchserviceDomainServiceSoftwareOptions {

};
```


### OpensearchserviceDomainSnapshotOptions <a name="OpensearchserviceDomainSnapshotOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OpensearchserviceDomainSnapshotOptions {
    double AutomatedSnapshotStartHour = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptions.property.automatedSnapshotStartHour">AutomatedSnapshotStartHour</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#automated_snapshot_start_hour OpensearchserviceDomain#automated_snapshot_start_hour}. |

---

##### `AutomatedSnapshotStartHour`<sup>Optional</sup> <a name="AutomatedSnapshotStartHour" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptions.property.automatedSnapshotStartHour"></a>

```csharp
public double AutomatedSnapshotStartHour { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#automated_snapshot_start_hour OpensearchserviceDomain#automated_snapshot_start_hour}.

---

### OpensearchserviceDomainSoftwareUpdateOptions <a name="OpensearchserviceDomainSoftwareUpdateOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OpensearchserviceDomainSoftwareUpdateOptions {
    bool|IResolvable AutoSoftwareUpdateEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptions.property.autoSoftwareUpdateEnabled">AutoSoftwareUpdateEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#auto_software_update_enabled OpensearchserviceDomain#auto_software_update_enabled}. |

---

##### `AutoSoftwareUpdateEnabled`<sup>Optional</sup> <a name="AutoSoftwareUpdateEnabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptions.property.autoSoftwareUpdateEnabled"></a>

```csharp
public bool|IResolvable AutoSoftwareUpdateEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#auto_software_update_enabled OpensearchserviceDomain#auto_software_update_enabled}.

---

### OpensearchserviceDomainTags <a name="OpensearchserviceDomainTags" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OpensearchserviceDomainTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTags.property.key">Key</a></code> | <code>string</code> | The value of the tag. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTags.property.value">Value</a></code> | <code>string</code> | The key of the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The value of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#key OpensearchserviceDomain#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The key of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#value OpensearchserviceDomain#value}

---

### OpensearchserviceDomainVpcOptions <a name="OpensearchserviceDomainVpcOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OpensearchserviceDomainVpcOptions {
    bool|IResolvable EgressEnabled = null,
    string[] SecurityGroupIds = null,
    string[] SubnetIds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptions.property.egressEnabled">EgressEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Controls whether egress traffic from the domain is routed through the customer VPC. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptions.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#security_group_ids OpensearchserviceDomain#security_group_ids}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptions.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#subnet_ids OpensearchserviceDomain#subnet_ids}. |

---

##### `EgressEnabled`<sup>Optional</sup> <a name="EgressEnabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptions.property.egressEnabled"></a>

```csharp
public bool|IResolvable EgressEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Controls whether egress traffic from the domain is routed through the customer VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#egress_enabled OpensearchserviceDomain#egress_enabled}

---

##### `SecurityGroupIds`<sup>Optional</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptions.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#security_group_ids OpensearchserviceDomain#security_group_ids}.

---

##### `SubnetIds`<sup>Optional</sup> <a name="SubnetIds" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptions.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchservice_domain#subnet_ids OpensearchserviceDomain#subnet_ids}.

---

## Classes <a name="Classes" id="Classes"></a>

### OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference <a name="OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.resetRolesKey">ResetRolesKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.resetSubjectKey">ResetSubjectKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetRolesKey` <a name="ResetRolesKey" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.resetRolesKey"></a>

```csharp
private void ResetRolesKey()
```

##### `ResetSubjectKey` <a name="ResetSubjectKey" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.resetSubjectKey"></a>

```csharp
private void ResetSubjectKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.property.rolesKeyInput">RolesKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.property.subjectKeyInput">SubjectKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.property.rolesKey">RolesKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.property.subjectKey">SubjectKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptions">OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `RolesKeyInput`<sup>Optional</sup> <a name="RolesKeyInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.property.rolesKeyInput"></a>

```csharp
public string RolesKeyInput { get; }
```

- *Type:* string

---

##### `SubjectKeyInput`<sup>Optional</sup> <a name="SubjectKeyInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.property.subjectKeyInput"></a>

```csharp
public string SubjectKeyInput { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `RolesKey`<sup>Required</sup> <a name="RolesKey" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.property.rolesKey"></a>

```csharp
public string RolesKey { get; }
```

- *Type:* string

---

##### `SubjectKey`<sup>Required</sup> <a name="SubjectKey" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.property.subjectKey"></a>

```csharp
public string SubjectKey { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptions">OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptions</a>

---


### OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference <a name="OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.resetPublicKey">ResetPublicKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.resetRolesKey">ResetRolesKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.resetSubjectKey">ResetSubjectKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetPublicKey` <a name="ResetPublicKey" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.resetPublicKey"></a>

```csharp
private void ResetPublicKey()
```

##### `ResetRolesKey` <a name="ResetRolesKey" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.resetRolesKey"></a>

```csharp
private void ResetRolesKey()
```

##### `ResetSubjectKey` <a name="ResetSubjectKey" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.resetSubjectKey"></a>

```csharp
private void ResetSubjectKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.property.publicKeyInput">PublicKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.property.rolesKeyInput">RolesKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.property.subjectKeyInput">SubjectKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.property.publicKey">PublicKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.property.rolesKey">RolesKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.property.subjectKey">SubjectKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptions">OpensearchserviceDomainAdvancedSecurityOptionsJwtOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `PublicKeyInput`<sup>Optional</sup> <a name="PublicKeyInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.property.publicKeyInput"></a>

```csharp
public string PublicKeyInput { get; }
```

- *Type:* string

---

##### `RolesKeyInput`<sup>Optional</sup> <a name="RolesKeyInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.property.rolesKeyInput"></a>

```csharp
public string RolesKeyInput { get; }
```

- *Type:* string

---

##### `SubjectKeyInput`<sup>Optional</sup> <a name="SubjectKeyInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.property.subjectKeyInput"></a>

```csharp
public string SubjectKeyInput { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `PublicKey`<sup>Required</sup> <a name="PublicKey" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.property.publicKey"></a>

```csharp
public string PublicKey { get; }
```

- *Type:* string

---

##### `RolesKey`<sup>Required</sup> <a name="RolesKey" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.property.rolesKey"></a>

```csharp
public string RolesKey { get; }
```

- *Type:* string

---

##### `SubjectKey`<sup>Required</sup> <a name="SubjectKey" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.property.subjectKey"></a>

```csharp
public string SubjectKey { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|OpensearchserviceDomainAdvancedSecurityOptionsJwtOptions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptions">OpensearchserviceDomainAdvancedSecurityOptionsJwtOptions</a>

---


### OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference <a name="OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.resetMasterUserArn">ResetMasterUserArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.resetMasterUserName">ResetMasterUserName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.resetMasterUserPassword">ResetMasterUserPassword</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMasterUserArn` <a name="ResetMasterUserArn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.resetMasterUserArn"></a>

```csharp
private void ResetMasterUserArn()
```

##### `ResetMasterUserName` <a name="ResetMasterUserName" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.resetMasterUserName"></a>

```csharp
private void ResetMasterUserName()
```

##### `ResetMasterUserPassword` <a name="ResetMasterUserPassword" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.resetMasterUserPassword"></a>

```csharp
private void ResetMasterUserPassword()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.masterUserArnInput">MasterUserArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.masterUserNameInput">MasterUserNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.masterUserPasswordInput">MasterUserPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.masterUserArn">MasterUserArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.masterUserName">MasterUserName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.masterUserPassword">MasterUserPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptions">OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MasterUserArnInput`<sup>Optional</sup> <a name="MasterUserArnInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.masterUserArnInput"></a>

```csharp
public string MasterUserArnInput { get; }
```

- *Type:* string

---

##### `MasterUserNameInput`<sup>Optional</sup> <a name="MasterUserNameInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.masterUserNameInput"></a>

```csharp
public string MasterUserNameInput { get; }
```

- *Type:* string

---

##### `MasterUserPasswordInput`<sup>Optional</sup> <a name="MasterUserPasswordInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.masterUserPasswordInput"></a>

```csharp
public string MasterUserPasswordInput { get; }
```

- *Type:* string

---

##### `MasterUserArn`<sup>Required</sup> <a name="MasterUserArn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.masterUserArn"></a>

```csharp
public string MasterUserArn { get; }
```

- *Type:* string

---

##### `MasterUserName`<sup>Required</sup> <a name="MasterUserName" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.masterUserName"></a>

```csharp
public string MasterUserName { get; }
```

- *Type:* string

---

##### `MasterUserPassword`<sup>Required</sup> <a name="MasterUserPassword" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.masterUserPassword"></a>

```csharp
public string MasterUserPassword { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptions">OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptions</a>

---


### OpensearchserviceDomainAdvancedSecurityOptionsOutputReference <a name="OpensearchserviceDomainAdvancedSecurityOptionsOutputReference" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OpensearchserviceDomainAdvancedSecurityOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.putIamFederationOptions">PutIamFederationOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.putJwtOptions">PutJwtOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.putMasterUserOptions">PutMasterUserOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.putSamlOptions">PutSamlOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.resetAnonymousAuthEnabled">ResetAnonymousAuthEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.resetIamFederationOptions">ResetIamFederationOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.resetInternalUserDatabaseEnabled">ResetInternalUserDatabaseEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.resetJwtOptions">ResetJwtOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.resetMasterUserOptions">ResetMasterUserOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.resetSamlOptions">ResetSamlOptions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutIamFederationOptions` <a name="PutIamFederationOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.putIamFederationOptions"></a>

```csharp
private void PutIamFederationOptions(OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.putIamFederationOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptions">OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptions</a>

---

##### `PutJwtOptions` <a name="PutJwtOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.putJwtOptions"></a>

```csharp
private void PutJwtOptions(OpensearchserviceDomainAdvancedSecurityOptionsJwtOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.putJwtOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptions">OpensearchserviceDomainAdvancedSecurityOptionsJwtOptions</a>

---

##### `PutMasterUserOptions` <a name="PutMasterUserOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.putMasterUserOptions"></a>

```csharp
private void PutMasterUserOptions(OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.putMasterUserOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptions">OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptions</a>

---

##### `PutSamlOptions` <a name="PutSamlOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.putSamlOptions"></a>

```csharp
private void PutSamlOptions(OpensearchserviceDomainAdvancedSecurityOptionsSamlOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.putSamlOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptions">OpensearchserviceDomainAdvancedSecurityOptionsSamlOptions</a>

---

##### `ResetAnonymousAuthEnabled` <a name="ResetAnonymousAuthEnabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.resetAnonymousAuthEnabled"></a>

```csharp
private void ResetAnonymousAuthEnabled()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetIamFederationOptions` <a name="ResetIamFederationOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.resetIamFederationOptions"></a>

```csharp
private void ResetIamFederationOptions()
```

##### `ResetInternalUserDatabaseEnabled` <a name="ResetInternalUserDatabaseEnabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.resetInternalUserDatabaseEnabled"></a>

```csharp
private void ResetInternalUserDatabaseEnabled()
```

##### `ResetJwtOptions` <a name="ResetJwtOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.resetJwtOptions"></a>

```csharp
private void ResetJwtOptions()
```

##### `ResetMasterUserOptions` <a name="ResetMasterUserOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.resetMasterUserOptions"></a>

```csharp
private void ResetMasterUserOptions()
```

##### `ResetSamlOptions` <a name="ResetSamlOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.resetSamlOptions"></a>

```csharp
private void ResetSamlOptions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.anonymousAuthDisableDate">AnonymousAuthDisableDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.iamFederationOptions">IamFederationOptions</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference">OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.jwtOptions">JwtOptions</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference">OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.masterUserOptions">MasterUserOptions</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference">OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.samlOptions">SamlOptions</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference">OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.anonymousAuthEnabledInput">AnonymousAuthEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.iamFederationOptionsInput">IamFederationOptionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptions">OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.internalUserDatabaseEnabledInput">InternalUserDatabaseEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.jwtOptionsInput">JwtOptionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptions">OpensearchserviceDomainAdvancedSecurityOptionsJwtOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.masterUserOptionsInput">MasterUserOptionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptions">OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.samlOptionsInput">SamlOptionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptions">OpensearchserviceDomainAdvancedSecurityOptionsSamlOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.anonymousAuthEnabled">AnonymousAuthEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.internalUserDatabaseEnabled">InternalUserDatabaseEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptions">OpensearchserviceDomainAdvancedSecurityOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AnonymousAuthDisableDate`<sup>Required</sup> <a name="AnonymousAuthDisableDate" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.anonymousAuthDisableDate"></a>

```csharp
public string AnonymousAuthDisableDate { get; }
```

- *Type:* string

---

##### `IamFederationOptions`<sup>Required</sup> <a name="IamFederationOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.iamFederationOptions"></a>

```csharp
public OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference IamFederationOptions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference">OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference</a>

---

##### `JwtOptions`<sup>Required</sup> <a name="JwtOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.jwtOptions"></a>

```csharp
public OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference JwtOptions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference">OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference</a>

---

##### `MasterUserOptions`<sup>Required</sup> <a name="MasterUserOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.masterUserOptions"></a>

```csharp
public OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference MasterUserOptions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference">OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference</a>

---

##### `SamlOptions`<sup>Required</sup> <a name="SamlOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.samlOptions"></a>

```csharp
public OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference SamlOptions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference">OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference</a>

---

##### `AnonymousAuthEnabledInput`<sup>Optional</sup> <a name="AnonymousAuthEnabledInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.anonymousAuthEnabledInput"></a>

```csharp
public bool|IResolvable AnonymousAuthEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IamFederationOptionsInput`<sup>Optional</sup> <a name="IamFederationOptionsInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.iamFederationOptionsInput"></a>

```csharp
public IResolvable|OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptions IamFederationOptionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptions">OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptions</a>

---

##### `InternalUserDatabaseEnabledInput`<sup>Optional</sup> <a name="InternalUserDatabaseEnabledInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.internalUserDatabaseEnabledInput"></a>

```csharp
public bool|IResolvable InternalUserDatabaseEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `JwtOptionsInput`<sup>Optional</sup> <a name="JwtOptionsInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.jwtOptionsInput"></a>

```csharp
public IResolvable|OpensearchserviceDomainAdvancedSecurityOptionsJwtOptions JwtOptionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptions">OpensearchserviceDomainAdvancedSecurityOptionsJwtOptions</a>

---

##### `MasterUserOptionsInput`<sup>Optional</sup> <a name="MasterUserOptionsInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.masterUserOptionsInput"></a>

```csharp
public IResolvable|OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptions MasterUserOptionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptions">OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptions</a>

---

##### `SamlOptionsInput`<sup>Optional</sup> <a name="SamlOptionsInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.samlOptionsInput"></a>

```csharp
public IResolvable|OpensearchserviceDomainAdvancedSecurityOptionsSamlOptions SamlOptionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptions">OpensearchserviceDomainAdvancedSecurityOptionsSamlOptions</a>

---

##### `AnonymousAuthEnabled`<sup>Required</sup> <a name="AnonymousAuthEnabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.anonymousAuthEnabled"></a>

```csharp
public bool|IResolvable AnonymousAuthEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalUserDatabaseEnabled`<sup>Required</sup> <a name="InternalUserDatabaseEnabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.internalUserDatabaseEnabled"></a>

```csharp
public bool|IResolvable InternalUserDatabaseEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|OpensearchserviceDomainAdvancedSecurityOptions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptions">OpensearchserviceDomainAdvancedSecurityOptions</a>

---


### OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference <a name="OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.resetEntityId">ResetEntityId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.resetMetadataContent">ResetMetadataContent</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEntityId` <a name="ResetEntityId" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.resetEntityId"></a>

```csharp
private void ResetEntityId()
```

##### `ResetMetadataContent` <a name="ResetMetadataContent" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.resetMetadataContent"></a>

```csharp
private void ResetMetadataContent()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.property.entityIdInput">EntityIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.property.metadataContentInput">MetadataContentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.property.entityId">EntityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.property.metadataContent">MetadataContent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdp">OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdp</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EntityIdInput`<sup>Optional</sup> <a name="EntityIdInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.property.entityIdInput"></a>

```csharp
public string EntityIdInput { get; }
```

- *Type:* string

---

##### `MetadataContentInput`<sup>Optional</sup> <a name="MetadataContentInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.property.metadataContentInput"></a>

```csharp
public string MetadataContentInput { get; }
```

- *Type:* string

---

##### `EntityId`<sup>Required</sup> <a name="EntityId" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.property.entityId"></a>

```csharp
public string EntityId { get; }
```

- *Type:* string

---

##### `MetadataContent`<sup>Required</sup> <a name="MetadataContent" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.property.metadataContent"></a>

```csharp
public string MetadataContent { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.property.internalValue"></a>

```csharp
public IResolvable|OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdp InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdp">OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdp</a>

---


### OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference <a name="OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.putIdp">PutIdp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.resetIdp">ResetIdp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.resetMasterBackendRole">ResetMasterBackendRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.resetMasterUserName">ResetMasterUserName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.resetRolesKey">ResetRolesKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.resetSessionTimeoutMinutes">ResetSessionTimeoutMinutes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.resetSubjectKey">ResetSubjectKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutIdp` <a name="PutIdp" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.putIdp"></a>

```csharp
private void PutIdp(OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdp Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.putIdp.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdp">OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdp</a>

---

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetIdp` <a name="ResetIdp" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.resetIdp"></a>

```csharp
private void ResetIdp()
```

##### `ResetMasterBackendRole` <a name="ResetMasterBackendRole" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.resetMasterBackendRole"></a>

```csharp
private void ResetMasterBackendRole()
```

##### `ResetMasterUserName` <a name="ResetMasterUserName" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.resetMasterUserName"></a>

```csharp
private void ResetMasterUserName()
```

##### `ResetRolesKey` <a name="ResetRolesKey" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.resetRolesKey"></a>

```csharp
private void ResetRolesKey()
```

##### `ResetSessionTimeoutMinutes` <a name="ResetSessionTimeoutMinutes" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.resetSessionTimeoutMinutes"></a>

```csharp
private void ResetSessionTimeoutMinutes()
```

##### `ResetSubjectKey` <a name="ResetSubjectKey" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.resetSubjectKey"></a>

```csharp
private void ResetSubjectKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.idp">Idp</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference">OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.idpInput">IdpInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdp">OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.masterBackendRoleInput">MasterBackendRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.masterUserNameInput">MasterUserNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.rolesKeyInput">RolesKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.sessionTimeoutMinutesInput">SessionTimeoutMinutesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.subjectKeyInput">SubjectKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.masterBackendRole">MasterBackendRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.masterUserName">MasterUserName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.rolesKey">RolesKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.sessionTimeoutMinutes">SessionTimeoutMinutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.subjectKey">SubjectKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptions">OpensearchserviceDomainAdvancedSecurityOptionsSamlOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Idp`<sup>Required</sup> <a name="Idp" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.idp"></a>

```csharp
public OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference Idp { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference">OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference</a>

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IdpInput`<sup>Optional</sup> <a name="IdpInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.idpInput"></a>

```csharp
public IResolvable|OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdp IdpInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdp">OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdp</a>

---

##### `MasterBackendRoleInput`<sup>Optional</sup> <a name="MasterBackendRoleInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.masterBackendRoleInput"></a>

```csharp
public string MasterBackendRoleInput { get; }
```

- *Type:* string

---

##### `MasterUserNameInput`<sup>Optional</sup> <a name="MasterUserNameInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.masterUserNameInput"></a>

```csharp
public string MasterUserNameInput { get; }
```

- *Type:* string

---

##### `RolesKeyInput`<sup>Optional</sup> <a name="RolesKeyInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.rolesKeyInput"></a>

```csharp
public string RolesKeyInput { get; }
```

- *Type:* string

---

##### `SessionTimeoutMinutesInput`<sup>Optional</sup> <a name="SessionTimeoutMinutesInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.sessionTimeoutMinutesInput"></a>

```csharp
public double SessionTimeoutMinutesInput { get; }
```

- *Type:* double

---

##### `SubjectKeyInput`<sup>Optional</sup> <a name="SubjectKeyInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.subjectKeyInput"></a>

```csharp
public string SubjectKeyInput { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MasterBackendRole`<sup>Required</sup> <a name="MasterBackendRole" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.masterBackendRole"></a>

```csharp
public string MasterBackendRole { get; }
```

- *Type:* string

---

##### `MasterUserName`<sup>Required</sup> <a name="MasterUserName" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.masterUserName"></a>

```csharp
public string MasterUserName { get; }
```

- *Type:* string

---

##### `RolesKey`<sup>Required</sup> <a name="RolesKey" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.rolesKey"></a>

```csharp
public string RolesKey { get; }
```

- *Type:* string

---

##### `SessionTimeoutMinutes`<sup>Required</sup> <a name="SessionTimeoutMinutes" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.sessionTimeoutMinutes"></a>

```csharp
public double SessionTimeoutMinutes { get; }
```

- *Type:* double

---

##### `SubjectKey`<sup>Required</sup> <a name="SubjectKey" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.subjectKey"></a>

```csharp
public string SubjectKey { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|OpensearchserviceDomainAdvancedSecurityOptionsSamlOptions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptions">OpensearchserviceDomainAdvancedSecurityOptionsSamlOptions</a>

---


### OpensearchserviceDomainAimlOptionsOutputReference <a name="OpensearchserviceDomainAimlOptionsOutputReference" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OpensearchserviceDomainAimlOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.putS3VectorsEngine">PutS3VectorsEngine</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.putServerlessVectorAcceleration">PutServerlessVectorAcceleration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.resetS3VectorsEngine">ResetS3VectorsEngine</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.resetServerlessVectorAcceleration">ResetServerlessVectorAcceleration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutS3VectorsEngine` <a name="PutS3VectorsEngine" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.putS3VectorsEngine"></a>

```csharp
private void PutS3VectorsEngine(OpensearchserviceDomainAimlOptionsS3VectorsEngine Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.putS3VectorsEngine.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngine">OpensearchserviceDomainAimlOptionsS3VectorsEngine</a>

---

##### `PutServerlessVectorAcceleration` <a name="PutServerlessVectorAcceleration" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.putServerlessVectorAcceleration"></a>

```csharp
private void PutServerlessVectorAcceleration(OpensearchserviceDomainAimlOptionsServerlessVectorAcceleration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.putServerlessVectorAcceleration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAcceleration">OpensearchserviceDomainAimlOptionsServerlessVectorAcceleration</a>

---

##### `ResetS3VectorsEngine` <a name="ResetS3VectorsEngine" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.resetS3VectorsEngine"></a>

```csharp
private void ResetS3VectorsEngine()
```

##### `ResetServerlessVectorAcceleration` <a name="ResetServerlessVectorAcceleration" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.resetServerlessVectorAcceleration"></a>

```csharp
private void ResetServerlessVectorAcceleration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.property.s3VectorsEngine">S3VectorsEngine</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference">OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.property.serverlessVectorAcceleration">ServerlessVectorAcceleration</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference">OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.property.s3VectorsEngineInput">S3VectorsEngineInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngine">OpensearchserviceDomainAimlOptionsS3VectorsEngine</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.property.serverlessVectorAccelerationInput">ServerlessVectorAccelerationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAcceleration">OpensearchserviceDomainAimlOptionsServerlessVectorAcceleration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptions">OpensearchserviceDomainAimlOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `S3VectorsEngine`<sup>Required</sup> <a name="S3VectorsEngine" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.property.s3VectorsEngine"></a>

```csharp
public OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference S3VectorsEngine { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference">OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference</a>

---

##### `ServerlessVectorAcceleration`<sup>Required</sup> <a name="ServerlessVectorAcceleration" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.property.serverlessVectorAcceleration"></a>

```csharp
public OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference ServerlessVectorAcceleration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference">OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference</a>

---

##### `S3VectorsEngineInput`<sup>Optional</sup> <a name="S3VectorsEngineInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.property.s3VectorsEngineInput"></a>

```csharp
public IResolvable|OpensearchserviceDomainAimlOptionsS3VectorsEngine S3VectorsEngineInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngine">OpensearchserviceDomainAimlOptionsS3VectorsEngine</a>

---

##### `ServerlessVectorAccelerationInput`<sup>Optional</sup> <a name="ServerlessVectorAccelerationInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.property.serverlessVectorAccelerationInput"></a>

```csharp
public IResolvable|OpensearchserviceDomainAimlOptionsServerlessVectorAcceleration ServerlessVectorAccelerationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAcceleration">OpensearchserviceDomainAimlOptionsServerlessVectorAcceleration</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|OpensearchserviceDomainAimlOptions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptions">OpensearchserviceDomainAimlOptions</a>

---


### OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference <a name="OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngine">OpensearchserviceDomainAimlOptionsS3VectorsEngine</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.property.internalValue"></a>

```csharp
public IResolvable|OpensearchserviceDomainAimlOptionsS3VectorsEngine InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngine">OpensearchserviceDomainAimlOptionsS3VectorsEngine</a>

---


### OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference <a name="OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAcceleration">OpensearchserviceDomainAimlOptionsServerlessVectorAcceleration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|OpensearchserviceDomainAimlOptionsServerlessVectorAcceleration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAcceleration">OpensearchserviceDomainAimlOptionsServerlessVectorAcceleration</a>

---


### OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference <a name="OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.resetEndTime">ResetEndTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.resetStartTime">ResetStartTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetEndTime` <a name="ResetEndTime" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.resetEndTime"></a>

```csharp
private void ResetEndTime()
```

##### `ResetStartTime` <a name="ResetStartTime" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.resetStartTime"></a>

```csharp
private void ResetStartTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.property.endTimeInput">EndTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.property.startTimeInput">StartTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.property.endTime">EndTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.property.startTime">StartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptions">OpensearchserviceDomainAutomatedSnapshotPauseOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EndTimeInput`<sup>Optional</sup> <a name="EndTimeInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.property.endTimeInput"></a>

```csharp
public string EndTimeInput { get; }
```

- *Type:* string

---

##### `StartTimeInput`<sup>Optional</sup> <a name="StartTimeInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.property.startTimeInput"></a>

```csharp
public string StartTimeInput { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.property.endTime"></a>

```csharp
public string EndTime { get; }
```

- *Type:* string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.property.startTime"></a>

```csharp
public string StartTime { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|OpensearchserviceDomainAutomatedSnapshotPauseOptions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptions">OpensearchserviceDomainAutomatedSnapshotPauseOptions</a>

---


### OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference <a name="OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptions">OpensearchserviceDomainClusterConfigColdStorageOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|OpensearchserviceDomainClusterConfigColdStorageOptions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptions">OpensearchserviceDomainClusterConfigColdStorageOptions</a>

---


### OpensearchserviceDomainClusterConfigNodeOptionsList <a name="OpensearchserviceDomainClusterConfigNodeOptionsList" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OpensearchserviceDomainClusterConfigNodeOptionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsList.get"></a>

```csharp
private OpensearchserviceDomainClusterConfigNodeOptionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptions">OpensearchserviceDomainClusterConfigNodeOptions</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsList.property.internalValue"></a>

```csharp
public IResolvable|OpensearchserviceDomainClusterConfigNodeOptions[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptions">OpensearchserviceDomainClusterConfigNodeOptions</a>[]

---


### OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference <a name="OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.resetCount">ResetCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCount` <a name="ResetCount" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.resetCount"></a>

```csharp
private void ResetCount()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.property.countInput">CountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfig">OpensearchserviceDomainClusterConfigNodeOptionsNodeConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CountInput`<sup>Optional</sup> <a name="CountInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.property.countInput"></a>

```csharp
public double CountInput { get; }
```

- *Type:* double

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|OpensearchserviceDomainClusterConfigNodeOptionsNodeConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfig">OpensearchserviceDomainClusterConfigNodeOptionsNodeConfig</a>

---


### OpensearchserviceDomainClusterConfigNodeOptionsOutputReference <a name="OpensearchserviceDomainClusterConfigNodeOptionsOutputReference" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OpensearchserviceDomainClusterConfigNodeOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.putNodeConfig">PutNodeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.resetNodeConfig">ResetNodeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.resetNodeType">ResetNodeType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutNodeConfig` <a name="PutNodeConfig" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.putNodeConfig"></a>

```csharp
private void PutNodeConfig(OpensearchserviceDomainClusterConfigNodeOptionsNodeConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.putNodeConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfig">OpensearchserviceDomainClusterConfigNodeOptionsNodeConfig</a>

---

##### `ResetNodeConfig` <a name="ResetNodeConfig" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.resetNodeConfig"></a>

```csharp
private void ResetNodeConfig()
```

##### `ResetNodeType` <a name="ResetNodeType" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.resetNodeType"></a>

```csharp
private void ResetNodeType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.property.nodeConfig">NodeConfig</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference">OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.property.nodeConfigInput">NodeConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfig">OpensearchserviceDomainClusterConfigNodeOptionsNodeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.property.nodeTypeInput">NodeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.property.nodeType">NodeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptions">OpensearchserviceDomainClusterConfigNodeOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NodeConfig`<sup>Required</sup> <a name="NodeConfig" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.property.nodeConfig"></a>

```csharp
public OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference NodeConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference">OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference</a>

---

##### `NodeConfigInput`<sup>Optional</sup> <a name="NodeConfigInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.property.nodeConfigInput"></a>

```csharp
public IResolvable|OpensearchserviceDomainClusterConfigNodeOptionsNodeConfig NodeConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfig">OpensearchserviceDomainClusterConfigNodeOptionsNodeConfig</a>

---

##### `NodeTypeInput`<sup>Optional</sup> <a name="NodeTypeInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.property.nodeTypeInput"></a>

```csharp
public string NodeTypeInput { get; }
```

- *Type:* string

---

##### `NodeType`<sup>Required</sup> <a name="NodeType" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.property.nodeType"></a>

```csharp
public string NodeType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|OpensearchserviceDomainClusterConfigNodeOptions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptions">OpensearchserviceDomainClusterConfigNodeOptions</a>

---


### OpensearchserviceDomainClusterConfigOutputReference <a name="OpensearchserviceDomainClusterConfigOutputReference" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OpensearchserviceDomainClusterConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.putColdStorageOptions">PutColdStorageOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.putNodeOptions">PutNodeOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.putZoneAwarenessConfig">PutZoneAwarenessConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.resetColdStorageOptions">ResetColdStorageOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.resetDedicatedMasterCount">ResetDedicatedMasterCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.resetDedicatedMasterEnabled">ResetDedicatedMasterEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.resetDedicatedMasterType">ResetDedicatedMasterType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.resetInstanceCount">ResetInstanceCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.resetInstanceType">ResetInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.resetMultiAzWithStandbyEnabled">ResetMultiAzWithStandbyEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.resetNodeOptions">ResetNodeOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.resetWarmCount">ResetWarmCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.resetWarmEnabled">ResetWarmEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.resetWarmType">ResetWarmType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.resetZoneAwarenessConfig">ResetZoneAwarenessConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.resetZoneAwarenessEnabled">ResetZoneAwarenessEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutColdStorageOptions` <a name="PutColdStorageOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.putColdStorageOptions"></a>

```csharp
private void PutColdStorageOptions(OpensearchserviceDomainClusterConfigColdStorageOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.putColdStorageOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptions">OpensearchserviceDomainClusterConfigColdStorageOptions</a>

---

##### `PutNodeOptions` <a name="PutNodeOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.putNodeOptions"></a>

```csharp
private void PutNodeOptions(IResolvable|OpensearchserviceDomainClusterConfigNodeOptions[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.putNodeOptions.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptions">OpensearchserviceDomainClusterConfigNodeOptions</a>[]

---

##### `PutZoneAwarenessConfig` <a name="PutZoneAwarenessConfig" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.putZoneAwarenessConfig"></a>

```csharp
private void PutZoneAwarenessConfig(OpensearchserviceDomainClusterConfigZoneAwarenessConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.putZoneAwarenessConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfig">OpensearchserviceDomainClusterConfigZoneAwarenessConfig</a>

---

##### `ResetColdStorageOptions` <a name="ResetColdStorageOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.resetColdStorageOptions"></a>

```csharp
private void ResetColdStorageOptions()
```

##### `ResetDedicatedMasterCount` <a name="ResetDedicatedMasterCount" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.resetDedicatedMasterCount"></a>

```csharp
private void ResetDedicatedMasterCount()
```

##### `ResetDedicatedMasterEnabled` <a name="ResetDedicatedMasterEnabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.resetDedicatedMasterEnabled"></a>

```csharp
private void ResetDedicatedMasterEnabled()
```

##### `ResetDedicatedMasterType` <a name="ResetDedicatedMasterType" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.resetDedicatedMasterType"></a>

```csharp
private void ResetDedicatedMasterType()
```

##### `ResetInstanceCount` <a name="ResetInstanceCount" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.resetInstanceCount"></a>

```csharp
private void ResetInstanceCount()
```

##### `ResetInstanceType` <a name="ResetInstanceType" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.resetInstanceType"></a>

```csharp
private void ResetInstanceType()
```

##### `ResetMultiAzWithStandbyEnabled` <a name="ResetMultiAzWithStandbyEnabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.resetMultiAzWithStandbyEnabled"></a>

```csharp
private void ResetMultiAzWithStandbyEnabled()
```

##### `ResetNodeOptions` <a name="ResetNodeOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.resetNodeOptions"></a>

```csharp
private void ResetNodeOptions()
```

##### `ResetWarmCount` <a name="ResetWarmCount" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.resetWarmCount"></a>

```csharp
private void ResetWarmCount()
```

##### `ResetWarmEnabled` <a name="ResetWarmEnabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.resetWarmEnabled"></a>

```csharp
private void ResetWarmEnabled()
```

##### `ResetWarmType` <a name="ResetWarmType" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.resetWarmType"></a>

```csharp
private void ResetWarmType()
```

##### `ResetZoneAwarenessConfig` <a name="ResetZoneAwarenessConfig" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.resetZoneAwarenessConfig"></a>

```csharp
private void ResetZoneAwarenessConfig()
```

##### `ResetZoneAwarenessEnabled` <a name="ResetZoneAwarenessEnabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.resetZoneAwarenessEnabled"></a>

```csharp
private void ResetZoneAwarenessEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.coldStorageOptions">ColdStorageOptions</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference">OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.nodeOptions">NodeOptions</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsList">OpensearchserviceDomainClusterConfigNodeOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.zoneAwarenessConfig">ZoneAwarenessConfig</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference">OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.coldStorageOptionsInput">ColdStorageOptionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptions">OpensearchserviceDomainClusterConfigColdStorageOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.dedicatedMasterCountInput">DedicatedMasterCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.dedicatedMasterEnabledInput">DedicatedMasterEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.dedicatedMasterTypeInput">DedicatedMasterTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.instanceCountInput">InstanceCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.instanceTypeInput">InstanceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.multiAzWithStandbyEnabledInput">MultiAzWithStandbyEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.nodeOptionsInput">NodeOptionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptions">OpensearchserviceDomainClusterConfigNodeOptions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.warmCountInput">WarmCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.warmEnabledInput">WarmEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.warmTypeInput">WarmTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.zoneAwarenessConfigInput">ZoneAwarenessConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfig">OpensearchserviceDomainClusterConfigZoneAwarenessConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.zoneAwarenessEnabledInput">ZoneAwarenessEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.dedicatedMasterCount">DedicatedMasterCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.dedicatedMasterEnabled">DedicatedMasterEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.dedicatedMasterType">DedicatedMasterType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.instanceCount">InstanceCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.instanceType">InstanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.multiAzWithStandbyEnabled">MultiAzWithStandbyEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.warmCount">WarmCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.warmEnabled">WarmEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.warmType">WarmType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.zoneAwarenessEnabled">ZoneAwarenessEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfig">OpensearchserviceDomainClusterConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ColdStorageOptions`<sup>Required</sup> <a name="ColdStorageOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.coldStorageOptions"></a>

```csharp
public OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference ColdStorageOptions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference">OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference</a>

---

##### `NodeOptions`<sup>Required</sup> <a name="NodeOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.nodeOptions"></a>

```csharp
public OpensearchserviceDomainClusterConfigNodeOptionsList NodeOptions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsList">OpensearchserviceDomainClusterConfigNodeOptionsList</a>

---

##### `ZoneAwarenessConfig`<sup>Required</sup> <a name="ZoneAwarenessConfig" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.zoneAwarenessConfig"></a>

```csharp
public OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference ZoneAwarenessConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference">OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference</a>

---

##### `ColdStorageOptionsInput`<sup>Optional</sup> <a name="ColdStorageOptionsInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.coldStorageOptionsInput"></a>

```csharp
public IResolvable|OpensearchserviceDomainClusterConfigColdStorageOptions ColdStorageOptionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptions">OpensearchserviceDomainClusterConfigColdStorageOptions</a>

---

##### `DedicatedMasterCountInput`<sup>Optional</sup> <a name="DedicatedMasterCountInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.dedicatedMasterCountInput"></a>

```csharp
public double DedicatedMasterCountInput { get; }
```

- *Type:* double

---

##### `DedicatedMasterEnabledInput`<sup>Optional</sup> <a name="DedicatedMasterEnabledInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.dedicatedMasterEnabledInput"></a>

```csharp
public bool|IResolvable DedicatedMasterEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DedicatedMasterTypeInput`<sup>Optional</sup> <a name="DedicatedMasterTypeInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.dedicatedMasterTypeInput"></a>

```csharp
public string DedicatedMasterTypeInput { get; }
```

- *Type:* string

---

##### `InstanceCountInput`<sup>Optional</sup> <a name="InstanceCountInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.instanceCountInput"></a>

```csharp
public double InstanceCountInput { get; }
```

- *Type:* double

---

##### `InstanceTypeInput`<sup>Optional</sup> <a name="InstanceTypeInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.instanceTypeInput"></a>

```csharp
public string InstanceTypeInput { get; }
```

- *Type:* string

---

##### `MultiAzWithStandbyEnabledInput`<sup>Optional</sup> <a name="MultiAzWithStandbyEnabledInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.multiAzWithStandbyEnabledInput"></a>

```csharp
public bool|IResolvable MultiAzWithStandbyEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `NodeOptionsInput`<sup>Optional</sup> <a name="NodeOptionsInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.nodeOptionsInput"></a>

```csharp
public IResolvable|OpensearchserviceDomainClusterConfigNodeOptions[] NodeOptionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptions">OpensearchserviceDomainClusterConfigNodeOptions</a>[]

---

##### `WarmCountInput`<sup>Optional</sup> <a name="WarmCountInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.warmCountInput"></a>

```csharp
public double WarmCountInput { get; }
```

- *Type:* double

---

##### `WarmEnabledInput`<sup>Optional</sup> <a name="WarmEnabledInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.warmEnabledInput"></a>

```csharp
public bool|IResolvable WarmEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `WarmTypeInput`<sup>Optional</sup> <a name="WarmTypeInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.warmTypeInput"></a>

```csharp
public string WarmTypeInput { get; }
```

- *Type:* string

---

##### `ZoneAwarenessConfigInput`<sup>Optional</sup> <a name="ZoneAwarenessConfigInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.zoneAwarenessConfigInput"></a>

```csharp
public IResolvable|OpensearchserviceDomainClusterConfigZoneAwarenessConfig ZoneAwarenessConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfig">OpensearchserviceDomainClusterConfigZoneAwarenessConfig</a>

---

##### `ZoneAwarenessEnabledInput`<sup>Optional</sup> <a name="ZoneAwarenessEnabledInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.zoneAwarenessEnabledInput"></a>

```csharp
public bool|IResolvable ZoneAwarenessEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DedicatedMasterCount`<sup>Required</sup> <a name="DedicatedMasterCount" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.dedicatedMasterCount"></a>

```csharp
public double DedicatedMasterCount { get; }
```

- *Type:* double

---

##### `DedicatedMasterEnabled`<sup>Required</sup> <a name="DedicatedMasterEnabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.dedicatedMasterEnabled"></a>

```csharp
public bool|IResolvable DedicatedMasterEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DedicatedMasterType`<sup>Required</sup> <a name="DedicatedMasterType" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.dedicatedMasterType"></a>

```csharp
public string DedicatedMasterType { get; }
```

- *Type:* string

---

##### `InstanceCount`<sup>Required</sup> <a name="InstanceCount" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.instanceCount"></a>

```csharp
public double InstanceCount { get; }
```

- *Type:* double

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.instanceType"></a>

```csharp
public string InstanceType { get; }
```

- *Type:* string

---

##### `MultiAzWithStandbyEnabled`<sup>Required</sup> <a name="MultiAzWithStandbyEnabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.multiAzWithStandbyEnabled"></a>

```csharp
public bool|IResolvable MultiAzWithStandbyEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `WarmCount`<sup>Required</sup> <a name="WarmCount" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.warmCount"></a>

```csharp
public double WarmCount { get; }
```

- *Type:* double

---

##### `WarmEnabled`<sup>Required</sup> <a name="WarmEnabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.warmEnabled"></a>

```csharp
public bool|IResolvable WarmEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `WarmType`<sup>Required</sup> <a name="WarmType" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.warmType"></a>

```csharp
public string WarmType { get; }
```

- *Type:* string

---

##### `ZoneAwarenessEnabled`<sup>Required</sup> <a name="ZoneAwarenessEnabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.zoneAwarenessEnabled"></a>

```csharp
public bool|IResolvable ZoneAwarenessEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|OpensearchserviceDomainClusterConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfig">OpensearchserviceDomainClusterConfig</a>

---


### OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference <a name="OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.resetAvailabilityZoneCount">ResetAvailabilityZoneCount</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAvailabilityZoneCount` <a name="ResetAvailabilityZoneCount" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.resetAvailabilityZoneCount"></a>

```csharp
private void ResetAvailabilityZoneCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.property.availabilityZoneCountInput">AvailabilityZoneCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.property.availabilityZoneCount">AvailabilityZoneCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfig">OpensearchserviceDomainClusterConfigZoneAwarenessConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AvailabilityZoneCountInput`<sup>Optional</sup> <a name="AvailabilityZoneCountInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.property.availabilityZoneCountInput"></a>

```csharp
public double AvailabilityZoneCountInput { get; }
```

- *Type:* double

---

##### `AvailabilityZoneCount`<sup>Required</sup> <a name="AvailabilityZoneCount" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.property.availabilityZoneCount"></a>

```csharp
public double AvailabilityZoneCount { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|OpensearchserviceDomainClusterConfigZoneAwarenessConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfig">OpensearchserviceDomainClusterConfigZoneAwarenessConfig</a>

---


### OpensearchserviceDomainCognitoOptionsOutputReference <a name="OpensearchserviceDomainCognitoOptionsOutputReference" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OpensearchserviceDomainCognitoOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.resetIdentityPoolId">ResetIdentityPoolId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.resetRoleArn">ResetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.resetUserPoolId">ResetUserPoolId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetIdentityPoolId` <a name="ResetIdentityPoolId" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.resetIdentityPoolId"></a>

```csharp
private void ResetIdentityPoolId()
```

##### `ResetRoleArn` <a name="ResetRoleArn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.resetRoleArn"></a>

```csharp
private void ResetRoleArn()
```

##### `ResetUserPoolId` <a name="ResetUserPoolId" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.resetUserPoolId"></a>

```csharp
private void ResetUserPoolId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.property.identityPoolIdInput">IdentityPoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.property.roleArnInput">RoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.property.userPoolIdInput">UserPoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.property.identityPoolId">IdentityPoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.property.userPoolId">UserPoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptions">OpensearchserviceDomainCognitoOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IdentityPoolIdInput`<sup>Optional</sup> <a name="IdentityPoolIdInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.property.identityPoolIdInput"></a>

```csharp
public string IdentityPoolIdInput { get; }
```

- *Type:* string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.property.roleArnInput"></a>

```csharp
public string RoleArnInput { get; }
```

- *Type:* string

---

##### `UserPoolIdInput`<sup>Optional</sup> <a name="UserPoolIdInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.property.userPoolIdInput"></a>

```csharp
public string UserPoolIdInput { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IdentityPoolId`<sup>Required</sup> <a name="IdentityPoolId" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.property.identityPoolId"></a>

```csharp
public string IdentityPoolId { get; }
```

- *Type:* string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `UserPoolId`<sup>Required</sup> <a name="UserPoolId" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.property.userPoolId"></a>

```csharp
public string UserPoolId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|OpensearchserviceDomainCognitoOptions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptions">OpensearchserviceDomainCognitoOptions</a>

---


### OpensearchserviceDomainDeploymentStrategyOptionsOutputReference <a name="OpensearchserviceDomainDeploymentStrategyOptionsOutputReference" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OpensearchserviceDomainDeploymentStrategyOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.resetDeploymentStrategy">ResetDeploymentStrategy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDeploymentStrategy` <a name="ResetDeploymentStrategy" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.resetDeploymentStrategy"></a>

```csharp
private void ResetDeploymentStrategy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.property.deploymentStrategyInput">DeploymentStrategyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.property.deploymentStrategy">DeploymentStrategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptions">OpensearchserviceDomainDeploymentStrategyOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DeploymentStrategyInput`<sup>Optional</sup> <a name="DeploymentStrategyInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.property.deploymentStrategyInput"></a>

```csharp
public string DeploymentStrategyInput { get; }
```

- *Type:* string

---

##### `DeploymentStrategy`<sup>Required</sup> <a name="DeploymentStrategy" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.property.deploymentStrategy"></a>

```csharp
public string DeploymentStrategy { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|OpensearchserviceDomainDeploymentStrategyOptions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptions">OpensearchserviceDomainDeploymentStrategyOptions</a>

---


### OpensearchserviceDomainDomainEndpointOptionsOutputReference <a name="OpensearchserviceDomainDomainEndpointOptionsOutputReference" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OpensearchserviceDomainDomainEndpointOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.resetCustomEndpoint">ResetCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.resetCustomEndpointCertificateArn">ResetCustomEndpointCertificateArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.resetCustomEndpointEnabled">ResetCustomEndpointEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.resetEnforceHttps">ResetEnforceHttps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.resetTlsSecurityPolicy">ResetTlsSecurityPolicy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCustomEndpoint` <a name="ResetCustomEndpoint" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.resetCustomEndpoint"></a>

```csharp
private void ResetCustomEndpoint()
```

##### `ResetCustomEndpointCertificateArn` <a name="ResetCustomEndpointCertificateArn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.resetCustomEndpointCertificateArn"></a>

```csharp
private void ResetCustomEndpointCertificateArn()
```

##### `ResetCustomEndpointEnabled` <a name="ResetCustomEndpointEnabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.resetCustomEndpointEnabled"></a>

```csharp
private void ResetCustomEndpointEnabled()
```

##### `ResetEnforceHttps` <a name="ResetEnforceHttps" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.resetEnforceHttps"></a>

```csharp
private void ResetEnforceHttps()
```

##### `ResetTlsSecurityPolicy` <a name="ResetTlsSecurityPolicy" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.resetTlsSecurityPolicy"></a>

```csharp
private void ResetTlsSecurityPolicy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.property.customEndpointCertificateArnInput">CustomEndpointCertificateArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.property.customEndpointEnabledInput">CustomEndpointEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.property.customEndpointInput">CustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.property.enforceHttpsInput">EnforceHttpsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.property.tlsSecurityPolicyInput">TlsSecurityPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.property.customEndpoint">CustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.property.customEndpointCertificateArn">CustomEndpointCertificateArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.property.customEndpointEnabled">CustomEndpointEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.property.enforceHttps">EnforceHttps</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.property.tlsSecurityPolicy">TlsSecurityPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptions">OpensearchserviceDomainDomainEndpointOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomEndpointCertificateArnInput`<sup>Optional</sup> <a name="CustomEndpointCertificateArnInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.property.customEndpointCertificateArnInput"></a>

```csharp
public string CustomEndpointCertificateArnInput { get; }
```

- *Type:* string

---

##### `CustomEndpointEnabledInput`<sup>Optional</sup> <a name="CustomEndpointEnabledInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.property.customEndpointEnabledInput"></a>

```csharp
public bool|IResolvable CustomEndpointEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `CustomEndpointInput`<sup>Optional</sup> <a name="CustomEndpointInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.property.customEndpointInput"></a>

```csharp
public string CustomEndpointInput { get; }
```

- *Type:* string

---

##### `EnforceHttpsInput`<sup>Optional</sup> <a name="EnforceHttpsInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.property.enforceHttpsInput"></a>

```csharp
public bool|IResolvable EnforceHttpsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `TlsSecurityPolicyInput`<sup>Optional</sup> <a name="TlsSecurityPolicyInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.property.tlsSecurityPolicyInput"></a>

```csharp
public string TlsSecurityPolicyInput { get; }
```

- *Type:* string

---

##### `CustomEndpoint`<sup>Required</sup> <a name="CustomEndpoint" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.property.customEndpoint"></a>

```csharp
public string CustomEndpoint { get; }
```

- *Type:* string

---

##### `CustomEndpointCertificateArn`<sup>Required</sup> <a name="CustomEndpointCertificateArn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.property.customEndpointCertificateArn"></a>

```csharp
public string CustomEndpointCertificateArn { get; }
```

- *Type:* string

---

##### `CustomEndpointEnabled`<sup>Required</sup> <a name="CustomEndpointEnabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.property.customEndpointEnabled"></a>

```csharp
public bool|IResolvable CustomEndpointEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EnforceHttps`<sup>Required</sup> <a name="EnforceHttps" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.property.enforceHttps"></a>

```csharp
public bool|IResolvable EnforceHttps { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `TlsSecurityPolicy`<sup>Required</sup> <a name="TlsSecurityPolicy" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.property.tlsSecurityPolicy"></a>

```csharp
public string TlsSecurityPolicy { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|OpensearchserviceDomainDomainEndpointOptions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptions">OpensearchserviceDomainDomainEndpointOptions</a>

---


### OpensearchserviceDomainEbsOptionsOutputReference <a name="OpensearchserviceDomainEbsOptionsOutputReference" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OpensearchserviceDomainEbsOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.resetEbsEnabled">ResetEbsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.resetIops">ResetIops</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.resetThroughput">ResetThroughput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.resetVolumeSize">ResetVolumeSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.resetVolumeType">ResetVolumeType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEbsEnabled` <a name="ResetEbsEnabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.resetEbsEnabled"></a>

```csharp
private void ResetEbsEnabled()
```

##### `ResetIops` <a name="ResetIops" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.resetIops"></a>

```csharp
private void ResetIops()
```

##### `ResetThroughput` <a name="ResetThroughput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.resetThroughput"></a>

```csharp
private void ResetThroughput()
```

##### `ResetVolumeSize` <a name="ResetVolumeSize" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.resetVolumeSize"></a>

```csharp
private void ResetVolumeSize()
```

##### `ResetVolumeType` <a name="ResetVolumeType" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.resetVolumeType"></a>

```csharp
private void ResetVolumeType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.property.ebsEnabledInput">EbsEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.property.iopsInput">IopsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.property.throughputInput">ThroughputInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.property.volumeSizeInput">VolumeSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.property.volumeTypeInput">VolumeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.property.ebsEnabled">EbsEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.property.iops">Iops</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.property.throughput">Throughput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.property.volumeSize">VolumeSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.property.volumeType">VolumeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptions">OpensearchserviceDomainEbsOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EbsEnabledInput`<sup>Optional</sup> <a name="EbsEnabledInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.property.ebsEnabledInput"></a>

```csharp
public bool|IResolvable EbsEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IopsInput`<sup>Optional</sup> <a name="IopsInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.property.iopsInput"></a>

```csharp
public double IopsInput { get; }
```

- *Type:* double

---

##### `ThroughputInput`<sup>Optional</sup> <a name="ThroughputInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.property.throughputInput"></a>

```csharp
public double ThroughputInput { get; }
```

- *Type:* double

---

##### `VolumeSizeInput`<sup>Optional</sup> <a name="VolumeSizeInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.property.volumeSizeInput"></a>

```csharp
public double VolumeSizeInput { get; }
```

- *Type:* double

---

##### `VolumeTypeInput`<sup>Optional</sup> <a name="VolumeTypeInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.property.volumeTypeInput"></a>

```csharp
public string VolumeTypeInput { get; }
```

- *Type:* string

---

##### `EbsEnabled`<sup>Required</sup> <a name="EbsEnabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.property.ebsEnabled"></a>

```csharp
public bool|IResolvable EbsEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Iops`<sup>Required</sup> <a name="Iops" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.property.iops"></a>

```csharp
public double Iops { get; }
```

- *Type:* double

---

##### `Throughput`<sup>Required</sup> <a name="Throughput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.property.throughput"></a>

```csharp
public double Throughput { get; }
```

- *Type:* double

---

##### `VolumeSize`<sup>Required</sup> <a name="VolumeSize" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.property.volumeSize"></a>

```csharp
public double VolumeSize { get; }
```

- *Type:* double

---

##### `VolumeType`<sup>Required</sup> <a name="VolumeType" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.property.volumeType"></a>

```csharp
public string VolumeType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|OpensearchserviceDomainEbsOptions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptions">OpensearchserviceDomainEbsOptions</a>

---


### OpensearchserviceDomainEncryptionAtRestOptionsOutputReference <a name="OpensearchserviceDomainEncryptionAtRestOptionsOutputReference" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OpensearchserviceDomainEncryptionAtRestOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.resetKmsKeyId"></a>

```csharp
private void ResetKmsKeyId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptions">OpensearchserviceDomainEncryptionAtRestOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.property.kmsKeyIdInput"></a>

```csharp
public string KmsKeyIdInput { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|OpensearchserviceDomainEncryptionAtRestOptions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptions">OpensearchserviceDomainEncryptionAtRestOptions</a>

---


### OpensearchserviceDomainIdentityCenterOptionsOutputReference <a name="OpensearchserviceDomainIdentityCenterOptionsOutputReference" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OpensearchserviceDomainIdentityCenterOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.resetEnabledApiAccess">ResetEnabledApiAccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.resetIdentityCenterInstanceArn">ResetIdentityCenterInstanceArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.resetRolesKey">ResetRolesKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.resetSubjectKey">ResetSubjectKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabledApiAccess` <a name="ResetEnabledApiAccess" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.resetEnabledApiAccess"></a>

```csharp
private void ResetEnabledApiAccess()
```

##### `ResetIdentityCenterInstanceArn` <a name="ResetIdentityCenterInstanceArn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.resetIdentityCenterInstanceArn"></a>

```csharp
private void ResetIdentityCenterInstanceArn()
```

##### `ResetRolesKey` <a name="ResetRolesKey" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.resetRolesKey"></a>

```csharp
private void ResetRolesKey()
```

##### `ResetSubjectKey` <a name="ResetSubjectKey" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.resetSubjectKey"></a>

```csharp
private void ResetSubjectKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.property.identityCenterApplicationArn">IdentityCenterApplicationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.property.identityStoreId">IdentityStoreId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.property.enabledApiAccessInput">EnabledApiAccessInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.property.identityCenterInstanceArnInput">IdentityCenterInstanceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.property.rolesKeyInput">RolesKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.property.subjectKeyInput">SubjectKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.property.enabledApiAccess">EnabledApiAccess</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.property.identityCenterInstanceArn">IdentityCenterInstanceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.property.rolesKey">RolesKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.property.subjectKey">SubjectKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptions">OpensearchserviceDomainIdentityCenterOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdentityCenterApplicationArn`<sup>Required</sup> <a name="IdentityCenterApplicationArn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.property.identityCenterApplicationArn"></a>

```csharp
public string IdentityCenterApplicationArn { get; }
```

- *Type:* string

---

##### `IdentityStoreId`<sup>Required</sup> <a name="IdentityStoreId" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.property.identityStoreId"></a>

```csharp
public string IdentityStoreId { get; }
```

- *Type:* string

---

##### `EnabledApiAccessInput`<sup>Optional</sup> <a name="EnabledApiAccessInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.property.enabledApiAccessInput"></a>

```csharp
public bool|IResolvable EnabledApiAccessInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IdentityCenterInstanceArnInput`<sup>Optional</sup> <a name="IdentityCenterInstanceArnInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.property.identityCenterInstanceArnInput"></a>

```csharp
public string IdentityCenterInstanceArnInput { get; }
```

- *Type:* string

---

##### `RolesKeyInput`<sup>Optional</sup> <a name="RolesKeyInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.property.rolesKeyInput"></a>

```csharp
public string RolesKeyInput { get; }
```

- *Type:* string

---

##### `SubjectKeyInput`<sup>Optional</sup> <a name="SubjectKeyInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.property.subjectKeyInput"></a>

```csharp
public string SubjectKeyInput { get; }
```

- *Type:* string

---

##### `EnabledApiAccess`<sup>Required</sup> <a name="EnabledApiAccess" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.property.enabledApiAccess"></a>

```csharp
public bool|IResolvable EnabledApiAccess { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IdentityCenterInstanceArn`<sup>Required</sup> <a name="IdentityCenterInstanceArn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.property.identityCenterInstanceArn"></a>

```csharp
public string IdentityCenterInstanceArn { get; }
```

- *Type:* string

---

##### `RolesKey`<sup>Required</sup> <a name="RolesKey" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.property.rolesKey"></a>

```csharp
public string RolesKey { get; }
```

- *Type:* string

---

##### `SubjectKey`<sup>Required</sup> <a name="SubjectKey" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.property.subjectKey"></a>

```csharp
public string SubjectKey { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|OpensearchserviceDomainIdentityCenterOptions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptions">OpensearchserviceDomainIdentityCenterOptions</a>

---


### OpensearchserviceDomainLogPublishingOptionsMap <a name="OpensearchserviceDomainLogPublishingOptionsMap" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsMap.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OpensearchserviceDomainLogPublishingOptionsMap(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsMap.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsMap.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsMap.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsMap.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsMap.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsMap.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsMap.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsMap.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsMap.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsMap.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsMap.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsMap.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsMap.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsMap.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsMap.get"></a>

```csharp
private OpensearchserviceDomainLogPublishingOptionsOutputReference Get(string Key)
```

###### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsMap.get.parameter.key"></a>

- *Type:* string

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsMap.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsMap.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsMap.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|System.Collections.Generic.IDictionary<string, <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptions">OpensearchserviceDomainLogPublishingOptions</a>></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsMap.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsMap.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsMap.property.internalValue"></a>

```csharp
public IResolvable|System.Collections.Generic.IDictionary<string, OpensearchserviceDomainLogPublishingOptions> InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|System.Collections.Generic.IDictionary<string, <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptions">OpensearchserviceDomainLogPublishingOptions</a>>

---


### OpensearchserviceDomainLogPublishingOptionsOutputReference <a name="OpensearchserviceDomainLogPublishingOptionsOutputReference" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OpensearchserviceDomainLogPublishingOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, string ComplexObjectKey);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.Initializer.parameter.complexObjectKey">ComplexObjectKey</a></code> | <code>string</code> | the key of this item in the map. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectKey`<sup>Required</sup> <a name="ComplexObjectKey" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* string

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.resetCloudwatchLogsLogGroupArn">ResetCloudwatchLogsLogGroupArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCloudwatchLogsLogGroupArn` <a name="ResetCloudwatchLogsLogGroupArn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.resetCloudwatchLogsLogGroupArn"></a>

```csharp
private void ResetCloudwatchLogsLogGroupArn()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.property.cloudwatchLogsLogGroupArnInput">CloudwatchLogsLogGroupArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.property.cloudwatchLogsLogGroupArn">CloudwatchLogsLogGroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptions">OpensearchserviceDomainLogPublishingOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CloudwatchLogsLogGroupArnInput`<sup>Optional</sup> <a name="CloudwatchLogsLogGroupArnInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.property.cloudwatchLogsLogGroupArnInput"></a>

```csharp
public string CloudwatchLogsLogGroupArnInput { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `CloudwatchLogsLogGroupArn`<sup>Required</sup> <a name="CloudwatchLogsLogGroupArn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.property.cloudwatchLogsLogGroupArn"></a>

```csharp
public string CloudwatchLogsLogGroupArn { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|OpensearchserviceDomainLogPublishingOptions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptions">OpensearchserviceDomainLogPublishingOptions</a>

---


### OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference <a name="OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptions">OpensearchserviceDomainNodeToNodeEncryptionOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|OpensearchserviceDomainNodeToNodeEncryptionOptions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptions">OpensearchserviceDomainNodeToNodeEncryptionOptions</a>

---


### OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference <a name="OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.putWindowStartTime">PutWindowStartTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.resetWindowStartTime">ResetWindowStartTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutWindowStartTime` <a name="PutWindowStartTime" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.putWindowStartTime"></a>

```csharp
private void PutWindowStartTime(OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.putWindowStartTime.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime">OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime</a>

---

##### `ResetWindowStartTime` <a name="ResetWindowStartTime" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.resetWindowStartTime"></a>

```csharp
private void ResetWindowStartTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.property.windowStartTime">WindowStartTime</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference">OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.property.windowStartTimeInput">WindowStartTimeInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime">OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindow">OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindow</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `WindowStartTime`<sup>Required</sup> <a name="WindowStartTime" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.property.windowStartTime"></a>

```csharp
public OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference WindowStartTime { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference">OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference</a>

---

##### `WindowStartTimeInput`<sup>Optional</sup> <a name="WindowStartTimeInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.property.windowStartTimeInput"></a>

```csharp
public IResolvable|OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime WindowStartTimeInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime">OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.property.internalValue"></a>

```csharp
public IResolvable|OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindow InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindow">OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindow</a>

---


### OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference <a name="OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.resetHours">ResetHours</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.resetMinutes">ResetMinutes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHours` <a name="ResetHours" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.resetHours"></a>

```csharp
private void ResetHours()
```

##### `ResetMinutes` <a name="ResetMinutes" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.resetMinutes"></a>

```csharp
private void ResetMinutes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.property.hoursInput">HoursInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.property.minutesInput">MinutesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.property.hours">Hours</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.property.minutes">Minutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime">OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HoursInput`<sup>Optional</sup> <a name="HoursInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.property.hoursInput"></a>

```csharp
public double HoursInput { get; }
```

- *Type:* double

---

##### `MinutesInput`<sup>Optional</sup> <a name="MinutesInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.property.minutesInput"></a>

```csharp
public double MinutesInput { get; }
```

- *Type:* double

---

##### `Hours`<sup>Required</sup> <a name="Hours" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.property.hours"></a>

```csharp
public double Hours { get; }
```

- *Type:* double

---

##### `Minutes`<sup>Required</sup> <a name="Minutes" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.property.minutes"></a>

```csharp
public double Minutes { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.property.internalValue"></a>

```csharp
public IResolvable|OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime">OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime</a>

---


### OpensearchserviceDomainOffPeakWindowOptionsOutputReference <a name="OpensearchserviceDomainOffPeakWindowOptionsOutputReference" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OpensearchserviceDomainOffPeakWindowOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.putOffPeakWindow">PutOffPeakWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.resetOffPeakWindow">ResetOffPeakWindow</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutOffPeakWindow` <a name="PutOffPeakWindow" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.putOffPeakWindow"></a>

```csharp
private void PutOffPeakWindow(OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindow Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.putOffPeakWindow.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindow">OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindow</a>

---

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetOffPeakWindow` <a name="ResetOffPeakWindow" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.resetOffPeakWindow"></a>

```csharp
private void ResetOffPeakWindow()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.property.offPeakWindow">OffPeakWindow</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference">OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.property.offPeakWindowInput">OffPeakWindowInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindow">OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptions">OpensearchserviceDomainOffPeakWindowOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OffPeakWindow`<sup>Required</sup> <a name="OffPeakWindow" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.property.offPeakWindow"></a>

```csharp
public OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference OffPeakWindow { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference">OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference</a>

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `OffPeakWindowInput`<sup>Optional</sup> <a name="OffPeakWindowInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.property.offPeakWindowInput"></a>

```csharp
public IResolvable|OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindow OffPeakWindowInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindow">OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindow</a>

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|OpensearchserviceDomainOffPeakWindowOptions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptions">OpensearchserviceDomainOffPeakWindowOptions</a>

---


### OpensearchserviceDomainServiceSoftwareOptionsOutputReference <a name="OpensearchserviceDomainServiceSoftwareOptionsOutputReference" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OpensearchserviceDomainServiceSoftwareOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.property.automatedUpdateDate">AutomatedUpdateDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.property.cancellable">Cancellable</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.property.currentVersion">CurrentVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.property.newVersion">NewVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.property.optionalDeployment">OptionalDeployment</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.property.updateAvailable">UpdateAvailable</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.property.updateStatus">UpdateStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptions">OpensearchserviceDomainServiceSoftwareOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AutomatedUpdateDate`<sup>Required</sup> <a name="AutomatedUpdateDate" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.property.automatedUpdateDate"></a>

```csharp
public string AutomatedUpdateDate { get; }
```

- *Type:* string

---

##### `Cancellable`<sup>Required</sup> <a name="Cancellable" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.property.cancellable"></a>

```csharp
public IResolvable Cancellable { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `CurrentVersion`<sup>Required</sup> <a name="CurrentVersion" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.property.currentVersion"></a>

```csharp
public string CurrentVersion { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `NewVersion`<sup>Required</sup> <a name="NewVersion" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.property.newVersion"></a>

```csharp
public string NewVersion { get; }
```

- *Type:* string

---

##### `OptionalDeployment`<sup>Required</sup> <a name="OptionalDeployment" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.property.optionalDeployment"></a>

```csharp
public IResolvable OptionalDeployment { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `UpdateAvailable`<sup>Required</sup> <a name="UpdateAvailable" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.property.updateAvailable"></a>

```csharp
public IResolvable UpdateAvailable { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `UpdateStatus`<sup>Required</sup> <a name="UpdateStatus" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.property.updateStatus"></a>

```csharp
public string UpdateStatus { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.property.internalValue"></a>

```csharp
public OpensearchserviceDomainServiceSoftwareOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptions">OpensearchserviceDomainServiceSoftwareOptions</a>

---


### OpensearchserviceDomainSnapshotOptionsOutputReference <a name="OpensearchserviceDomainSnapshotOptionsOutputReference" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OpensearchserviceDomainSnapshotOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.resetAutomatedSnapshotStartHour">ResetAutomatedSnapshotStartHour</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAutomatedSnapshotStartHour` <a name="ResetAutomatedSnapshotStartHour" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.resetAutomatedSnapshotStartHour"></a>

```csharp
private void ResetAutomatedSnapshotStartHour()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.property.automatedSnapshotStartHourInput">AutomatedSnapshotStartHourInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.property.automatedSnapshotStartHour">AutomatedSnapshotStartHour</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptions">OpensearchserviceDomainSnapshotOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AutomatedSnapshotStartHourInput`<sup>Optional</sup> <a name="AutomatedSnapshotStartHourInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.property.automatedSnapshotStartHourInput"></a>

```csharp
public double AutomatedSnapshotStartHourInput { get; }
```

- *Type:* double

---

##### `AutomatedSnapshotStartHour`<sup>Required</sup> <a name="AutomatedSnapshotStartHour" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.property.automatedSnapshotStartHour"></a>

```csharp
public double AutomatedSnapshotStartHour { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|OpensearchserviceDomainSnapshotOptions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptions">OpensearchserviceDomainSnapshotOptions</a>

---


### OpensearchserviceDomainSoftwareUpdateOptionsOutputReference <a name="OpensearchserviceDomainSoftwareUpdateOptionsOutputReference" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OpensearchserviceDomainSoftwareUpdateOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.resetAutoSoftwareUpdateEnabled">ResetAutoSoftwareUpdateEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAutoSoftwareUpdateEnabled` <a name="ResetAutoSoftwareUpdateEnabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.resetAutoSoftwareUpdateEnabled"></a>

```csharp
private void ResetAutoSoftwareUpdateEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.property.autoSoftwareUpdateEnabledInput">AutoSoftwareUpdateEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.property.autoSoftwareUpdateEnabled">AutoSoftwareUpdateEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptions">OpensearchserviceDomainSoftwareUpdateOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AutoSoftwareUpdateEnabledInput`<sup>Optional</sup> <a name="AutoSoftwareUpdateEnabledInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.property.autoSoftwareUpdateEnabledInput"></a>

```csharp
public bool|IResolvable AutoSoftwareUpdateEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AutoSoftwareUpdateEnabled`<sup>Required</sup> <a name="AutoSoftwareUpdateEnabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.property.autoSoftwareUpdateEnabled"></a>

```csharp
public bool|IResolvable AutoSoftwareUpdateEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|OpensearchserviceDomainSoftwareUpdateOptions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptions">OpensearchserviceDomainSoftwareUpdateOptions</a>

---


### OpensearchserviceDomainTagsList <a name="OpensearchserviceDomainTagsList" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OpensearchserviceDomainTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsList.get"></a>

```csharp
private OpensearchserviceDomainTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTags">OpensearchserviceDomainTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsList.property.internalValue"></a>

```csharp
public IResolvable|OpensearchserviceDomainTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTags">OpensearchserviceDomainTags</a>[]

---


### OpensearchserviceDomainTagsOutputReference <a name="OpensearchserviceDomainTagsOutputReference" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OpensearchserviceDomainTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTags">OpensearchserviceDomainTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|OpensearchserviceDomainTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTags">OpensearchserviceDomainTags</a>

---


### OpensearchserviceDomainVpcOptionsOutputReference <a name="OpensearchserviceDomainVpcOptionsOutputReference" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OpensearchserviceDomainVpcOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.resetEgressEnabled">ResetEgressEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.resetSecurityGroupIds">ResetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.resetSubnetIds">ResetSubnetIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEgressEnabled` <a name="ResetEgressEnabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.resetEgressEnabled"></a>

```csharp
private void ResetEgressEnabled()
```

##### `ResetSecurityGroupIds` <a name="ResetSecurityGroupIds" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.resetSecurityGroupIds"></a>

```csharp
private void ResetSecurityGroupIds()
```

##### `ResetSubnetIds` <a name="ResetSubnetIds" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.resetSubnetIds"></a>

```csharp
private void ResetSubnetIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.property.egressEnabledInput">EgressEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.property.securityGroupIdsInput">SecurityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.property.subnetIdsInput">SubnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.property.egressEnabled">EgressEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptions">OpensearchserviceDomainVpcOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EgressEnabledInput`<sup>Optional</sup> <a name="EgressEnabledInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.property.egressEnabledInput"></a>

```csharp
public bool|IResolvable EgressEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SecurityGroupIdsInput`<sup>Optional</sup> <a name="SecurityGroupIdsInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.property.securityGroupIdsInput"></a>

```csharp
public string[] SecurityGroupIdsInput { get; }
```

- *Type:* string[]

---

##### `SubnetIdsInput`<sup>Optional</sup> <a name="SubnetIdsInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.property.subnetIdsInput"></a>

```csharp
public string[] SubnetIdsInput { get; }
```

- *Type:* string[]

---

##### `EgressEnabled`<sup>Required</sup> <a name="EgressEnabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.property.egressEnabled"></a>

```csharp
public bool|IResolvable EgressEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; }
```

- *Type:* string[]

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|OpensearchserviceDomainVpcOptions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptions">OpensearchserviceDomainVpcOptions</a>

---



