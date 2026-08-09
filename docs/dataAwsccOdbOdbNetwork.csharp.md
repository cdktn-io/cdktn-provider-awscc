# `dataAwsccOdbOdbNetwork` Submodule <a name="`dataAwsccOdbOdbNetwork` Submodule" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccOdbOdbNetwork <a name="DataAwsccOdbOdbNetwork" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/odb_odb_network awscc_odb_odb_network}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccOdbOdbNetwork(Construct Scope, string Id, DataAwsccOdbOdbNetworkConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkConfig">DataAwsccOdbOdbNetworkConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkConfig">DataAwsccOdbOdbNetworkConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccOdbOdbNetwork resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccOdbOdbNetwork.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccOdbOdbNetwork.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccOdbOdbNetwork.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccOdbOdbNetwork.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccOdbOdbNetwork resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccOdbOdbNetwork to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccOdbOdbNetwork that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/odb_odb_network#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccOdbOdbNetwork to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.availabilityZone">AvailabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.availabilityZoneId">AvailabilityZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.backupSubnetCidr">BackupSubnetCidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.clientSubnetCidr">ClientSubnetCidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.crossRegionS3RestoreSources">CrossRegionS3RestoreSources</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.customDomainName">CustomDomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.defaultDnsPrefix">DefaultDnsPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.deleteAssociatedResources">DeleteAssociatedResources</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.ec2PlacementGroupIds">Ec2PlacementGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.kmsAccess">KmsAccess</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.kmsPolicyDocument">KmsPolicyDocument</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.managedServices">ManagedServices</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference">DataAwsccOdbOdbNetworkManagedServicesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.ociNetworkAnchorId">OciNetworkAnchorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.ociResourceAnchorName">OciResourceAnchorName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.ociVcnUrl">OciVcnUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.odbNetworkArn">OdbNetworkArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.odbNetworkId">OdbNetworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.s3Access">S3Access</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.s3PolicyDocument">S3PolicyDocument</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.stsAccess">StsAccess</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.stsPolicyDocument">StsPolicyDocument</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsList">DataAwsccOdbOdbNetworkTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.zeroEtlAccess">ZeroEtlAccess</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.availabilityZone"></a>

```csharp
public string AvailabilityZone { get; }
```

- *Type:* string

---

##### `AvailabilityZoneId`<sup>Required</sup> <a name="AvailabilityZoneId" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.availabilityZoneId"></a>

```csharp
public string AvailabilityZoneId { get; }
```

- *Type:* string

---

##### `BackupSubnetCidr`<sup>Required</sup> <a name="BackupSubnetCidr" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.backupSubnetCidr"></a>

```csharp
public string BackupSubnetCidr { get; }
```

- *Type:* string

---

##### `ClientSubnetCidr`<sup>Required</sup> <a name="ClientSubnetCidr" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.clientSubnetCidr"></a>

```csharp
public string ClientSubnetCidr { get; }
```

- *Type:* string

---

##### `CrossRegionS3RestoreSources`<sup>Required</sup> <a name="CrossRegionS3RestoreSources" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.crossRegionS3RestoreSources"></a>

```csharp
public string[] CrossRegionS3RestoreSources { get; }
```

- *Type:* string[]

---

##### `CustomDomainName`<sup>Required</sup> <a name="CustomDomainName" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.customDomainName"></a>

```csharp
public string CustomDomainName { get; }
```

- *Type:* string

---

##### `DefaultDnsPrefix`<sup>Required</sup> <a name="DefaultDnsPrefix" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.defaultDnsPrefix"></a>

```csharp
public string DefaultDnsPrefix { get; }
```

- *Type:* string

---

##### `DeleteAssociatedResources`<sup>Required</sup> <a name="DeleteAssociatedResources" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.deleteAssociatedResources"></a>

```csharp
public IResolvable DeleteAssociatedResources { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Ec2PlacementGroupIds`<sup>Required</sup> <a name="Ec2PlacementGroupIds" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.ec2PlacementGroupIds"></a>

```csharp
public string[] Ec2PlacementGroupIds { get; }
```

- *Type:* string[]

---

##### `KmsAccess`<sup>Required</sup> <a name="KmsAccess" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.kmsAccess"></a>

```csharp
public string KmsAccess { get; }
```

- *Type:* string

---

