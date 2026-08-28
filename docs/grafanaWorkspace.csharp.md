# `grafanaWorkspace` Submodule <a name="`grafanaWorkspace` Submodule" id="@cdktn/provider-awscc.grafanaWorkspace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GrafanaWorkspace <a name="GrafanaWorkspace" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/grafana_workspace awscc_grafana_workspace}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GrafanaWorkspace(Construct Scope, string Id, GrafanaWorkspaceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceConfig">GrafanaWorkspaceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceConfig">GrafanaWorkspaceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.putNetworkAccessControl">PutNetworkAccessControl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.putSamlConfiguration">PutSamlConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.putVpcConfiguration">PutVpcConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.resetClientToken">ResetClientToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.resetDataSources">ResetDataSources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.resetGrafanaVersion">ResetGrafanaVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.resetNetworkAccessControl">ResetNetworkAccessControl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.resetNotificationDestinations">ResetNotificationDestinations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.resetOrganizationalUnits">ResetOrganizationalUnits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.resetOrganizationRoleName">ResetOrganizationRoleName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.resetPluginAdminEnabled">ResetPluginAdminEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.resetRoleArn">ResetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.resetSamlConfiguration">ResetSamlConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.resetStackSetName">ResetStackSetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.resetVpcConfiguration">ResetVpcConfiguration</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutNetworkAccessControl` <a name="PutNetworkAccessControl" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.putNetworkAccessControl"></a>

