# `dataAwsccS3ExpressDirectoryBucket` Submodule <a name="`dataAwsccS3ExpressDirectoryBucket` Submodule" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccS3ExpressDirectoryBucket <a name="DataAwsccS3ExpressDirectoryBucket" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/s3express_directory_bucket awscc_s3express_directory_bucket}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccS3ExpressDirectoryBucket(Construct Scope, string Id, DataAwsccS3ExpressDirectoryBucketConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketConfig">DataAwsccS3ExpressDirectoryBucketConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketConfig">DataAwsccS3ExpressDirectoryBucketConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccS3ExpressDirectoryBucket resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccS3ExpressDirectoryBucket.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccS3ExpressDirectoryBucket.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccS3ExpressDirectoryBucket.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccS3ExpressDirectoryBucket.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccS3ExpressDirectoryBucket resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccS3ExpressDirectoryBucket to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccS3ExpressDirectoryBucket that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/s3express_directory_bucket#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccS3ExpressDirectoryBucket to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.property.availabilityZoneName">AvailabilityZoneName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.property.bucketEncryption">BucketEncryption</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionOutputReference">DataAwsccS3ExpressDirectoryBucketBucketEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.property.bucketName">BucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.property.dataRedundancy">DataRedundancy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.property.inventoryConfigurations">InventoryConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsList">DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.property.lifecycleConfiguration">LifecycleConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationOutputReference">DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.property.locationName">LocationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.property.metricsConfigurations">MetricsConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsList">DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTagsList">DataAwsccS3ExpressDirectoryBucketTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `AvailabilityZoneName`<sup>Required</sup> <a name="AvailabilityZoneName" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.property.availabilityZoneName"></a>

```csharp
public string AvailabilityZoneName { get; }
```

- *Type:* string

---

##### `BucketEncryption`<sup>Required</sup> <a name="BucketEncryption" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.property.bucketEncryption"></a>

```csharp
public DataAwsccS3ExpressDirectoryBucketBucketEncryptionOutputReference BucketEncryption { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionOutputReference">DataAwsccS3ExpressDirectoryBucketBucketEncryptionOutputReference</a>

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.property.bucketName"></a>

```csharp
public string BucketName { get; }
```

- *Type:* string

---

##### `DataRedundancy`<sup>Required</sup> <a name="DataRedundancy" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.property.dataRedundancy"></a>

```csharp
public string DataRedundancy { get; }
```

- *Type:* string

---

##### `InventoryConfigurations`<sup>Required</sup> <a name="InventoryConfigurations" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.property.inventoryConfigurations"></a>

```csharp
public DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsList InventoryConfigurations { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsList">DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsList</a>

---

##### `LifecycleConfiguration`<sup>Required</sup> <a name="LifecycleConfiguration" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.property.lifecycleConfiguration"></a>

```csharp
public DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationOutputReference LifecycleConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationOutputReference">DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationOutputReference</a>

---

##### `LocationName`<sup>Required</sup> <a name="LocationName" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.property.locationName"></a>

```csharp
public string LocationName { get; }
```

- *Type:* string

---

##### `MetricsConfigurations`<sup>Required</sup> <a name="MetricsConfigurations" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.property.metricsConfigurations"></a>

```csharp
public DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsList MetricsConfigurations { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsList">DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.property.tags"></a>

```csharp
public DataAwsccS3ExpressDirectoryBucketTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTagsList">DataAwsccS3ExpressDirectoryBucketTagsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccS3ExpressDirectoryBucketBucketEncryption <a name="DataAwsccS3ExpressDirectoryBucketBucketEncryption" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryption.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccS3ExpressDirectoryBucketBucketEncryption {

};
```


### DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfiguration <a name="DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfiguration" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfiguration {

};
```


### DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefault <a name="DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefault" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefault"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefault.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefault {

};
```


### DataAwsccS3ExpressDirectoryBucketConfig <a name="DataAwsccS3ExpressDirectoryBucketConfig" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccS3ExpressDirectoryBucketConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/s3express_directory_bucket#id DataAwsccS3ExpressDirectoryBucket#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccS3ExpressDirectoryBucketInventoryConfigurations <a name="DataAwsccS3ExpressDirectoryBucketInventoryConfigurations" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurations.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccS3ExpressDirectoryBucketInventoryConfigurations {

};
```


### DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsDestination <a name="DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsDestination" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsDestination.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsDestination {

};
```


