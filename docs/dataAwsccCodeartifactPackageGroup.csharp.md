# `dataAwsccCodeartifactPackageGroup` Submodule <a name="`dataAwsccCodeartifactPackageGroup` Submodule" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccCodeartifactPackageGroup <a name="DataAwsccCodeartifactPackageGroup" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/codeartifact_package_group awscc_codeartifact_package_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCodeartifactPackageGroup(Construct Scope, string Id, DataAwsccCodeartifactPackageGroupConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupConfig">DataAwsccCodeartifactPackageGroupConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupConfig">DataAwsccCodeartifactPackageGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccCodeartifactPackageGroup resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccCodeartifactPackageGroup.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccCodeartifactPackageGroup.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccCodeartifactPackageGroup.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccCodeartifactPackageGroup.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccCodeartifactPackageGroup resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccCodeartifactPackageGroup to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccCodeartifactPackageGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/codeartifact_package_group#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccCodeartifactPackageGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.property.contactInfo">ContactInfo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.property.domainName">DomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.property.domainOwner">DomainOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.property.originConfiguration">OriginConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationOutputReference">DataAwsccCodeartifactPackageGroupOriginConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.property.pattern">Pattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTagsList">DataAwsccCodeartifactPackageGroupTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `ContactInfo`<sup>Required</sup> <a name="ContactInfo" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.property.contactInfo"></a>

```csharp
public string ContactInfo { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.property.domainName"></a>

```csharp
public string DomainName { get; }
```

- *Type:* string

---

##### `DomainOwner`<sup>Required</sup> <a name="DomainOwner" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.property.domainOwner"></a>

```csharp
public string DomainOwner { get; }
```

- *Type:* string

---

##### `OriginConfiguration`<sup>Required</sup> <a name="OriginConfiguration" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.property.originConfiguration"></a>

```csharp
public DataAwsccCodeartifactPackageGroupOriginConfigurationOutputReference OriginConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationOutputReference">DataAwsccCodeartifactPackageGroupOriginConfigurationOutputReference</a>

---

##### `Pattern`<sup>Required</sup> <a name="Pattern" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.property.pattern"></a>

```csharp
public string Pattern { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.property.tags"></a>

```csharp
public DataAwsccCodeartifactPackageGroupTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTagsList">DataAwsccCodeartifactPackageGroupTagsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccCodeartifactPackageGroupConfig <a name="DataAwsccCodeartifactPackageGroupConfig" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCodeartifactPackageGroupConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/codeartifact_package_group#id DataAwsccCodeartifactPackageGroup#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccCodeartifactPackageGroupOriginConfiguration <a name="DataAwsccCodeartifactPackageGroupOriginConfiguration" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCodeartifactPackageGroupOriginConfiguration {

};
```


### DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictions <a name="DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictions" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictions {

};
```


### DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstream <a name="DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstream" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstream"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstream.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstream {

};
```


### DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstream <a name="DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstream" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstream"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstream.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstream {

};
```


### DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsPublish <a name="DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsPublish" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsPublish"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsPublish.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsPublish {

};
```


### DataAwsccCodeartifactPackageGroupTags <a name="DataAwsccCodeartifactPackageGroupTags" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCodeartifactPackageGroupTags {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccCodeartifactPackageGroupOriginConfigurationOutputReference <a name="DataAwsccCodeartifactPackageGroupOriginConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCodeartifactPackageGroupOriginConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationOutputReference.property.restrictions">Restrictions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference">DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfiguration">DataAwsccCodeartifactPackageGroupOriginConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Restrictions`<sup>Required</sup> <a name="Restrictions" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationOutputReference.property.restrictions"></a>

```csharp
public DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference Restrictions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference">DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccCodeartifactPackageGroupOriginConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfiguration">DataAwsccCodeartifactPackageGroupOriginConfiguration</a>

---


### DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference <a name="DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.property.repositories">Repositories</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.property.restrictionMode">RestrictionMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstream">DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstream</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Repositories`<sup>Required</sup> <a name="Repositories" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.property.repositories"></a>

```csharp
public string[] Repositories { get; }
```

- *Type:* string[]

---

##### `RestrictionMode`<sup>Required</sup> <a name="RestrictionMode" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.property.restrictionMode"></a>

```csharp
public string RestrictionMode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.property.internalValue"></a>

```csharp
public DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstream InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstream">DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstream</a>

---


### DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference <a name="DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.property.repositories">Repositories</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.property.restrictionMode">RestrictionMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstream">DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstream</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Repositories`<sup>Required</sup> <a name="Repositories" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.property.repositories"></a>

```csharp
public string[] Repositories { get; }
```

- *Type:* string[]

---

##### `RestrictionMode`<sup>Required</sup> <a name="RestrictionMode" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.property.restrictionMode"></a>

```csharp
public string RestrictionMode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.property.internalValue"></a>

```csharp
public DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstream InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstream">DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstream</a>

---


### DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference <a name="DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.property.externalUpstream">ExternalUpstream</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference">DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.property.internalUpstream">InternalUpstream</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference">DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.property.publish">Publish</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference">DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictions">DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExternalUpstream`<sup>Required</sup> <a name="ExternalUpstream" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.property.externalUpstream"></a>

```csharp
public DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference ExternalUpstream { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference">DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference</a>

---

##### `InternalUpstream`<sup>Required</sup> <a name="InternalUpstream" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.property.internalUpstream"></a>

```csharp
public DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference InternalUpstream { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference">DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference</a>

---

##### `Publish`<sup>Required</sup> <a name="Publish" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.property.publish"></a>

```csharp
public DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference Publish { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference">DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictions InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictions">DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictions</a>

---


### DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference <a name="DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.property.repositories">Repositories</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.property.restrictionMode">RestrictionMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsPublish">DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsPublish</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Repositories`<sup>Required</sup> <a name="Repositories" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.property.repositories"></a>

```csharp
public string[] Repositories { get; }
```

- *Type:* string[]

---

##### `RestrictionMode`<sup>Required</sup> <a name="RestrictionMode" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.property.restrictionMode"></a>

```csharp
public string RestrictionMode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.property.internalValue"></a>

```csharp
public DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsPublish InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsPublish">DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsPublish</a>

---


### DataAwsccCodeartifactPackageGroupTagsList <a name="DataAwsccCodeartifactPackageGroupTagsList" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCodeartifactPackageGroupTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTagsList.get"></a>

```csharp
private DataAwsccCodeartifactPackageGroupTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccCodeartifactPackageGroupTagsOutputReference <a name="DataAwsccCodeartifactPackageGroupTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCodeartifactPackageGroupTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTags">DataAwsccCodeartifactPackageGroupTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccCodeartifactPackageGroupTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTags">DataAwsccCodeartifactPackageGroupTags</a>

---



