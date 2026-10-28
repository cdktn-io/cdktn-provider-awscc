# `dataAwsccStoragegatewayNfsFileShare` Submodule <a name="`dataAwsccStoragegatewayNfsFileShare` Submodule" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccStoragegatewayNfsFileShare <a name="DataAwsccStoragegatewayNfsFileShare" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/data-sources/storagegateway_nfs_file_share awscc_storagegateway_nfs_file_share}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccStoragegatewayNfsFileShare(Construct Scope, string Id, DataAwsccStoragegatewayNfsFileShareConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareConfig">DataAwsccStoragegatewayNfsFileShareConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareConfig">DataAwsccStoragegatewayNfsFileShareConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccStoragegatewayNfsFileShare resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccStoragegatewayNfsFileShare.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccStoragegatewayNfsFileShare.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccStoragegatewayNfsFileShare.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccStoragegatewayNfsFileShare.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccStoragegatewayNfsFileShare resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccStoragegatewayNfsFileShare to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccStoragegatewayNfsFileShare that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/data-sources/storagegateway_nfs_file_share#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccStoragegatewayNfsFileShare to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.auditDestinationArn">AuditDestinationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.bucketRegion">BucketRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.cacheAttributes">CacheAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference">DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.clientList">ClientList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.defaultStorageClass">DefaultStorageClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.encryptionType">EncryptionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.fileShareArn">FileShareArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.fileShareId">FileShareId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.fileShareName">FileShareName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.fileShareStatus">FileShareStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.gatewayArn">GatewayArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.guessMimeTypeEnabled">GuessMimeTypeEnabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.kmsEncrypted">KmsEncrypted</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.kmsKey">KmsKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.locationArn">LocationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.nfsFileShareDefaults">NfsFileShareDefaults</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference">DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.notificationPolicy">NotificationPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.objectAcl">ObjectAcl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.readOnly">ReadOnly</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.requesterPays">RequesterPays</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.role">Role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.squash">Squash</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsList">DataAwsccStoragegatewayNfsFileShareTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.vpcEndpointDnsName">VpcEndpointDnsName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `AuditDestinationArn`<sup>Required</sup> <a name="AuditDestinationArn" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.auditDestinationArn"></a>

```csharp
public string AuditDestinationArn { get; }
```

- *Type:* string

---

##### `BucketRegion`<sup>Required</sup> <a name="BucketRegion" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.bucketRegion"></a>

```csharp
public string BucketRegion { get; }
```

- *Type:* string

---

##### `CacheAttributes`<sup>Required</sup> <a name="CacheAttributes" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.cacheAttributes"></a>

```csharp
public DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference CacheAttributes { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference">DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference</a>

---

##### `ClientList`<sup>Required</sup> <a name="ClientList" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.clientList"></a>

```csharp
public string[] ClientList { get; }
```

- *Type:* string[]

---

##### `DefaultStorageClass`<sup>Required</sup> <a name="DefaultStorageClass" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.defaultStorageClass"></a>

```csharp
public string DefaultStorageClass { get; }
```

- *Type:* string

---

##### `EncryptionType`<sup>Required</sup> <a name="EncryptionType" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.encryptionType"></a>

```csharp
public string EncryptionType { get; }
```

- *Type:* string

---

##### `FileShareArn`<sup>Required</sup> <a name="FileShareArn" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.fileShareArn"></a>

```csharp
public string FileShareArn { get; }
```

- *Type:* string

---

##### `FileShareId`<sup>Required</sup> <a name="FileShareId" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.fileShareId"></a>

```csharp
public string FileShareId { get; }
```

- *Type:* string

---

##### `FileShareName`<sup>Required</sup> <a name="FileShareName" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.fileShareName"></a>

```csharp
public string FileShareName { get; }
```

- *Type:* string

---

##### `FileShareStatus`<sup>Required</sup> <a name="FileShareStatus" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.fileShareStatus"></a>

```csharp
public string FileShareStatus { get; }
```

- *Type:* string

---

##### `GatewayArn`<sup>Required</sup> <a name="GatewayArn" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.gatewayArn"></a>

```csharp
public string GatewayArn { get; }
```

- *Type:* string

---

##### `GuessMimeTypeEnabled`<sup>Required</sup> <a name="GuessMimeTypeEnabled" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.guessMimeTypeEnabled"></a>

```csharp
public IResolvable GuessMimeTypeEnabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `KmsEncrypted`<sup>Required</sup> <a name="KmsEncrypted" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.kmsEncrypted"></a>

