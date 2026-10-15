# `dataAwsccStoragegatewaySmbFileShare` Submodule <a name="`dataAwsccStoragegatewaySmbFileShare` Submodule" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccStoragegatewaySmbFileShare <a name="DataAwsccStoragegatewaySmbFileShare" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.106.0/docs/data-sources/storagegateway_smb_file_share awscc_storagegateway_smb_file_share}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccStoragegatewaySmbFileShare(Construct Scope, string Id, DataAwsccStoragegatewaySmbFileShareConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareConfig">DataAwsccStoragegatewaySmbFileShareConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareConfig">DataAwsccStoragegatewaySmbFileShareConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccStoragegatewaySmbFileShare resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccStoragegatewaySmbFileShare.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccStoragegatewaySmbFileShare.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccStoragegatewaySmbFileShare.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccStoragegatewaySmbFileShare.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccStoragegatewaySmbFileShare resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccStoragegatewaySmbFileShare to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccStoragegatewaySmbFileShare that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.106.0/docs/data-sources/storagegateway_smb_file_share#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccStoragegatewaySmbFileShare to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.accessBasedEnumeration">AccessBasedEnumeration</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.adminUserList">AdminUserList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.auditDestinationArn">AuditDestinationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.authentication">Authentication</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.bucketRegion">BucketRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.cacheAttributes">CacheAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference">DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.caseSensitivity">CaseSensitivity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.defaultStorageClass">DefaultStorageClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.encryptionType">EncryptionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.fileShareArn">FileShareArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.fileShareId">FileShareId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.fileShareName">FileShareName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.fileShareStatus">FileShareStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.gatewayArn">GatewayArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.guessMimeTypeEnabled">GuessMimeTypeEnabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.invalidUserList">InvalidUserList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.kmsEncrypted">KmsEncrypted</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.kmsKey">KmsKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.locationArn">LocationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.notificationPolicy">NotificationPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.objectAcl">ObjectAcl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.oplocksEnabled">OplocksEnabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.readOnly">ReadOnly</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.requesterPays">RequesterPays</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.role">Role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.smbaclEnabled">SmbaclEnabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsList">DataAwsccStoragegatewaySmbFileShareTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.validUserList">ValidUserList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.vpcEndpointDnsName">VpcEndpointDnsName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `AccessBasedEnumeration`<sup>Required</sup> <a name="AccessBasedEnumeration" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.accessBasedEnumeration"></a>

