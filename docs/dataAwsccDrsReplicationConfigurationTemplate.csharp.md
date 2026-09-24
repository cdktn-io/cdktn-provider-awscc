# `dataAwsccDrsReplicationConfigurationTemplate` Submodule <a name="`dataAwsccDrsReplicationConfigurationTemplate` Submodule" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccDrsReplicationConfigurationTemplate <a name="DataAwsccDrsReplicationConfigurationTemplate" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/drs_replication_configuration_template awscc_drs_replication_configuration_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDrsReplicationConfigurationTemplate(Construct Scope, string Id, DataAwsccDrsReplicationConfigurationTemplateConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateConfig">DataAwsccDrsReplicationConfigurationTemplateConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateConfig">DataAwsccDrsReplicationConfigurationTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccDrsReplicationConfigurationTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccDrsReplicationConfigurationTemplate.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccDrsReplicationConfigurationTemplate.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccDrsReplicationConfigurationTemplate.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccDrsReplicationConfigurationTemplate.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccDrsReplicationConfigurationTemplate resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccDrsReplicationConfigurationTemplate to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccDrsReplicationConfigurationTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/drs_replication_configuration_template#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccDrsReplicationConfigurationTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.associateDefaultSecurityGroup">AssociateDefaultSecurityGroup</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.autoReplicateNewDisks">AutoReplicateNewDisks</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.bandwidthThrottling">BandwidthThrottling</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.createPublicIp">CreatePublicIp</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.dataPlaneRouting">DataPlaneRouting</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.defaultLargeStagingDiskType">DefaultLargeStagingDiskType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.ebsEncryption">EbsEncryption</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.ebsEncryptionKeyArn">EbsEncryptionKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.internetProtocol">InternetProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.pitPolicy">PitPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyList">DataAwsccDrsReplicationConfigurationTemplatePitPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.replicationConfigurationTemplateId">ReplicationConfigurationTemplateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.replicationServerInstanceType">ReplicationServerInstanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.replicationServersSecurityGroupsIDs">ReplicationServersSecurityGroupsIDs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.stagingAreaSubnetId">StagingAreaSubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.stagingAreaTags">StagingAreaTags</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsList">DataAwsccDrsReplicationConfigurationTemplateTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.useDedicatedReplicationServer">UseDedicatedReplicationServer</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `AssociateDefaultSecurityGroup`<sup>Required</sup> <a name="AssociateDefaultSecurityGroup" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.associateDefaultSecurityGroup"></a>