##### `KmsPolicyDocument`<sup>Required</sup> <a name="KmsPolicyDocument" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.kmsPolicyDocument"></a>

```csharp
public string KmsPolicyDocument { get; }
```

- *Type:* string

---

##### `ManagedServices`<sup>Required</sup> <a name="ManagedServices" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.managedServices"></a>

```csharp
public DataAwsccOdbOdbNetworkManagedServicesOutputReference ManagedServices { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference">DataAwsccOdbOdbNetworkManagedServicesOutputReference</a>

---

##### `OciNetworkAnchorId`<sup>Required</sup> <a name="OciNetworkAnchorId" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.ociNetworkAnchorId"></a>

```csharp
public string OciNetworkAnchorId { get; }
```

- *Type:* string

---

##### `OciResourceAnchorName`<sup>Required</sup> <a name="OciResourceAnchorName" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.ociResourceAnchorName"></a>

```csharp
public string OciResourceAnchorName { get; }
```

- *Type:* string

---

##### `OciVcnUrl`<sup>Required</sup> <a name="OciVcnUrl" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.ociVcnUrl"></a>

```csharp
public string OciVcnUrl { get; }
```

- *Type:* string

---

##### `OdbNetworkArn`<sup>Required</sup> <a name="OdbNetworkArn" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.odbNetworkArn"></a>

```csharp
public string OdbNetworkArn { get; }
```

- *Type:* string

---

##### `OdbNetworkId`<sup>Required</sup> <a name="OdbNetworkId" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.odbNetworkId"></a>

```csharp
public string OdbNetworkId { get; }
```

- *Type:* string

---

##### `S3Access`<sup>Required</sup> <a name="S3Access" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.s3Access"></a>

```csharp
public string S3Access { get; }
```

- *Type:* string

---

##### `S3PolicyDocument`<sup>Required</sup> <a name="S3PolicyDocument" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.s3PolicyDocument"></a>

```csharp
public string S3PolicyDocument { get; }
```

- *Type:* string

---

##### `StsAccess`<sup>Required</sup> <a name="StsAccess" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.stsAccess"></a>

```csharp
public string StsAccess { get; }
```

- *Type:* string

---

##### `StsPolicyDocument`<sup>Required</sup> <a name="StsPolicyDocument" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.stsPolicyDocument"></a>

```csharp
public string StsPolicyDocument { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.tags"></a>

```csharp
public DataAwsccOdbOdbNetworkTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsList">DataAwsccOdbOdbNetworkTagsList</a>

---

##### `ZeroEtlAccess`<sup>Required</sup> <a name="ZeroEtlAccess" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.zeroEtlAccess"></a>

```csharp
public string ZeroEtlAccess { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccOdbOdbNetworkConfig <a name="DataAwsccOdbOdbNetworkConfig" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccOdbOdbNetworkConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Id
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/odb_odb_network#id DataAwsccOdbOdbNetwork#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccOdbOdbNetworkManagedServices <a name="DataAwsccOdbOdbNetworkManagedServices" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServices"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServices.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccOdbOdbNetworkManagedServices {

};
```


### DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccess <a name="DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccess" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccess"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccess.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccess {

};
```


### DataAwsccOdbOdbNetworkManagedServicesKmsAccess <a name="DataAwsccOdbOdbNetworkManagedServicesKmsAccess" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccess"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccess.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccOdbOdbNetworkManagedServicesKmsAccess {

};
```


### DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccess <a name="DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccess" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccess"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccess.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccess {

};
```


### DataAwsccOdbOdbNetworkManagedServicesS3Access <a name="DataAwsccOdbOdbNetworkManagedServicesS3Access" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3Access"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3Access.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccOdbOdbNetworkManagedServicesS3Access {

};
```


### DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpoint <a name="DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpoint" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpoint.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpoint {

};
```


### DataAwsccOdbOdbNetworkManagedServicesStsAccess <a name="DataAwsccOdbOdbNetworkManagedServicesStsAccess" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccess"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccess.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccOdbOdbNetworkManagedServicesStsAccess {

};
```


### DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccess <a name="DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccess" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccess"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccess.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccess {

};
```


### DataAwsccOdbOdbNetworkTags <a name="DataAwsccOdbOdbNetworkTags" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccOdbOdbNetworkTags {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList <a name="DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList.get"></a>