### DataAwsccS3ExpressDirectoryBucketLifecycleConfiguration <a name="DataAwsccS3ExpressDirectoryBucketLifecycleConfiguration" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccS3ExpressDirectoryBucketLifecycleConfiguration {

};
```


### DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRules <a name="DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRules" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRules.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRules {

};
```


### DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload <a name="DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload {

};
```


### DataAwsccS3ExpressDirectoryBucketMetricsConfigurations <a name="DataAwsccS3ExpressDirectoryBucketMetricsConfigurations" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurations.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccS3ExpressDirectoryBucketMetricsConfigurations {

};
```


### DataAwsccS3ExpressDirectoryBucketTags <a name="DataAwsccS3ExpressDirectoryBucketTags" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccS3ExpressDirectoryBucketTags {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccS3ExpressDirectoryBucketBucketEncryptionOutputReference <a name="DataAwsccS3ExpressDirectoryBucketBucketEncryptionOutputReference" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccS3ExpressDirectoryBucketBucketEncryptionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionOutputReference.property.serverSideEncryptionConfiguration">ServerSideEncryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList">DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryption">DataAwsccS3ExpressDirectoryBucketBucketEncryption</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ServerSideEncryptionConfiguration`<sup>Required</sup> <a name="ServerSideEncryptionConfiguration" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionOutputReference.property.serverSideEncryptionConfiguration"></a>

```csharp
public DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList ServerSideEncryptionConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList">DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionOutputReference.property.internalValue"></a>

```csharp
public DataAwsccS3ExpressDirectoryBucketBucketEncryption InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryption">DataAwsccS3ExpressDirectoryBucketBucketEncryption</a>

---


### DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList <a name="DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList.get"></a>

```csharp
private DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference <a name="DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.property.bucketKeyEnabled">BucketKeyEnabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.property.serverSideEncryptionByDefault">ServerSideEncryptionByDefault</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference">DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfiguration">DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BucketKeyEnabled`<sup>Required</sup> <a name="BucketKeyEnabled" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.property.bucketKeyEnabled"></a>

