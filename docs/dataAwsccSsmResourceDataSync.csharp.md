# `dataAwsccSsmResourceDataSync` Submodule <a name="`dataAwsccSsmResourceDataSync` Submodule" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccSsmResourceDataSync <a name="DataAwsccSsmResourceDataSync" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/ssm_resource_data_sync awscc_ssm_resource_data_sync}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSsmResourceDataSync(Construct Scope, string Id, DataAwsccSsmResourceDataSyncConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncConfig">DataAwsccSsmResourceDataSyncConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncConfig">DataAwsccSsmResourceDataSyncConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccSsmResourceDataSync resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccSsmResourceDataSync.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccSsmResourceDataSync.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccSsmResourceDataSync.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccSsmResourceDataSync.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccSsmResourceDataSync resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccSsmResourceDataSync to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccSsmResourceDataSync that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/ssm_resource_data_sync#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccSsmResourceDataSync to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.property.bucketName">BucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.property.bucketPrefix">BucketPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.property.bucketRegion">BucketRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.property.kmsKeyArn">KmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.property.s3Destination">S3Destination</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference">DataAwsccSsmResourceDataSyncS3DestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.property.syncFormat">SyncFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.property.syncName">SyncName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.property.syncSource">SyncSource</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference">DataAwsccSsmResourceDataSyncSyncSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.property.syncType">SyncType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.property.bucketName"></a>

```csharp
public string BucketName { get; }
```

- *Type:* string

---

##### `BucketPrefix`<sup>Required</sup> <a name="BucketPrefix" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.property.bucketPrefix"></a>

```csharp
public string BucketPrefix { get; }
```

- *Type:* string

---

##### `BucketRegion`<sup>Required</sup> <a name="BucketRegion" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.property.bucketRegion"></a>

```csharp
public string BucketRegion { get; }
```

- *Type:* string

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.property.kmsKeyArn"></a>

```csharp
public string KmsKeyArn { get; }
```

- *Type:* string

---

##### `S3Destination`<sup>Required</sup> <a name="S3Destination" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.property.s3Destination"></a>

```csharp
public DataAwsccSsmResourceDataSyncS3DestinationOutputReference S3Destination { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference">DataAwsccSsmResourceDataSyncS3DestinationOutputReference</a>

---

##### `SyncFormat`<sup>Required</sup> <a name="SyncFormat" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.property.syncFormat"></a>

```csharp
public string SyncFormat { get; }
```

- *Type:* string

---

##### `SyncName`<sup>Required</sup> <a name="SyncName" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.property.syncName"></a>

```csharp
public string SyncName { get; }
```

- *Type:* string

---

##### `SyncSource`<sup>Required</sup> <a name="SyncSource" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.property.syncSource"></a>

```csharp
public DataAwsccSsmResourceDataSyncSyncSourceOutputReference SyncSource { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference">DataAwsccSsmResourceDataSyncSyncSourceOutputReference</a>

---

##### `SyncType`<sup>Required</sup> <a name="SyncType" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.property.syncType"></a>

```csharp
public string SyncType { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccSsmResourceDataSyncConfig <a name="DataAwsccSsmResourceDataSyncConfig" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSsmResourceDataSyncConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/ssm_resource_data_sync#id DataAwsccSsmResourceDataSync#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccSsmResourceDataSyncS3Destination <a name="DataAwsccSsmResourceDataSyncS3Destination" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3Destination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3Destination.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSsmResourceDataSyncS3Destination {

};
```


### DataAwsccSsmResourceDataSyncSyncSource <a name="DataAwsccSsmResourceDataSyncSyncSource" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSource.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSsmResourceDataSyncSyncSource {

};
```


### DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSource <a name="DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSource" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSource.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSource {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccSsmResourceDataSyncS3DestinationOutputReference <a name="DataAwsccSsmResourceDataSyncS3DestinationOutputReference" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSsmResourceDataSyncS3DestinationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.property.bucketName">BucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.property.bucketPrefix">BucketPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.property.bucketRegion">BucketRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.property.kmsKeyArn">KmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.property.syncFormat">SyncFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3Destination">DataAwsccSsmResourceDataSyncS3Destination</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.property.bucketName"></a>

```csharp
public string BucketName { get; }
```

- *Type:* string

---

##### `BucketPrefix`<sup>Required</sup> <a name="BucketPrefix" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.property.bucketPrefix"></a>

```csharp
public string BucketPrefix { get; }
```

- *Type:* string

---

##### `BucketRegion`<sup>Required</sup> <a name="BucketRegion" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.property.bucketRegion"></a>

```csharp
public string BucketRegion { get; }
```

- *Type:* string

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.property.kmsKeyArn"></a>

```csharp
public string KmsKeyArn { get; }
```

- *Type:* string

---

##### `SyncFormat`<sup>Required</sup> <a name="SyncFormat" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.property.syncFormat"></a>

```csharp
public string SyncFormat { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSsmResourceDataSyncS3Destination InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3Destination">DataAwsccSsmResourceDataSyncS3Destination</a>

---


### DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference <a name="DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.property.organizationalUnits">OrganizationalUnits</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.property.organizationSourceType">OrganizationSourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSource">DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OrganizationalUnits`<sup>Required</sup> <a name="OrganizationalUnits" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.property.organizationalUnits"></a>

```csharp
public string[] OrganizationalUnits { get; }
```

- *Type:* string[]

---

##### `OrganizationSourceType`<sup>Required</sup> <a name="OrganizationSourceType" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.property.organizationSourceType"></a>

```csharp
public string OrganizationSourceType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSource InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSource">DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSource</a>

---


### DataAwsccSsmResourceDataSyncSyncSourceOutputReference <a name="DataAwsccSsmResourceDataSyncSyncSourceOutputReference" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSsmResourceDataSyncSyncSourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference.property.awsOrganizationsSource">AwsOrganizationsSource</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference">DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference.property.includeFutureRegions">IncludeFutureRegions</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference.property.sourceRegions">SourceRegions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference.property.sourceType">SourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSource">DataAwsccSsmResourceDataSyncSyncSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AwsOrganizationsSource`<sup>Required</sup> <a name="AwsOrganizationsSource" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference.property.awsOrganizationsSource"></a>

```csharp
public DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference AwsOrganizationsSource { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference">DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference</a>

---

##### `IncludeFutureRegions`<sup>Required</sup> <a name="IncludeFutureRegions" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference.property.includeFutureRegions"></a>

```csharp
public IResolvable IncludeFutureRegions { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `SourceRegions`<sup>Required</sup> <a name="SourceRegions" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference.property.sourceRegions"></a>

```csharp
public string[] SourceRegions { get; }
```

- *Type:* string[]

---

##### `SourceType`<sup>Required</sup> <a name="SourceType" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference.property.sourceType"></a>

```csharp
public string SourceType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSsmResourceDataSyncSyncSource InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSource">DataAwsccSsmResourceDataSyncSyncSource</a>

---



