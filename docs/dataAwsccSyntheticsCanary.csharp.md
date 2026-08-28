# `dataAwsccSyntheticsCanary` Submodule <a name="`dataAwsccSyntheticsCanary` Submodule" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccSyntheticsCanary <a name="DataAwsccSyntheticsCanary" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/synthetics_canary awscc_synthetics_canary}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSyntheticsCanary(Construct Scope, string Id, DataAwsccSyntheticsCanaryConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryConfig">DataAwsccSyntheticsCanaryConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryConfig">DataAwsccSyntheticsCanaryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccSyntheticsCanary resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccSyntheticsCanary.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccSyntheticsCanary.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccSyntheticsCanary.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccSyntheticsCanary.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccSyntheticsCanary resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccSyntheticsCanary to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccSyntheticsCanary that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/synthetics_canary#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccSyntheticsCanary to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.artifactConfig">ArtifactConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference">DataAwsccSyntheticsCanaryArtifactConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.artifactS3Location">ArtifactS3Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.browserConfigs">BrowserConfigs</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsList">DataAwsccSyntheticsCanaryBrowserConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.canaryId">CanaryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.code">Code</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference">DataAwsccSyntheticsCanaryCodeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.deleteLambdaResourcesOnCanaryDeletion">DeleteLambdaResourcesOnCanaryDeletion</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.dryRunAndUpdate">DryRunAndUpdate</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.executionRoleArn">ExecutionRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.failureRetentionPeriod">FailureRetentionPeriod</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.provisionedResourceCleanup">ProvisionedResourceCleanup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.resourcesToReplicateTags">ResourcesToReplicateTags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.runConfig">RunConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference">DataAwsccSyntheticsCanaryRunConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.runtimeVersion">RuntimeVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.schedule">Schedule</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference">DataAwsccSyntheticsCanaryScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.startCanaryAfterCreation">StartCanaryAfterCreation</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.successRetentionPeriod">SuccessRetentionPeriod</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsList">DataAwsccSyntheticsCanaryTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.visualReference">VisualReference</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference">DataAwsccSyntheticsCanaryVisualReferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.visualReferences">VisualReferences</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesList">DataAwsccSyntheticsCanaryVisualReferencesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.vpcConfig">VpcConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference">DataAwsccSyntheticsCanaryVpcConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `ArtifactConfig`<sup>Required</sup> <a name="ArtifactConfig" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.artifactConfig"></a>

