# `dataAwsccStoragegatewayVolume` Submodule <a name="`dataAwsccStoragegatewayVolume` Submodule" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccStoragegatewayVolume <a name="DataAwsccStoragegatewayVolume" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/storagegateway_volume awscc_storagegateway_volume}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccStoragegatewayVolume(Construct Scope, string Id, DataAwsccStoragegatewayVolumeConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeConfig">DataAwsccStoragegatewayVolumeConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeConfig">DataAwsccStoragegatewayVolumeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccStoragegatewayVolume resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccStoragegatewayVolume.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccStoragegatewayVolume.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccStoragegatewayVolume.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccStoragegatewayVolume.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccStoragegatewayVolume resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccStoragegatewayVolume to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccStoragegatewayVolume that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/storagegateway_volume#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccStoragegatewayVolume to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.createdDate">CreatedDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.gatewayArn">GatewayArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.kmsEncrypted">KmsEncrypted</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.kmsKey">KmsKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.networkInterfaceId">NetworkInterfaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.snapshotId">SnapshotId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.sourceVolumeArn">SourceVolumeArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsList">DataAwsccStoragegatewayVolumeTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.targetArn">TargetArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.targetName">TargetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.volumeArn">VolumeArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.volumeAttachmentStatus">VolumeAttachmentStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.volumeId">VolumeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.volumeSizeInBytes">VolumeSizeInBytes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.volumeStatus">VolumeStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.volumeType">VolumeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.volumeUsedInBytes">VolumeUsedInBytes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `CreatedDate`<sup>Required</sup> <a name="CreatedDate" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.createdDate"></a>

```csharp
public string CreatedDate { get; }
```

- *Type:* string

---

##### `GatewayArn`<sup>Required</sup> <a name="GatewayArn" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.gatewayArn"></a>

```csharp
public string GatewayArn { get; }
```

- *Type:* string

---

##### `KmsEncrypted`<sup>Required</sup> <a name="KmsEncrypted" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.kmsEncrypted"></a>

```csharp
public IResolvable KmsEncrypted { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `KmsKey`<sup>Required</sup> <a name="KmsKey" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.kmsKey"></a>

```csharp
public string KmsKey { get; }
```

- *Type:* string

---

##### `NetworkInterfaceId`<sup>Required</sup> <a name="NetworkInterfaceId" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.networkInterfaceId"></a>

```csharp
public string NetworkInterfaceId { get; }
```

- *Type:* string

---

##### `SnapshotId`<sup>Required</sup> <a name="SnapshotId" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.snapshotId"></a>

```csharp
public string SnapshotId { get; }
```

- *Type:* string

---

##### `SourceVolumeArn`<sup>Required</sup> <a name="SourceVolumeArn" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.sourceVolumeArn"></a>

```csharp
public string SourceVolumeArn { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.tags"></a>

```csharp
public DataAwsccStoragegatewayVolumeTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsList">DataAwsccStoragegatewayVolumeTagsList</a>

---

##### `TargetArn`<sup>Required</sup> <a name="TargetArn" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.targetArn"></a>

```csharp
public string TargetArn { get; }
```

- *Type:* string

---

##### `TargetName`<sup>Required</sup> <a name="TargetName" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.targetName"></a>

```csharp
public string TargetName { get; }
```

- *Type:* string

---

##### `VolumeArn`<sup>Required</sup> <a name="VolumeArn" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.volumeArn"></a>

```csharp
public string VolumeArn { get; }
```

- *Type:* string

---

##### `VolumeAttachmentStatus`<sup>Required</sup> <a name="VolumeAttachmentStatus" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.volumeAttachmentStatus"></a>

```csharp
public string VolumeAttachmentStatus { get; }
```

- *Type:* string

---

##### `VolumeId`<sup>Required</sup> <a name="VolumeId" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.volumeId"></a>

```csharp
public string VolumeId { get; }
```

- *Type:* string

---

##### `VolumeSizeInBytes`<sup>Required</sup> <a name="VolumeSizeInBytes" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.volumeSizeInBytes"></a>

```csharp
public double VolumeSizeInBytes { get; }
```

- *Type:* double

---

##### `VolumeStatus`<sup>Required</sup> <a name="VolumeStatus" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.volumeStatus"></a>

```csharp
public string VolumeStatus { get; }
```

- *Type:* string

---

##### `VolumeType`<sup>Required</sup> <a name="VolumeType" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.volumeType"></a>

```csharp
public string VolumeType { get; }
```

- *Type:* string

---

##### `VolumeUsedInBytes`<sup>Required</sup> <a name="VolumeUsedInBytes" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.volumeUsedInBytes"></a>

```csharp
public double VolumeUsedInBytes { get; }
```

- *Type:* double

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccStoragegatewayVolumeConfig <a name="DataAwsccStoragegatewayVolumeConfig" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccStoragegatewayVolumeConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/storagegateway_volume#id DataAwsccStoragegatewayVolume#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccStoragegatewayVolumeTags <a name="DataAwsccStoragegatewayVolumeTags" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccStoragegatewayVolumeTags {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccStoragegatewayVolumeTagsList <a name="DataAwsccStoragegatewayVolumeTagsList" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccStoragegatewayVolumeTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsList.get"></a>

```csharp
private DataAwsccStoragegatewayVolumeTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccStoragegatewayVolumeTagsOutputReference <a name="DataAwsccStoragegatewayVolumeTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccStoragegatewayVolumeTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTags">DataAwsccStoragegatewayVolumeTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccStoragegatewayVolumeTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTags">DataAwsccStoragegatewayVolumeTags</a>

---