```csharp
public IResolvable KmsEncrypted { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `KmsKey`<sup>Required</sup> <a name="KmsKey" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.kmsKey"></a>

```csharp
public string KmsKey { get; }
```

- *Type:* string

---

##### `LocationArn`<sup>Required</sup> <a name="LocationArn" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.locationArn"></a>

```csharp
public string LocationArn { get; }
```

- *Type:* string

---

##### `NfsFileShareDefaults`<sup>Required</sup> <a name="NfsFileShareDefaults" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.nfsFileShareDefaults"></a>

```csharp
public DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference NfsFileShareDefaults { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference">DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference</a>

---

##### `NotificationPolicy`<sup>Required</sup> <a name="NotificationPolicy" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.notificationPolicy"></a>

```csharp
public string NotificationPolicy { get; }
```

- *Type:* string

---

##### `ObjectAcl`<sup>Required</sup> <a name="ObjectAcl" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.objectAcl"></a>

```csharp
public string ObjectAcl { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `ReadOnly`<sup>Required</sup> <a name="ReadOnly" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.readOnly"></a>

```csharp
public IResolvable ReadOnly { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `RequesterPays`<sup>Required</sup> <a name="RequesterPays" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.requesterPays"></a>

```csharp
public IResolvable RequesterPays { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.role"></a>

```csharp
public string Role { get; }
```

- *Type:* string

---

##### `Squash`<sup>Required</sup> <a name="Squash" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.squash"></a>

```csharp
public string Squash { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.tags"></a>

```csharp
public DataAwsccStoragegatewayNfsFileShareTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsList">DataAwsccStoragegatewayNfsFileShareTagsList</a>

---

##### `VpcEndpointDnsName`<sup>Required</sup> <a name="VpcEndpointDnsName" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.vpcEndpointDnsName"></a>

```csharp
public string VpcEndpointDnsName { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccStoragegatewayNfsFileShareCacheAttributes <a name="DataAwsccStoragegatewayNfsFileShareCacheAttributes" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributes.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccStoragegatewayNfsFileShareCacheAttributes {

};
```


### DataAwsccStoragegatewayNfsFileShareConfig <a name="DataAwsccStoragegatewayNfsFileShareConfig" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccStoragegatewayNfsFileShareConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/data-sources/storagegateway_nfs_file_share#id DataAwsccStoragegatewayNfsFileShare#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaults <a name="DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaults" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaults"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaults.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaults {

};
```


### DataAwsccStoragegatewayNfsFileShareTags <a name="DataAwsccStoragegatewayNfsFileShareTags" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccStoragegatewayNfsFileShareTags {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference <a name="DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference.property.cacheStaleTimeoutInSeconds">CacheStaleTimeoutInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributes">DataAwsccStoragegatewayNfsFileShareCacheAttributes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CacheStaleTimeoutInSeconds`<sup>Required</sup> <a name="CacheStaleTimeoutInSeconds" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference.property.cacheStaleTimeoutInSeconds"></a>

```csharp
public double CacheStaleTimeoutInSeconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference.property.internalValue"></a>

```csharp
public DataAwsccStoragegatewayNfsFileShareCacheAttributes InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributes">DataAwsccStoragegatewayNfsFileShareCacheAttributes</a>

---


### DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference <a name="DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.property.directoryMode">DirectoryMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.property.fileMode">FileMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.property.groupId">GroupId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.property.ownerId">OwnerId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaults">DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaults</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DirectoryMode`<sup>Required</sup> <a name="DirectoryMode" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.property.directoryMode"></a>

```csharp
public string DirectoryMode { get; }
```

- *Type:* string

---

##### `FileMode`<sup>Required</sup> <a name="FileMode" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.property.fileMode"></a>

```csharp
public string FileMode { get; }
```

- *Type:* string

---

##### `GroupId`<sup>Required</sup> <a name="GroupId" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.property.groupId"></a>

```csharp
public double GroupId { get; }
```

- *Type:* double

---

##### `OwnerId`<sup>Required</sup> <a name="OwnerId" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.property.ownerId"></a>

```csharp
public double OwnerId { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaults InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaults">DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaults</a>

---


### DataAwsccStoragegatewayNfsFileShareTagsList <a name="DataAwsccStoragegatewayNfsFileShareTagsList" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccStoragegatewayNfsFileShareTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsList.get"></a>

```csharp
private DataAwsccStoragegatewayNfsFileShareTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccStoragegatewayNfsFileShareTagsOutputReference <a name="DataAwsccStoragegatewayNfsFileShareTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccStoragegatewayNfsFileShareTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTags">DataAwsccStoragegatewayNfsFileShareTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccStoragegatewayNfsFileShareTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTags">DataAwsccStoragegatewayNfsFileShareTags</a>

---