```csharp
private void PutNetworkAccessControl(GrafanaWorkspaceNetworkAccessControl Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.putNetworkAccessControl.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControl">GrafanaWorkspaceNetworkAccessControl</a>

---

##### `PutSamlConfiguration` <a name="PutSamlConfiguration" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.putSamlConfiguration"></a>

```csharp
private void PutSamlConfiguration(GrafanaWorkspaceSamlConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.putSamlConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfiguration">GrafanaWorkspaceSamlConfiguration</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.putTags"></a>

```csharp
private void PutTags(IResolvable|GrafanaWorkspaceTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTags">GrafanaWorkspaceTags</a>[]

---

##### `PutVpcConfiguration` <a name="PutVpcConfiguration" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.putVpcConfiguration"></a>

```csharp
private void PutVpcConfiguration(GrafanaWorkspaceVpcConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.putVpcConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfiguration">GrafanaWorkspaceVpcConfiguration</a>

---

##### `ResetClientToken` <a name="ResetClientToken" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.resetClientToken"></a>

```csharp
private void ResetClientToken()
```

##### `ResetDataSources` <a name="ResetDataSources" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.resetDataSources"></a>

```csharp
private void ResetDataSources()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetGrafanaVersion` <a name="ResetGrafanaVersion" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.resetGrafanaVersion"></a>

```csharp
private void ResetGrafanaVersion()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetNetworkAccessControl` <a name="ResetNetworkAccessControl" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.resetNetworkAccessControl"></a>

```csharp
private void ResetNetworkAccessControl()
```

##### `ResetNotificationDestinations` <a name="ResetNotificationDestinations" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.resetNotificationDestinations"></a>

```csharp
private void ResetNotificationDestinations()
```

##### `ResetOrganizationalUnits` <a name="ResetOrganizationalUnits" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.resetOrganizationalUnits"></a>

```csharp
private void ResetOrganizationalUnits()
```

##### `ResetOrganizationRoleName` <a name="ResetOrganizationRoleName" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.resetOrganizationRoleName"></a>

```csharp
private void ResetOrganizationRoleName()
```

##### `ResetPluginAdminEnabled` <a name="ResetPluginAdminEnabled" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.resetPluginAdminEnabled"></a>

```csharp
private void ResetPluginAdminEnabled()
```

##### `ResetRoleArn` <a name="ResetRoleArn" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.resetRoleArn"></a>

```csharp
private void ResetRoleArn()
```

##### `ResetSamlConfiguration` <a name="ResetSamlConfiguration" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.resetSamlConfiguration"></a>

```csharp
private void ResetSamlConfiguration()
```

##### `ResetStackSetName` <a name="ResetStackSetName" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.resetStackSetName"></a>

```csharp
private void ResetStackSetName()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetVpcConfiguration` <a name="ResetVpcConfiguration" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.resetVpcConfiguration"></a>

```csharp
private void ResetVpcConfiguration()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GrafanaWorkspace resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

GrafanaWorkspace.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

GrafanaWorkspace.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

GrafanaWorkspace.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

GrafanaWorkspace.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GrafanaWorkspace resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GrafanaWorkspace to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GrafanaWorkspace that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/grafana_workspace#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GrafanaWorkspace to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.creationTimestamp">CreationTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.endpoint">Endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.modificationTimestamp">ModificationTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.networkAccessControl">NetworkAccessControl</a></code> | <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference">GrafanaWorkspaceNetworkAccessControlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.samlConfiguration">SamlConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference">GrafanaWorkspaceSamlConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.samlConfigurationStatus">SamlConfigurationStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.ssoClientId">SsoClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsList">GrafanaWorkspaceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.vpcConfiguration">VpcConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference">GrafanaWorkspaceVpcConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.accountAccessTypeInput">AccountAccessTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.authenticationProvidersInput">AuthenticationProvidersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.clientTokenInput">ClientTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.dataSourcesInput">DataSourcesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.grafanaVersionInput">GrafanaVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.networkAccessControlInput">NetworkAccessControlInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControl">GrafanaWorkspaceNetworkAccessControl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.notificationDestinationsInput">NotificationDestinationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.organizationalUnitsInput">OrganizationalUnitsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.organizationRoleNameInput">OrganizationRoleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.permissionTypeInput">PermissionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.pluginAdminEnabledInput">PluginAdminEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.roleArnInput">RoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.samlConfigurationInput">SamlConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfiguration">GrafanaWorkspaceSamlConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.stackSetNameInput">StackSetNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTags">GrafanaWorkspaceTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.vpcConfigurationInput">VpcConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfiguration">GrafanaWorkspaceVpcConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.accountAccessType">AccountAccessType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.authenticationProviders">AuthenticationProviders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.clientToken">ClientToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.dataSources">DataSources</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.grafanaVersion">GrafanaVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.notificationDestinations">NotificationDestinations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.organizationalUnits">OrganizationalUnits</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.organizationRoleName">OrganizationRoleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.permissionType">PermissionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.pluginAdminEnabled">PluginAdminEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.stackSetName">StackSetName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreationTimestamp`<sup>Required</sup> <a name="CreationTimestamp" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.creationTimestamp"></a>

```csharp
public string CreationTimestamp { get; }
```

- *Type:* string

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.endpoint"></a>

```csharp
public string Endpoint { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ModificationTimestamp`<sup>Required</sup> <a name="ModificationTimestamp" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.modificationTimestamp"></a>

```csharp
public string ModificationTimestamp { get; }
```

- *Type:* string

---

##### `NetworkAccessControl`<sup>Required</sup> <a name="NetworkAccessControl" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.networkAccessControl"></a>

```csharp
public GrafanaWorkspaceNetworkAccessControlOutputReference NetworkAccessControl { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference">GrafanaWorkspaceNetworkAccessControlOutputReference</a>

---

##### `SamlConfiguration`<sup>Required</sup> <a name="SamlConfiguration" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.samlConfiguration"></a>

```csharp
public GrafanaWorkspaceSamlConfigurationOutputReference SamlConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference">GrafanaWorkspaceSamlConfigurationOutputReference</a>

---

##### `SamlConfigurationStatus`<sup>Required</sup> <a name="SamlConfigurationStatus" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.samlConfigurationStatus"></a>

```csharp
public string SamlConfigurationStatus { get; }
```

- *Type:* string

---

##### `SsoClientId`<sup>Required</sup> <a name="SsoClientId" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.ssoClientId"></a>

```csharp
public string SsoClientId { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.tags"></a>

```csharp
public GrafanaWorkspaceTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsList">GrafanaWorkspaceTagsList</a>

---

##### `VpcConfiguration`<sup>Required</sup> <a name="VpcConfiguration" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.vpcConfiguration"></a>

```csharp
public GrafanaWorkspaceVpcConfigurationOutputReference VpcConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference">GrafanaWorkspaceVpcConfigurationOutputReference</a>

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; }
```

- *Type:* string

---

##### `AccountAccessTypeInput`<sup>Optional</sup> <a name="AccountAccessTypeInput" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.accountAccessTypeInput"></a>

```csharp
public string AccountAccessTypeInput { get; }
```

- *Type:* string

---

##### `AuthenticationProvidersInput`<sup>Optional</sup> <a name="AuthenticationProvidersInput" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.authenticationProvidersInput"></a>

```csharp
public string[] AuthenticationProvidersInput { get; }
```

- *Type:* string[]

---

##### `ClientTokenInput`<sup>Optional</sup> <a name="ClientTokenInput" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.clientTokenInput"></a>

```csharp
public string ClientTokenInput { get; }
```

- *Type:* string

---

##### `DataSourcesInput`<sup>Optional</sup> <a name="DataSourcesInput" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.dataSourcesInput"></a>

```csharp
public string[] DataSourcesInput { get; }
```

- *Type:* string[]

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `GrafanaVersionInput`<sup>Optional</sup> <a name="GrafanaVersionInput" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.grafanaVersionInput"></a>

```csharp
public string GrafanaVersionInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NetworkAccessControlInput`<sup>Optional</sup> <a name="NetworkAccessControlInput" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.networkAccessControlInput"></a>

```csharp
public IResolvable|GrafanaWorkspaceNetworkAccessControl NetworkAccessControlInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControl">GrafanaWorkspaceNetworkAccessControl</a>

---

##### `NotificationDestinationsInput`<sup>Optional</sup> <a name="NotificationDestinationsInput" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.notificationDestinationsInput"></a>

```csharp
public string[] NotificationDestinationsInput { get; }
```

- *Type:* string[]

---

##### `OrganizationalUnitsInput`<sup>Optional</sup> <a name="OrganizationalUnitsInput" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.organizationalUnitsInput"></a>

```csharp
public string[] OrganizationalUnitsInput { get; }
```

- *Type:* string[]

---

##### `OrganizationRoleNameInput`<sup>Optional</sup> <a name="OrganizationRoleNameInput" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.organizationRoleNameInput"></a>

```csharp
public string OrganizationRoleNameInput { get; }
```

- *Type:* string

---

##### `PermissionTypeInput`<sup>Optional</sup> <a name="PermissionTypeInput" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.permissionTypeInput"></a>

```csharp
public string PermissionTypeInput { get; }
```

- *Type:* string

---

##### `PluginAdminEnabledInput`<sup>Optional</sup> <a name="PluginAdminEnabledInput" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.pluginAdminEnabledInput"></a>

```csharp
public bool|IResolvable PluginAdminEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.roleArnInput"></a>

```csharp
public string RoleArnInput { get; }
```

- *Type:* string

---

##### `SamlConfigurationInput`<sup>Optional</sup> <a name="SamlConfigurationInput" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.samlConfigurationInput"></a>

```csharp
public IResolvable|GrafanaWorkspaceSamlConfiguration SamlConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfiguration">GrafanaWorkspaceSamlConfiguration</a>

---

##### `StackSetNameInput`<sup>Optional</sup> <a name="StackSetNameInput" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.stackSetNameInput"></a>

```csharp
public string StackSetNameInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.tagsInput"></a>

```csharp
public IResolvable|GrafanaWorkspaceTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTags">GrafanaWorkspaceTags</a>[]

---

##### `VpcConfigurationInput`<sup>Optional</sup> <a name="VpcConfigurationInput" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.vpcConfigurationInput"></a>

```csharp
public IResolvable|GrafanaWorkspaceVpcConfiguration VpcConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfiguration">GrafanaWorkspaceVpcConfiguration</a>

---

##### `AccountAccessType`<sup>Required</sup> <a name="AccountAccessType" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.accountAccessType"></a>

```csharp
public string AccountAccessType { get; }
```

- *Type:* string

---

##### `AuthenticationProviders`<sup>Required</sup> <a name="AuthenticationProviders" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.authenticationProviders"></a>

```csharp
public string[] AuthenticationProviders { get; }
```

- *Type:* string[]

---

##### `ClientToken`<sup>Required</sup> <a name="ClientToken" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.clientToken"></a>

```csharp
public string ClientToken { get; }
```

- *Type:* string

---

##### `DataSources`<sup>Required</sup> <a name="DataSources" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.dataSources"></a>

```csharp
public string[] DataSources { get; }
```

- *Type:* string[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `GrafanaVersion`<sup>Required</sup> <a name="GrafanaVersion" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.grafanaVersion"></a>

```csharp
public string GrafanaVersion { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NotificationDestinations`<sup>Required</sup> <a name="NotificationDestinations" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.notificationDestinations"></a>

```csharp
public string[] NotificationDestinations { get; }
```

- *Type:* string[]

---

##### `OrganizationalUnits`<sup>Required</sup> <a name="OrganizationalUnits" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.organizationalUnits"></a>

```csharp
public string[] OrganizationalUnits { get; }
```

- *Type:* string[]

---

##### `OrganizationRoleName`<sup>Required</sup> <a name="OrganizationRoleName" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.organizationRoleName"></a>

```csharp
public string OrganizationRoleName { get; }
```

- *Type:* string

---

##### `PermissionType`<sup>Required</sup> <a name="PermissionType" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.permissionType"></a>

```csharp
public string PermissionType { get; }
```

- *Type:* string

---

##### `PluginAdminEnabled`<sup>Required</sup> <a name="PluginAdminEnabled" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.pluginAdminEnabled"></a>

```csharp
public bool|IResolvable PluginAdminEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `StackSetName`<sup>Required</sup> <a name="StackSetName" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.stackSetName"></a>

```csharp
public string StackSetName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GrafanaWorkspaceConfig <a name="GrafanaWorkspaceConfig" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GrafanaWorkspaceConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AccountAccessType,
    string[] AuthenticationProviders,
    string PermissionType,
    string ClientToken = null,
    string[] DataSources = null,
    string Description = null,
    string GrafanaVersion = null,
    string Name = null,
    GrafanaWorkspaceNetworkAccessControl NetworkAccessControl = null,
    string[] NotificationDestinations = null,
    string[] OrganizationalUnits = null,
    string OrganizationRoleName = null,
    bool|IResolvable PluginAdminEnabled = null,
    string RoleArn = null,
    GrafanaWorkspaceSamlConfiguration SamlConfiguration = null,
    string StackSetName = null,
    IResolvable|GrafanaWorkspaceTags[] Tags = null,
    GrafanaWorkspaceVpcConfiguration VpcConfiguration = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceConfig.property.accountAccessType">AccountAccessType</a></code> | <code>string</code> | These enums represent valid account access types. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceConfig.property.authenticationProviders">AuthenticationProviders</a></code> | <code>string[]</code> | List of authentication providers to enable. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceConfig.property.permissionType">PermissionType</a></code> | <code>string</code> | These enums represent valid permission types to use when creating or configuring a Grafana workspace. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceConfig.property.clientToken">ClientToken</a></code> | <code>string</code> | A unique, case-sensitive, user-provided identifier to ensure the idempotency of the request. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceConfig.property.dataSources">DataSources</a></code> | <code>string[]</code> | List of data sources on the service managed IAM role. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceConfig.property.description">Description</a></code> | <code>string</code> | Description of a workspace. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceConfig.property.grafanaVersion">GrafanaVersion</a></code> | <code>string</code> | The version of Grafana to support in your workspace. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceConfig.property.name">Name</a></code> | <code>string</code> | The user friendly name of a workspace. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceConfig.property.networkAccessControl">NetworkAccessControl</a></code> | <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControl">GrafanaWorkspaceNetworkAccessControl</a></code> | The configuration settings for Network Access Control. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceConfig.property.notificationDestinations">NotificationDestinations</a></code> | <code>string[]</code> | List of notification destinations on the customers service managed IAM role that the Grafana workspace can query. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceConfig.property.organizationalUnits">OrganizationalUnits</a></code> | <code>string[]</code> | List of Organizational Units containing AWS accounts the Grafana workspace can pull data from. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceConfig.property.organizationRoleName">OrganizationRoleName</a></code> | <code>string</code> | The name of an IAM role that already exists to use with AWS Organizations to access AWS data sources and notification channels in other accounts in an organization. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceConfig.property.pluginAdminEnabled">PluginAdminEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Allow workspace admins to install plugins. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceConfig.property.roleArn">RoleArn</a></code> | <code>string</code> | IAM Role that will be used to grant the Grafana workspace access to a customers AWS resources. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceConfig.property.samlConfiguration">SamlConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfiguration">GrafanaWorkspaceSamlConfiguration</a></code> | SAML configuration data associated with an AMG workspace. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceConfig.property.stackSetName">StackSetName</a></code> | <code>string</code> | The name of the AWS CloudFormation stack set to use to generate IAM roles to be used for this workspace. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTags">GrafanaWorkspaceTags</a>[]</code> | The list of tags associated with the workspace. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceConfig.property.vpcConfiguration">VpcConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfiguration">GrafanaWorkspaceVpcConfiguration</a></code> | The configuration settings for an Amazon VPC that contains data sources for your Grafana workspace to connect to. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AccountAccessType`<sup>Required</sup> <a name="AccountAccessType" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceConfig.property.accountAccessType"></a>

```csharp
public string AccountAccessType { get; set; }
```

- *Type:* string

These enums represent valid account access types.

Specifically these enums determine whether the workspace can access AWS resources in the AWS account only, or whether it can also access resources in other accounts in the same organization. If the value CURRENT_ACCOUNT is used, a workspace role ARN must be provided. If the value is ORGANIZATION, a list of organizational units must be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/grafana_workspace#account_access_type GrafanaWorkspace#account_access_type}

---

##### `AuthenticationProviders`<sup>Required</sup> <a name="AuthenticationProviders" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceConfig.property.authenticationProviders"></a>

```csharp
public string[] AuthenticationProviders { get; set; }
```

- *Type:* string[]

List of authentication providers to enable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/grafana_workspace#authentication_providers GrafanaWorkspace#authentication_providers}

---

##### `PermissionType`<sup>Required</sup> <a name="PermissionType" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceConfig.property.permissionType"></a>

```csharp
public string PermissionType { get; set; }
```

- *Type:* string

These enums represent valid permission types to use when creating or configuring a Grafana workspace.

The SERVICE_MANAGED permission type means the Managed Grafana service will create a workspace IAM role on your behalf. The CUSTOMER_MANAGED permission type means that the customer is expected to provide an IAM role that the Grafana workspace can use to query data sources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/grafana_workspace#permission_type GrafanaWorkspace#permission_type}

---

##### `ClientToken`<sup>Optional</sup> <a name="ClientToken" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceConfig.property.clientToken"></a>

```csharp
public string ClientToken { get; set; }
```

- *Type:* string

A unique, case-sensitive, user-provided identifier to ensure the idempotency of the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/grafana_workspace#client_token GrafanaWorkspace#client_token}

---

##### `DataSources`<sup>Optional</sup> <a name="DataSources" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceConfig.property.dataSources"></a>

```csharp
public string[] DataSources { get; set; }
```

- *Type:* string[]

List of data sources on the service managed IAM role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/grafana_workspace#data_sources GrafanaWorkspace#data_sources}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Description of a workspace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/grafana_workspace#description GrafanaWorkspace#description}

---

##### `GrafanaVersion`<sup>Optional</sup> <a name="GrafanaVersion" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceConfig.property.grafanaVersion"></a>

```csharp
public string GrafanaVersion { get; set; }
```

- *Type:* string

The version of Grafana to support in your workspace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/grafana_workspace#grafana_version GrafanaWorkspace#grafana_version}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The user friendly name of a workspace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/grafana_workspace#name GrafanaWorkspace#name}

---

##### `NetworkAccessControl`<sup>Optional</sup> <a name="NetworkAccessControl" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceConfig.property.networkAccessControl"></a>

```csharp
public GrafanaWorkspaceNetworkAccessControl NetworkAccessControl { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControl">GrafanaWorkspaceNetworkAccessControl</a>

The configuration settings for Network Access Control.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/grafana_workspace#network_access_control GrafanaWorkspace#network_access_control}

---

##### `NotificationDestinations`<sup>Optional</sup> <a name="NotificationDestinations" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceConfig.property.notificationDestinations"></a>

```csharp
public string[] NotificationDestinations { get; set; }
```

- *Type:* string[]

List of notification destinations on the customers service managed IAM role that the Grafana workspace can query.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/grafana_workspace#notification_destinations GrafanaWorkspace#notification_destinations}

---

##### `OrganizationalUnits`<sup>Optional</sup> <a name="OrganizationalUnits" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceConfig.property.organizationalUnits"></a>

```csharp
public string[] OrganizationalUnits { get; set; }
```

- *Type:* string[]

List of Organizational Units containing AWS accounts the Grafana workspace can pull data from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/grafana_workspace#organizational_units GrafanaWorkspace#organizational_units}

---

##### `OrganizationRoleName`<sup>Optional</sup> <a name="OrganizationRoleName" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceConfig.property.organizationRoleName"></a>

```csharp
public string OrganizationRoleName { get; set; }
```

- *Type:* string

The name of an IAM role that already exists to use with AWS Organizations to access AWS data sources and notification channels in other accounts in an organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/grafana_workspace#organization_role_name GrafanaWorkspace#organization_role_name}

---

##### `PluginAdminEnabled`<sup>Optional</sup> <a name="PluginAdminEnabled" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceConfig.property.pluginAdminEnabled"></a>

```csharp
public bool|IResolvable PluginAdminEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Allow workspace admins to install plugins.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/grafana_workspace#plugin_admin_enabled GrafanaWorkspace#plugin_admin_enabled}

---

##### `RoleArn`<sup>Optional</sup> <a name="RoleArn" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceConfig.property.roleArn"></a>

```csharp
public string RoleArn { get; set; }
```

- *Type:* string

IAM Role that will be used to grant the Grafana workspace access to a customers AWS resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/grafana_workspace#role_arn GrafanaWorkspace#role_arn}

---

##### `SamlConfiguration`<sup>Optional</sup> <a name="SamlConfiguration" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceConfig.property.samlConfiguration"></a>

```csharp
public GrafanaWorkspaceSamlConfiguration SamlConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfiguration">GrafanaWorkspaceSamlConfiguration</a>

SAML configuration data associated with an AMG workspace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/grafana_workspace#saml_configuration GrafanaWorkspace#saml_configuration}

---

##### `StackSetName`<sup>Optional</sup> <a name="StackSetName" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceConfig.property.stackSetName"></a>

```csharp
public string StackSetName { get; set; }
```

- *Type:* string

The name of the AWS CloudFormation stack set to use to generate IAM roles to be used for this workspace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/grafana_workspace#stack_set_name GrafanaWorkspace#stack_set_name}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceConfig.property.tags"></a>

```csharp
public IResolvable|GrafanaWorkspaceTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTags">GrafanaWorkspaceTags</a>[]

The list of tags associated with the workspace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/grafana_workspace#tags GrafanaWorkspace#tags}

---

##### `VpcConfiguration`<sup>Optional</sup> <a name="VpcConfiguration" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceConfig.property.vpcConfiguration"></a>

```csharp
public GrafanaWorkspaceVpcConfiguration VpcConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfiguration">GrafanaWorkspaceVpcConfiguration</a>

The configuration settings for an Amazon VPC that contains data sources for your Grafana workspace to connect to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/grafana_workspace#vpc_configuration GrafanaWorkspace#vpc_configuration}

---

### GrafanaWorkspaceNetworkAccessControl <a name="GrafanaWorkspaceNetworkAccessControl" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControl"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControl.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GrafanaWorkspaceNetworkAccessControl {
    string[] PrefixListIds = null,
    string[] VpceIds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControl.property.prefixListIds">PrefixListIds</a></code> | <code>string[]</code> | The list of prefix list IDs. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControl.property.vpceIds">VpceIds</a></code> | <code>string[]</code> | The list of Amazon VPC endpoint IDs for the workspace. |

---

##### `PrefixListIds`<sup>Optional</sup> <a name="PrefixListIds" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControl.property.prefixListIds"></a>

```csharp
public string[] PrefixListIds { get; set; }
```

- *Type:* string[]

The list of prefix list IDs.

A prefix list is a list of CIDR ranges of IP addresses. The IP addresses specified are allowed to access your workspace. If the list is not included in the configuration then no IP addresses will be allowed to access the workspace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/grafana_workspace#prefix_list_ids GrafanaWorkspace#prefix_list_ids}

---

##### `VpceIds`<sup>Optional</sup> <a name="VpceIds" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControl.property.vpceIds"></a>

```csharp
public string[] VpceIds { get; set; }
```

- *Type:* string[]

The list of Amazon VPC endpoint IDs for the workspace.

If a NetworkAccessConfiguration is specified then only VPC endpoints specified here will be allowed to access the workspace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/grafana_workspace#vpce_ids GrafanaWorkspace#vpce_ids}

---

### GrafanaWorkspaceSamlConfiguration <a name="GrafanaWorkspaceSamlConfiguration" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GrafanaWorkspaceSamlConfiguration {
    string[] AllowedOrganizations = null,
    GrafanaWorkspaceSamlConfigurationAssertionAttributes AssertionAttributes = null,
    GrafanaWorkspaceSamlConfigurationIdpMetadata IdpMetadata = null,
    double LoginValidityDuration = null,
    GrafanaWorkspaceSamlConfigurationRoleValues RoleValues = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfiguration.property.allowedOrganizations">AllowedOrganizations</a></code> | <code>string[]</code> | List of SAML organizations allowed to access Grafana. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfiguration.property.assertionAttributes">AssertionAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributes">GrafanaWorkspaceSamlConfigurationAssertionAttributes</a></code> | Maps Grafana friendly names to the IdPs SAML attributes. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfiguration.property.idpMetadata">IdpMetadata</a></code> | <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadata">GrafanaWorkspaceSamlConfigurationIdpMetadata</a></code> | IdP Metadata used to configure SAML authentication in Grafana. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfiguration.property.loginValidityDuration">LoginValidityDuration</a></code> | <code>double</code> | The maximum lifetime an authenticated user can be logged in (in minutes) before being required to re-authenticate. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfiguration.property.roleValues">RoleValues</a></code> | <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValues">GrafanaWorkspaceSamlConfigurationRoleValues</a></code> | Maps SAML roles to the Grafana Editor and Admin roles. |

---

##### `AllowedOrganizations`<sup>Optional</sup> <a name="AllowedOrganizations" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfiguration.property.allowedOrganizations"></a>

```csharp
public string[] AllowedOrganizations { get; set; }
```

- *Type:* string[]

List of SAML organizations allowed to access Grafana.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/grafana_workspace#allowed_organizations GrafanaWorkspace#allowed_organizations}

---

##### `AssertionAttributes`<sup>Optional</sup> <a name="AssertionAttributes" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfiguration.property.assertionAttributes"></a>

```csharp
public GrafanaWorkspaceSamlConfigurationAssertionAttributes AssertionAttributes { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributes">GrafanaWorkspaceSamlConfigurationAssertionAttributes</a>

Maps Grafana friendly names to the IdPs SAML attributes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/grafana_workspace#assertion_attributes GrafanaWorkspace#assertion_attributes}

---

##### `IdpMetadata`<sup>Optional</sup> <a name="IdpMetadata" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfiguration.property.idpMetadata"></a>

```csharp
public GrafanaWorkspaceSamlConfigurationIdpMetadata IdpMetadata { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadata">GrafanaWorkspaceSamlConfigurationIdpMetadata</a>

IdP Metadata used to configure SAML authentication in Grafana.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/grafana_workspace#idp_metadata GrafanaWorkspace#idp_metadata}

---

##### `LoginValidityDuration`<sup>Optional</sup> <a name="LoginValidityDuration" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfiguration.property.loginValidityDuration"></a>

```csharp
public double LoginValidityDuration { get; set; }
```

- *Type:* double

The maximum lifetime an authenticated user can be logged in (in minutes) before being required to re-authenticate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/grafana_workspace#login_validity_duration GrafanaWorkspace#login_validity_duration}

---

##### `RoleValues`<sup>Optional</sup> <a name="RoleValues" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfiguration.property.roleValues"></a>

```csharp
public GrafanaWorkspaceSamlConfigurationRoleValues RoleValues { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValues">GrafanaWorkspaceSamlConfigurationRoleValues</a>

Maps SAML roles to the Grafana Editor and Admin roles.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/grafana_workspace#role_values GrafanaWorkspace#role_values}

---

### GrafanaWorkspaceSamlConfigurationAssertionAttributes <a name="GrafanaWorkspaceSamlConfigurationAssertionAttributes" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributes.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GrafanaWorkspaceSamlConfigurationAssertionAttributes {
    string Email = null,
    string Groups = null,
    string Login = null,
    string Name = null,
    string Org = null,
    string Role = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributes.property.email">Email</a></code> | <code>string</code> | Name of the attribute within the SAML assert to use as the users email in Grafana. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributes.property.groups">Groups</a></code> | <code>string</code> | Name of the attribute within the SAML assert to use as the users groups in Grafana. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributes.property.login">Login</a></code> | <code>string</code> | Name of the attribute within the SAML assert to use as the users login handle in Grafana. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributes.property.name">Name</a></code> | <code>string</code> | Name of the attribute within the SAML assert to use as the users name in Grafana. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributes.property.org">Org</a></code> | <code>string</code> | Name of the attribute within the SAML assert to use as the users organizations in Grafana. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributes.property.role">Role</a></code> | <code>string</code> | Name of the attribute within the SAML assert to use as the users roles in Grafana. |

---

##### `Email`<sup>Optional</sup> <a name="Email" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributes.property.email"></a>

```csharp
public string Email { get; set; }
```

- *Type:* string

Name of the attribute within the SAML assert to use as the users email in Grafana.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/grafana_workspace#email GrafanaWorkspace#email}

---

##### `Groups`<sup>Optional</sup> <a name="Groups" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributes.property.groups"></a>

```csharp
public string Groups { get; set; }
```

- *Type:* string

Name of the attribute within the SAML assert to use as the users groups in Grafana.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/grafana_workspace#groups GrafanaWorkspace#groups}

---

##### `Login`<sup>Optional</sup> <a name="Login" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributes.property.login"></a>

```csharp
public string Login { get; set; }
```

- *Type:* string

Name of the attribute within the SAML assert to use as the users login handle in Grafana.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/grafana_workspace#login GrafanaWorkspace#login}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributes.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the attribute within the SAML assert to use as the users name in Grafana.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/grafana_workspace#name GrafanaWorkspace#name}

---

##### `Org`<sup>Optional</sup> <a name="Org" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributes.property.org"></a>

```csharp
public string Org { get; set; }
```

- *Type:* string

Name of the attribute within the SAML assert to use as the users organizations in Grafana.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/grafana_workspace#org GrafanaWorkspace#org}

---

##### `Role`<sup>Optional</sup> <a name="Role" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributes.property.role"></a>

```csharp
public string Role { get; set; }
```

- *Type:* string

Name of the attribute within the SAML assert to use as the users roles in Grafana.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/grafana_workspace#role GrafanaWorkspace#role}

---

### GrafanaWorkspaceSamlConfigurationIdpMetadata <a name="GrafanaWorkspaceSamlConfigurationIdpMetadata" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadata.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GrafanaWorkspaceSamlConfigurationIdpMetadata {
    string Url = null,
    string Xml = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadata.property.url">Url</a></code> | <code>string</code> | URL that vends the IdPs metadata. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadata.property.xml">Xml</a></code> | <code>string</code> | XML blob of the IdPs metadata. |

---

##### `Url`<sup>Optional</sup> <a name="Url" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadata.property.url"></a>

```csharp
public string Url { get; set; }
```

- *Type:* string

URL that vends the IdPs metadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/grafana_workspace#url GrafanaWorkspace#url}

---

##### `Xml`<sup>Optional</sup> <a name="Xml" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadata.property.xml"></a>

```csharp
public string Xml { get; set; }
```

- *Type:* string

XML blob of the IdPs metadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/grafana_workspace#xml GrafanaWorkspace#xml}

---

### GrafanaWorkspaceSamlConfigurationRoleValues <a name="GrafanaWorkspaceSamlConfigurationRoleValues" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValues"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValues.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GrafanaWorkspaceSamlConfigurationRoleValues {
    string[] Admin = null,
    string[] Editor = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValues.property.admin">Admin</a></code> | <code>string[]</code> | List of SAML roles which will be mapped into the Grafana Admin role. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValues.property.editor">Editor</a></code> | <code>string[]</code> | List of SAML roles which will be mapped into the Grafana Editor role. |

---

##### `Admin`<sup>Optional</sup> <a name="Admin" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValues.property.admin"></a>

```csharp
public string[] Admin { get; set; }
```

- *Type:* string[]

List of SAML roles which will be mapped into the Grafana Admin role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/grafana_workspace#admin GrafanaWorkspace#admin}

---

##### `Editor`<sup>Optional</sup> <a name="Editor" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValues.property.editor"></a>

```csharp
public string[] Editor { get; set; }
```

- *Type:* string[]

List of SAML roles which will be mapped into the Grafana Editor role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/grafana_workspace#editor GrafanaWorkspace#editor}

---

### GrafanaWorkspaceTags <a name="GrafanaWorkspaceTags" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GrafanaWorkspaceTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/grafana_workspace#key GrafanaWorkspace#key}. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/grafana_workspace#value GrafanaWorkspace#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/grafana_workspace#key GrafanaWorkspace#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/grafana_workspace#value GrafanaWorkspace#value}.

---

### GrafanaWorkspaceVpcConfiguration <a name="GrafanaWorkspaceVpcConfiguration" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GrafanaWorkspaceVpcConfiguration {
    string[] SecurityGroupIds = null,
    string[] SubnetIds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfiguration.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | The list of Amazon EC2 security group IDs attached to the Amazon VPC for your Grafana workspace to connect. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfiguration.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | The list of Amazon EC2 subnet IDs created in the Amazon VPC for your Grafana workspace to connect. |

---

##### `SecurityGroupIds`<sup>Optional</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfiguration.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; set; }
```

- *Type:* string[]

The list of Amazon EC2 security group IDs attached to the Amazon VPC for your Grafana workspace to connect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/grafana_workspace#security_group_ids GrafanaWorkspace#security_group_ids}

---

##### `SubnetIds`<sup>Optional</sup> <a name="SubnetIds" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfiguration.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; set; }
```

- *Type:* string[]

The list of Amazon EC2 subnet IDs created in the Amazon VPC for your Grafana workspace to connect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/grafana_workspace#subnet_ids GrafanaWorkspace#subnet_ids}

---

## Classes <a name="Classes" id="Classes"></a>

### GrafanaWorkspaceNetworkAccessControlOutputReference <a name="GrafanaWorkspaceNetworkAccessControlOutputReference" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GrafanaWorkspaceNetworkAccessControlOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.resetPrefixListIds">ResetPrefixListIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.resetVpceIds">ResetVpceIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPrefixListIds` <a name="ResetPrefixListIds" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.resetPrefixListIds"></a>

```csharp
private void ResetPrefixListIds()
```

##### `ResetVpceIds` <a name="ResetVpceIds" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.resetVpceIds"></a>

```csharp
private void ResetVpceIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.property.prefixListIdsInput">PrefixListIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.property.vpceIdsInput">VpceIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.property.prefixListIds">PrefixListIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.property.vpceIds">VpceIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControl">GrafanaWorkspaceNetworkAccessControl</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PrefixListIdsInput`<sup>Optional</sup> <a name="PrefixListIdsInput" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.property.prefixListIdsInput"></a>

```csharp
public string[] PrefixListIdsInput { get; }
```

- *Type:* string[]

---

##### `VpceIdsInput`<sup>Optional</sup> <a name="VpceIdsInput" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.property.vpceIdsInput"></a>

```csharp
public string[] VpceIdsInput { get; }
```

- *Type:* string[]

---

##### `PrefixListIds`<sup>Required</sup> <a name="PrefixListIds" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.property.prefixListIds"></a>

```csharp
public string[] PrefixListIds { get; }
```

- *Type:* string[]

---

##### `VpceIds`<sup>Required</sup> <a name="VpceIds" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.property.vpceIds"></a>

```csharp
public string[] VpceIds { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GrafanaWorkspaceNetworkAccessControl InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControl">GrafanaWorkspaceNetworkAccessControl</a>

---


### GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference <a name="GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.resetEmail">ResetEmail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.resetGroups">ResetGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.resetLogin">ResetLogin</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.resetOrg">ResetOrg</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.resetRole">ResetRole</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEmail` <a name="ResetEmail" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.resetEmail"></a>

```csharp
private void ResetEmail()
```

##### `ResetGroups` <a name="ResetGroups" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.resetGroups"></a>

```csharp
private void ResetGroups()
```

##### `ResetLogin` <a name="ResetLogin" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.resetLogin"></a>

```csharp
private void ResetLogin()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetOrg` <a name="ResetOrg" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.resetOrg"></a>

```csharp
private void ResetOrg()
```

##### `ResetRole` <a name="ResetRole" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.resetRole"></a>

```csharp
private void ResetRole()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.property.emailInput">EmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.property.groupsInput">GroupsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.property.loginInput">LoginInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.property.orgInput">OrgInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.property.roleInput">RoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.property.email">Email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.property.groups">Groups</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.property.login">Login</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.property.org">Org</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.property.role">Role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributes">GrafanaWorkspaceSamlConfigurationAssertionAttributes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.property.emailInput"></a>

```csharp
public string EmailInput { get; }
```

- *Type:* string

---

##### `GroupsInput`<sup>Optional</sup> <a name="GroupsInput" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.property.groupsInput"></a>

```csharp
public string GroupsInput { get; }
```

- *Type:* string

---

##### `LoginInput`<sup>Optional</sup> <a name="LoginInput" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.property.loginInput"></a>

```csharp
public string LoginInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OrgInput`<sup>Optional</sup> <a name="OrgInput" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.property.orgInput"></a>

```csharp
public string OrgInput { get; }
```

- *Type:* string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.property.roleInput"></a>

```csharp
public string RoleInput { get; }
```

- *Type:* string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.property.email"></a>

```csharp
public string Email { get; }
```

- *Type:* string

---

##### `Groups`<sup>Required</sup> <a name="Groups" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.property.groups"></a>

```csharp
public string Groups { get; }
```

- *Type:* string

---

##### `Login`<sup>Required</sup> <a name="Login" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.property.login"></a>

```csharp
public string Login { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Org`<sup>Required</sup> <a name="Org" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.property.org"></a>

```csharp
public string Org { get; }
```

- *Type:* string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.property.role"></a>

```csharp
public string Role { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GrafanaWorkspaceSamlConfigurationAssertionAttributes InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributes">GrafanaWorkspaceSamlConfigurationAssertionAttributes</a>

---


### GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference <a name="GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.resetUrl">ResetUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.resetXml">ResetXml</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetUrl` <a name="ResetUrl" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.resetUrl"></a>

```csharp
private void ResetUrl()
```

##### `ResetXml` <a name="ResetXml" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.resetXml"></a>

```csharp
private void ResetXml()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.property.urlInput">UrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.property.xmlInput">XmlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.property.xml">Xml</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadata">GrafanaWorkspaceSamlConfigurationIdpMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.property.urlInput"></a>

```csharp
public string UrlInput { get; }
```

- *Type:* string

---

##### `XmlInput`<sup>Optional</sup> <a name="XmlInput" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.property.xmlInput"></a>

```csharp
public string XmlInput { get; }
```

- *Type:* string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `Xml`<sup>Required</sup> <a name="Xml" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.property.xml"></a>

```csharp
public string Xml { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GrafanaWorkspaceSamlConfigurationIdpMetadata InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadata">GrafanaWorkspaceSamlConfigurationIdpMetadata</a>

---


### GrafanaWorkspaceSamlConfigurationOutputReference <a name="GrafanaWorkspaceSamlConfigurationOutputReference" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GrafanaWorkspaceSamlConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.putAssertionAttributes">PutAssertionAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.putIdpMetadata">PutIdpMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.putRoleValues">PutRoleValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.resetAllowedOrganizations">ResetAllowedOrganizations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.resetAssertionAttributes">ResetAssertionAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.resetIdpMetadata">ResetIdpMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.resetLoginValidityDuration">ResetLoginValidityDuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.resetRoleValues">ResetRoleValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAssertionAttributes` <a name="PutAssertionAttributes" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.putAssertionAttributes"></a>

```csharp
private void PutAssertionAttributes(GrafanaWorkspaceSamlConfigurationAssertionAttributes Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.putAssertionAttributes.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributes">GrafanaWorkspaceSamlConfigurationAssertionAttributes</a>

---

##### `PutIdpMetadata` <a name="PutIdpMetadata" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.putIdpMetadata"></a>

```csharp
private void PutIdpMetadata(GrafanaWorkspaceSamlConfigurationIdpMetadata Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.putIdpMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadata">GrafanaWorkspaceSamlConfigurationIdpMetadata</a>

---

##### `PutRoleValues` <a name="PutRoleValues" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.putRoleValues"></a>

```csharp
private void PutRoleValues(GrafanaWorkspaceSamlConfigurationRoleValues Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.putRoleValues.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValues">GrafanaWorkspaceSamlConfigurationRoleValues</a>

---

##### `ResetAllowedOrganizations` <a name="ResetAllowedOrganizations" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.resetAllowedOrganizations"></a>

```csharp
private void ResetAllowedOrganizations()
```

##### `ResetAssertionAttributes` <a name="ResetAssertionAttributes" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.resetAssertionAttributes"></a>

```csharp
private void ResetAssertionAttributes()
```

##### `ResetIdpMetadata` <a name="ResetIdpMetadata" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.resetIdpMetadata"></a>

```csharp
private void ResetIdpMetadata()
```

##### `ResetLoginValidityDuration` <a name="ResetLoginValidityDuration" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.resetLoginValidityDuration"></a>

```csharp
private void ResetLoginValidityDuration()
```

##### `ResetRoleValues` <a name="ResetRoleValues" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.resetRoleValues"></a>

```csharp
private void ResetRoleValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.property.assertionAttributes">AssertionAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference">GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.property.idpMetadata">IdpMetadata</a></code> | <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference">GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.property.roleValues">RoleValues</a></code> | <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference">GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.property.allowedOrganizationsInput">AllowedOrganizationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.property.assertionAttributesInput">AssertionAttributesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributes">GrafanaWorkspaceSamlConfigurationAssertionAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.property.idpMetadataInput">IdpMetadataInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadata">GrafanaWorkspaceSamlConfigurationIdpMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.property.loginValidityDurationInput">LoginValidityDurationInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.property.roleValuesInput">RoleValuesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValues">GrafanaWorkspaceSamlConfigurationRoleValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.property.allowedOrganizations">AllowedOrganizations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.property.loginValidityDuration">LoginValidityDuration</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfiguration">GrafanaWorkspaceSamlConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AssertionAttributes`<sup>Required</sup> <a name="AssertionAttributes" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.property.assertionAttributes"></a>

```csharp
public GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference AssertionAttributes { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference">GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference</a>

---

##### `IdpMetadata`<sup>Required</sup> <a name="IdpMetadata" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.property.idpMetadata"></a>

```csharp
public GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference IdpMetadata { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference">GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference</a>

---

##### `RoleValues`<sup>Required</sup> <a name="RoleValues" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.property.roleValues"></a>

```csharp
public GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference RoleValues { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference">GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference</a>

---

##### `AllowedOrganizationsInput`<sup>Optional</sup> <a name="AllowedOrganizationsInput" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.property.allowedOrganizationsInput"></a>

```csharp
public string[] AllowedOrganizationsInput { get; }
```

- *Type:* string[]

---

##### `AssertionAttributesInput`<sup>Optional</sup> <a name="AssertionAttributesInput" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.property.assertionAttributesInput"></a>

```csharp
public IResolvable|GrafanaWorkspaceSamlConfigurationAssertionAttributes AssertionAttributesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributes">GrafanaWorkspaceSamlConfigurationAssertionAttributes</a>

---

##### `IdpMetadataInput`<sup>Optional</sup> <a name="IdpMetadataInput" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.property.idpMetadataInput"></a>

```csharp
public IResolvable|GrafanaWorkspaceSamlConfigurationIdpMetadata IdpMetadataInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadata">GrafanaWorkspaceSamlConfigurationIdpMetadata</a>

---

##### `LoginValidityDurationInput`<sup>Optional</sup> <a name="LoginValidityDurationInput" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.property.loginValidityDurationInput"></a>

```csharp
public double LoginValidityDurationInput { get; }
```

- *Type:* double

---

##### `RoleValuesInput`<sup>Optional</sup> <a name="RoleValuesInput" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.property.roleValuesInput"></a>

```csharp
public IResolvable|GrafanaWorkspaceSamlConfigurationRoleValues RoleValuesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValues">GrafanaWorkspaceSamlConfigurationRoleValues</a>

---

##### `AllowedOrganizations`<sup>Required</sup> <a name="AllowedOrganizations" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.property.allowedOrganizations"></a>

```csharp
public string[] AllowedOrganizations { get; }
```

- *Type:* string[]

---

##### `LoginValidityDuration`<sup>Required</sup> <a name="LoginValidityDuration" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.property.loginValidityDuration"></a>

```csharp
public double LoginValidityDuration { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GrafanaWorkspaceSamlConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfiguration">GrafanaWorkspaceSamlConfiguration</a>

---


### GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference <a name="GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.resetAdmin">ResetAdmin</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.resetEditor">ResetEditor</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAdmin` <a name="ResetAdmin" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.resetAdmin"></a>

```csharp
private void ResetAdmin()
```

##### `ResetEditor` <a name="ResetEditor" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.resetEditor"></a>

```csharp
private void ResetEditor()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.property.adminInput">AdminInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.property.editorInput">EditorInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.property.admin">Admin</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.property.editor">Editor</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValues">GrafanaWorkspaceSamlConfigurationRoleValues</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdminInput`<sup>Optional</sup> <a name="AdminInput" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.property.adminInput"></a>

```csharp
public string[] AdminInput { get; }
```

- *Type:* string[]

---

##### `EditorInput`<sup>Optional</sup> <a name="EditorInput" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.property.editorInput"></a>

```csharp
public string[] EditorInput { get; }
```

- *Type:* string[]

---

##### `Admin`<sup>Required</sup> <a name="Admin" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.property.admin"></a>

```csharp
public string[] Admin { get; }
```

- *Type:* string[]

---

##### `Editor`<sup>Required</sup> <a name="Editor" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.property.editor"></a>

```csharp
public string[] Editor { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GrafanaWorkspaceSamlConfigurationRoleValues InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValues">GrafanaWorkspaceSamlConfigurationRoleValues</a>

---


### GrafanaWorkspaceTagsList <a name="GrafanaWorkspaceTagsList" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GrafanaWorkspaceTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsList.get"></a>

```csharp
private GrafanaWorkspaceTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTags">GrafanaWorkspaceTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsList.property.internalValue"></a>

```csharp
public IResolvable|GrafanaWorkspaceTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTags">GrafanaWorkspaceTags</a>[]

---


### GrafanaWorkspaceTagsOutputReference <a name="GrafanaWorkspaceTagsOutputReference" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GrafanaWorkspaceTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTags">GrafanaWorkspaceTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GrafanaWorkspaceTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTags">GrafanaWorkspaceTags</a>

---


### GrafanaWorkspaceVpcConfigurationOutputReference <a name="GrafanaWorkspaceVpcConfigurationOutputReference" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GrafanaWorkspaceVpcConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.resetSecurityGroupIds">ResetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.resetSubnetIds">ResetSubnetIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSecurityGroupIds` <a name="ResetSecurityGroupIds" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.resetSecurityGroupIds"></a>

```csharp
private void ResetSecurityGroupIds()
```

##### `ResetSubnetIds` <a name="ResetSubnetIds" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.resetSubnetIds"></a>

```csharp
private void ResetSubnetIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.property.securityGroupIdsInput">SecurityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.property.subnetIdsInput">SubnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfiguration">GrafanaWorkspaceVpcConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SecurityGroupIdsInput`<sup>Optional</sup> <a name="SecurityGroupIdsInput" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.property.securityGroupIdsInput"></a>

```csharp
public string[] SecurityGroupIdsInput { get; }
```

- *Type:* string[]

---

##### `SubnetIdsInput`<sup>Optional</sup> <a name="SubnetIdsInput" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.property.subnetIdsInput"></a>

```csharp
public string[] SubnetIdsInput { get; }
```

- *Type:* string[]

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; }
```

- *Type:* string[]

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GrafanaWorkspaceVpcConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfiguration">GrafanaWorkspaceVpcConfiguration</a>

---