```csharp
public DataAwsccSyntheticsCanaryArtifactConfigOutputReference ArtifactConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference">DataAwsccSyntheticsCanaryArtifactConfigOutputReference</a>

---

##### `ArtifactS3Location`<sup>Required</sup> <a name="ArtifactS3Location" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.artifactS3Location"></a>

```csharp
public string ArtifactS3Location { get; }
```

- *Type:* string

---

##### `BrowserConfigs`<sup>Required</sup> <a name="BrowserConfigs" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.browserConfigs"></a>

```csharp
public DataAwsccSyntheticsCanaryBrowserConfigsList BrowserConfigs { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsList">DataAwsccSyntheticsCanaryBrowserConfigsList</a>

---

##### `CanaryId`<sup>Required</sup> <a name="CanaryId" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.canaryId"></a>

```csharp
public string CanaryId { get; }
```

- *Type:* string

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.code"></a>

```csharp
public DataAwsccSyntheticsCanaryCodeOutputReference Code { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference">DataAwsccSyntheticsCanaryCodeOutputReference</a>

---

##### `DeleteLambdaResourcesOnCanaryDeletion`<sup>Required</sup> <a name="DeleteLambdaResourcesOnCanaryDeletion" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.deleteLambdaResourcesOnCanaryDeletion"></a>

```csharp
public IResolvable DeleteLambdaResourcesOnCanaryDeletion { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `DryRunAndUpdate`<sup>Required</sup> <a name="DryRunAndUpdate" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.dryRunAndUpdate"></a>

```csharp
public IResolvable DryRunAndUpdate { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `ExecutionRoleArn`<sup>Required</sup> <a name="ExecutionRoleArn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.executionRoleArn"></a>

```csharp
public string ExecutionRoleArn { get; }
```

- *Type:* string

---

##### `FailureRetentionPeriod`<sup>Required</sup> <a name="FailureRetentionPeriod" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.failureRetentionPeriod"></a>

```csharp
public double FailureRetentionPeriod { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ProvisionedResourceCleanup`<sup>Required</sup> <a name="ProvisionedResourceCleanup" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.provisionedResourceCleanup"></a>

```csharp
public string ProvisionedResourceCleanup { get; }
```

- *Type:* string

---

##### `ResourcesToReplicateTags`<sup>Required</sup> <a name="ResourcesToReplicateTags" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.resourcesToReplicateTags"></a>

```csharp
public string[] ResourcesToReplicateTags { get; }
```

- *Type:* string[]

---

##### `RunConfig`<sup>Required</sup> <a name="RunConfig" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.runConfig"></a>

```csharp
public DataAwsccSyntheticsCanaryRunConfigOutputReference RunConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference">DataAwsccSyntheticsCanaryRunConfigOutputReference</a>

---

##### `RuntimeVersion`<sup>Required</sup> <a name="RuntimeVersion" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.runtimeVersion"></a>

```csharp
public string RuntimeVersion { get; }
```

- *Type:* string

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.schedule"></a>

```csharp
public DataAwsccSyntheticsCanaryScheduleOutputReference Schedule { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference">DataAwsccSyntheticsCanaryScheduleOutputReference</a>

---

##### `StartCanaryAfterCreation`<sup>Required</sup> <a name="StartCanaryAfterCreation" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.startCanaryAfterCreation"></a>

```csharp
public IResolvable StartCanaryAfterCreation { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SuccessRetentionPeriod`<sup>Required</sup> <a name="SuccessRetentionPeriod" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.successRetentionPeriod"></a>

```csharp
public double SuccessRetentionPeriod { get; }
```

- *Type:* double

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.tags"></a>

```csharp
public DataAwsccSyntheticsCanaryTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsList">DataAwsccSyntheticsCanaryTagsList</a>

---

##### `VisualReference`<sup>Required</sup> <a name="VisualReference" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.visualReference"></a>

```csharp
public DataAwsccSyntheticsCanaryVisualReferenceOutputReference VisualReference { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference">DataAwsccSyntheticsCanaryVisualReferenceOutputReference</a>

---

##### `VisualReferences`<sup>Required</sup> <a name="VisualReferences" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.visualReferences"></a>

```csharp
public DataAwsccSyntheticsCanaryVisualReferencesList VisualReferences { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesList">DataAwsccSyntheticsCanaryVisualReferencesList</a>

---

##### `VpcConfig`<sup>Required</sup> <a name="VpcConfig" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.vpcConfig"></a>

```csharp
public DataAwsccSyntheticsCanaryVpcConfigOutputReference VpcConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference">DataAwsccSyntheticsCanaryVpcConfigOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccSyntheticsCanaryArtifactConfig <a name="DataAwsccSyntheticsCanaryArtifactConfig" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSyntheticsCanaryArtifactConfig {

};
```


### DataAwsccSyntheticsCanaryArtifactConfigS3Encryption <a name="DataAwsccSyntheticsCanaryArtifactConfigS3Encryption" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3Encryption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3Encryption.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSyntheticsCanaryArtifactConfigS3Encryption {

};
```


### DataAwsccSyntheticsCanaryBrowserConfigs <a name="DataAwsccSyntheticsCanaryBrowserConfigs" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigs.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSyntheticsCanaryBrowserConfigs {

};
```


### DataAwsccSyntheticsCanaryCode <a name="DataAwsccSyntheticsCanaryCode" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCode"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCode.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSyntheticsCanaryCode {

};
```


### DataAwsccSyntheticsCanaryCodeDependencies <a name="DataAwsccSyntheticsCanaryCodeDependencies" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependencies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependencies.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSyntheticsCanaryCodeDependencies {

};
```


### DataAwsccSyntheticsCanaryConfig <a name="DataAwsccSyntheticsCanaryConfig" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSyntheticsCanaryConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/synthetics_canary#id DataAwsccSyntheticsCanary#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccSyntheticsCanaryRunConfig <a name="DataAwsccSyntheticsCanaryRunConfig" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSyntheticsCanaryRunConfig {

};
```


### DataAwsccSyntheticsCanarySchedule <a name="DataAwsccSyntheticsCanarySchedule" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanarySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanarySchedule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSyntheticsCanarySchedule {

};
```


### DataAwsccSyntheticsCanaryScheduleRetryConfig <a name="DataAwsccSyntheticsCanaryScheduleRetryConfig" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSyntheticsCanaryScheduleRetryConfig {

};
```


### DataAwsccSyntheticsCanaryTags <a name="DataAwsccSyntheticsCanaryTags" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSyntheticsCanaryTags {

};
```


### DataAwsccSyntheticsCanaryVisualReference <a name="DataAwsccSyntheticsCanaryVisualReference" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReference"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSyntheticsCanaryVisualReference {

};
```


### DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshots <a name="DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshots" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshots"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshots.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshots {

};
```


