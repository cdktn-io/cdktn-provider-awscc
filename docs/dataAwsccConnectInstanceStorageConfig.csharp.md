# `dataAwsccConnectInstanceStorageConfig` Submodule <a name="`dataAwsccConnectInstanceStorageConfig` Submodule" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccConnectInstanceStorageConfig <a name="DataAwsccConnectInstanceStorageConfig" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/connect_instance_storage_config awscc_connect_instance_storage_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccConnectInstanceStorageConfig(Construct Scope, string Id, DataAwsccConnectInstanceStorageConfigConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigConfig">DataAwsccConnectInstanceStorageConfigConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigConfig">DataAwsccConnectInstanceStorageConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccConnectInstanceStorageConfig resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccConnectInstanceStorageConfig.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccConnectInstanceStorageConfig.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccConnectInstanceStorageConfig.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccConnectInstanceStorageConfig.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccConnectInstanceStorageConfig resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccConnectInstanceStorageConfig to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccConnectInstanceStorageConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/connect_instance_storage_config#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccConnectInstanceStorageConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.property.associationId">AssociationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.property.instanceArn">InstanceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.property.kinesisFirehoseConfig">KinesisFirehoseConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference">DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.property.kinesisStreamConfig">KinesisStreamConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference">DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.property.kinesisVideoStreamConfig">KinesisVideoStreamConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference">DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.property.resourceType">ResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.property.s3Config">S3Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference">DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.property.storageType">StorageType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `AssociationId`<sup>Required</sup> <a name="AssociationId" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.property.associationId"></a>

```csharp
public string AssociationId { get; }
```

- *Type:* string

---

##### `InstanceArn`<sup>Required</sup> <a name="InstanceArn" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.property.instanceArn"></a>

```csharp
public string InstanceArn { get; }
```

- *Type:* string

---

##### `KinesisFirehoseConfig`<sup>Required</sup> <a name="KinesisFirehoseConfig" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.property.kinesisFirehoseConfig"></a>

```csharp
public DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference KinesisFirehoseConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference">DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference</a>

---

##### `KinesisStreamConfig`<sup>Required</sup> <a name="KinesisStreamConfig" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.property.kinesisStreamConfig"></a>

```csharp
public DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference KinesisStreamConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference">DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference</a>

---

##### `KinesisVideoStreamConfig`<sup>Required</sup> <a name="KinesisVideoStreamConfig" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.property.kinesisVideoStreamConfig"></a>

```csharp
public DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference KinesisVideoStreamConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference">DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference</a>

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.property.resourceType"></a>

```csharp
public string ResourceType { get; }
```

- *Type:* string

---

##### `S3Config`<sup>Required</sup> <a name="S3Config" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.property.s3Config"></a>

```csharp
public DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference S3Config { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference">DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference</a>

---

##### `StorageType`<sup>Required</sup> <a name="StorageType" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.property.storageType"></a>

```csharp
public string StorageType { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccConnectInstanceStorageConfigConfig <a name="DataAwsccConnectInstanceStorageConfigConfig" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccConnectInstanceStorageConfigConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/connect_instance_storage_config#id DataAwsccConnectInstanceStorageConfig#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfig <a name="DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfig" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfig {

};
```


### DataAwsccConnectInstanceStorageConfigKinesisStreamConfig <a name="DataAwsccConnectInstanceStorageConfigKinesisStreamConfig" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccConnectInstanceStorageConfigKinesisStreamConfig {

};
```


### DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfig <a name="DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfig" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfig {

};
```


### DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfig <a name="DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfig" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfig {

};
```


### DataAwsccConnectInstanceStorageConfigS3Config <a name="DataAwsccConnectInstanceStorageConfigS3Config" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3Config"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3Config.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccConnectInstanceStorageConfigS3Config {

};
```


### DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfig <a name="DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfig" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfig {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference <a name="DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.property.firehoseArn">FirehoseArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfig">DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FirehoseArn`<sup>Required</sup> <a name="FirehoseArn" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.property.firehoseArn"></a>

```csharp
public string FirehoseArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.property.internalValue"></a>

```csharp
public DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfig">DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfig</a>

---


### DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference <a name="DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference.property.streamArn">StreamArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfig">DataAwsccConnectInstanceStorageConfigKinesisStreamConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `StreamArn`<sup>Required</sup> <a name="StreamArn" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference.property.streamArn"></a>

```csharp
public string StreamArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference.property.internalValue"></a>

```csharp
public DataAwsccConnectInstanceStorageConfigKinesisStreamConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfig">DataAwsccConnectInstanceStorageConfigKinesisStreamConfig</a>

---


### DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference <a name="DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.property.encryptionType">EncryptionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.property.keyId">KeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfig">DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EncryptionType`<sup>Required</sup> <a name="EncryptionType" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.property.encryptionType"></a>

```csharp
public string EncryptionType { get; }
```

- *Type:* string

---

##### `KeyId`<sup>Required</sup> <a name="KeyId" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.property.keyId"></a>

```csharp
public string KeyId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.property.internalValue"></a>

```csharp
public DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfig">DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfig</a>

---


### DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference <a name="DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.property.encryptionConfig">EncryptionConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference">DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.property.prefix">Prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.property.retentionPeriodHours">RetentionPeriodHours</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfig">DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EncryptionConfig`<sup>Required</sup> <a name="EncryptionConfig" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.property.encryptionConfig"></a>

```csharp
public DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference EncryptionConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference">DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference</a>

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.property.prefix"></a>

```csharp
public string Prefix { get; }
```

- *Type:* string

---

##### `RetentionPeriodHours`<sup>Required</sup> <a name="RetentionPeriodHours" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.property.retentionPeriodHours"></a>

```csharp
public double RetentionPeriodHours { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.property.internalValue"></a>

```csharp
public DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfig">DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfig</a>

---


### DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference <a name="DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.property.encryptionType">EncryptionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.property.keyId">KeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfig">DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EncryptionType`<sup>Required</sup> <a name="EncryptionType" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.property.encryptionType"></a>

```csharp
public string EncryptionType { get; }
```

- *Type:* string

---

##### `KeyId`<sup>Required</sup> <a name="KeyId" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.property.keyId"></a>

```csharp
public string KeyId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.property.internalValue"></a>

```csharp
public DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfig">DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfig</a>

---


### DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference <a name="DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference.property.bucketName">BucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference.property.bucketPrefix">BucketPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference.property.encryptionConfig">EncryptionConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference">DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3Config">DataAwsccConnectInstanceStorageConfigS3Config</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference.property.bucketName"></a>

```csharp
public string BucketName { get; }
```

- *Type:* string

---

##### `BucketPrefix`<sup>Required</sup> <a name="BucketPrefix" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference.property.bucketPrefix"></a>

```csharp
public string BucketPrefix { get; }
```

- *Type:* string

---

##### `EncryptionConfig`<sup>Required</sup> <a name="EncryptionConfig" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference.property.encryptionConfig"></a>

```csharp
public DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference EncryptionConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference">DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference.property.internalValue"></a>

```csharp
public DataAwsccConnectInstanceStorageConfigS3Config InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3Config">DataAwsccConnectInstanceStorageConfigS3Config</a>

---



