# `dataAwsccMgnReplicationConfigurationTemplate` Submodule <a name="`dataAwsccMgnReplicationConfigurationTemplate` Submodule" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccMgnReplicationConfigurationTemplate <a name="DataAwsccMgnReplicationConfigurationTemplate" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/data-sources/mgn_replication_configuration_template awscc_mgn_replication_configuration_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMgnReplicationConfigurationTemplate(Construct Scope, string Id, DataAwsccMgnReplicationConfigurationTemplateConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateConfig">DataAwsccMgnReplicationConfigurationTemplateConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateConfig">DataAwsccMgnReplicationConfigurationTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccMgnReplicationConfigurationTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccMgnReplicationConfigurationTemplate.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccMgnReplicationConfigurationTemplate.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccMgnReplicationConfigurationTemplate.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccMgnReplicationConfigurationTemplate.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccMgnReplicationConfigurationTemplate resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccMgnReplicationConfigurationTemplate to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccMgnReplicationConfigurationTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/data-sources/mgn_replication_configuration_template#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccMgnReplicationConfigurationTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.associateDefaultSecurityGroup">AssociateDefaultSecurityGroup</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.bandwidthThrottling">BandwidthThrottling</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.createPublicIp">CreatePublicIp</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.dataPlaneRouting">DataPlaneRouting</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.defaultLargeStagingDiskType">DefaultLargeStagingDiskType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.ebsEncryption">EbsEncryption</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.ebsEncryptionKeyArn">EbsEncryptionKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.internetProtocol">InternetProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.replicationConfigurationTemplateId">ReplicationConfigurationTemplateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.replicationServerInstanceType">ReplicationServerInstanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.replicationServersSecurityGroupsIDs">ReplicationServersSecurityGroupsIDs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.stagingAreaSubnetId">StagingAreaSubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.stagingAreaTags">StagingAreaTags</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.storeSnapshotOnLocalZone">StoreSnapshotOnLocalZone</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsList">DataAwsccMgnReplicationConfigurationTemplateTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.useDedicatedReplicationServer">UseDedicatedReplicationServer</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.useFipsEndpoint">UseFipsEndpoint</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `AssociateDefaultSecurityGroup`<sup>Required</sup> <a name="AssociateDefaultSecurityGroup" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.associateDefaultSecurityGroup"></a>

```csharp
public IResolvable AssociateDefaultSecurityGroup { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `BandwidthThrottling`<sup>Required</sup> <a name="BandwidthThrottling" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.bandwidthThrottling"></a>

```csharp
public double BandwidthThrottling { get; }
```

- *Type:* double

---

##### `CreatePublicIp`<sup>Required</sup> <a name="CreatePublicIp" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.createPublicIp"></a>

```csharp
public IResolvable CreatePublicIp { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `DataPlaneRouting`<sup>Required</sup> <a name="DataPlaneRouting" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.dataPlaneRouting"></a>

```csharp
public string DataPlaneRouting { get; }
```

- *Type:* string

---

##### `DefaultLargeStagingDiskType`<sup>Required</sup> <a name="DefaultLargeStagingDiskType" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.defaultLargeStagingDiskType"></a>

```csharp
public string DefaultLargeStagingDiskType { get; }
```

- *Type:* string

---

##### `EbsEncryption`<sup>Required</sup> <a name="EbsEncryption" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.ebsEncryption"></a>

```csharp
public string EbsEncryption { get; }
```

- *Type:* string

---

##### `EbsEncryptionKeyArn`<sup>Required</sup> <a name="EbsEncryptionKeyArn" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.ebsEncryptionKeyArn"></a>

```csharp
public string EbsEncryptionKeyArn { get; }
```

- *Type:* string

---

##### `InternetProtocol`<sup>Required</sup> <a name="InternetProtocol" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.internetProtocol"></a>

```csharp
public string InternetProtocol { get; }
```

- *Type:* string

---

##### `ReplicationConfigurationTemplateId`<sup>Required</sup> <a name="ReplicationConfigurationTemplateId" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.replicationConfigurationTemplateId"></a>

```csharp
public string ReplicationConfigurationTemplateId { get; }
```

- *Type:* string

---

##### `ReplicationServerInstanceType`<sup>Required</sup> <a name="ReplicationServerInstanceType" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.replicationServerInstanceType"></a>

```csharp
public string ReplicationServerInstanceType { get; }
```

- *Type:* string

---

##### `ReplicationServersSecurityGroupsIDs`<sup>Required</sup> <a name="ReplicationServersSecurityGroupsIDs" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.replicationServersSecurityGroupsIDs"></a>

```csharp
public string[] ReplicationServersSecurityGroupsIDs { get; }
```

- *Type:* string[]

---

##### `StagingAreaSubnetId`<sup>Required</sup> <a name="StagingAreaSubnetId" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.stagingAreaSubnetId"></a>

```csharp
public string StagingAreaSubnetId { get; }
```

- *Type:* string

---

##### `StagingAreaTags`<sup>Required</sup> <a name="StagingAreaTags" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.stagingAreaTags"></a>

```csharp
public StringMap StagingAreaTags { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `StoreSnapshotOnLocalZone`<sup>Required</sup> <a name="StoreSnapshotOnLocalZone" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.storeSnapshotOnLocalZone"></a>

```csharp
public IResolvable StoreSnapshotOnLocalZone { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.tags"></a>

```csharp
public DataAwsccMgnReplicationConfigurationTemplateTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsList">DataAwsccMgnReplicationConfigurationTemplateTagsList</a>

---

##### `UseDedicatedReplicationServer`<sup>Required</sup> <a name="UseDedicatedReplicationServer" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.useDedicatedReplicationServer"></a>

```csharp
public IResolvable UseDedicatedReplicationServer { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `UseFipsEndpoint`<sup>Required</sup> <a name="UseFipsEndpoint" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.useFipsEndpoint"></a>

```csharp
public IResolvable UseFipsEndpoint { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccMgnReplicationConfigurationTemplateConfig <a name="DataAwsccMgnReplicationConfigurationTemplateConfig" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMgnReplicationConfigurationTemplateConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/data-sources/mgn_replication_configuration_template#id DataAwsccMgnReplicationConfigurationTemplate#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccMgnReplicationConfigurationTemplateTags <a name="DataAwsccMgnReplicationConfigurationTemplateTags" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMgnReplicationConfigurationTemplateTags {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccMgnReplicationConfigurationTemplateTagsList <a name="DataAwsccMgnReplicationConfigurationTemplateTagsList" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMgnReplicationConfigurationTemplateTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsList.get"></a>

```csharp
private DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference <a name="DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTags">DataAwsccMgnReplicationConfigurationTemplateTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMgnReplicationConfigurationTemplateTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTags">DataAwsccMgnReplicationConfigurationTemplateTags</a>

---