### DataAwsccSyntheticsCanaryVisualReferences <a name="DataAwsccSyntheticsCanaryVisualReferences" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferences"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferences.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSyntheticsCanaryVisualReferences {

};
```


### DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshots <a name="DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshots" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshots"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshots.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshots {

};
```


### DataAwsccSyntheticsCanaryVpcConfig <a name="DataAwsccSyntheticsCanaryVpcConfig" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSyntheticsCanaryVpcConfig {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccSyntheticsCanaryArtifactConfigOutputReference <a name="DataAwsccSyntheticsCanaryArtifactConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSyntheticsCanaryArtifactConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.property.s3Encryption">S3Encryption</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference">DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfig">DataAwsccSyntheticsCanaryArtifactConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `S3Encryption`<sup>Required</sup> <a name="S3Encryption" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.property.s3Encryption"></a>

```csharp
public DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference S3Encryption { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference">DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSyntheticsCanaryArtifactConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfig">DataAwsccSyntheticsCanaryArtifactConfig</a>

---


### DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference <a name="DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.property.encryptionMode">EncryptionMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.property.kmsKeyArn">KmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3Encryption">DataAwsccSyntheticsCanaryArtifactConfigS3Encryption</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EncryptionMode`<sup>Required</sup> <a name="EncryptionMode" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.property.encryptionMode"></a>

```csharp
public string EncryptionMode { get; }
```

- *Type:* string

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.property.kmsKeyArn"></a>

```csharp
public string KmsKeyArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSyntheticsCanaryArtifactConfigS3Encryption InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3Encryption">DataAwsccSyntheticsCanaryArtifactConfigS3Encryption</a>

---


### DataAwsccSyntheticsCanaryBrowserConfigsList <a name="DataAwsccSyntheticsCanaryBrowserConfigsList" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSyntheticsCanaryBrowserConfigsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsList.get"></a>

```csharp
private DataAwsccSyntheticsCanaryBrowserConfigsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccSyntheticsCanaryBrowserConfigsOutputReference <a name="DataAwsccSyntheticsCanaryBrowserConfigsOutputReference" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSyntheticsCanaryBrowserConfigsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.property.browserType">BrowserType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigs">DataAwsccSyntheticsCanaryBrowserConfigs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BrowserType`<sup>Required</sup> <a name="BrowserType" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.property.browserType"></a>

```csharp
public string BrowserType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSyntheticsCanaryBrowserConfigs InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigs">DataAwsccSyntheticsCanaryBrowserConfigs</a>

---


### DataAwsccSyntheticsCanaryCodeDependenciesList <a name="DataAwsccSyntheticsCanaryCodeDependenciesList" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSyntheticsCanaryCodeDependenciesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesList.get"></a>

```csharp
private DataAwsccSyntheticsCanaryCodeDependenciesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccSyntheticsCanaryCodeDependenciesOutputReference <a name="DataAwsccSyntheticsCanaryCodeDependenciesOutputReference" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSyntheticsCanaryCodeDependenciesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.property.reference">Reference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependencies">DataAwsccSyntheticsCanaryCodeDependencies</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Reference`<sup>Required</sup> <a name="Reference" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.property.reference"></a>

```csharp
public string Reference { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSyntheticsCanaryCodeDependencies InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependencies">DataAwsccSyntheticsCanaryCodeDependencies</a>

---


### DataAwsccSyntheticsCanaryCodeOutputReference <a name="DataAwsccSyntheticsCanaryCodeOutputReference" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSyntheticsCanaryCodeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.property.blueprintTypes">BlueprintTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.property.dependencies">Dependencies</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesList">DataAwsccSyntheticsCanaryCodeDependenciesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.property.handler">Handler</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.property.s3Bucket">S3Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.property.s3Key">S3Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.property.s3ObjectVersion">S3ObjectVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.property.script">Script</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.property.sourceLocationArn">SourceLocationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCode">DataAwsccSyntheticsCanaryCode</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BlueprintTypes`<sup>Required</sup> <a name="BlueprintTypes" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.property.blueprintTypes"></a>

```csharp
public string[] BlueprintTypes { get; }
```

- *Type:* string[]

---

##### `Dependencies`<sup>Required</sup> <a name="Dependencies" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.property.dependencies"></a>