```csharp
public IResolvable AssociateDefaultSecurityGroup { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `AutoReplicateNewDisks`<sup>Required</sup> <a name="AutoReplicateNewDisks" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.autoReplicateNewDisks"></a>

```csharp
public IResolvable AutoReplicateNewDisks { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `BandwidthThrottling`<sup>Required</sup> <a name="BandwidthThrottling" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.bandwidthThrottling"></a>

```csharp
public double BandwidthThrottling { get; }
```

- *Type:* double

---

##### `CreatePublicIp`<sup>Required</sup> <a name="CreatePublicIp" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.createPublicIp"></a>

```csharp
public IResolvable CreatePublicIp { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `DataPlaneRouting`<sup>Required</sup> <a name="DataPlaneRouting" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.dataPlaneRouting"></a>

```csharp
public string DataPlaneRouting { get; }
```

- *Type:* string

---

##### `DefaultLargeStagingDiskType`<sup>Required</sup> <a name="DefaultLargeStagingDiskType" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.defaultLargeStagingDiskType"></a>

```csharp
public string DefaultLargeStagingDiskType { get; }
```

- *Type:* string

---

##### `EbsEncryption`<sup>Required</sup> <a name="EbsEncryption" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.ebsEncryption"></a>

```csharp
public string EbsEncryption { get; }
```

- *Type:* string

---

##### `EbsEncryptionKeyArn`<sup>Required</sup> <a name="EbsEncryptionKeyArn" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.ebsEncryptionKeyArn"></a>

```csharp
public string EbsEncryptionKeyArn { get; }
```

- *Type:* string

---

##### `InternetProtocol`<sup>Required</sup> <a name="InternetProtocol" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.internetProtocol"></a>

```csharp
public string InternetProtocol { get; }
```

- *Type:* string

---

##### `PitPolicy`<sup>Required</sup> <a name="PitPolicy" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.pitPolicy"></a>

```csharp
public DataAwsccDrsReplicationConfigurationTemplatePitPolicyList PitPolicy { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyList">DataAwsccDrsReplicationConfigurationTemplatePitPolicyList</a>

---

##### `ReplicationConfigurationTemplateId`<sup>Required</sup> <a name="ReplicationConfigurationTemplateId" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.replicationConfigurationTemplateId"></a>

```csharp
public string ReplicationConfigurationTemplateId { get; }
```

- *Type:* string

---

##### `ReplicationServerInstanceType`<sup>Required</sup> <a name="ReplicationServerInstanceType" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.replicationServerInstanceType"></a>

```csharp
public string ReplicationServerInstanceType { get; }
```

- *Type:* string

---

##### `ReplicationServersSecurityGroupsIDs`<sup>Required</sup> <a name="ReplicationServersSecurityGroupsIDs" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.replicationServersSecurityGroupsIDs"></a>

```csharp
public string[] ReplicationServersSecurityGroupsIDs { get; }
```

- *Type:* string[]

---

##### `StagingAreaSubnetId`<sup>Required</sup> <a name="StagingAreaSubnetId" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.stagingAreaSubnetId"></a>

```csharp
public string StagingAreaSubnetId { get; }
```

- *Type:* string

---

##### `StagingAreaTags`<sup>Required</sup> <a name="StagingAreaTags" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.stagingAreaTags"></a>

```csharp
public StringMap StagingAreaTags { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.tags"></a>

```csharp
public DataAwsccDrsReplicationConfigurationTemplateTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsList">DataAwsccDrsReplicationConfigurationTemplateTagsList</a>

---

##### `UseDedicatedReplicationServer`<sup>Required</sup> <a name="UseDedicatedReplicationServer" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.useDedicatedReplicationServer"></a>

```csharp
public IResolvable UseDedicatedReplicationServer { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccDrsReplicationConfigurationTemplateConfig <a name="DataAwsccDrsReplicationConfigurationTemplateConfig" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDrsReplicationConfigurationTemplateConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/drs_replication_configuration_template#id DataAwsccDrsReplicationConfigurationTemplate#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccDrsReplicationConfigurationTemplatePitPolicy <a name="DataAwsccDrsReplicationConfigurationTemplatePitPolicy" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDrsReplicationConfigurationTemplatePitPolicy {

};
```


### DataAwsccDrsReplicationConfigurationTemplateTags <a name="DataAwsccDrsReplicationConfigurationTemplateTags" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDrsReplicationConfigurationTemplateTags {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccDrsReplicationConfigurationTemplatePitPolicyList <a name="DataAwsccDrsReplicationConfigurationTemplatePitPolicyList" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDrsReplicationConfigurationTemplatePitPolicyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyList.get"></a>

```csharp
private DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference <a name="DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.property.enabled">Enabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.property.interval">Interval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.property.retentionDuration">RetentionDuration</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.property.ruleId">RuleId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.property.units">Units</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicy">DataAwsccDrsReplicationConfigurationTemplatePitPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.property.enabled"></a>

```csharp
public IResolvable Enabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Interval`<sup>Required</sup> <a name="Interval" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.property.interval"></a>

```csharp
public double Interval { get; }
```

- *Type:* double

---

##### `RetentionDuration`<sup>Required</sup> <a name="RetentionDuration" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.property.retentionDuration"></a>

```csharp
public double RetentionDuration { get; }
```

- *Type:* double

---

##### `RuleId`<sup>Required</sup> <a name="RuleId" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.property.ruleId"></a>

```csharp
public double RuleId { get; }
```

- *Type:* double

---

##### `Units`<sup>Required</sup> <a name="Units" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.property.units"></a>

```csharp
public string Units { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.property.internalValue"></a>

```csharp
public DataAwsccDrsReplicationConfigurationTemplatePitPolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicy">DataAwsccDrsReplicationConfigurationTemplatePitPolicy</a>

---


### DataAwsccDrsReplicationConfigurationTemplateTagsList <a name="DataAwsccDrsReplicationConfigurationTemplateTagsList" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDrsReplicationConfigurationTemplateTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsList.get"></a>

```csharp
private DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference <a name="DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTags">DataAwsccDrsReplicationConfigurationTemplateTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccDrsReplicationConfigurationTemplateTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTags">DataAwsccDrsReplicationConfigurationTemplateTags</a>

---