```csharp
private DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference <a name="DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.property.ipv4Addresses">Ipv4Addresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccess">DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccess</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Ipv4Addresses`<sup>Required</sup> <a name="Ipv4Addresses" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.property.ipv4Addresses"></a>

```csharp
public string[] Ipv4Addresses { get; }
```

- *Type:* string[]

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.property.internalValue"></a>

```csharp
public DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccess InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccess">DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccess</a>

---


### DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference <a name="DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference.property.domainName">DomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference.property.ipv4Addresses">Ipv4Addresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference.property.kmsPolicyDocument">KmsPolicyDocument</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccess">DataAwsccOdbOdbNetworkManagedServicesKmsAccess</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference.property.domainName"></a>

```csharp
public string DomainName { get; }
```

- *Type:* string

---

##### `Ipv4Addresses`<sup>Required</sup> <a name="Ipv4Addresses" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference.property.ipv4Addresses"></a>

```csharp
public string[] Ipv4Addresses { get; }
```

- *Type:* string[]

---

##### `KmsPolicyDocument`<sup>Required</sup> <a name="KmsPolicyDocument" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference.property.kmsPolicyDocument"></a>

```csharp
public string KmsPolicyDocument { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference.property.internalValue"></a>

```csharp
public DataAwsccOdbOdbNetworkManagedServicesKmsAccess InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccess">DataAwsccOdbOdbNetworkManagedServicesKmsAccess</a>

---


### DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference <a name="DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.property.ipv4Addresses">Ipv4Addresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccess">DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccess</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Ipv4Addresses`<sup>Required</sup> <a name="Ipv4Addresses" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.property.ipv4Addresses"></a>

```csharp
public string[] Ipv4Addresses { get; }
```

- *Type:* string[]

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.property.internalValue"></a>

```csharp
public DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccess InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccess">DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccess</a>

---


### DataAwsccOdbOdbNetworkManagedServicesOutputReference <a name="DataAwsccOdbOdbNetworkManagedServicesOutputReference" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccOdbOdbNetworkManagedServicesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.property.crossRegionS3RestoreSourcesAccess">CrossRegionS3RestoreSourcesAccess</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList">DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.property.kmsAccess">KmsAccess</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference">DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.property.managedS3BackupAccess">ManagedS3BackupAccess</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference">DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.property.managedServicesIpv4Cidrs">ManagedServicesIpv4Cidrs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.property.resourceGatewayArn">ResourceGatewayArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.property.s3Access">S3Access</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference">DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.property.serviceNetworkArn">ServiceNetworkArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.property.serviceNetworkEndpoint">ServiceNetworkEndpoint</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference">DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.property.stsAccess">StsAccess</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference">DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.property.zeroEtlAccess">ZeroEtlAccess</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference">DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServices">DataAwsccOdbOdbNetworkManagedServices</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CrossRegionS3RestoreSourcesAccess`<sup>Required</sup> <a name="CrossRegionS3RestoreSourcesAccess" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.property.crossRegionS3RestoreSourcesAccess"></a>

```csharp
public DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList CrossRegionS3RestoreSourcesAccess { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList">DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList</a>

---

##### `KmsAccess`<sup>Required</sup> <a name="KmsAccess" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.property.kmsAccess"></a>

```csharp
public DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference KmsAccess { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference">DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference</a>

---

##### `ManagedS3BackupAccess`<sup>Required</sup> <a name="ManagedS3BackupAccess" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.property.managedS3BackupAccess"></a>

```csharp
public DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference ManagedS3BackupAccess { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference">DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference</a>

---

##### `ManagedServicesIpv4Cidrs`<sup>Required</sup> <a name="ManagedServicesIpv4Cidrs" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.property.managedServicesIpv4Cidrs"></a>

```csharp
public string[] ManagedServicesIpv4Cidrs { get; }
```

- *Type:* string[]

---

##### `ResourceGatewayArn`<sup>Required</sup> <a name="ResourceGatewayArn" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.property.resourceGatewayArn"></a>

```csharp
public string ResourceGatewayArn { get; }
```

- *Type:* string

---

##### `S3Access`<sup>Required</sup> <a name="S3Access" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.property.s3Access"></a>

```csharp
public DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference S3Access { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference">DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference</a>

---

##### `ServiceNetworkArn`<sup>Required</sup> <a name="ServiceNetworkArn" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.property.serviceNetworkArn"></a>

```csharp
public string ServiceNetworkArn { get; }
```

- *Type:* string

---

##### `ServiceNetworkEndpoint`<sup>Required</sup> <a name="ServiceNetworkEndpoint" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.property.serviceNetworkEndpoint"></a>

```csharp
public DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference ServiceNetworkEndpoint { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference">DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference</a>

---

##### `StsAccess`<sup>Required</sup> <a name="StsAccess" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.property.stsAccess"></a>

```csharp
public DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference StsAccess { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference">DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference</a>

---

##### `ZeroEtlAccess`<sup>Required</sup> <a name="ZeroEtlAccess" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.property.zeroEtlAccess"></a>

```csharp
public DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference ZeroEtlAccess { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference">DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.property.internalValue"></a>

```csharp
public DataAwsccOdbOdbNetworkManagedServices InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServices">DataAwsccOdbOdbNetworkManagedServices</a>

---


### DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference <a name="DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference.property.domainName">DomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference.property.ipv4Addresses">Ipv4Addresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference.property.s3PolicyDocument">S3PolicyDocument</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3Access">DataAwsccOdbOdbNetworkManagedServicesS3Access</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference.property.domainName"></a>

```csharp
public string DomainName { get; }
```

- *Type:* string

---

##### `Ipv4Addresses`<sup>Required</sup> <a name="Ipv4Addresses" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference.property.ipv4Addresses"></a>

```csharp
public string[] Ipv4Addresses { get; }
```

- *Type:* string[]

---

##### `S3PolicyDocument`<sup>Required</sup> <a name="S3PolicyDocument" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference.property.s3PolicyDocument"></a>

```csharp
public string S3PolicyDocument { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference.property.internalValue"></a>

```csharp
public DataAwsccOdbOdbNetworkManagedServicesS3Access InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3Access">DataAwsccOdbOdbNetworkManagedServicesS3Access</a>

---


### DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference <a name="DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.property.vpcEndpointId">VpcEndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.property.vpcEndpointType">VpcEndpointType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpoint">DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `VpcEndpointId`<sup>Required</sup> <a name="VpcEndpointId" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.property.vpcEndpointId"></a>

```csharp
public string VpcEndpointId { get; }
```

- *Type:* string

---

##### `VpcEndpointType`<sup>Required</sup> <a name="VpcEndpointType" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.property.vpcEndpointType"></a>

```csharp
public string VpcEndpointType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.property.internalValue"></a>

```csharp
public DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpoint InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpoint">DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpoint</a>

---


### DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference <a name="DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference.property.domainName">DomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference.property.ipv4Addresses">Ipv4Addresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference.property.stsPolicyDocument">StsPolicyDocument</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccess">DataAwsccOdbOdbNetworkManagedServicesStsAccess</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference.property.domainName"></a>

```csharp
public string DomainName { get; }
```

- *Type:* string

---

##### `Ipv4Addresses`<sup>Required</sup> <a name="Ipv4Addresses" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference.property.ipv4Addresses"></a>

```csharp
public string[] Ipv4Addresses { get; }
```

- *Type:* string[]

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `StsPolicyDocument`<sup>Required</sup> <a name="StsPolicyDocument" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference.property.stsPolicyDocument"></a>

```csharp
public string StsPolicyDocument { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference.property.internalValue"></a>

```csharp
public DataAwsccOdbOdbNetworkManagedServicesStsAccess InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccess">DataAwsccOdbOdbNetworkManagedServicesStsAccess</a>

---


### DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference <a name="DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.property.cidr">Cidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccess">DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccess</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Cidr`<sup>Required</sup> <a name="Cidr" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.property.cidr"></a>

```csharp
public string Cidr { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.property.internalValue"></a>

```csharp
public DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccess InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccess">DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccess</a>

---


### DataAwsccOdbOdbNetworkTagsList <a name="DataAwsccOdbOdbNetworkTagsList" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccOdbOdbNetworkTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsList.get"></a>

```csharp
private DataAwsccOdbOdbNetworkTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccOdbOdbNetworkTagsOutputReference <a name="DataAwsccOdbOdbNetworkTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccOdbOdbNetworkTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTags">DataAwsccOdbOdbNetworkTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccOdbOdbNetworkTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTags">DataAwsccOdbOdbNetworkTags</a>

---



