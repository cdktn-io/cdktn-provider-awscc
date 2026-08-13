# `dataAwsccS3ExpressAccessPoint` Submodule <a name="`dataAwsccS3ExpressAccessPoint` Submodule" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccS3ExpressAccessPoint <a name="DataAwsccS3ExpressAccessPoint" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/s3express_access_point awscc_s3express_access_point}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPoint.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccS3ExpressAccessPoint(Construct Scope, string Id, DataAwsccS3ExpressAccessPointConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPoint.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPoint.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPoint.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointConfig">DataAwsccS3ExpressAccessPointConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPoint.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPoint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointConfig">DataAwsccS3ExpressAccessPointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPoint.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPoint.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPoint.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPoint.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPoint.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPoint.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPoint.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPoint.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPoint.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPoint.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPoint.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPoint.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPoint.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPoint.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPoint.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPoint.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPoint.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPoint.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPoint.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPoint.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPoint.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPoint.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPoint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPoint.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPoint.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPoint.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPoint.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPoint.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPoint.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPoint.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPoint.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPoint.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPoint.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPoint.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPoint.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPoint.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPoint.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPoint.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPoint.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPoint.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPoint.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPoint.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPoint.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccS3ExpressAccessPoint resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPoint.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccS3ExpressAccessPoint.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPoint.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPoint.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccS3ExpressAccessPoint.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPoint.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPoint.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccS3ExpressAccessPoint.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPoint.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPoint.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccS3ExpressAccessPoint.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccS3ExpressAccessPoint resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPoint.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccS3ExpressAccessPoint to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccS3ExpressAccessPoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/s3express_access_point#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPoint.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccS3ExpressAccessPoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPoint.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPoint.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPoint.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPoint.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPoint.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPoint.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPoint.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPoint.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPoint.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPoint.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPoint.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPoint.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPoint.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPoint.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPoint.property.bucketAccountId">BucketAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPoint.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPoint.property.networkOrigin">NetworkOrigin</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPoint.property.policy">Policy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPoint.property.publicAccessBlockConfiguration">PublicAccessBlockConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointPublicAccessBlockConfigurationOutputReference">DataAwsccS3ExpressAccessPointPublicAccessBlockConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPoint.property.scope">Scope</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointScopeOutputReference">DataAwsccS3ExpressAccessPointScopeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPoint.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointTagsList">DataAwsccS3ExpressAccessPointTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPoint.property.vpcConfiguration">VpcConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointVpcConfigurationOutputReference">DataAwsccS3ExpressAccessPointVpcConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPoint.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPoint.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPoint.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPoint.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPoint.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPoint.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPoint.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPoint.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPoint.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPoint.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPoint.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPoint.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPoint.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPoint.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPoint.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPoint.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `BucketAccountId`<sup>Required</sup> <a name="BucketAccountId" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPoint.property.bucketAccountId"></a>

```csharp
public string BucketAccountId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPoint.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NetworkOrigin`<sup>Required</sup> <a name="NetworkOrigin" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPoint.property.networkOrigin"></a>

```csharp
public string NetworkOrigin { get; }
```

- *Type:* string

---

##### `Policy`<sup>Required</sup> <a name="Policy" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPoint.property.policy"></a>

```csharp
public string Policy { get; }
```

- *Type:* string

---

##### `PublicAccessBlockConfiguration`<sup>Required</sup> <a name="PublicAccessBlockConfiguration" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPoint.property.publicAccessBlockConfiguration"></a>

```csharp
public DataAwsccS3ExpressAccessPointPublicAccessBlockConfigurationOutputReference PublicAccessBlockConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointPublicAccessBlockConfigurationOutputReference">DataAwsccS3ExpressAccessPointPublicAccessBlockConfigurationOutputReference</a>

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPoint.property.scope"></a>

```csharp
public DataAwsccS3ExpressAccessPointScopeOutputReference Scope { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointScopeOutputReference">DataAwsccS3ExpressAccessPointScopeOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPoint.property.tags"></a>

```csharp
public DataAwsccS3ExpressAccessPointTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointTagsList">DataAwsccS3ExpressAccessPointTagsList</a>

---

##### `VpcConfiguration`<sup>Required</sup> <a name="VpcConfiguration" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPoint.property.vpcConfiguration"></a>

```csharp
public DataAwsccS3ExpressAccessPointVpcConfigurationOutputReference VpcConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointVpcConfigurationOutputReference">DataAwsccS3ExpressAccessPointVpcConfigurationOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPoint.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPoint.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPoint.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPoint.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccS3ExpressAccessPointConfig <a name="DataAwsccS3ExpressAccessPointConfig" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccS3ExpressAccessPointConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/s3express_access_point#id DataAwsccS3ExpressAccessPoint#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccS3ExpressAccessPointPublicAccessBlockConfiguration <a name="DataAwsccS3ExpressAccessPointPublicAccessBlockConfiguration" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointPublicAccessBlockConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointPublicAccessBlockConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccS3ExpressAccessPointPublicAccessBlockConfiguration {

};
```


### DataAwsccS3ExpressAccessPointScope <a name="DataAwsccS3ExpressAccessPointScope" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointScope"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointScope.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccS3ExpressAccessPointScope {

};
```


