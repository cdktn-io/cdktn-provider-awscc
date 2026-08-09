# `dataAwsccMskCluster` Submodule <a name="`dataAwsccMskCluster` Submodule" id="@cdktn/provider-awscc.dataAwsccMskCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccMskCluster <a name="DataAwsccMskCluster" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/msk_cluster awscc_msk_cluster}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskCluster.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMskCluster(Construct Scope, string Id, DataAwsccMskClusterConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskCluster.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskCluster.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskCluster.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterConfig">DataAwsccMskClusterConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskCluster.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskCluster.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterConfig">DataAwsccMskClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskCluster.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskCluster.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskCluster.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskCluster.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskCluster.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskCluster.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskCluster.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskCluster.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskCluster.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskCluster.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskCluster.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskCluster.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskCluster.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskCluster.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskCluster.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskCluster.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskCluster.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskCluster.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskCluster.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskCluster.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskCluster.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskCluster.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskCluster.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskCluster.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskCluster.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskCluster.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskCluster.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskCluster.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskCluster.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskCluster.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskCluster.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskCluster.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskCluster.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskCluster.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskCluster.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskCluster.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskCluster.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskCluster.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskCluster.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskCluster.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskCluster.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskCluster.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskCluster.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccMskCluster resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskCluster.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccMskCluster.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskCluster.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskCluster.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccMskCluster.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskCluster.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskCluster.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccMskCluster.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskCluster.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskCluster.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccMskCluster.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccMskCluster resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccMskCluster to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccMskCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/msk_cluster#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccMskCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskCluster.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskCluster.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskCluster.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskCluster.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskCluster.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskCluster.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskCluster.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskCluster.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskCluster.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskCluster.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskCluster.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskCluster.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskCluster.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskCluster.property.brokerNodeGroupInfo">BrokerNodeGroupInfo</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoOutputReference">DataAwsccMskClusterBrokerNodeGroupInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskCluster.property.clientAuthentication">ClientAuthentication</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationOutputReference">DataAwsccMskClusterClientAuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskCluster.property.clusterName">ClusterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskCluster.property.configurationInfo">ConfigurationInfo</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterConfigurationInfoOutputReference">DataAwsccMskClusterConfigurationInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskCluster.property.currentVersion">CurrentVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskCluster.property.encryptionInfo">EncryptionInfo</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfoOutputReference">DataAwsccMskClusterEncryptionInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskCluster.property.enhancedMonitoring">EnhancedMonitoring</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskCluster.property.kafkaVersion">KafkaVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskCluster.property.loggingInfo">LoggingInfo</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoOutputReference">DataAwsccMskClusterLoggingInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskCluster.property.numberOfBrokerNodes">NumberOfBrokerNodes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskCluster.property.openMonitoring">OpenMonitoring</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringOutputReference">DataAwsccMskClusterOpenMonitoringOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskCluster.property.rebalancing">Rebalancing</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterRebalancingOutputReference">DataAwsccMskClusterRebalancingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskCluster.property.storageMode">StorageMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskCluster.property.tags">Tags</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskCluster.property.zookeeperAccess">ZookeeperAccess</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterZookeeperAccessOutputReference">DataAwsccMskClusterZookeeperAccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskCluster.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskCluster.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskCluster.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskCluster.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskCluster.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskCluster.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskCluster.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskCluster.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskCluster.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskCluster.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskCluster.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskCluster.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskCluster.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskCluster.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskCluster.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `BrokerNodeGroupInfo`<sup>Required</sup> <a name="BrokerNodeGroupInfo" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskCluster.property.brokerNodeGroupInfo"></a>

```csharp
public DataAwsccMskClusterBrokerNodeGroupInfoOutputReference BrokerNodeGroupInfo { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoOutputReference">DataAwsccMskClusterBrokerNodeGroupInfoOutputReference</a>

---

##### `ClientAuthentication`<sup>Required</sup> <a name="ClientAuthentication" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskCluster.property.clientAuthentication"></a>

```csharp
public DataAwsccMskClusterClientAuthenticationOutputReference ClientAuthentication { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationOutputReference">DataAwsccMskClusterClientAuthenticationOutputReference</a>

---

##### `ClusterName`<sup>Required</sup> <a name="ClusterName" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskCluster.property.clusterName"></a>

```csharp
public string ClusterName { get; }
```

- *Type:* string

---

##### `ConfigurationInfo`<sup>Required</sup> <a name="ConfigurationInfo" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskCluster.property.configurationInfo"></a>

```csharp
public DataAwsccMskClusterConfigurationInfoOutputReference ConfigurationInfo { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterConfigurationInfoOutputReference">DataAwsccMskClusterConfigurationInfoOutputReference</a>

---

##### `CurrentVersion`<sup>Required</sup> <a name="CurrentVersion" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskCluster.property.currentVersion"></a>

```csharp
public string CurrentVersion { get; }
```

- *Type:* string

---

##### `EncryptionInfo`<sup>Required</sup> <a name="EncryptionInfo" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskCluster.property.encryptionInfo"></a>

```csharp
public DataAwsccMskClusterEncryptionInfoOutputReference EncryptionInfo { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfoOutputReference">DataAwsccMskClusterEncryptionInfoOutputReference</a>

---

##### `EnhancedMonitoring`<sup>Required</sup> <a name="EnhancedMonitoring" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskCluster.property.enhancedMonitoring"></a>

```csharp
public string EnhancedMonitoring { get; }
```

- *Type:* string

---

##### `KafkaVersion`<sup>Required</sup> <a name="KafkaVersion" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskCluster.property.kafkaVersion"></a>

```csharp
public string KafkaVersion { get; }
```

- *Type:* string

---

##### `LoggingInfo`<sup>Required</sup> <a name="LoggingInfo" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskCluster.property.loggingInfo"></a>

```csharp
public DataAwsccMskClusterLoggingInfoOutputReference LoggingInfo { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoOutputReference">DataAwsccMskClusterLoggingInfoOutputReference</a>

---

##### `NumberOfBrokerNodes`<sup>Required</sup> <a name="NumberOfBrokerNodes" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskCluster.property.numberOfBrokerNodes"></a>

```csharp
public double NumberOfBrokerNodes { get; }
```

- *Type:* double

---

##### `OpenMonitoring`<sup>Required</sup> <a name="OpenMonitoring" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskCluster.property.openMonitoring"></a>

```csharp
public DataAwsccMskClusterOpenMonitoringOutputReference OpenMonitoring { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringOutputReference">DataAwsccMskClusterOpenMonitoringOutputReference</a>

---

##### `Rebalancing`<sup>Required</sup> <a name="Rebalancing" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskCluster.property.rebalancing"></a>

```csharp
public DataAwsccMskClusterRebalancingOutputReference Rebalancing { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterRebalancingOutputReference">DataAwsccMskClusterRebalancingOutputReference</a>

---

##### `StorageMode`<sup>Required</sup> <a name="StorageMode" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskCluster.property.storageMode"></a>

```csharp
public string StorageMode { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskCluster.property.tags"></a>

```csharp
public StringMap Tags { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `ZookeeperAccess`<sup>Required</sup> <a name="ZookeeperAccess" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskCluster.property.zookeeperAccess"></a>

```csharp
public DataAwsccMskClusterZookeeperAccessOutputReference ZookeeperAccess { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterZookeeperAccessOutputReference">DataAwsccMskClusterZookeeperAccessOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskCluster.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskCluster.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskCluster.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskCluster.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccMskClusterBrokerNodeGroupInfo <a name="DataAwsccMskClusterBrokerNodeGroupInfo" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfo.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMskClusterBrokerNodeGroupInfo {

};
```


### DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfo <a name="DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfo" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfo.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfo {

};
```


### DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess <a name="DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess {

};
```


### DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivity <a name="DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivity" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivity.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivity {

};
```


### DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthentication <a name="DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthentication" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthentication.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthentication {

};
```


### DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSasl <a name="DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSasl" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSasl"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSasl.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSasl {

};
```


### DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIam <a name="DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIam" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIam"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIam.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIam {

};
```


### DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScram <a name="DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScram" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScram"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScram.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScram {

};
```


### DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTls <a name="DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTls" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTls"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTls.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTls {

};
```


### DataAwsccMskClusterBrokerNodeGroupInfoStorageInfo <a name="DataAwsccMskClusterBrokerNodeGroupInfoStorageInfo" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfo.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMskClusterBrokerNodeGroupInfoStorageInfo {

};
```


### DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo <a name="DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo {

};
```


### DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput <a name="DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput {

};
```


### DataAwsccMskClusterClientAuthentication <a name="DataAwsccMskClusterClientAuthentication" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthentication.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMskClusterClientAuthentication {

};
```


### DataAwsccMskClusterClientAuthenticationSasl <a name="DataAwsccMskClusterClientAuthenticationSasl" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSasl"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSasl.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMskClusterClientAuthenticationSasl {

};
```


### DataAwsccMskClusterClientAuthenticationSaslIam <a name="DataAwsccMskClusterClientAuthenticationSaslIam" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSaslIam"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSaslIam.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMskClusterClientAuthenticationSaslIam {

};
```


### DataAwsccMskClusterClientAuthenticationSaslScram <a name="DataAwsccMskClusterClientAuthenticationSaslScram" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSaslScram"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSaslScram.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMskClusterClientAuthenticationSaslScram {

};
```


### DataAwsccMskClusterClientAuthenticationTls <a name="DataAwsccMskClusterClientAuthenticationTls" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationTls"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationTls.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMskClusterClientAuthenticationTls {

};
```


### DataAwsccMskClusterClientAuthenticationUnauthenticated <a name="DataAwsccMskClusterClientAuthenticationUnauthenticated" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationUnauthenticated"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationUnauthenticated.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMskClusterClientAuthenticationUnauthenticated {

};
```


### DataAwsccMskClusterConfig <a name="DataAwsccMskClusterConfig" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMskClusterConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/msk_cluster#id DataAwsccMskCluster#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccMskClusterConfigurationInfo <a name="DataAwsccMskClusterConfigurationInfo" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterConfigurationInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterConfigurationInfo.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMskClusterConfigurationInfo {

};
```


### DataAwsccMskClusterEncryptionInfo <a name="DataAwsccMskClusterEncryptionInfo" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfo.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMskClusterEncryptionInfo {

};
```


### DataAwsccMskClusterEncryptionInfoEncryptionAtRest <a name="DataAwsccMskClusterEncryptionInfoEncryptionAtRest" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfoEncryptionAtRest"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfoEncryptionAtRest.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMskClusterEncryptionInfoEncryptionAtRest {

};
```


### DataAwsccMskClusterEncryptionInfoEncryptionInTransit <a name="DataAwsccMskClusterEncryptionInfoEncryptionInTransit" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfoEncryptionInTransit"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfoEncryptionInTransit.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMskClusterEncryptionInfoEncryptionInTransit {

};
```


### DataAwsccMskClusterLoggingInfo <a name="DataAwsccMskClusterLoggingInfo" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfo.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMskClusterLoggingInfo {

};
```


### DataAwsccMskClusterLoggingInfoBrokerLogs <a name="DataAwsccMskClusterLoggingInfoBrokerLogs" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogs.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMskClusterLoggingInfoBrokerLogs {

};
```


### DataAwsccMskClusterLoggingInfoBrokerLogsCloudwatchLogs <a name="DataAwsccMskClusterLoggingInfoBrokerLogsCloudwatchLogs" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsCloudwatchLogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsCloudwatchLogs.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMskClusterLoggingInfoBrokerLogsCloudwatchLogs {

};
```


### DataAwsccMskClusterLoggingInfoBrokerLogsFirehose <a name="DataAwsccMskClusterLoggingInfoBrokerLogsFirehose" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsFirehose"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsFirehose.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMskClusterLoggingInfoBrokerLogsFirehose {

};
```


### DataAwsccMskClusterLoggingInfoBrokerLogsS3 <a name="DataAwsccMskClusterLoggingInfoBrokerLogsS3" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsS3"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsS3.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMskClusterLoggingInfoBrokerLogsS3 {

};
```


### DataAwsccMskClusterOpenMonitoring <a name="DataAwsccMskClusterOpenMonitoring" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoring"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoring.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMskClusterOpenMonitoring {

};
```


### DataAwsccMskClusterOpenMonitoringPrometheus <a name="DataAwsccMskClusterOpenMonitoringPrometheus" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheus.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMskClusterOpenMonitoringPrometheus {

};
```


### DataAwsccMskClusterOpenMonitoringPrometheusJmxExporter <a name="DataAwsccMskClusterOpenMonitoringPrometheusJmxExporter" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheusJmxExporter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheusJmxExporter.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMskClusterOpenMonitoringPrometheusJmxExporter {

};
```


### DataAwsccMskClusterOpenMonitoringPrometheusNodeExporter <a name="DataAwsccMskClusterOpenMonitoringPrometheusNodeExporter" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheusNodeExporter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheusNodeExporter.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMskClusterOpenMonitoringPrometheusNodeExporter {

};
```


### DataAwsccMskClusterRebalancing <a name="DataAwsccMskClusterRebalancing" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterRebalancing"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterRebalancing.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMskClusterRebalancing {

};
```