```csharp
public IResolvable AccessBasedEnumeration { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `AdminUserList`<sup>Required</sup> <a name="AdminUserList" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.adminUserList"></a>

```csharp
public string[] AdminUserList { get; }
```

- *Type:* string[]

---

##### `AuditDestinationArn`<sup>Required</sup> <a name="AuditDestinationArn" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.auditDestinationArn"></a>

```csharp
public string AuditDestinationArn { get; }
```

- *Type:* string

---

##### `Authentication`<sup>Required</sup> <a name="Authentication" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.authentication"></a>

```csharp
public string Authentication { get; }
```

- *Type:* string

---

##### `BucketRegion`<sup>Required</sup> <a name="BucketRegion" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.bucketRegion"></a>

```csharp
public string BucketRegion { get; }
```

- *Type:* string

---

##### `CacheAttributes`<sup>Required</sup> <a name="CacheAttributes" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.cacheAttributes"></a>

```csharp
public DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference CacheAttributes { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference">DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference</a>

---

##### `CaseSensitivity`<sup>Required</sup> <a name="CaseSensitivity" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.caseSensitivity"></a>

```csharp
public string CaseSensitivity { get; }
```

- *Type:* string

---

##### `DefaultStorageClass`<sup>Required</sup> <a name="DefaultStorageClass" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.defaultStorageClass"></a>

```csharp
public string DefaultStorageClass { get; }
```

- *Type:* string

---

##### `EncryptionType`<sup>Required</sup> <a name="EncryptionType" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.encryptionType"></a>

```csharp
public string EncryptionType { get; }
```

- *Type:* string

---

##### `FileShareArn`<sup>Required</sup> <a name="FileShareArn" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.fileShareArn"></a>

```csharp
public string FileShareArn { get; }
```

- *Type:* string

---

##### `FileShareId`<sup>Required</sup> <a name="FileShareId" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.fileShareId"></a>

```csharp
public string FileShareId { get; }
```

- *Type:* string

---

##### `FileShareName`<sup>Required</sup> <a name="FileShareName" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.fileShareName"></a>

```csharp
public string FileShareName { get; }
```

- *Type:* string

---

##### `FileShareStatus`<sup>Required</sup> <a name="FileShareStatus" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.fileShareStatus"></a>

```csharp
public string FileShareStatus { get; }
```

- *Type:* string

---

##### `GatewayArn`<sup>Required</sup> <a name="GatewayArn" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.gatewayArn"></a>

```csharp
public string GatewayArn { get; }
```

- *Type:* string

---

##### `GuessMimeTypeEnabled`<sup>Required</sup> <a name="GuessMimeTypeEnabled" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.guessMimeTypeEnabled"></a>

```csharp
public IResolvable GuessMimeTypeEnabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `InvalidUserList`<sup>Required</sup> <a name="InvalidUserList" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.invalidUserList"></a>

```csharp
public string[] InvalidUserList { get; }
```

- *Type:* string[]

---

##### `KmsEncrypted`<sup>Required</sup> <a name="KmsEncrypted" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.kmsEncrypted"></a>

```csharp
public IResolvable KmsEncrypted { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `KmsKey`<sup>Required</sup> <a name="KmsKey" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.kmsKey"></a>

```csharp
public string KmsKey { get; }
```

- *Type:* string

---

##### `LocationArn`<sup>Required</sup> <a name="LocationArn" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.locationArn"></a>

```csharp
public string LocationArn { get; }
```

- *Type:* string

---

##### `NotificationPolicy`<sup>Required</sup> <a name="NotificationPolicy" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.notificationPolicy"></a>

```csharp
public string NotificationPolicy { get; }
```

- *Type:* string

---

##### `ObjectAcl`<sup>Required</sup> <a name="ObjectAcl" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.objectAcl"></a>

```csharp
public string ObjectAcl { get; }
```

- *Type:* string

---

##### `OplocksEnabled`<sup>Required</sup> <a name="OplocksEnabled" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.oplocksEnabled"></a>

```csharp
public IResolvable OplocksEnabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `ReadOnly`<sup>Required</sup> <a name="ReadOnly" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.readOnly"></a>

```csharp
public IResolvable ReadOnly { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `RequesterPays`<sup>Required</sup> <a name="RequesterPays" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.requesterPays"></a>

```csharp
public IResolvable RequesterPays { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.role"></a>

```csharp
public string Role { get; }
```

- *Type:* string

---

##### `SmbaclEnabled`<sup>Required</sup> <a name="SmbaclEnabled" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.smbaclEnabled"></a>

```csharp
public IResolvable SmbaclEnabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.tags"></a>

```csharp
public DataAwsccStoragegatewaySmbFileShareTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsList">DataAwsccStoragegatewaySmbFileShareTagsList</a>

---

##### `ValidUserList`<sup>Required</sup> <a name="ValidUserList" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.validUserList"></a>

```csharp
public string[] ValidUserList { get; }
```

- *Type:* string[]

---

##### `VpcEndpointDnsName`<sup>Required</sup> <a name="VpcEndpointDnsName" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.vpcEndpointDnsName"></a>

```csharp
public string VpcEndpointDnsName { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccStoragegatewaySmbFileShareCacheAttributes <a name="DataAwsccStoragegatewaySmbFileShareCacheAttributes" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributes.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccStoragegatewaySmbFileShareCacheAttributes {

};
```


### DataAwsccStoragegatewaySmbFileShareConfig <a name="DataAwsccStoragegatewaySmbFileShareConfig" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccStoragegatewaySmbFileShareConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.106.0/docs/data-sources/storagegateway_smb_file_share#id DataAwsccStoragegatewaySmbFileShare#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccStoragegatewaySmbFileShareTags <a name="DataAwsccStoragegatewaySmbFileShareTags" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccStoragegatewaySmbFileShareTags {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference <a name="DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference.property.cacheStaleTimeoutInSeconds">CacheStaleTimeoutInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributes">DataAwsccStoragegatewaySmbFileShareCacheAttributes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CacheStaleTimeoutInSeconds`<sup>Required</sup> <a name="CacheStaleTimeoutInSeconds" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference.property.cacheStaleTimeoutInSeconds"></a>

```csharp
public double CacheStaleTimeoutInSeconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference.property.internalValue"></a>

```csharp
public DataAwsccStoragegatewaySmbFileShareCacheAttributes InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributes">DataAwsccStoragegatewaySmbFileShareCacheAttributes</a>

---


### DataAwsccStoragegatewaySmbFileShareTagsList <a name="DataAwsccStoragegatewaySmbFileShareTagsList" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccStoragegatewaySmbFileShareTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsList.get"></a>

```csharp
private DataAwsccStoragegatewaySmbFileShareTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccStoragegatewaySmbFileShareTagsOutputReference <a name="DataAwsccStoragegatewaySmbFileShareTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccStoragegatewaySmbFileShareTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTags">DataAwsccStoragegatewaySmbFileShareTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccStoragegatewaySmbFileShareTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTags">DataAwsccStoragegatewaySmbFileShareTags</a>

---