```csharp
public DataAwsccSyntheticsCanaryCodeDependenciesList Dependencies { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesList">DataAwsccSyntheticsCanaryCodeDependenciesList</a>

---

##### `Handler`<sup>Required</sup> <a name="Handler" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.property.handler"></a>

```csharp
public string Handler { get; }
```

- *Type:* string

---

##### `S3Bucket`<sup>Required</sup> <a name="S3Bucket" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.property.s3Bucket"></a>

```csharp
public string S3Bucket { get; }
```

- *Type:* string

---

##### `S3Key`<sup>Required</sup> <a name="S3Key" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.property.s3Key"></a>

```csharp
public string S3Key { get; }
```

- *Type:* string

---

##### `S3ObjectVersion`<sup>Required</sup> <a name="S3ObjectVersion" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.property.s3ObjectVersion"></a>

```csharp
public string S3ObjectVersion { get; }
```

- *Type:* string

---

##### `Script`<sup>Required</sup> <a name="Script" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.property.script"></a>

```csharp
public string Script { get; }
```

- *Type:* string

---

##### `SourceLocationArn`<sup>Required</sup> <a name="SourceLocationArn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.property.sourceLocationArn"></a>

```csharp
public string SourceLocationArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSyntheticsCanaryCode InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCode">DataAwsccSyntheticsCanaryCode</a>

---


### DataAwsccSyntheticsCanaryRunConfigOutputReference <a name="DataAwsccSyntheticsCanaryRunConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSyntheticsCanaryRunConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.property.activeTracing">ActiveTracing</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.property.environmentVariables">EnvironmentVariables</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.property.ephemeralStorage">EphemeralStorage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.property.memoryInMb">MemoryInMb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.property.timeoutInSeconds">TimeoutInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfig">DataAwsccSyntheticsCanaryRunConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActiveTracing`<sup>Required</sup> <a name="ActiveTracing" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.property.activeTracing"></a>