### DataAwsccS3ExpressAccessPointTags <a name="DataAwsccS3ExpressAccessPointTags" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccS3ExpressAccessPointTags {

};
```


### DataAwsccS3ExpressAccessPointVpcConfiguration <a name="DataAwsccS3ExpressAccessPointVpcConfiguration" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointVpcConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointVpcConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccS3ExpressAccessPointVpcConfiguration {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccS3ExpressAccessPointPublicAccessBlockConfigurationOutputReference <a name="DataAwsccS3ExpressAccessPointPublicAccessBlockConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointPublicAccessBlockConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccS3ExpressAccessPointPublicAccessBlockConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.property.blockPublicAcls">BlockPublicAcls</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.property.blockPublicPolicy">BlockPublicPolicy</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.property.ignorePublicAcls">IgnorePublicAcls</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.property.restrictPublicBuckets">RestrictPublicBuckets</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointPublicAccessBlockConfiguration">DataAwsccS3ExpressAccessPointPublicAccessBlockConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BlockPublicAcls`<sup>Required</sup> <a name="BlockPublicAcls" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.property.blockPublicAcls"></a>

```csharp
public IResolvable BlockPublicAcls { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `BlockPublicPolicy`<sup>Required</sup> <a name="BlockPublicPolicy" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.property.blockPublicPolicy"></a>

```csharp
public IResolvable BlockPublicPolicy { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `IgnorePublicAcls`<sup>Required</sup> <a name="IgnorePublicAcls" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.property.ignorePublicAcls"></a>

```csharp
public IResolvable IgnorePublicAcls { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `RestrictPublicBuckets`<sup>Required</sup> <a name="RestrictPublicBuckets" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.property.restrictPublicBuckets"></a>

```csharp
public IResolvable RestrictPublicBuckets { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccS3ExpressAccessPointPublicAccessBlockConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointPublicAccessBlockConfiguration">DataAwsccS3ExpressAccessPointPublicAccessBlockConfiguration</a>

---


### DataAwsccS3ExpressAccessPointScopeOutputReference <a name="DataAwsccS3ExpressAccessPointScopeOutputReference" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointScopeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccS3ExpressAccessPointScopeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointScopeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointScopeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointScopeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointScopeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointScopeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointScopeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointScopeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointScopeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointScopeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointScopeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointScopeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointScopeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointScopeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointScopeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointScopeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointScopeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointScopeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointScopeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointScopeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointScopeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointScopeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointScopeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointScopeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointScopeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointScopeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointScopeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointScopeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointScopeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointScopeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointScopeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointScopeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointScopeOutputReference.property.permissions">Permissions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointScopeOutputReference.property.prefixes">Prefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointScopeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointScope">DataAwsccS3ExpressAccessPointScope</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointScopeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointScopeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Permissions`<sup>Required</sup> <a name="Permissions" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointScopeOutputReference.property.permissions"></a>

```csharp
public string[] Permissions { get; }
```

- *Type:* string[]

---

##### `Prefixes`<sup>Required</sup> <a name="Prefixes" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointScopeOutputReference.property.prefixes"></a>

```csharp
public string[] Prefixes { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointScopeOutputReference.property.internalValue"></a>

```csharp
public DataAwsccS3ExpressAccessPointScope InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointScope">DataAwsccS3ExpressAccessPointScope</a>

---


### DataAwsccS3ExpressAccessPointTagsList <a name="DataAwsccS3ExpressAccessPointTagsList" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccS3ExpressAccessPointTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointTagsList.get"></a>

```csharp
private DataAwsccS3ExpressAccessPointTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccS3ExpressAccessPointTagsOutputReference <a name="DataAwsccS3ExpressAccessPointTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccS3ExpressAccessPointTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointTags">DataAwsccS3ExpressAccessPointTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccS3ExpressAccessPointTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointTags">DataAwsccS3ExpressAccessPointTags</a>

---


### DataAwsccS3ExpressAccessPointVpcConfigurationOutputReference <a name="DataAwsccS3ExpressAccessPointVpcConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointVpcConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointVpcConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccS3ExpressAccessPointVpcConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointVpcConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointVpcConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointVpcConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointVpcConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointVpcConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointVpcConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointVpcConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointVpcConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointVpcConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointVpcConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointVpcConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointVpcConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointVpcConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointVpcConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointVpcConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointVpcConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointVpcConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointVpcConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointVpcConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointVpcConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointVpcConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointVpcConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointVpcConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointVpcConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointVpcConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointVpcConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointVpcConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointVpcConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointVpcConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointVpcConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointVpcConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointVpcConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointVpcConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointVpcConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointVpcConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointVpcConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointVpcConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointVpcConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointVpcConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointVpcConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointVpcConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointVpcConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointVpcConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointVpcConfigurationOutputReference.property.vpcId">VpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointVpcConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointVpcConfiguration">DataAwsccS3ExpressAccessPointVpcConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointVpcConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointVpcConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointVpcConfigurationOutputReference.property.vpcId"></a>

```csharp
public string VpcId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointVpcConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccS3ExpressAccessPointVpcConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3ExpressAccessPoint.DataAwsccS3ExpressAccessPointVpcConfiguration">DataAwsccS3ExpressAccessPointVpcConfiguration</a>

---