```csharp
public IResolvable BucketKeyEnabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `ServerSideEncryptionByDefault`<sup>Required</sup> <a name="ServerSideEncryptionByDefault" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.property.serverSideEncryptionByDefault"></a>

```csharp
public DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference ServerSideEncryptionByDefault { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference">DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfiguration">DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfiguration</a>

---


### DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference <a name="DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.property.kmsMasterKeyId">KmsMasterKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.property.sseAlgorithm">SseAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefault">DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefault</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KmsMasterKeyId`<sup>Required</sup> <a name="KmsMasterKeyId" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.property.kmsMasterKeyId"></a>

```csharp
public string KmsMasterKeyId { get; }
```

- *Type:* string

---

##### `SseAlgorithm`<sup>Required</sup> <a name="SseAlgorithm" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.property.sseAlgorithm"></a>

```csharp
public string SseAlgorithm { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.property.internalValue"></a>

```csharp
public DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefault InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefault">DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefault</a>

---


### DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference <a name="DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.property.bucketAccountId">BucketAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.property.bucketArn">BucketArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.property.format">Format</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.property.prefix">Prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsDestination">DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsDestination</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BucketAccountId`<sup>Required</sup> <a name="BucketAccountId" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.property.bucketAccountId"></a>

```csharp
public string BucketAccountId { get; }
```

- *Type:* string

---

##### `BucketArn`<sup>Required</sup> <a name="BucketArn" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.property.bucketArn"></a>

```csharp
public string BucketArn { get; }
```

- *Type:* string

---

##### `Format`<sup>Required</sup> <a name="Format" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.property.format"></a>

```csharp
public string Format { get; }
```

- *Type:* string

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.property.prefix"></a>

```csharp
public string Prefix { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsDestination InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsDestination">DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsDestination</a>

---


### DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsList <a name="DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsList" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsList.get"></a>

```csharp
private DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsOutputReference <a name="DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsOutputReference" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.destination">Destination</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference">DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.enabled">Enabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.includedObjectVersions">IncludedObjectVersions</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.optionalFields">OptionalFields</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.prefix">Prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.scheduleFrequency">ScheduleFrequency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurations">DataAwsccS3ExpressDirectoryBucketInventoryConfigurations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.destination"></a>

```csharp
public DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference Destination { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference">DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference</a>

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.enabled"></a>

```csharp
public IResolvable Enabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IncludedObjectVersions`<sup>Required</sup> <a name="IncludedObjectVersions" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.includedObjectVersions"></a>

```csharp
public string IncludedObjectVersions { get; }
```

- *Type:* string

---

##### `OptionalFields`<sup>Required</sup> <a name="OptionalFields" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.optionalFields"></a>

```csharp
public string[] OptionalFields { get; }
```

- *Type:* string[]

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.prefix"></a>

```csharp
public string Prefix { get; }
```

- *Type:* string

---

##### `ScheduleFrequency`<sup>Required</sup> <a name="ScheduleFrequency" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.scheduleFrequency"></a>

```csharp
public string ScheduleFrequency { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccS3ExpressDirectoryBucketInventoryConfigurations InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurations">DataAwsccS3ExpressDirectoryBucketInventoryConfigurations</a>

---


### DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationOutputReference <a name="DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationOutputReference.property.rules">Rules</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesList">DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfiguration">DataAwsccS3ExpressDirectoryBucketLifecycleConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationOutputReference.property.rules"></a>

```csharp
public DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesList Rules { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesList">DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccS3ExpressDirectoryBucketLifecycleConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfiguration">DataAwsccS3ExpressDirectoryBucketLifecycleConfiguration</a>

---


### DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference <a name="DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.property.daysAfterInitiation">DaysAfterInitiation</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload">DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DaysAfterInitiation`<sup>Required</sup> <a name="DaysAfterInitiation" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.property.daysAfterInitiation"></a>

```csharp
public double DaysAfterInitiation { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.property.internalValue"></a>

```csharp
public DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload">DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload</a>

---


### DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesList <a name="DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesList" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesList.get"></a>

```csharp
private DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference <a name="DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.abortIncompleteMultipartUpload">AbortIncompleteMultipartUpload</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference">DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.expirationInDays">ExpirationInDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.objectSizeGreaterThan">ObjectSizeGreaterThan</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.objectSizeLessThan">ObjectSizeLessThan</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.prefix">Prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRules">DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AbortIncompleteMultipartUpload`<sup>Required</sup> <a name="AbortIncompleteMultipartUpload" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.abortIncompleteMultipartUpload"></a>

```csharp
public DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference AbortIncompleteMultipartUpload { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference">DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference</a>

---

##### `ExpirationInDays`<sup>Required</sup> <a name="ExpirationInDays" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.expirationInDays"></a>

```csharp
public double ExpirationInDays { get; }
```

- *Type:* double

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ObjectSizeGreaterThan`<sup>Required</sup> <a name="ObjectSizeGreaterThan" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.objectSizeGreaterThan"></a>

```csharp
public string ObjectSizeGreaterThan { get; }
```

- *Type:* string

---

##### `ObjectSizeLessThan`<sup>Required</sup> <a name="ObjectSizeLessThan" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.objectSizeLessThan"></a>

```csharp
public string ObjectSizeLessThan { get; }
```

- *Type:* string

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.prefix"></a>

```csharp
public string Prefix { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.internalValue"></a>

```csharp
public DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRules InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRules">DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRules</a>

---


### DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsList <a name="DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsList" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsList.get"></a>

```csharp
private DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsOutputReference <a name="DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsOutputReference" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsOutputReference.property.accessPointArn">AccessPointArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsOutputReference.property.prefix">Prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurations">DataAwsccS3ExpressDirectoryBucketMetricsConfigurations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccessPointArn`<sup>Required</sup> <a name="AccessPointArn" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsOutputReference.property.accessPointArn"></a>

```csharp
public string AccessPointArn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsOutputReference.property.prefix"></a>

```csharp
public string Prefix { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccS3ExpressDirectoryBucketMetricsConfigurations InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurations">DataAwsccS3ExpressDirectoryBucketMetricsConfigurations</a>

---


### DataAwsccS3ExpressDirectoryBucketTagsList <a name="DataAwsccS3ExpressDirectoryBucketTagsList" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccS3ExpressDirectoryBucketTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTagsList.get"></a>

```csharp
private DataAwsccS3ExpressDirectoryBucketTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccS3ExpressDirectoryBucketTagsOutputReference <a name="DataAwsccS3ExpressDirectoryBucketTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccS3ExpressDirectoryBucketTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTags">DataAwsccS3ExpressDirectoryBucketTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccS3ExpressDirectoryBucketTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTags">DataAwsccS3ExpressDirectoryBucketTags</a>

---