```csharp
public IResolvable ActiveTracing { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `EnvironmentVariables`<sup>Required</sup> <a name="EnvironmentVariables" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.property.environmentVariables"></a>

```csharp
public StringMap EnvironmentVariables { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `EphemeralStorage`<sup>Required</sup> <a name="EphemeralStorage" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.property.ephemeralStorage"></a>

```csharp
public double EphemeralStorage { get; }
```

- *Type:* double

---

##### `MemoryInMb`<sup>Required</sup> <a name="MemoryInMb" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.property.memoryInMb"></a>

```csharp
public double MemoryInMb { get; }
```

- *Type:* double

---

##### `TimeoutInSeconds`<sup>Required</sup> <a name="TimeoutInSeconds" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.property.timeoutInSeconds"></a>

```csharp
public double TimeoutInSeconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSyntheticsCanaryRunConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfig">DataAwsccSyntheticsCanaryRunConfig</a>

---


### DataAwsccSyntheticsCanaryScheduleOutputReference <a name="DataAwsccSyntheticsCanaryScheduleOutputReference" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSyntheticsCanaryScheduleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.property.durationInSeconds">DurationInSeconds</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.property.expression">Expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.property.retryConfig">RetryConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference">DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanarySchedule">DataAwsccSyntheticsCanarySchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DurationInSeconds`<sup>Required</sup> <a name="DurationInSeconds" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.property.durationInSeconds"></a>

```csharp
public string DurationInSeconds { get; }
```

- *Type:* string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.property.expression"></a>

```csharp
public string Expression { get; }
```

- *Type:* string

---

##### `RetryConfig`<sup>Required</sup> <a name="RetryConfig" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.property.retryConfig"></a>

```csharp
public DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference RetryConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference">DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSyntheticsCanarySchedule InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanarySchedule">DataAwsccSyntheticsCanarySchedule</a>

---


### DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference <a name="DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.property.maxRetries">MaxRetries</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfig">DataAwsccSyntheticsCanaryScheduleRetryConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxRetries`<sup>Required</sup> <a name="MaxRetries" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.property.maxRetries"></a>

```csharp
public double MaxRetries { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSyntheticsCanaryScheduleRetryConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfig">DataAwsccSyntheticsCanaryScheduleRetryConfig</a>

---


### DataAwsccSyntheticsCanaryTagsList <a name="DataAwsccSyntheticsCanaryTagsList" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSyntheticsCanaryTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsList.get"></a>

```csharp
private DataAwsccSyntheticsCanaryTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccSyntheticsCanaryTagsOutputReference <a name="DataAwsccSyntheticsCanaryTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSyntheticsCanaryTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTags">DataAwsccSyntheticsCanaryTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSyntheticsCanaryTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTags">DataAwsccSyntheticsCanaryTags</a>

---


### DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsList <a name="DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsList" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsList.get"></a>

```csharp
private DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference <a name="DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.property.ignoreCoordinates">IgnoreCoordinates</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.property.screenshotName">ScreenshotName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshots">DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshots</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IgnoreCoordinates`<sup>Required</sup> <a name="IgnoreCoordinates" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.property.ignoreCoordinates"></a>

```csharp
public string[] IgnoreCoordinates { get; }
```

- *Type:* string[]

---

##### `ScreenshotName`<sup>Required</sup> <a name="ScreenshotName" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.property.screenshotName"></a>

```csharp
public string ScreenshotName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshots InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshots">DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshots</a>

---


### DataAwsccSyntheticsCanaryVisualReferenceOutputReference <a name="DataAwsccSyntheticsCanaryVisualReferenceOutputReference" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSyntheticsCanaryVisualReferenceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.property.baseCanaryRunId">BaseCanaryRunId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.property.baseScreenshots">BaseScreenshots</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsList">DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.property.browserType">BrowserType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReference">DataAwsccSyntheticsCanaryVisualReference</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BaseCanaryRunId`<sup>Required</sup> <a name="BaseCanaryRunId" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.property.baseCanaryRunId"></a>

```csharp
public string BaseCanaryRunId { get; }
```

- *Type:* string

---

##### `BaseScreenshots`<sup>Required</sup> <a name="BaseScreenshots" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.property.baseScreenshots"></a>

```csharp
public DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsList BaseScreenshots { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsList">DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsList</a>

---

##### `BrowserType`<sup>Required</sup> <a name="BrowserType" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.property.browserType"></a>

```csharp
public string BrowserType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSyntheticsCanaryVisualReference InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReference">DataAwsccSyntheticsCanaryVisualReference</a>

---


### DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsList <a name="DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsList" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsList.get"></a>

```csharp
private DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference <a name="DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.property.ignoreCoordinates">IgnoreCoordinates</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.property.screenshotName">ScreenshotName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshots">DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshots</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IgnoreCoordinates`<sup>Required</sup> <a name="IgnoreCoordinates" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.property.ignoreCoordinates"></a>

```csharp
public string[] IgnoreCoordinates { get; }
```

- *Type:* string[]

---

##### `ScreenshotName`<sup>Required</sup> <a name="ScreenshotName" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.property.screenshotName"></a>

```csharp
public string ScreenshotName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshots InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshots">DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshots</a>

---


### DataAwsccSyntheticsCanaryVisualReferencesList <a name="DataAwsccSyntheticsCanaryVisualReferencesList" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSyntheticsCanaryVisualReferencesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesList.get"></a>

```csharp
private DataAwsccSyntheticsCanaryVisualReferencesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccSyntheticsCanaryVisualReferencesOutputReference <a name="DataAwsccSyntheticsCanaryVisualReferencesOutputReference" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSyntheticsCanaryVisualReferencesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.property.baseCanaryRunId">BaseCanaryRunId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.property.baseScreenshots">BaseScreenshots</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsList">DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.property.browserType">BrowserType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferences">DataAwsccSyntheticsCanaryVisualReferences</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BaseCanaryRunId`<sup>Required</sup> <a name="BaseCanaryRunId" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.property.baseCanaryRunId"></a>

```csharp
public string BaseCanaryRunId { get; }
```

- *Type:* string

---

##### `BaseScreenshots`<sup>Required</sup> <a name="BaseScreenshots" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.property.baseScreenshots"></a>

```csharp
public DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsList BaseScreenshots { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsList">DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsList</a>

---

##### `BrowserType`<sup>Required</sup> <a name="BrowserType" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.property.browserType"></a>

```csharp
public string BrowserType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSyntheticsCanaryVisualReferences InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferences">DataAwsccSyntheticsCanaryVisualReferences</a>

---


### DataAwsccSyntheticsCanaryVpcConfigOutputReference <a name="DataAwsccSyntheticsCanaryVpcConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSyntheticsCanaryVpcConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.property.ipv6AllowedForDualStack">Ipv6AllowedForDualStack</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.property.vpcId">VpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfig">DataAwsccSyntheticsCanaryVpcConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Ipv6AllowedForDualStack`<sup>Required</sup> <a name="Ipv6AllowedForDualStack" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.property.ipv6AllowedForDualStack"></a>

```csharp
public IResolvable Ipv6AllowedForDualStack { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; }
```

- *Type:* string[]

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; }
```

- *Type:* string[]

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.property.vpcId"></a>

```csharp
public string VpcId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSyntheticsCanaryVpcConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfig">DataAwsccSyntheticsCanaryVpcConfig</a>

---