### DataAwsccMskClusterZookeeperAccess <a name="DataAwsccMskClusterZookeeperAccess" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterZookeeperAccess"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterZookeeperAccess.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMskClusterZookeeperAccess {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference <a name="DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.property.networkType">NetworkType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.property.publicAccess">PublicAccess</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference">DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.property.vpcConnectivity">VpcConnectivity</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference">DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfo">DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NetworkType`<sup>Required</sup> <a name="NetworkType" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.property.networkType"></a>

```csharp
public string NetworkType { get; }
```

- *Type:* string

---

##### `PublicAccess`<sup>Required</sup> <a name="PublicAccess" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.property.publicAccess"></a>

```csharp
public DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference PublicAccess { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference">DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference</a>

---

##### `VpcConnectivity`<sup>Required</sup> <a name="VpcConnectivity" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.property.vpcConnectivity"></a>

```csharp
public DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference VpcConnectivity { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference">DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfo InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfo">DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfo</a>

---


### DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference <a name="DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess">DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess">DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess</a>

---


### DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference <a name="DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.property.sasl">Sasl</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference">DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.property.tls">Tls</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference">DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthentication">DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthentication</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Sasl`<sup>Required</sup> <a name="Sasl" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.property.sasl"></a>

```csharp
public DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference Sasl { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference">DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference</a>

---

##### `Tls`<sup>Required</sup> <a name="Tls" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.property.tls"></a>

```csharp
public DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference Tls { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference">DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthentication InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthentication">DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthentication</a>

---


### DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference <a name="DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference.property.enabled">Enabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIam">DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIam</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference.property.enabled"></a>

```csharp
public IResolvable Enabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIam InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIam">DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIam</a>

---


### DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference <a name="DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.property.iam">Iam</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference">DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.property.scram">Scram</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference">DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSasl">DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSasl</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Iam`<sup>Required</sup> <a name="Iam" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.property.iam"></a>

```csharp
public DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference Iam { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference">DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference</a>

---

##### `Scram`<sup>Required</sup> <a name="Scram" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.property.scram"></a>

```csharp
public DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference Scram { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference">DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSasl InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSasl">DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSasl</a>

---


### DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference <a name="DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference.property.enabled">Enabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScram">DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScram</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference.property.enabled"></a>

```csharp
public IResolvable Enabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScram InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScram">DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScram</a>

---


### DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference <a name="DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference.property.enabled">Enabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTls">DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTls</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference.property.enabled"></a>

```csharp
public IResolvable Enabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTls InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTls">DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTls</a>

---


### DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference <a name="DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.property.clientAuthentication">ClientAuthentication</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference">DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivity">DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClientAuthentication`<sup>Required</sup> <a name="ClientAuthentication" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.property.clientAuthentication"></a>

```csharp
public DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference ClientAuthentication { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference">DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivity InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivity">DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivity</a>

---


### DataAwsccMskClusterBrokerNodeGroupInfoOutputReference <a name="DataAwsccMskClusterBrokerNodeGroupInfoOutputReference" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMskClusterBrokerNodeGroupInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoOutputReference.property.brokerAzDistribution">BrokerAzDistribution</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoOutputReference.property.clientSubnets">ClientSubnets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoOutputReference.property.connectivityInfo">ConnectivityInfo</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference">DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoOutputReference.property.instanceType">InstanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoOutputReference.property.securityGroups">SecurityGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoOutputReference.property.storageInfo">StorageInfo</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoOutputReference">DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfo">DataAwsccMskClusterBrokerNodeGroupInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BrokerAzDistribution`<sup>Required</sup> <a name="BrokerAzDistribution" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoOutputReference.property.brokerAzDistribution"></a>

```csharp
public string BrokerAzDistribution { get; }
```

- *Type:* string

---

##### `ClientSubnets`<sup>Required</sup> <a name="ClientSubnets" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoOutputReference.property.clientSubnets"></a>

```csharp
public string[] ClientSubnets { get; }
```

- *Type:* string[]

---

##### `ConnectivityInfo`<sup>Required</sup> <a name="ConnectivityInfo" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoOutputReference.property.connectivityInfo"></a>

```csharp
public DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference ConnectivityInfo { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference">DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference</a>

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoOutputReference.property.instanceType"></a>

```csharp
public string InstanceType { get; }
```

- *Type:* string

---

##### `SecurityGroups`<sup>Required</sup> <a name="SecurityGroups" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoOutputReference.property.securityGroups"></a>

```csharp
public string[] SecurityGroups { get; }
```

- *Type:* string[]

---

##### `StorageInfo`<sup>Required</sup> <a name="StorageInfo" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoOutputReference.property.storageInfo"></a>

```csharp
public DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoOutputReference StorageInfo { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoOutputReference">DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMskClusterBrokerNodeGroupInfo InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfo">DataAwsccMskClusterBrokerNodeGroupInfo</a>

---


### DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference <a name="DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.property.provisionedThroughput">ProvisionedThroughput</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference">DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.property.volumeSize">VolumeSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo">DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ProvisionedThroughput`<sup>Required</sup> <a name="ProvisionedThroughput" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.property.provisionedThroughput"></a>

```csharp
public DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference ProvisionedThroughput { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference">DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference</a>

---

##### `VolumeSize`<sup>Required</sup> <a name="VolumeSize" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.property.volumeSize"></a>

```csharp
public double VolumeSize { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo">DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo</a>

---


### DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference <a name="DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.property.enabled">Enabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.property.volumeThroughput">VolumeThroughput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput">DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.property.enabled"></a>

```csharp
public IResolvable Enabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `VolumeThroughput`<sup>Required</sup> <a name="VolumeThroughput" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.property.volumeThroughput"></a>

```csharp
public double VolumeThroughput { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput">DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput</a>

---


### DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoOutputReference <a name="DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoOutputReference" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoOutputReference.property.ebsStorageInfo">EbsStorageInfo</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference">DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfo">DataAwsccMskClusterBrokerNodeGroupInfoStorageInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EbsStorageInfo`<sup>Required</sup> <a name="EbsStorageInfo" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoOutputReference.property.ebsStorageInfo"></a>

```csharp
public DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference EbsStorageInfo { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference">DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMskClusterBrokerNodeGroupInfoStorageInfo InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterBrokerNodeGroupInfoStorageInfo">DataAwsccMskClusterBrokerNodeGroupInfoStorageInfo</a>

---


### DataAwsccMskClusterClientAuthenticationOutputReference <a name="DataAwsccMskClusterClientAuthenticationOutputReference" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMskClusterClientAuthenticationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationOutputReference.property.sasl">Sasl</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSaslOutputReference">DataAwsccMskClusterClientAuthenticationSaslOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationOutputReference.property.tls">Tls</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationTlsOutputReference">DataAwsccMskClusterClientAuthenticationTlsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationOutputReference.property.unauthenticated">Unauthenticated</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationUnauthenticatedOutputReference">DataAwsccMskClusterClientAuthenticationUnauthenticatedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthentication">DataAwsccMskClusterClientAuthentication</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Sasl`<sup>Required</sup> <a name="Sasl" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationOutputReference.property.sasl"></a>

```csharp
public DataAwsccMskClusterClientAuthenticationSaslOutputReference Sasl { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSaslOutputReference">DataAwsccMskClusterClientAuthenticationSaslOutputReference</a>

---

##### `Tls`<sup>Required</sup> <a name="Tls" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationOutputReference.property.tls"></a>

```csharp
public DataAwsccMskClusterClientAuthenticationTlsOutputReference Tls { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationTlsOutputReference">DataAwsccMskClusterClientAuthenticationTlsOutputReference</a>

---

##### `Unauthenticated`<sup>Required</sup> <a name="Unauthenticated" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationOutputReference.property.unauthenticated"></a>

```csharp
public DataAwsccMskClusterClientAuthenticationUnauthenticatedOutputReference Unauthenticated { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationUnauthenticatedOutputReference">DataAwsccMskClusterClientAuthenticationUnauthenticatedOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMskClusterClientAuthentication InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthentication">DataAwsccMskClusterClientAuthentication</a>

---


### DataAwsccMskClusterClientAuthenticationSaslIamOutputReference <a name="DataAwsccMskClusterClientAuthenticationSaslIamOutputReference" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSaslIamOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSaslIamOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMskClusterClientAuthenticationSaslIamOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSaslIamOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSaslIamOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSaslIamOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSaslIamOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSaslIamOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSaslIamOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSaslIamOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSaslIamOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSaslIamOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSaslIamOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSaslIamOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSaslIamOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSaslIamOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSaslIamOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSaslIamOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSaslIamOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSaslIamOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSaslIamOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSaslIamOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSaslIamOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSaslIamOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSaslIamOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSaslIamOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSaslIamOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSaslIamOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSaslIamOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSaslIamOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSaslIamOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSaslIamOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSaslIamOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSaslIamOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSaslIamOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSaslIamOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSaslIamOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSaslIamOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSaslIamOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSaslIamOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSaslIamOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSaslIamOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSaslIamOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSaslIamOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSaslIamOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSaslIamOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSaslIamOutputReference.property.enabled">Enabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSaslIamOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSaslIam">DataAwsccMskClusterClientAuthenticationSaslIam</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSaslIamOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSaslIamOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSaslIamOutputReference.property.enabled"></a>

```csharp
public IResolvable Enabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSaslIamOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMskClusterClientAuthenticationSaslIam InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSaslIam">DataAwsccMskClusterClientAuthenticationSaslIam</a>

---


### DataAwsccMskClusterClientAuthenticationSaslOutputReference <a name="DataAwsccMskClusterClientAuthenticationSaslOutputReference" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSaslOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSaslOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMskClusterClientAuthenticationSaslOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSaslOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSaslOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSaslOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSaslOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSaslOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSaslOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSaslOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSaslOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSaslOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSaslOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSaslOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSaslOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSaslOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSaslOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSaslOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSaslOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSaslOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSaslOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSaslOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSaslOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSaslOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSaslOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSaslOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSaslOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSaslOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSaslOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSaslOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSaslOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSaslOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSaslOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSaslOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSaslOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSaslOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSaslOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSaslOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSaslOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSaslOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSaslOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSaslOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSaslOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSaslOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSaslOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSaslOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSaslOutputReference.property.iam">Iam</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSaslIamOutputReference">DataAwsccMskClusterClientAuthenticationSaslIamOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSaslOutputReference.property.scram">Scram</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSaslScramOutputReference">DataAwsccMskClusterClientAuthenticationSaslScramOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSaslOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSasl">DataAwsccMskClusterClientAuthenticationSasl</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSaslOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSaslOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Iam`<sup>Required</sup> <a name="Iam" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSaslOutputReference.property.iam"></a>

```csharp
public DataAwsccMskClusterClientAuthenticationSaslIamOutputReference Iam { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSaslIamOutputReference">DataAwsccMskClusterClientAuthenticationSaslIamOutputReference</a>

---

##### `Scram`<sup>Required</sup> <a name="Scram" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSaslOutputReference.property.scram"></a>

```csharp
public DataAwsccMskClusterClientAuthenticationSaslScramOutputReference Scram { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSaslScramOutputReference">DataAwsccMskClusterClientAuthenticationSaslScramOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSaslOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMskClusterClientAuthenticationSasl InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSasl">DataAwsccMskClusterClientAuthenticationSasl</a>

---


### DataAwsccMskClusterClientAuthenticationSaslScramOutputReference <a name="DataAwsccMskClusterClientAuthenticationSaslScramOutputReference" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSaslScramOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSaslScramOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMskClusterClientAuthenticationSaslScramOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSaslScramOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSaslScramOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSaslScramOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSaslScramOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSaslScramOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSaslScramOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSaslScramOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSaslScramOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSaslScramOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSaslScramOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSaslScramOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSaslScramOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSaslScramOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSaslScramOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSaslScramOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSaslScramOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSaslScramOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSaslScramOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSaslScramOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSaslScramOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSaslScramOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSaslScramOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSaslScramOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSaslScramOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSaslScramOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSaslScramOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSaslScramOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSaslScramOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSaslScramOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSaslScramOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSaslScramOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSaslScramOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSaslScramOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSaslScramOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSaslScramOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSaslScramOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSaslScramOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSaslScramOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSaslScramOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSaslScramOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSaslScramOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSaslScramOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSaslScramOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSaslScramOutputReference.property.enabled">Enabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSaslScramOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSaslScram">DataAwsccMskClusterClientAuthenticationSaslScram</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSaslScramOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSaslScramOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSaslScramOutputReference.property.enabled"></a>

```csharp
public IResolvable Enabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSaslScramOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMskClusterClientAuthenticationSaslScram InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationSaslScram">DataAwsccMskClusterClientAuthenticationSaslScram</a>

---


### DataAwsccMskClusterClientAuthenticationTlsOutputReference <a name="DataAwsccMskClusterClientAuthenticationTlsOutputReference" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationTlsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationTlsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMskClusterClientAuthenticationTlsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationTlsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationTlsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationTlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationTlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationTlsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationTlsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationTlsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationTlsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationTlsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationTlsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationTlsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationTlsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationTlsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationTlsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationTlsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationTlsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationTlsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationTlsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationTlsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationTlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationTlsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationTlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationTlsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationTlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationTlsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationTlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationTlsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationTlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationTlsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationTlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationTlsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationTlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationTlsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationTlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationTlsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationTlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationTlsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationTlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationTlsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationTlsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationTlsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationTlsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationTlsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationTlsOutputReference.property.certificateAuthorityArnList">CertificateAuthorityArnList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationTlsOutputReference.property.enabled">Enabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationTlsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationTls">DataAwsccMskClusterClientAuthenticationTls</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationTlsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationTlsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CertificateAuthorityArnList`<sup>Required</sup> <a name="CertificateAuthorityArnList" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationTlsOutputReference.property.certificateAuthorityArnList"></a>

```csharp
public string[] CertificateAuthorityArnList { get; }
```

- *Type:* string[]

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationTlsOutputReference.property.enabled"></a>

```csharp
public IResolvable Enabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationTlsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMskClusterClientAuthenticationTls InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationTls">DataAwsccMskClusterClientAuthenticationTls</a>

---


### DataAwsccMskClusterClientAuthenticationUnauthenticatedOutputReference <a name="DataAwsccMskClusterClientAuthenticationUnauthenticatedOutputReference" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationUnauthenticatedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationUnauthenticatedOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMskClusterClientAuthenticationUnauthenticatedOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationUnauthenticatedOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationUnauthenticatedOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationUnauthenticatedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationUnauthenticatedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationUnauthenticatedOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationUnauthenticatedOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationUnauthenticatedOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationUnauthenticatedOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationUnauthenticatedOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationUnauthenticatedOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationUnauthenticatedOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationUnauthenticatedOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationUnauthenticatedOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationUnauthenticatedOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationUnauthenticatedOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationUnauthenticatedOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationUnauthenticatedOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationUnauthenticatedOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationUnauthenticatedOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationUnauthenticatedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationUnauthenticatedOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationUnauthenticatedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationUnauthenticatedOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationUnauthenticatedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationUnauthenticatedOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationUnauthenticatedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationUnauthenticatedOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationUnauthenticatedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationUnauthenticatedOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationUnauthenticatedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationUnauthenticatedOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationUnauthenticatedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationUnauthenticatedOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationUnauthenticatedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationUnauthenticatedOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationUnauthenticatedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationUnauthenticatedOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationUnauthenticatedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationUnauthenticatedOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationUnauthenticatedOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationUnauthenticatedOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationUnauthenticatedOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationUnauthenticatedOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationUnauthenticatedOutputReference.property.enabled">Enabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationUnauthenticatedOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationUnauthenticated">DataAwsccMskClusterClientAuthenticationUnauthenticated</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationUnauthenticatedOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationUnauthenticatedOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationUnauthenticatedOutputReference.property.enabled"></a>

```csharp
public IResolvable Enabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationUnauthenticatedOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMskClusterClientAuthenticationUnauthenticated InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterClientAuthenticationUnauthenticated">DataAwsccMskClusterClientAuthenticationUnauthenticated</a>

---


### DataAwsccMskClusterConfigurationInfoOutputReference <a name="DataAwsccMskClusterConfigurationInfoOutputReference" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterConfigurationInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterConfigurationInfoOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMskClusterConfigurationInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterConfigurationInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterConfigurationInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterConfigurationInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterConfigurationInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterConfigurationInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterConfigurationInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterConfigurationInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterConfigurationInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterConfigurationInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterConfigurationInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterConfigurationInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterConfigurationInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterConfigurationInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterConfigurationInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterConfigurationInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterConfigurationInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterConfigurationInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterConfigurationInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterConfigurationInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterConfigurationInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterConfigurationInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterConfigurationInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterConfigurationInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterConfigurationInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterConfigurationInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterConfigurationInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterConfigurationInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterConfigurationInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterConfigurationInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterConfigurationInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterConfigurationInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterConfigurationInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterConfigurationInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterConfigurationInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterConfigurationInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterConfigurationInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterConfigurationInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterConfigurationInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterConfigurationInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterConfigurationInfoOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterConfigurationInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterConfigurationInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterConfigurationInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterConfigurationInfoOutputReference.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterConfigurationInfoOutputReference.property.revision">Revision</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterConfigurationInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterConfigurationInfo">DataAwsccMskClusterConfigurationInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterConfigurationInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterConfigurationInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterConfigurationInfoOutputReference.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Revision`<sup>Required</sup> <a name="Revision" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterConfigurationInfoOutputReference.property.revision"></a>

```csharp
public double Revision { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterConfigurationInfoOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMskClusterConfigurationInfo InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterConfigurationInfo">DataAwsccMskClusterConfigurationInfo</a>

---


### DataAwsccMskClusterEncryptionInfoEncryptionAtRestOutputReference <a name="DataAwsccMskClusterEncryptionInfoEncryptionAtRestOutputReference" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfoEncryptionAtRestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfoEncryptionAtRestOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMskClusterEncryptionInfoEncryptionAtRestOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfoEncryptionAtRestOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfoEncryptionAtRestOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfoEncryptionAtRestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfoEncryptionAtRestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfoEncryptionAtRestOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfoEncryptionAtRestOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfoEncryptionAtRestOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfoEncryptionAtRestOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfoEncryptionAtRestOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfoEncryptionAtRestOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfoEncryptionAtRestOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfoEncryptionAtRestOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfoEncryptionAtRestOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfoEncryptionAtRestOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfoEncryptionAtRestOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfoEncryptionAtRestOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfoEncryptionAtRestOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfoEncryptionAtRestOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfoEncryptionAtRestOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfoEncryptionAtRestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfoEncryptionAtRestOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfoEncryptionAtRestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfoEncryptionAtRestOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfoEncryptionAtRestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfoEncryptionAtRestOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfoEncryptionAtRestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfoEncryptionAtRestOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfoEncryptionAtRestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfoEncryptionAtRestOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfoEncryptionAtRestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfoEncryptionAtRestOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfoEncryptionAtRestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfoEncryptionAtRestOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfoEncryptionAtRestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfoEncryptionAtRestOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfoEncryptionAtRestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfoEncryptionAtRestOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfoEncryptionAtRestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfoEncryptionAtRestOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfoEncryptionAtRestOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfoEncryptionAtRestOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfoEncryptionAtRestOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfoEncryptionAtRestOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfoEncryptionAtRestOutputReference.property.dataVolumeKmsKeyId">DataVolumeKmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfoEncryptionAtRestOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfoEncryptionAtRest">DataAwsccMskClusterEncryptionInfoEncryptionAtRest</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfoEncryptionAtRestOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfoEncryptionAtRestOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DataVolumeKmsKeyId`<sup>Required</sup> <a name="DataVolumeKmsKeyId" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfoEncryptionAtRestOutputReference.property.dataVolumeKmsKeyId"></a>

```csharp
public string DataVolumeKmsKeyId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfoEncryptionAtRestOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMskClusterEncryptionInfoEncryptionAtRest InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfoEncryptionAtRest">DataAwsccMskClusterEncryptionInfoEncryptionAtRest</a>

---


### DataAwsccMskClusterEncryptionInfoEncryptionInTransitOutputReference <a name="DataAwsccMskClusterEncryptionInfoEncryptionInTransitOutputReference" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfoEncryptionInTransitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfoEncryptionInTransitOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMskClusterEncryptionInfoEncryptionInTransitOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfoEncryptionInTransitOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfoEncryptionInTransitOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfoEncryptionInTransitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfoEncryptionInTransitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfoEncryptionInTransitOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfoEncryptionInTransitOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfoEncryptionInTransitOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfoEncryptionInTransitOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfoEncryptionInTransitOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfoEncryptionInTransitOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfoEncryptionInTransitOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfoEncryptionInTransitOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfoEncryptionInTransitOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfoEncryptionInTransitOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfoEncryptionInTransitOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfoEncryptionInTransitOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfoEncryptionInTransitOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfoEncryptionInTransitOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfoEncryptionInTransitOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfoEncryptionInTransitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfoEncryptionInTransitOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfoEncryptionInTransitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfoEncryptionInTransitOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfoEncryptionInTransitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfoEncryptionInTransitOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfoEncryptionInTransitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfoEncryptionInTransitOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfoEncryptionInTransitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfoEncryptionInTransitOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfoEncryptionInTransitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfoEncryptionInTransitOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfoEncryptionInTransitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfoEncryptionInTransitOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfoEncryptionInTransitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfoEncryptionInTransitOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfoEncryptionInTransitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfoEncryptionInTransitOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfoEncryptionInTransitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfoEncryptionInTransitOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfoEncryptionInTransitOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfoEncryptionInTransitOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfoEncryptionInTransitOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfoEncryptionInTransitOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfoEncryptionInTransitOutputReference.property.clientBroker">ClientBroker</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfoEncryptionInTransitOutputReference.property.inCluster">InCluster</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfoEncryptionInTransitOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfoEncryptionInTransit">DataAwsccMskClusterEncryptionInfoEncryptionInTransit</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfoEncryptionInTransitOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfoEncryptionInTransitOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClientBroker`<sup>Required</sup> <a name="ClientBroker" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfoEncryptionInTransitOutputReference.property.clientBroker"></a>

```csharp
public string ClientBroker { get; }
```

- *Type:* string

---

##### `InCluster`<sup>Required</sup> <a name="InCluster" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfoEncryptionInTransitOutputReference.property.inCluster"></a>

```csharp
public IResolvable InCluster { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfoEncryptionInTransitOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMskClusterEncryptionInfoEncryptionInTransit InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfoEncryptionInTransit">DataAwsccMskClusterEncryptionInfoEncryptionInTransit</a>

---


### DataAwsccMskClusterEncryptionInfoOutputReference <a name="DataAwsccMskClusterEncryptionInfoOutputReference" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfoOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMskClusterEncryptionInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfoOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfoOutputReference.property.encryptionAtRest">EncryptionAtRest</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfoEncryptionAtRestOutputReference">DataAwsccMskClusterEncryptionInfoEncryptionAtRestOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfoOutputReference.property.encryptionInTransit">EncryptionInTransit</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfoEncryptionInTransitOutputReference">DataAwsccMskClusterEncryptionInfoEncryptionInTransitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfo">DataAwsccMskClusterEncryptionInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EncryptionAtRest`<sup>Required</sup> <a name="EncryptionAtRest" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfoOutputReference.property.encryptionAtRest"></a>

```csharp
public DataAwsccMskClusterEncryptionInfoEncryptionAtRestOutputReference EncryptionAtRest { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfoEncryptionAtRestOutputReference">DataAwsccMskClusterEncryptionInfoEncryptionAtRestOutputReference</a>

---

##### `EncryptionInTransit`<sup>Required</sup> <a name="EncryptionInTransit" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfoOutputReference.property.encryptionInTransit"></a>

```csharp
public DataAwsccMskClusterEncryptionInfoEncryptionInTransitOutputReference EncryptionInTransit { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfoEncryptionInTransitOutputReference">DataAwsccMskClusterEncryptionInfoEncryptionInTransitOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfoOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMskClusterEncryptionInfo InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterEncryptionInfo">DataAwsccMskClusterEncryptionInfo</a>

---


### DataAwsccMskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference <a name="DataAwsccMskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.property.enabled">Enabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.property.logGroup">LogGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsCloudwatchLogs">DataAwsccMskClusterLoggingInfoBrokerLogsCloudwatchLogs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.property.enabled"></a>

```csharp
public IResolvable Enabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `LogGroup`<sup>Required</sup> <a name="LogGroup" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.property.logGroup"></a>

```csharp
public string LogGroup { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMskClusterLoggingInfoBrokerLogsCloudwatchLogs InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsCloudwatchLogs">DataAwsccMskClusterLoggingInfoBrokerLogsCloudwatchLogs</a>

---


### DataAwsccMskClusterLoggingInfoBrokerLogsFirehoseOutputReference <a name="DataAwsccMskClusterLoggingInfoBrokerLogsFirehoseOutputReference" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsFirehoseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsFirehoseOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMskClusterLoggingInfoBrokerLogsFirehoseOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsFirehoseOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsFirehoseOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsFirehoseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsFirehoseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsFirehoseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsFirehoseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsFirehoseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsFirehoseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsFirehoseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsFirehoseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsFirehoseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsFirehoseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsFirehoseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsFirehoseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsFirehoseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsFirehoseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsFirehoseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsFirehoseOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsFirehoseOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsFirehoseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsFirehoseOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsFirehoseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsFirehoseOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsFirehoseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsFirehoseOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsFirehoseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsFirehoseOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsFirehoseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsFirehoseOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsFirehoseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsFirehoseOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsFirehoseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsFirehoseOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsFirehoseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsFirehoseOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsFirehoseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsFirehoseOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsFirehoseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsFirehoseOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsFirehoseOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsFirehoseOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsFirehoseOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsFirehoseOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsFirehoseOutputReference.property.deliveryStream">DeliveryStream</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsFirehoseOutputReference.property.enabled">Enabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsFirehoseOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsFirehose">DataAwsccMskClusterLoggingInfoBrokerLogsFirehose</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsFirehoseOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsFirehoseOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DeliveryStream`<sup>Required</sup> <a name="DeliveryStream" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsFirehoseOutputReference.property.deliveryStream"></a>

```csharp
public string DeliveryStream { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsFirehoseOutputReference.property.enabled"></a>

```csharp
public IResolvable Enabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsFirehoseOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMskClusterLoggingInfoBrokerLogsFirehose InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsFirehose">DataAwsccMskClusterLoggingInfoBrokerLogsFirehose</a>

---


### DataAwsccMskClusterLoggingInfoBrokerLogsOutputReference <a name="DataAwsccMskClusterLoggingInfoBrokerLogsOutputReference" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMskClusterLoggingInfoBrokerLogsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsOutputReference.property.cloudwatchLogs">CloudwatchLogs</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference">DataAwsccMskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsOutputReference.property.firehose">Firehose</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsFirehoseOutputReference">DataAwsccMskClusterLoggingInfoBrokerLogsFirehoseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsOutputReference.property.s3">S3</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsS3OutputReference">DataAwsccMskClusterLoggingInfoBrokerLogsS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogs">DataAwsccMskClusterLoggingInfoBrokerLogs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CloudwatchLogs`<sup>Required</sup> <a name="CloudwatchLogs" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsOutputReference.property.cloudwatchLogs"></a>

```csharp
public DataAwsccMskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference CloudwatchLogs { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference">DataAwsccMskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference</a>

---

##### `Firehose`<sup>Required</sup> <a name="Firehose" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsOutputReference.property.firehose"></a>

```csharp
public DataAwsccMskClusterLoggingInfoBrokerLogsFirehoseOutputReference Firehose { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsFirehoseOutputReference">DataAwsccMskClusterLoggingInfoBrokerLogsFirehoseOutputReference</a>

---

##### `S3`<sup>Required</sup> <a name="S3" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsOutputReference.property.s3"></a>

```csharp
public DataAwsccMskClusterLoggingInfoBrokerLogsS3OutputReference S3 { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsS3OutputReference">DataAwsccMskClusterLoggingInfoBrokerLogsS3OutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMskClusterLoggingInfoBrokerLogs InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogs">DataAwsccMskClusterLoggingInfoBrokerLogs</a>

---


### DataAwsccMskClusterLoggingInfoBrokerLogsS3OutputReference <a name="DataAwsccMskClusterLoggingInfoBrokerLogsS3OutputReference" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsS3OutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMskClusterLoggingInfoBrokerLogsS3OutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsS3OutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsS3OutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsS3OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsS3OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsS3OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsS3OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsS3OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsS3OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsS3OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsS3OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsS3OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsS3OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsS3OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsS3OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsS3OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsS3OutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsS3OutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsS3OutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsS3OutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsS3OutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsS3OutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsS3OutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsS3OutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsS3OutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsS3OutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsS3OutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsS3OutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsS3OutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsS3OutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsS3OutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsS3OutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsS3OutputReference.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsS3OutputReference.property.enabled">Enabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsS3OutputReference.property.prefix">Prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsS3OutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsS3">DataAwsccMskClusterLoggingInfoBrokerLogsS3</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsS3OutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsS3OutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsS3OutputReference.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsS3OutputReference.property.enabled"></a>

```csharp
public IResolvable Enabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsS3OutputReference.property.prefix"></a>

```csharp
public string Prefix { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsS3OutputReference.property.internalValue"></a>

```csharp
public DataAwsccMskClusterLoggingInfoBrokerLogsS3 InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsS3">DataAwsccMskClusterLoggingInfoBrokerLogsS3</a>

---


### DataAwsccMskClusterLoggingInfoOutputReference <a name="DataAwsccMskClusterLoggingInfoOutputReference" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMskClusterLoggingInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoOutputReference.property.brokerLogs">BrokerLogs</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsOutputReference">DataAwsccMskClusterLoggingInfoBrokerLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfo">DataAwsccMskClusterLoggingInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BrokerLogs`<sup>Required</sup> <a name="BrokerLogs" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoOutputReference.property.brokerLogs"></a>

```csharp
public DataAwsccMskClusterLoggingInfoBrokerLogsOutputReference BrokerLogs { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoBrokerLogsOutputReference">DataAwsccMskClusterLoggingInfoBrokerLogsOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfoOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMskClusterLoggingInfo InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterLoggingInfo">DataAwsccMskClusterLoggingInfo</a>

---


### DataAwsccMskClusterOpenMonitoringOutputReference <a name="DataAwsccMskClusterOpenMonitoringOutputReference" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMskClusterOpenMonitoringOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringOutputReference.property.prometheus">Prometheus</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheusOutputReference">DataAwsccMskClusterOpenMonitoringPrometheusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoring">DataAwsccMskClusterOpenMonitoring</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Prometheus`<sup>Required</sup> <a name="Prometheus" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringOutputReference.property.prometheus"></a>

```csharp
public DataAwsccMskClusterOpenMonitoringPrometheusOutputReference Prometheus { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheusOutputReference">DataAwsccMskClusterOpenMonitoringPrometheusOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMskClusterOpenMonitoring InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoring">DataAwsccMskClusterOpenMonitoring</a>

---


### DataAwsccMskClusterOpenMonitoringPrometheusJmxExporterOutputReference <a name="DataAwsccMskClusterOpenMonitoringPrometheusJmxExporterOutputReference" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheusJmxExporterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheusJmxExporterOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMskClusterOpenMonitoringPrometheusJmxExporterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheusJmxExporterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheusJmxExporterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheusJmxExporterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheusJmxExporterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheusJmxExporterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheusJmxExporterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheusJmxExporterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheusJmxExporterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheusJmxExporterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheusJmxExporterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheusJmxExporterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheusJmxExporterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheusJmxExporterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheusJmxExporterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheusJmxExporterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheusJmxExporterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheusJmxExporterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheusJmxExporterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheusJmxExporterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheusJmxExporterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheusJmxExporterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheusJmxExporterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheusJmxExporterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheusJmxExporterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheusJmxExporterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheusJmxExporterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheusJmxExporterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheusJmxExporterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheusJmxExporterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheusJmxExporterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheusJmxExporterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheusJmxExporterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheusJmxExporterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheusJmxExporterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheusJmxExporterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheusJmxExporterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheusJmxExporterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheusJmxExporterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheusJmxExporterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheusJmxExporterOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheusJmxExporterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheusJmxExporterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheusJmxExporterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheusJmxExporterOutputReference.property.enabledInBroker">EnabledInBroker</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheusJmxExporterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheusJmxExporter">DataAwsccMskClusterOpenMonitoringPrometheusJmxExporter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheusJmxExporterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheusJmxExporterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInBroker`<sup>Required</sup> <a name="EnabledInBroker" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheusJmxExporterOutputReference.property.enabledInBroker"></a>

```csharp
public IResolvable EnabledInBroker { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheusJmxExporterOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMskClusterOpenMonitoringPrometheusJmxExporter InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheusJmxExporter">DataAwsccMskClusterOpenMonitoringPrometheusJmxExporter</a>

---


### DataAwsccMskClusterOpenMonitoringPrometheusNodeExporterOutputReference <a name="DataAwsccMskClusterOpenMonitoringPrometheusNodeExporterOutputReference" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheusNodeExporterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheusNodeExporterOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMskClusterOpenMonitoringPrometheusNodeExporterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheusNodeExporterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheusNodeExporterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheusNodeExporterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheusNodeExporterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheusNodeExporterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheusNodeExporterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheusNodeExporterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheusNodeExporterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheusNodeExporterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheusNodeExporterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheusNodeExporterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheusNodeExporterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheusNodeExporterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheusNodeExporterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheusNodeExporterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheusNodeExporterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheusNodeExporterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheusNodeExporterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheusNodeExporterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheusNodeExporterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheusNodeExporterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheusNodeExporterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheusNodeExporterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheusNodeExporterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheusNodeExporterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheusNodeExporterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheusNodeExporterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheusNodeExporterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheusNodeExporterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheusNodeExporterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheusNodeExporterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheusNodeExporterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheusNodeExporterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheusNodeExporterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheusNodeExporterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheusNodeExporterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheusNodeExporterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheusNodeExporterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheusNodeExporterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheusNodeExporterOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheusNodeExporterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheusNodeExporterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheusNodeExporterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheusNodeExporterOutputReference.property.enabledInBroker">EnabledInBroker</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheusNodeExporterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheusNodeExporter">DataAwsccMskClusterOpenMonitoringPrometheusNodeExporter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheusNodeExporterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheusNodeExporterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInBroker`<sup>Required</sup> <a name="EnabledInBroker" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheusNodeExporterOutputReference.property.enabledInBroker"></a>

```csharp
public IResolvable EnabledInBroker { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheusNodeExporterOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMskClusterOpenMonitoringPrometheusNodeExporter InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheusNodeExporter">DataAwsccMskClusterOpenMonitoringPrometheusNodeExporter</a>

---


### DataAwsccMskClusterOpenMonitoringPrometheusOutputReference <a name="DataAwsccMskClusterOpenMonitoringPrometheusOutputReference" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheusOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMskClusterOpenMonitoringPrometheusOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheusOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheusOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheusOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheusOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheusOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheusOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheusOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheusOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheusOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheusOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheusOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheusOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheusOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheusOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheusOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheusOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheusOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheusOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheusOutputReference.property.jmxExporter">JmxExporter</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheusJmxExporterOutputReference">DataAwsccMskClusterOpenMonitoringPrometheusJmxExporterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheusOutputReference.property.nodeExporter">NodeExporter</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheusNodeExporterOutputReference">DataAwsccMskClusterOpenMonitoringPrometheusNodeExporterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheus">DataAwsccMskClusterOpenMonitoringPrometheus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheusOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheusOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `JmxExporter`<sup>Required</sup> <a name="JmxExporter" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheusOutputReference.property.jmxExporter"></a>

```csharp
public DataAwsccMskClusterOpenMonitoringPrometheusJmxExporterOutputReference JmxExporter { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheusJmxExporterOutputReference">DataAwsccMskClusterOpenMonitoringPrometheusJmxExporterOutputReference</a>

---

##### `NodeExporter`<sup>Required</sup> <a name="NodeExporter" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheusOutputReference.property.nodeExporter"></a>

```csharp
public DataAwsccMskClusterOpenMonitoringPrometheusNodeExporterOutputReference NodeExporter { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheusNodeExporterOutputReference">DataAwsccMskClusterOpenMonitoringPrometheusNodeExporterOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheusOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMskClusterOpenMonitoringPrometheus InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterOpenMonitoringPrometheus">DataAwsccMskClusterOpenMonitoringPrometheus</a>

---


### DataAwsccMskClusterRebalancingOutputReference <a name="DataAwsccMskClusterRebalancingOutputReference" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterRebalancingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterRebalancingOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMskClusterRebalancingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterRebalancingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterRebalancingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterRebalancingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterRebalancingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterRebalancingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterRebalancingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterRebalancingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterRebalancingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterRebalancingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterRebalancingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterRebalancingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterRebalancingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterRebalancingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterRebalancingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterRebalancingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterRebalancingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterRebalancingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterRebalancingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterRebalancingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterRebalancingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterRebalancingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterRebalancingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterRebalancingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterRebalancingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterRebalancingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterRebalancingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterRebalancingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterRebalancingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterRebalancingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterRebalancingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterRebalancingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterRebalancingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterRebalancingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterRebalancingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterRebalancingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterRebalancingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterRebalancingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterRebalancingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterRebalancingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterRebalancingOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterRebalancingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterRebalancingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterRebalancingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterRebalancingOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterRebalancingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterRebalancing">DataAwsccMskClusterRebalancing</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterRebalancingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterRebalancingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterRebalancingOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterRebalancingOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMskClusterRebalancing InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterRebalancing">DataAwsccMskClusterRebalancing</a>

---


### DataAwsccMskClusterZookeeperAccessOutputReference <a name="DataAwsccMskClusterZookeeperAccessOutputReference" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterZookeeperAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterZookeeperAccessOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMskClusterZookeeperAccessOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterZookeeperAccessOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterZookeeperAccessOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterZookeeperAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterZookeeperAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterZookeeperAccessOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterZookeeperAccessOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterZookeeperAccessOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterZookeeperAccessOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterZookeeperAccessOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterZookeeperAccessOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterZookeeperAccessOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterZookeeperAccessOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterZookeeperAccessOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterZookeeperAccessOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterZookeeperAccessOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterZookeeperAccessOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterZookeeperAccessOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterZookeeperAccessOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterZookeeperAccessOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterZookeeperAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterZookeeperAccessOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterZookeeperAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterZookeeperAccessOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterZookeeperAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterZookeeperAccessOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterZookeeperAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterZookeeperAccessOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterZookeeperAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterZookeeperAccessOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterZookeeperAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterZookeeperAccessOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterZookeeperAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterZookeeperAccessOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterZookeeperAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterZookeeperAccessOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterZookeeperAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterZookeeperAccessOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterZookeeperAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterZookeeperAccessOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterZookeeperAccessOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterZookeeperAccessOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterZookeeperAccessOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterZookeeperAccessOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterZookeeperAccessOutputReference.property.enabled">Enabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterZookeeperAccessOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterZookeeperAccess">DataAwsccMskClusterZookeeperAccess</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterZookeeperAccessOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterZookeeperAccessOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterZookeeperAccessOutputReference.property.enabled"></a>

```csharp
public IResolvable Enabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterZookeeperAccessOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMskClusterZookeeperAccess InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMskCluster.DataAwsccMskClusterZookeeperAccess">DataAwsccMskClusterZookeeperAccess</a>

---



