# `dataAwsccOpensearchserviceDomain` Submodule <a name="`dataAwsccOpensearchserviceDomain` Submodule" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccOpensearchserviceDomain <a name="DataAwsccOpensearchserviceDomain" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/opensearchservice_domain awscc_opensearchservice_domain}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccOpensearchserviceDomain(Construct Scope, string Id, DataAwsccOpensearchserviceDomainConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainConfig">DataAwsccOpensearchserviceDomainConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainConfig">DataAwsccOpensearchserviceDomainConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccOpensearchserviceDomain resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccOpensearchserviceDomain.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccOpensearchserviceDomain.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccOpensearchserviceDomain.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccOpensearchserviceDomain.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccOpensearchserviceDomain resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccOpensearchserviceDomain to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccOpensearchserviceDomain that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/opensearchservice_domain#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccOpensearchserviceDomain to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.accessPolicies">AccessPolicies</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.advancedOptions">AdvancedOptions</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.advancedSecurityOptions">AdvancedSecurityOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsOutputReference">DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.aimlOptions">AimlOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsOutputReference">DataAwsccOpensearchserviceDomainAimlOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.automatedSnapshotPauseOptions">AutomatedSnapshotPauseOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference">DataAwsccOpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.clusterConfig">ClusterConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigOutputReference">DataAwsccOpensearchserviceDomainClusterConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.cognitoOptions">CognitoOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainCognitoOptionsOutputReference">DataAwsccOpensearchserviceDomainCognitoOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.deploymentStrategyOptions">DeploymentStrategyOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDeploymentStrategyOptionsOutputReference">DataAwsccOpensearchserviceDomainDeploymentStrategyOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.domainArn">DomainArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.domainEndpoint">DomainEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.domainEndpointOptions">DomainEndpointOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDomainEndpointOptionsOutputReference">DataAwsccOpensearchserviceDomainDomainEndpointOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.domainEndpoints">DomainEndpoints</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.domainEndpointV2">DomainEndpointV2</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.domainId">DomainId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.domainName">DomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.ebsOptions">EbsOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEbsOptionsOutputReference">DataAwsccOpensearchserviceDomainEbsOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.encryptionAtRestOptions">EncryptionAtRestOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEncryptionAtRestOptionsOutputReference">DataAwsccOpensearchserviceDomainEncryptionAtRestOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.engineMode">EngineMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.engineVersion">EngineVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.identityCenterOptions">IdentityCenterOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainIdentityCenterOptionsOutputReference">DataAwsccOpensearchserviceDomainIdentityCenterOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.ipAddressType">IpAddressType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.logPublishingOptions">LogPublishingOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainLogPublishingOptionsMap">DataAwsccOpensearchserviceDomainLogPublishingOptionsMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.nodeToNodeEncryptionOptions">NodeToNodeEncryptionOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference">DataAwsccOpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.offPeakWindowOptions">OffPeakWindowOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOutputReference">DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.serviceSoftwareOptions">ServiceSoftwareOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainServiceSoftwareOptionsOutputReference">DataAwsccOpensearchserviceDomainServiceSoftwareOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.skipShardMigrationWait">SkipShardMigrationWait</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.snapshotOptions">SnapshotOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSnapshotOptionsOutputReference">DataAwsccOpensearchserviceDomainSnapshotOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.softwareUpdateOptions">SoftwareUpdateOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSoftwareUpdateOptionsOutputReference">DataAwsccOpensearchserviceDomainSoftwareUpdateOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTagsList">DataAwsccOpensearchserviceDomainTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.useCase">UseCase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.vpcOptions">VpcOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainVpcOptionsOutputReference">DataAwsccOpensearchserviceDomainVpcOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `AccessPolicies`<sup>Required</sup> <a name="AccessPolicies" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.accessPolicies"></a>

```csharp
public string AccessPolicies { get; }
```

- *Type:* string

---

##### `AdvancedOptions`<sup>Required</sup> <a name="AdvancedOptions" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.advancedOptions"></a>

```csharp
public StringMap AdvancedOptions { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `AdvancedSecurityOptions`<sup>Required</sup> <a name="AdvancedSecurityOptions" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.advancedSecurityOptions"></a>

```csharp
public DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsOutputReference AdvancedSecurityOptions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsOutputReference">DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsOutputReference</a>

---

##### `AimlOptions`<sup>Required</sup> <a name="AimlOptions" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.aimlOptions"></a>

```csharp
public DataAwsccOpensearchserviceDomainAimlOptionsOutputReference AimlOptions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsOutputReference">DataAwsccOpensearchserviceDomainAimlOptionsOutputReference</a>

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `AutomatedSnapshotPauseOptions`<sup>Required</sup> <a name="AutomatedSnapshotPauseOptions" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.automatedSnapshotPauseOptions"></a>

```csharp
public DataAwsccOpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference AutomatedSnapshotPauseOptions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference">DataAwsccOpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference</a>

---

##### `ClusterConfig`<sup>Required</sup> <a name="ClusterConfig" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.clusterConfig"></a>

```csharp
public DataAwsccOpensearchserviceDomainClusterConfigOutputReference ClusterConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigOutputReference">DataAwsccOpensearchserviceDomainClusterConfigOutputReference</a>

---

##### `CognitoOptions`<sup>Required</sup> <a name="CognitoOptions" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.cognitoOptions"></a>

```csharp
public DataAwsccOpensearchserviceDomainCognitoOptionsOutputReference CognitoOptions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainCognitoOptionsOutputReference">DataAwsccOpensearchserviceDomainCognitoOptionsOutputReference</a>

---

##### `DeploymentStrategyOptions`<sup>Required</sup> <a name="DeploymentStrategyOptions" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.deploymentStrategyOptions"></a>

```csharp
public DataAwsccOpensearchserviceDomainDeploymentStrategyOptionsOutputReference DeploymentStrategyOptions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDeploymentStrategyOptionsOutputReference">DataAwsccOpensearchserviceDomainDeploymentStrategyOptionsOutputReference</a>

---

##### `DomainArn`<sup>Required</sup> <a name="DomainArn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.domainArn"></a>

```csharp
public string DomainArn { get; }
```

- *Type:* string

---

##### `DomainEndpoint`<sup>Required</sup> <a name="DomainEndpoint" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.domainEndpoint"></a>

```csharp
public string DomainEndpoint { get; }
```

- *Type:* string

---

##### `DomainEndpointOptions`<sup>Required</sup> <a name="DomainEndpointOptions" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.domainEndpointOptions"></a>

```csharp
public DataAwsccOpensearchserviceDomainDomainEndpointOptionsOutputReference DomainEndpointOptions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDomainEndpointOptionsOutputReference">DataAwsccOpensearchserviceDomainDomainEndpointOptionsOutputReference</a>

---

##### `DomainEndpoints`<sup>Required</sup> <a name="DomainEndpoints" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.domainEndpoints"></a>

```csharp
public StringMap DomainEndpoints { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `DomainEndpointV2`<sup>Required</sup> <a name="DomainEndpointV2" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.domainEndpointV2"></a>

```csharp
public string DomainEndpointV2 { get; }
```

- *Type:* string

---

##### `DomainId`<sup>Required</sup> <a name="DomainId" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.domainId"></a>

```csharp
public string DomainId { get; }
```

- *Type:* string

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.domainName"></a>

```csharp
public string DomainName { get; }
```

- *Type:* string

---

##### `EbsOptions`<sup>Required</sup> <a name="EbsOptions" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.ebsOptions"></a>

```csharp
public DataAwsccOpensearchserviceDomainEbsOptionsOutputReference EbsOptions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEbsOptionsOutputReference">DataAwsccOpensearchserviceDomainEbsOptionsOutputReference</a>

---

##### `EncryptionAtRestOptions`<sup>Required</sup> <a name="EncryptionAtRestOptions" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.encryptionAtRestOptions"></a>

```csharp
public DataAwsccOpensearchserviceDomainEncryptionAtRestOptionsOutputReference EncryptionAtRestOptions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEncryptionAtRestOptionsOutputReference">DataAwsccOpensearchserviceDomainEncryptionAtRestOptionsOutputReference</a>

---

##### `EngineMode`<sup>Required</sup> <a name="EngineMode" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.engineMode"></a>

```csharp
public string EngineMode { get; }
```

- *Type:* string

---

##### `EngineVersion`<sup>Required</sup> <a name="EngineVersion" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.engineVersion"></a>

```csharp
public string EngineVersion { get; }
```

- *Type:* string

---

##### `IdentityCenterOptions`<sup>Required</sup> <a name="IdentityCenterOptions" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.identityCenterOptions"></a>

```csharp
public DataAwsccOpensearchserviceDomainIdentityCenterOptionsOutputReference IdentityCenterOptions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainIdentityCenterOptionsOutputReference">DataAwsccOpensearchserviceDomainIdentityCenterOptionsOutputReference</a>

---

##### `IpAddressType`<sup>Required</sup> <a name="IpAddressType" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.ipAddressType"></a>

```csharp
public string IpAddressType { get; }
```

- *Type:* string

---

##### `LogPublishingOptions`<sup>Required</sup> <a name="LogPublishingOptions" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.logPublishingOptions"></a>

```csharp
public DataAwsccOpensearchserviceDomainLogPublishingOptionsMap LogPublishingOptions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainLogPublishingOptionsMap">DataAwsccOpensearchserviceDomainLogPublishingOptionsMap</a>

---

##### `NodeToNodeEncryptionOptions`<sup>Required</sup> <a name="NodeToNodeEncryptionOptions" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.nodeToNodeEncryptionOptions"></a>

```csharp
public DataAwsccOpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference NodeToNodeEncryptionOptions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference">DataAwsccOpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference</a>

---

##### `OffPeakWindowOptions`<sup>Required</sup> <a name="OffPeakWindowOptions" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.offPeakWindowOptions"></a>

```csharp
public DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOutputReference OffPeakWindowOptions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOutputReference">DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOutputReference</a>

---

##### `ServiceSoftwareOptions`<sup>Required</sup> <a name="ServiceSoftwareOptions" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.serviceSoftwareOptions"></a>

```csharp
public DataAwsccOpensearchserviceDomainServiceSoftwareOptionsOutputReference ServiceSoftwareOptions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainServiceSoftwareOptionsOutputReference">DataAwsccOpensearchserviceDomainServiceSoftwareOptionsOutputReference</a>

---

##### `SkipShardMigrationWait`<sup>Required</sup> <a name="SkipShardMigrationWait" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.skipShardMigrationWait"></a>

```csharp
public IResolvable SkipShardMigrationWait { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `SnapshotOptions`<sup>Required</sup> <a name="SnapshotOptions" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.snapshotOptions"></a>

```csharp
public DataAwsccOpensearchserviceDomainSnapshotOptionsOutputReference SnapshotOptions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSnapshotOptionsOutputReference">DataAwsccOpensearchserviceDomainSnapshotOptionsOutputReference</a>

---

##### `SoftwareUpdateOptions`<sup>Required</sup> <a name="SoftwareUpdateOptions" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.softwareUpdateOptions"></a>

```csharp
public DataAwsccOpensearchserviceDomainSoftwareUpdateOptionsOutputReference SoftwareUpdateOptions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSoftwareUpdateOptionsOutputReference">DataAwsccOpensearchserviceDomainSoftwareUpdateOptionsOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.tags"></a>

```csharp
public DataAwsccOpensearchserviceDomainTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTagsList">DataAwsccOpensearchserviceDomainTagsList</a>

---

##### `UseCase`<sup>Required</sup> <a name="UseCase" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.useCase"></a>

```csharp
public string UseCase { get; }
```

- *Type:* string

---

##### `VpcOptions`<sup>Required</sup> <a name="VpcOptions" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.vpcOptions"></a>

```csharp
public DataAwsccOpensearchserviceDomainVpcOptionsOutputReference VpcOptions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainVpcOptionsOutputReference">DataAwsccOpensearchserviceDomainVpcOptionsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomain.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccOpensearchserviceDomainAdvancedSecurityOptions <a name="DataAwsccOpensearchserviceDomainAdvancedSecurityOptions" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccOpensearchserviceDomainAdvancedSecurityOptions {

};
```


### DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptions <a name="DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptions" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptions {

};
```


### DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsJwtOptions <a name="DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsJwtOptions" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsJwtOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsJwtOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsJwtOptions {

};
```


### DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptions <a name="DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptions" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptions {

};
```


### DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptions <a name="DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptions" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptions {

};
```


### DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdp <a name="DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdp" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdp"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdp.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdp {

};
```


### DataAwsccOpensearchserviceDomainAimlOptions <a name="DataAwsccOpensearchserviceDomainAimlOptions" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccOpensearchserviceDomainAimlOptions {

};
```


### DataAwsccOpensearchserviceDomainAimlOptionsS3VectorsEngine <a name="DataAwsccOpensearchserviceDomainAimlOptionsS3VectorsEngine" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsS3VectorsEngine"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsS3VectorsEngine.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccOpensearchserviceDomainAimlOptionsS3VectorsEngine {

};
```


### DataAwsccOpensearchserviceDomainAimlOptionsServerlessVectorAcceleration <a name="DataAwsccOpensearchserviceDomainAimlOptionsServerlessVectorAcceleration" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsServerlessVectorAcceleration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsServerlessVectorAcceleration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccOpensearchserviceDomainAimlOptionsServerlessVectorAcceleration {

};
```


### DataAwsccOpensearchserviceDomainAutomatedSnapshotPauseOptions <a name="DataAwsccOpensearchserviceDomainAutomatedSnapshotPauseOptions" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAutomatedSnapshotPauseOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAutomatedSnapshotPauseOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccOpensearchserviceDomainAutomatedSnapshotPauseOptions {

};
```


### DataAwsccOpensearchserviceDomainClusterConfig <a name="DataAwsccOpensearchserviceDomainClusterConfig" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccOpensearchserviceDomainClusterConfig {

};
```


### DataAwsccOpensearchserviceDomainClusterConfigColdStorageOptions <a name="DataAwsccOpensearchserviceDomainClusterConfigColdStorageOptions" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigColdStorageOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigColdStorageOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccOpensearchserviceDomainClusterConfigColdStorageOptions {

};
```


### DataAwsccOpensearchserviceDomainClusterConfigNodeOptions <a name="DataAwsccOpensearchserviceDomainClusterConfigNodeOptions" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccOpensearchserviceDomainClusterConfigNodeOptions {

};
```


### DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsNodeConfig <a name="DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsNodeConfig" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsNodeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsNodeConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsNodeConfig {

};
```


### DataAwsccOpensearchserviceDomainClusterConfigZoneAwarenessConfig <a name="DataAwsccOpensearchserviceDomainClusterConfigZoneAwarenessConfig" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigZoneAwarenessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigZoneAwarenessConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccOpensearchserviceDomainClusterConfigZoneAwarenessConfig {

};
```


### DataAwsccOpensearchserviceDomainCognitoOptions <a name="DataAwsccOpensearchserviceDomainCognitoOptions" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainCognitoOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainCognitoOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccOpensearchserviceDomainCognitoOptions {

};
```


### DataAwsccOpensearchserviceDomainConfig <a name="DataAwsccOpensearchserviceDomainConfig" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccOpensearchserviceDomainConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/opensearchservice_domain#id DataAwsccOpensearchserviceDomain#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccOpensearchserviceDomainDeploymentStrategyOptions <a name="DataAwsccOpensearchserviceDomainDeploymentStrategyOptions" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDeploymentStrategyOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDeploymentStrategyOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccOpensearchserviceDomainDeploymentStrategyOptions {

};
```


### DataAwsccOpensearchserviceDomainDomainEndpointOptions <a name="DataAwsccOpensearchserviceDomainDomainEndpointOptions" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDomainEndpointOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDomainEndpointOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccOpensearchserviceDomainDomainEndpointOptions {

};
```


### DataAwsccOpensearchserviceDomainEbsOptions <a name="DataAwsccOpensearchserviceDomainEbsOptions" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEbsOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEbsOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccOpensearchserviceDomainEbsOptions {

};
```


### DataAwsccOpensearchserviceDomainEncryptionAtRestOptions <a name="DataAwsccOpensearchserviceDomainEncryptionAtRestOptions" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEncryptionAtRestOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEncryptionAtRestOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccOpensearchserviceDomainEncryptionAtRestOptions {

};
```


### DataAwsccOpensearchserviceDomainIdentityCenterOptions <a name="DataAwsccOpensearchserviceDomainIdentityCenterOptions" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainIdentityCenterOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainIdentityCenterOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccOpensearchserviceDomainIdentityCenterOptions {

};
```


### DataAwsccOpensearchserviceDomainLogPublishingOptions <a name="DataAwsccOpensearchserviceDomainLogPublishingOptions" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainLogPublishingOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainLogPublishingOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccOpensearchserviceDomainLogPublishingOptions {

};
```


### DataAwsccOpensearchserviceDomainNodeToNodeEncryptionOptions <a name="DataAwsccOpensearchserviceDomainNodeToNodeEncryptionOptions" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainNodeToNodeEncryptionOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainNodeToNodeEncryptionOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccOpensearchserviceDomainNodeToNodeEncryptionOptions {

};
```


### DataAwsccOpensearchserviceDomainOffPeakWindowOptions <a name="DataAwsccOpensearchserviceDomainOffPeakWindowOptions" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccOpensearchserviceDomainOffPeakWindowOptions {

};
```


### DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindow <a name="DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindow" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindow.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindow {

};
```


### DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime <a name="DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime {

};
```


### DataAwsccOpensearchserviceDomainServiceSoftwareOptions <a name="DataAwsccOpensearchserviceDomainServiceSoftwareOptions" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainServiceSoftwareOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainServiceSoftwareOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccOpensearchserviceDomainServiceSoftwareOptions {

};
```


### DataAwsccOpensearchserviceDomainSnapshotOptions <a name="DataAwsccOpensearchserviceDomainSnapshotOptions" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSnapshotOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSnapshotOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccOpensearchserviceDomainSnapshotOptions {

};
```


### DataAwsccOpensearchserviceDomainSoftwareUpdateOptions <a name="DataAwsccOpensearchserviceDomainSoftwareUpdateOptions" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSoftwareUpdateOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSoftwareUpdateOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccOpensearchserviceDomainSoftwareUpdateOptions {

};
```


### DataAwsccOpensearchserviceDomainTags <a name="DataAwsccOpensearchserviceDomainTags" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccOpensearchserviceDomainTags {

};
```


### DataAwsccOpensearchserviceDomainVpcOptions <a name="DataAwsccOpensearchserviceDomainVpcOptions" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainVpcOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainVpcOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccOpensearchserviceDomainVpcOptions {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference <a name="DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.property.enabled">Enabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.property.rolesKey">RolesKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.property.subjectKey">SubjectKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptions">DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.property.enabled"></a>

```csharp
public IResolvable Enabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `RolesKey`<sup>Required</sup> <a name="RolesKey" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.property.rolesKey"></a>

```csharp
public string RolesKey { get; }
```

- *Type:* string

---

##### `SubjectKey`<sup>Required</sup> <a name="SubjectKey" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.property.subjectKey"></a>

```csharp
public string SubjectKey { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptions">DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptions</a>

---


### DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference <a name="DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.property.enabled">Enabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.property.publicKey">PublicKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.property.rolesKey">RolesKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.property.subjectKey">SubjectKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsJwtOptions">DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsJwtOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.property.enabled"></a>

```csharp
public IResolvable Enabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `PublicKey`<sup>Required</sup> <a name="PublicKey" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.property.publicKey"></a>

```csharp
public string PublicKey { get; }
```

- *Type:* string

---

##### `RolesKey`<sup>Required</sup> <a name="RolesKey" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.property.rolesKey"></a>

```csharp
public string RolesKey { get; }
```

- *Type:* string

---

##### `SubjectKey`<sup>Required</sup> <a name="SubjectKey" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.property.subjectKey"></a>

```csharp
public string SubjectKey { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsJwtOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsJwtOptions">DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsJwtOptions</a>

---


### DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference <a name="DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.masterUserArn">MasterUserArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.masterUserName">MasterUserName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.masterUserPassword">MasterUserPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptions">DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MasterUserArn`<sup>Required</sup> <a name="MasterUserArn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.masterUserArn"></a>

```csharp
public string MasterUserArn { get; }
```

- *Type:* string

---

##### `MasterUserName`<sup>Required</sup> <a name="MasterUserName" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.masterUserName"></a>

```csharp
public string MasterUserName { get; }
```

- *Type:* string

---

##### `MasterUserPassword`<sup>Required</sup> <a name="MasterUserPassword" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.masterUserPassword"></a>

```csharp
public string MasterUserPassword { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptions">DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptions</a>

---


### DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsOutputReference <a name="DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.anonymousAuthDisableDate">AnonymousAuthDisableDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.anonymousAuthEnabled">AnonymousAuthEnabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.enabled">Enabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.iamFederationOptions">IamFederationOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference">DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.internalUserDatabaseEnabled">InternalUserDatabaseEnabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.jwtOptions">JwtOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference">DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.masterUserOptions">MasterUserOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference">DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.samlOptions">SamlOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference">DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptions">DataAwsccOpensearchserviceDomainAdvancedSecurityOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AnonymousAuthDisableDate`<sup>Required</sup> <a name="AnonymousAuthDisableDate" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.anonymousAuthDisableDate"></a>

```csharp
public string AnonymousAuthDisableDate { get; }
```

- *Type:* string

---

##### `AnonymousAuthEnabled`<sup>Required</sup> <a name="AnonymousAuthEnabled" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.anonymousAuthEnabled"></a>

```csharp
public IResolvable AnonymousAuthEnabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.enabled"></a>

```csharp
public IResolvable Enabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `IamFederationOptions`<sup>Required</sup> <a name="IamFederationOptions" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.iamFederationOptions"></a>

```csharp
public DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference IamFederationOptions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference">DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference</a>

---

##### `InternalUserDatabaseEnabled`<sup>Required</sup> <a name="InternalUserDatabaseEnabled" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.internalUserDatabaseEnabled"></a>

```csharp
public IResolvable InternalUserDatabaseEnabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `JwtOptions`<sup>Required</sup> <a name="JwtOptions" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.jwtOptions"></a>

```csharp
public DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference JwtOptions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference">DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference</a>

---

##### `MasterUserOptions`<sup>Required</sup> <a name="MasterUserOptions" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.masterUserOptions"></a>

```csharp
public DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference MasterUserOptions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference">DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference</a>

---

##### `SamlOptions`<sup>Required</sup> <a name="SamlOptions" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.samlOptions"></a>

```csharp
public DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference SamlOptions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference">DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccOpensearchserviceDomainAdvancedSecurityOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptions">DataAwsccOpensearchserviceDomainAdvancedSecurityOptions</a>

---


### DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference <a name="DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.property.entityId">EntityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.property.metadataContent">MetadataContent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdp">DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdp</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EntityId`<sup>Required</sup> <a name="EntityId" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.property.entityId"></a>

```csharp
public string EntityId { get; }
```

- *Type:* string

---

##### `MetadataContent`<sup>Required</sup> <a name="MetadataContent" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.property.metadataContent"></a>

```csharp
public string MetadataContent { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.property.internalValue"></a>

```csharp
public DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdp InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdp">DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdp</a>

---


### DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference <a name="DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.enabled">Enabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.idp">Idp</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference">DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.masterBackendRole">MasterBackendRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.masterUserName">MasterUserName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.rolesKey">RolesKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.sessionTimeoutMinutes">SessionTimeoutMinutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.subjectKey">SubjectKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptions">DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.enabled"></a>

```csharp
public IResolvable Enabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Idp`<sup>Required</sup> <a name="Idp" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.idp"></a>

```csharp
public DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference Idp { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference">DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference</a>

---

##### `MasterBackendRole`<sup>Required</sup> <a name="MasterBackendRole" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.masterBackendRole"></a>

```csharp
public string MasterBackendRole { get; }
```

- *Type:* string

---

##### `MasterUserName`<sup>Required</sup> <a name="MasterUserName" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.masterUserName"></a>

```csharp
public string MasterUserName { get; }
```

- *Type:* string

---

##### `RolesKey`<sup>Required</sup> <a name="RolesKey" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.rolesKey"></a>

```csharp
public string RolesKey { get; }
```

- *Type:* string

---

##### `SessionTimeoutMinutes`<sup>Required</sup> <a name="SessionTimeoutMinutes" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.sessionTimeoutMinutes"></a>

```csharp
public double SessionTimeoutMinutes { get; }
```

- *Type:* double

---

##### `SubjectKey`<sup>Required</sup> <a name="SubjectKey" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.subjectKey"></a>

```csharp
public string SubjectKey { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptions">DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptions</a>

---


### DataAwsccOpensearchserviceDomainAimlOptionsOutputReference <a name="DataAwsccOpensearchserviceDomainAimlOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccOpensearchserviceDomainAimlOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsOutputReference.property.s3VectorsEngine">S3VectorsEngine</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference">DataAwsccOpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsOutputReference.property.serverlessVectorAcceleration">ServerlessVectorAcceleration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference">DataAwsccOpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptions">DataAwsccOpensearchserviceDomainAimlOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `S3VectorsEngine`<sup>Required</sup> <a name="S3VectorsEngine" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsOutputReference.property.s3VectorsEngine"></a>

```csharp
public DataAwsccOpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference S3VectorsEngine { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference">DataAwsccOpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference</a>

---

##### `ServerlessVectorAcceleration`<sup>Required</sup> <a name="ServerlessVectorAcceleration" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsOutputReference.property.serverlessVectorAcceleration"></a>

```csharp
public DataAwsccOpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference ServerlessVectorAcceleration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference">DataAwsccOpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccOpensearchserviceDomainAimlOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptions">DataAwsccOpensearchserviceDomainAimlOptions</a>

---


### DataAwsccOpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference <a name="DataAwsccOpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccOpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.property.enabled">Enabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsS3VectorsEngine">DataAwsccOpensearchserviceDomainAimlOptionsS3VectorsEngine</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.property.enabled"></a>

```csharp
public IResolvable Enabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.property.internalValue"></a>

```csharp
public DataAwsccOpensearchserviceDomainAimlOptionsS3VectorsEngine InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsS3VectorsEngine">DataAwsccOpensearchserviceDomainAimlOptionsS3VectorsEngine</a>

---


### DataAwsccOpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference <a name="DataAwsccOpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccOpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.property.enabled">Enabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsServerlessVectorAcceleration">DataAwsccOpensearchserviceDomainAimlOptionsServerlessVectorAcceleration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.property.enabled"></a>

```csharp
public IResolvable Enabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccOpensearchserviceDomainAimlOptionsServerlessVectorAcceleration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAimlOptionsServerlessVectorAcceleration">DataAwsccOpensearchserviceDomainAimlOptionsServerlessVectorAcceleration</a>

---


### DataAwsccOpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference <a name="DataAwsccOpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccOpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.property.enabled">Enabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.property.endTime">EndTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.property.startTime">StartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAutomatedSnapshotPauseOptions">DataAwsccOpensearchserviceDomainAutomatedSnapshotPauseOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.property.enabled"></a>

```csharp
public IResolvable Enabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.property.endTime"></a>

```csharp
public string EndTime { get; }
```

- *Type:* string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.property.startTime"></a>

```csharp
public string StartTime { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccOpensearchserviceDomainAutomatedSnapshotPauseOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainAutomatedSnapshotPauseOptions">DataAwsccOpensearchserviceDomainAutomatedSnapshotPauseOptions</a>

---


### DataAwsccOpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference <a name="DataAwsccOpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccOpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.property.enabled">Enabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigColdStorageOptions">DataAwsccOpensearchserviceDomainClusterConfigColdStorageOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.property.enabled"></a>

```csharp
public IResolvable Enabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccOpensearchserviceDomainClusterConfigColdStorageOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigColdStorageOptions">DataAwsccOpensearchserviceDomainClusterConfigColdStorageOptions</a>

---


### DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsList <a name="DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsList" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsList.get"></a>

```csharp
private DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference <a name="DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.property.enabled">Enabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsNodeConfig">DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsNodeConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.property.enabled"></a>

```csharp
public IResolvable Enabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.property.internalValue"></a>

```csharp
public DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsNodeConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsNodeConfig">DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsNodeConfig</a>

---


### DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsOutputReference <a name="DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsOutputReference.property.nodeConfig">NodeConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference">DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsOutputReference.property.nodeType">NodeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptions">DataAwsccOpensearchserviceDomainClusterConfigNodeOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NodeConfig`<sup>Required</sup> <a name="NodeConfig" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsOutputReference.property.nodeConfig"></a>

```csharp
public DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference NodeConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference">DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference</a>

---

##### `NodeType`<sup>Required</sup> <a name="NodeType" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsOutputReference.property.nodeType"></a>

```csharp
public string NodeType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccOpensearchserviceDomainClusterConfigNodeOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptions">DataAwsccOpensearchserviceDomainClusterConfigNodeOptions</a>

---


### DataAwsccOpensearchserviceDomainClusterConfigOutputReference <a name="DataAwsccOpensearchserviceDomainClusterConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccOpensearchserviceDomainClusterConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigOutputReference.property.coldStorageOptions">ColdStorageOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference">DataAwsccOpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigOutputReference.property.dedicatedMasterCount">DedicatedMasterCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigOutputReference.property.dedicatedMasterEnabled">DedicatedMasterEnabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigOutputReference.property.dedicatedMasterType">DedicatedMasterType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigOutputReference.property.instanceCount">InstanceCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigOutputReference.property.instanceType">InstanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigOutputReference.property.multiAzWithStandbyEnabled">MultiAzWithStandbyEnabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigOutputReference.property.nodeOptions">NodeOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsList">DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigOutputReference.property.warmCount">WarmCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigOutputReference.property.warmEnabled">WarmEnabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigOutputReference.property.warmType">WarmType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigOutputReference.property.zoneAwarenessConfig">ZoneAwarenessConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference">DataAwsccOpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigOutputReference.property.zoneAwarenessEnabled">ZoneAwarenessEnabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfig">DataAwsccOpensearchserviceDomainClusterConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ColdStorageOptions`<sup>Required</sup> <a name="ColdStorageOptions" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigOutputReference.property.coldStorageOptions"></a>

```csharp
public DataAwsccOpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference ColdStorageOptions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference">DataAwsccOpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference</a>

---

##### `DedicatedMasterCount`<sup>Required</sup> <a name="DedicatedMasterCount" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigOutputReference.property.dedicatedMasterCount"></a>

```csharp
public double DedicatedMasterCount { get; }
```

- *Type:* double

---

##### `DedicatedMasterEnabled`<sup>Required</sup> <a name="DedicatedMasterEnabled" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigOutputReference.property.dedicatedMasterEnabled"></a>

```csharp
public IResolvable DedicatedMasterEnabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `DedicatedMasterType`<sup>Required</sup> <a name="DedicatedMasterType" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigOutputReference.property.dedicatedMasterType"></a>

```csharp
public string DedicatedMasterType { get; }
```

- *Type:* string

---

##### `InstanceCount`<sup>Required</sup> <a name="InstanceCount" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigOutputReference.property.instanceCount"></a>

```csharp
public double InstanceCount { get; }
```

- *Type:* double

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigOutputReference.property.instanceType"></a>

```csharp
public string InstanceType { get; }
```

- *Type:* string

---

##### `MultiAzWithStandbyEnabled`<sup>Required</sup> <a name="MultiAzWithStandbyEnabled" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigOutputReference.property.multiAzWithStandbyEnabled"></a>

```csharp
public IResolvable MultiAzWithStandbyEnabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `NodeOptions`<sup>Required</sup> <a name="NodeOptions" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigOutputReference.property.nodeOptions"></a>

```csharp
public DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsList NodeOptions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsList">DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsList</a>

---

##### `WarmCount`<sup>Required</sup> <a name="WarmCount" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigOutputReference.property.warmCount"></a>

```csharp
public double WarmCount { get; }
```

- *Type:* double

---

##### `WarmEnabled`<sup>Required</sup> <a name="WarmEnabled" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigOutputReference.property.warmEnabled"></a>

```csharp
public IResolvable WarmEnabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `WarmType`<sup>Required</sup> <a name="WarmType" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigOutputReference.property.warmType"></a>

```csharp
public string WarmType { get; }
```

- *Type:* string

---

##### `ZoneAwarenessConfig`<sup>Required</sup> <a name="ZoneAwarenessConfig" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigOutputReference.property.zoneAwarenessConfig"></a>

```csharp
public DataAwsccOpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference ZoneAwarenessConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference">DataAwsccOpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference</a>

---

##### `ZoneAwarenessEnabled`<sup>Required</sup> <a name="ZoneAwarenessEnabled" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigOutputReference.property.zoneAwarenessEnabled"></a>

```csharp
public IResolvable ZoneAwarenessEnabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigOutputReference.property.internalValue"></a>

```csharp
public DataAwsccOpensearchserviceDomainClusterConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfig">DataAwsccOpensearchserviceDomainClusterConfig</a>

---


### DataAwsccOpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference <a name="DataAwsccOpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccOpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.property.availabilityZoneCount">AvailabilityZoneCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigZoneAwarenessConfig">DataAwsccOpensearchserviceDomainClusterConfigZoneAwarenessConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AvailabilityZoneCount`<sup>Required</sup> <a name="AvailabilityZoneCount" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.property.availabilityZoneCount"></a>

```csharp
public double AvailabilityZoneCount { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.property.internalValue"></a>

```csharp
public DataAwsccOpensearchserviceDomainClusterConfigZoneAwarenessConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainClusterConfigZoneAwarenessConfig">DataAwsccOpensearchserviceDomainClusterConfigZoneAwarenessConfig</a>

---


### DataAwsccOpensearchserviceDomainCognitoOptionsOutputReference <a name="DataAwsccOpensearchserviceDomainCognitoOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainCognitoOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainCognitoOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccOpensearchserviceDomainCognitoOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainCognitoOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainCognitoOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainCognitoOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainCognitoOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainCognitoOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainCognitoOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainCognitoOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainCognitoOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainCognitoOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainCognitoOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainCognitoOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainCognitoOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainCognitoOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainCognitoOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainCognitoOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainCognitoOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainCognitoOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainCognitoOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainCognitoOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainCognitoOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainCognitoOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainCognitoOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainCognitoOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainCognitoOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainCognitoOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainCognitoOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainCognitoOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainCognitoOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainCognitoOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainCognitoOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainCognitoOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainCognitoOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainCognitoOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainCognitoOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainCognitoOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainCognitoOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainCognitoOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainCognitoOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainCognitoOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainCognitoOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainCognitoOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainCognitoOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainCognitoOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainCognitoOptionsOutputReference.property.enabled">Enabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainCognitoOptionsOutputReference.property.identityPoolId">IdentityPoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainCognitoOptionsOutputReference.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainCognitoOptionsOutputReference.property.userPoolId">UserPoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainCognitoOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainCognitoOptions">DataAwsccOpensearchserviceDomainCognitoOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainCognitoOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainCognitoOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainCognitoOptionsOutputReference.property.enabled"></a>

```csharp
public IResolvable Enabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `IdentityPoolId`<sup>Required</sup> <a name="IdentityPoolId" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainCognitoOptionsOutputReference.property.identityPoolId"></a>

```csharp
public string IdentityPoolId { get; }
```

- *Type:* string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainCognitoOptionsOutputReference.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `UserPoolId`<sup>Required</sup> <a name="UserPoolId" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainCognitoOptionsOutputReference.property.userPoolId"></a>

```csharp
public string UserPoolId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainCognitoOptionsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccOpensearchserviceDomainCognitoOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainCognitoOptions">DataAwsccOpensearchserviceDomainCognitoOptions</a>

---


### DataAwsccOpensearchserviceDomainDeploymentStrategyOptionsOutputReference <a name="DataAwsccOpensearchserviceDomainDeploymentStrategyOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDeploymentStrategyOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDeploymentStrategyOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccOpensearchserviceDomainDeploymentStrategyOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDeploymentStrategyOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDeploymentStrategyOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDeploymentStrategyOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDeploymentStrategyOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDeploymentStrategyOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDeploymentStrategyOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDeploymentStrategyOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDeploymentStrategyOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDeploymentStrategyOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDeploymentStrategyOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDeploymentStrategyOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDeploymentStrategyOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDeploymentStrategyOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDeploymentStrategyOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDeploymentStrategyOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDeploymentStrategyOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDeploymentStrategyOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDeploymentStrategyOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDeploymentStrategyOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDeploymentStrategyOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDeploymentStrategyOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDeploymentStrategyOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDeploymentStrategyOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDeploymentStrategyOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDeploymentStrategyOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDeploymentStrategyOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDeploymentStrategyOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDeploymentStrategyOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDeploymentStrategyOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDeploymentStrategyOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDeploymentStrategyOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDeploymentStrategyOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDeploymentStrategyOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDeploymentStrategyOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDeploymentStrategyOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDeploymentStrategyOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDeploymentStrategyOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDeploymentStrategyOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDeploymentStrategyOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDeploymentStrategyOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDeploymentStrategyOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDeploymentStrategyOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDeploymentStrategyOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDeploymentStrategyOptionsOutputReference.property.deploymentStrategy">DeploymentStrategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDeploymentStrategyOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDeploymentStrategyOptions">DataAwsccOpensearchserviceDomainDeploymentStrategyOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDeploymentStrategyOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDeploymentStrategyOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DeploymentStrategy`<sup>Required</sup> <a name="DeploymentStrategy" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDeploymentStrategyOptionsOutputReference.property.deploymentStrategy"></a>

```csharp
public string DeploymentStrategy { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDeploymentStrategyOptionsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccOpensearchserviceDomainDeploymentStrategyOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDeploymentStrategyOptions">DataAwsccOpensearchserviceDomainDeploymentStrategyOptions</a>

---


### DataAwsccOpensearchserviceDomainDomainEndpointOptionsOutputReference <a name="DataAwsccOpensearchserviceDomainDomainEndpointOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDomainEndpointOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDomainEndpointOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccOpensearchserviceDomainDomainEndpointOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDomainEndpointOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDomainEndpointOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDomainEndpointOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDomainEndpointOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDomainEndpointOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDomainEndpointOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDomainEndpointOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDomainEndpointOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDomainEndpointOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDomainEndpointOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDomainEndpointOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDomainEndpointOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDomainEndpointOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDomainEndpointOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDomainEndpointOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDomainEndpointOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDomainEndpointOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDomainEndpointOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDomainEndpointOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDomainEndpointOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDomainEndpointOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDomainEndpointOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDomainEndpointOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDomainEndpointOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDomainEndpointOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDomainEndpointOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDomainEndpointOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDomainEndpointOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDomainEndpointOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDomainEndpointOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDomainEndpointOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDomainEndpointOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDomainEndpointOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDomainEndpointOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDomainEndpointOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDomainEndpointOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDomainEndpointOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDomainEndpointOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDomainEndpointOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDomainEndpointOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDomainEndpointOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDomainEndpointOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDomainEndpointOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDomainEndpointOptionsOutputReference.property.customEndpoint">CustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDomainEndpointOptionsOutputReference.property.customEndpointCertificateArn">CustomEndpointCertificateArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDomainEndpointOptionsOutputReference.property.customEndpointEnabled">CustomEndpointEnabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDomainEndpointOptionsOutputReference.property.enforceHttps">EnforceHttps</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDomainEndpointOptionsOutputReference.property.tlsSecurityPolicy">TlsSecurityPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDomainEndpointOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDomainEndpointOptions">DataAwsccOpensearchserviceDomainDomainEndpointOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDomainEndpointOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDomainEndpointOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomEndpoint`<sup>Required</sup> <a name="CustomEndpoint" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDomainEndpointOptionsOutputReference.property.customEndpoint"></a>

```csharp
public string CustomEndpoint { get; }
```

- *Type:* string

---

##### `CustomEndpointCertificateArn`<sup>Required</sup> <a name="CustomEndpointCertificateArn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDomainEndpointOptionsOutputReference.property.customEndpointCertificateArn"></a>

```csharp
public string CustomEndpointCertificateArn { get; }
```

- *Type:* string

---

##### `CustomEndpointEnabled`<sup>Required</sup> <a name="CustomEndpointEnabled" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDomainEndpointOptionsOutputReference.property.customEndpointEnabled"></a>

```csharp
public IResolvable CustomEndpointEnabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `EnforceHttps`<sup>Required</sup> <a name="EnforceHttps" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDomainEndpointOptionsOutputReference.property.enforceHttps"></a>

```csharp
public IResolvable EnforceHttps { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `TlsSecurityPolicy`<sup>Required</sup> <a name="TlsSecurityPolicy" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDomainEndpointOptionsOutputReference.property.tlsSecurityPolicy"></a>

```csharp
public string TlsSecurityPolicy { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDomainEndpointOptionsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccOpensearchserviceDomainDomainEndpointOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainDomainEndpointOptions">DataAwsccOpensearchserviceDomainDomainEndpointOptions</a>

---


### DataAwsccOpensearchserviceDomainEbsOptionsOutputReference <a name="DataAwsccOpensearchserviceDomainEbsOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEbsOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEbsOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccOpensearchserviceDomainEbsOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEbsOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEbsOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEbsOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEbsOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEbsOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEbsOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEbsOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEbsOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEbsOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEbsOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEbsOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEbsOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEbsOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEbsOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEbsOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEbsOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEbsOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEbsOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEbsOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEbsOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEbsOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEbsOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEbsOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEbsOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEbsOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEbsOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEbsOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEbsOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEbsOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEbsOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEbsOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEbsOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEbsOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEbsOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEbsOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEbsOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEbsOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEbsOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEbsOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEbsOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEbsOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEbsOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEbsOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEbsOptionsOutputReference.property.ebsEnabled">EbsEnabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEbsOptionsOutputReference.property.iops">Iops</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEbsOptionsOutputReference.property.throughput">Throughput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEbsOptionsOutputReference.property.volumeSize">VolumeSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEbsOptionsOutputReference.property.volumeType">VolumeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEbsOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEbsOptions">DataAwsccOpensearchserviceDomainEbsOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEbsOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEbsOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EbsEnabled`<sup>Required</sup> <a name="EbsEnabled" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEbsOptionsOutputReference.property.ebsEnabled"></a>

```csharp
public IResolvable EbsEnabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Iops`<sup>Required</sup> <a name="Iops" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEbsOptionsOutputReference.property.iops"></a>

```csharp
public double Iops { get; }
```

- *Type:* double

---

##### `Throughput`<sup>Required</sup> <a name="Throughput" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEbsOptionsOutputReference.property.throughput"></a>

```csharp
public double Throughput { get; }
```

- *Type:* double

---

##### `VolumeSize`<sup>Required</sup> <a name="VolumeSize" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEbsOptionsOutputReference.property.volumeSize"></a>

```csharp
public double VolumeSize { get; }
```

- *Type:* double

---

##### `VolumeType`<sup>Required</sup> <a name="VolumeType" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEbsOptionsOutputReference.property.volumeType"></a>

```csharp
public string VolumeType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEbsOptionsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccOpensearchserviceDomainEbsOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEbsOptions">DataAwsccOpensearchserviceDomainEbsOptions</a>

---


### DataAwsccOpensearchserviceDomainEncryptionAtRestOptionsOutputReference <a name="DataAwsccOpensearchserviceDomainEncryptionAtRestOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEncryptionAtRestOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEncryptionAtRestOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccOpensearchserviceDomainEncryptionAtRestOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEncryptionAtRestOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEncryptionAtRestOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEncryptionAtRestOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEncryptionAtRestOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEncryptionAtRestOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEncryptionAtRestOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEncryptionAtRestOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEncryptionAtRestOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEncryptionAtRestOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEncryptionAtRestOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEncryptionAtRestOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEncryptionAtRestOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEncryptionAtRestOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEncryptionAtRestOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEncryptionAtRestOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEncryptionAtRestOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEncryptionAtRestOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEncryptionAtRestOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEncryptionAtRestOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEncryptionAtRestOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEncryptionAtRestOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEncryptionAtRestOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEncryptionAtRestOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEncryptionAtRestOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEncryptionAtRestOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEncryptionAtRestOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEncryptionAtRestOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEncryptionAtRestOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEncryptionAtRestOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEncryptionAtRestOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEncryptionAtRestOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEncryptionAtRestOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEncryptionAtRestOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEncryptionAtRestOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEncryptionAtRestOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEncryptionAtRestOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEncryptionAtRestOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEncryptionAtRestOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEncryptionAtRestOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEncryptionAtRestOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEncryptionAtRestOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEncryptionAtRestOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEncryptionAtRestOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEncryptionAtRestOptionsOutputReference.property.enabled">Enabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEncryptionAtRestOptionsOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEncryptionAtRestOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEncryptionAtRestOptions">DataAwsccOpensearchserviceDomainEncryptionAtRestOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEncryptionAtRestOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEncryptionAtRestOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEncryptionAtRestOptionsOutputReference.property.enabled"></a>

```csharp
public IResolvable Enabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEncryptionAtRestOptionsOutputReference.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEncryptionAtRestOptionsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccOpensearchserviceDomainEncryptionAtRestOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainEncryptionAtRestOptions">DataAwsccOpensearchserviceDomainEncryptionAtRestOptions</a>

---


### DataAwsccOpensearchserviceDomainIdentityCenterOptionsOutputReference <a name="DataAwsccOpensearchserviceDomainIdentityCenterOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainIdentityCenterOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainIdentityCenterOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccOpensearchserviceDomainIdentityCenterOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainIdentityCenterOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainIdentityCenterOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainIdentityCenterOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainIdentityCenterOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainIdentityCenterOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainIdentityCenterOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainIdentityCenterOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainIdentityCenterOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainIdentityCenterOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainIdentityCenterOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainIdentityCenterOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainIdentityCenterOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainIdentityCenterOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainIdentityCenterOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainIdentityCenterOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainIdentityCenterOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainIdentityCenterOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainIdentityCenterOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainIdentityCenterOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainIdentityCenterOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainIdentityCenterOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainIdentityCenterOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainIdentityCenterOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainIdentityCenterOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainIdentityCenterOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainIdentityCenterOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainIdentityCenterOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainIdentityCenterOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainIdentityCenterOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainIdentityCenterOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainIdentityCenterOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainIdentityCenterOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainIdentityCenterOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainIdentityCenterOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainIdentityCenterOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainIdentityCenterOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainIdentityCenterOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainIdentityCenterOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainIdentityCenterOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainIdentityCenterOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainIdentityCenterOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainIdentityCenterOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainIdentityCenterOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainIdentityCenterOptionsOutputReference.property.enabledApiAccess">EnabledApiAccess</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainIdentityCenterOptionsOutputReference.property.identityCenterApplicationArn">IdentityCenterApplicationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainIdentityCenterOptionsOutputReference.property.identityCenterInstanceArn">IdentityCenterInstanceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainIdentityCenterOptionsOutputReference.property.identityStoreId">IdentityStoreId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainIdentityCenterOptionsOutputReference.property.rolesKey">RolesKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainIdentityCenterOptionsOutputReference.property.subjectKey">SubjectKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainIdentityCenterOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainIdentityCenterOptions">DataAwsccOpensearchserviceDomainIdentityCenterOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainIdentityCenterOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainIdentityCenterOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledApiAccess`<sup>Required</sup> <a name="EnabledApiAccess" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainIdentityCenterOptionsOutputReference.property.enabledApiAccess"></a>

```csharp
public IResolvable EnabledApiAccess { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `IdentityCenterApplicationArn`<sup>Required</sup> <a name="IdentityCenterApplicationArn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainIdentityCenterOptionsOutputReference.property.identityCenterApplicationArn"></a>

```csharp
public string IdentityCenterApplicationArn { get; }
```

- *Type:* string

---

##### `IdentityCenterInstanceArn`<sup>Required</sup> <a name="IdentityCenterInstanceArn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainIdentityCenterOptionsOutputReference.property.identityCenterInstanceArn"></a>

```csharp
public string IdentityCenterInstanceArn { get; }
```

- *Type:* string

---

##### `IdentityStoreId`<sup>Required</sup> <a name="IdentityStoreId" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainIdentityCenterOptionsOutputReference.property.identityStoreId"></a>

```csharp
public string IdentityStoreId { get; }
```

- *Type:* string

---

##### `RolesKey`<sup>Required</sup> <a name="RolesKey" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainIdentityCenterOptionsOutputReference.property.rolesKey"></a>

```csharp
public string RolesKey { get; }
```

- *Type:* string

---

##### `SubjectKey`<sup>Required</sup> <a name="SubjectKey" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainIdentityCenterOptionsOutputReference.property.subjectKey"></a>

```csharp
public string SubjectKey { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainIdentityCenterOptionsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccOpensearchserviceDomainIdentityCenterOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainIdentityCenterOptions">DataAwsccOpensearchserviceDomainIdentityCenterOptions</a>

---


### DataAwsccOpensearchserviceDomainLogPublishingOptionsMap <a name="DataAwsccOpensearchserviceDomainLogPublishingOptionsMap" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainLogPublishingOptionsMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainLogPublishingOptionsMap.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccOpensearchserviceDomainLogPublishingOptionsMap(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainLogPublishingOptionsMap.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainLogPublishingOptionsMap.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainLogPublishingOptionsMap.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainLogPublishingOptionsMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainLogPublishingOptionsMap.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainLogPublishingOptionsMap.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainLogPublishingOptionsMap.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainLogPublishingOptionsMap.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainLogPublishingOptionsMap.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainLogPublishingOptionsMap.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainLogPublishingOptionsMap.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainLogPublishingOptionsMap.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainLogPublishingOptionsMap.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainLogPublishingOptionsMap.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainLogPublishingOptionsMap.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainLogPublishingOptionsMap.get"></a>

```csharp
private DataAwsccOpensearchserviceDomainLogPublishingOptionsOutputReference Get(string Key)
```

###### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainLogPublishingOptionsMap.get.parameter.key"></a>

- *Type:* string

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainLogPublishingOptionsMap.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainLogPublishingOptionsMap.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainLogPublishingOptionsMap.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainLogPublishingOptionsMap.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccOpensearchserviceDomainLogPublishingOptionsOutputReference <a name="DataAwsccOpensearchserviceDomainLogPublishingOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainLogPublishingOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainLogPublishingOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccOpensearchserviceDomainLogPublishingOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, string ComplexObjectKey);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainLogPublishingOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainLogPublishingOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainLogPublishingOptionsOutputReference.Initializer.parameter.complexObjectKey">ComplexObjectKey</a></code> | <code>string</code> | the key of this item in the map. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainLogPublishingOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainLogPublishingOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectKey`<sup>Required</sup> <a name="ComplexObjectKey" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainLogPublishingOptionsOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* string

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainLogPublishingOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainLogPublishingOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainLogPublishingOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainLogPublishingOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainLogPublishingOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainLogPublishingOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainLogPublishingOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainLogPublishingOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainLogPublishingOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainLogPublishingOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainLogPublishingOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainLogPublishingOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainLogPublishingOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainLogPublishingOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainLogPublishingOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainLogPublishingOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainLogPublishingOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainLogPublishingOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainLogPublishingOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainLogPublishingOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainLogPublishingOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainLogPublishingOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainLogPublishingOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainLogPublishingOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainLogPublishingOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainLogPublishingOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainLogPublishingOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainLogPublishingOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainLogPublishingOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainLogPublishingOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainLogPublishingOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainLogPublishingOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainLogPublishingOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainLogPublishingOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainLogPublishingOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainLogPublishingOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainLogPublishingOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainLogPublishingOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainLogPublishingOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainLogPublishingOptionsOutputReference.property.cloudwatchLogsLogGroupArn">CloudwatchLogsLogGroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainLogPublishingOptionsOutputReference.property.enabled">Enabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainLogPublishingOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainLogPublishingOptions">DataAwsccOpensearchserviceDomainLogPublishingOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainLogPublishingOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainLogPublishingOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CloudwatchLogsLogGroupArn`<sup>Required</sup> <a name="CloudwatchLogsLogGroupArn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainLogPublishingOptionsOutputReference.property.cloudwatchLogsLogGroupArn"></a>

```csharp
public string CloudwatchLogsLogGroupArn { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainLogPublishingOptionsOutputReference.property.enabled"></a>

```csharp
public IResolvable Enabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainLogPublishingOptionsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccOpensearchserviceDomainLogPublishingOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainLogPublishingOptions">DataAwsccOpensearchserviceDomainLogPublishingOptions</a>

---


### DataAwsccOpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference <a name="DataAwsccOpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccOpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.property.enabled">Enabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainNodeToNodeEncryptionOptions">DataAwsccOpensearchserviceDomainNodeToNodeEncryptionOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.property.enabled"></a>

```csharp
public IResolvable Enabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccOpensearchserviceDomainNodeToNodeEncryptionOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainNodeToNodeEncryptionOptions">DataAwsccOpensearchserviceDomainNodeToNodeEncryptionOptions</a>

---


### DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference <a name="DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.property.windowStartTime">WindowStartTime</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference">DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindow">DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindow</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `WindowStartTime`<sup>Required</sup> <a name="WindowStartTime" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.property.windowStartTime"></a>

```csharp
public DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference WindowStartTime { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference">DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.property.internalValue"></a>

```csharp
public DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindow InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindow">DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindow</a>

---


### DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference <a name="DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.property.hours">Hours</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.property.minutes">Minutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime">DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Hours`<sup>Required</sup> <a name="Hours" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.property.hours"></a>

```csharp
public double Hours { get; }
```

- *Type:* double

---

##### `Minutes`<sup>Required</sup> <a name="Minutes" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.property.minutes"></a>

```csharp
public double Minutes { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.property.internalValue"></a>

```csharp
public DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime">DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime</a>

---


### DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOutputReference <a name="DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOutputReference.property.enabled">Enabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOutputReference.property.offPeakWindow">OffPeakWindow</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference">DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptions">DataAwsccOpensearchserviceDomainOffPeakWindowOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOutputReference.property.enabled"></a>

```csharp
public IResolvable Enabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `OffPeakWindow`<sup>Required</sup> <a name="OffPeakWindow" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOutputReference.property.offPeakWindow"></a>

```csharp
public DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference OffPeakWindow { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference">DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccOpensearchserviceDomainOffPeakWindowOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainOffPeakWindowOptions">DataAwsccOpensearchserviceDomainOffPeakWindowOptions</a>

---


### DataAwsccOpensearchserviceDomainServiceSoftwareOptionsOutputReference <a name="DataAwsccOpensearchserviceDomainServiceSoftwareOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainServiceSoftwareOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainServiceSoftwareOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccOpensearchserviceDomainServiceSoftwareOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainServiceSoftwareOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainServiceSoftwareOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainServiceSoftwareOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainServiceSoftwareOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainServiceSoftwareOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainServiceSoftwareOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainServiceSoftwareOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainServiceSoftwareOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainServiceSoftwareOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainServiceSoftwareOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainServiceSoftwareOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainServiceSoftwareOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainServiceSoftwareOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainServiceSoftwareOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainServiceSoftwareOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainServiceSoftwareOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainServiceSoftwareOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainServiceSoftwareOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainServiceSoftwareOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainServiceSoftwareOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainServiceSoftwareOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainServiceSoftwareOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainServiceSoftwareOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainServiceSoftwareOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainServiceSoftwareOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainServiceSoftwareOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainServiceSoftwareOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainServiceSoftwareOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainServiceSoftwareOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainServiceSoftwareOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainServiceSoftwareOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainServiceSoftwareOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainServiceSoftwareOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainServiceSoftwareOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainServiceSoftwareOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainServiceSoftwareOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainServiceSoftwareOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainServiceSoftwareOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainServiceSoftwareOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainServiceSoftwareOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainServiceSoftwareOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainServiceSoftwareOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainServiceSoftwareOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainServiceSoftwareOptionsOutputReference.property.automatedUpdateDate">AutomatedUpdateDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainServiceSoftwareOptionsOutputReference.property.cancellable">Cancellable</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainServiceSoftwareOptionsOutputReference.property.currentVersion">CurrentVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainServiceSoftwareOptionsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainServiceSoftwareOptionsOutputReference.property.newVersion">NewVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainServiceSoftwareOptionsOutputReference.property.optionalDeployment">OptionalDeployment</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainServiceSoftwareOptionsOutputReference.property.updateAvailable">UpdateAvailable</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainServiceSoftwareOptionsOutputReference.property.updateStatus">UpdateStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainServiceSoftwareOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainServiceSoftwareOptions">DataAwsccOpensearchserviceDomainServiceSoftwareOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainServiceSoftwareOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainServiceSoftwareOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AutomatedUpdateDate`<sup>Required</sup> <a name="AutomatedUpdateDate" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainServiceSoftwareOptionsOutputReference.property.automatedUpdateDate"></a>

```csharp
public string AutomatedUpdateDate { get; }
```

- *Type:* string

---

##### `Cancellable`<sup>Required</sup> <a name="Cancellable" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainServiceSoftwareOptionsOutputReference.property.cancellable"></a>

```csharp
public IResolvable Cancellable { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `CurrentVersion`<sup>Required</sup> <a name="CurrentVersion" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainServiceSoftwareOptionsOutputReference.property.currentVersion"></a>

```csharp
public string CurrentVersion { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainServiceSoftwareOptionsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `NewVersion`<sup>Required</sup> <a name="NewVersion" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainServiceSoftwareOptionsOutputReference.property.newVersion"></a>

```csharp
public string NewVersion { get; }
```

- *Type:* string

---

##### `OptionalDeployment`<sup>Required</sup> <a name="OptionalDeployment" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainServiceSoftwareOptionsOutputReference.property.optionalDeployment"></a>

```csharp
public IResolvable OptionalDeployment { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `UpdateAvailable`<sup>Required</sup> <a name="UpdateAvailable" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainServiceSoftwareOptionsOutputReference.property.updateAvailable"></a>

```csharp
public IResolvable UpdateAvailable { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `UpdateStatus`<sup>Required</sup> <a name="UpdateStatus" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainServiceSoftwareOptionsOutputReference.property.updateStatus"></a>

```csharp
public string UpdateStatus { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainServiceSoftwareOptionsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccOpensearchserviceDomainServiceSoftwareOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainServiceSoftwareOptions">DataAwsccOpensearchserviceDomainServiceSoftwareOptions</a>

---


### DataAwsccOpensearchserviceDomainSnapshotOptionsOutputReference <a name="DataAwsccOpensearchserviceDomainSnapshotOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSnapshotOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSnapshotOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccOpensearchserviceDomainSnapshotOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSnapshotOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSnapshotOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSnapshotOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSnapshotOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSnapshotOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSnapshotOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSnapshotOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSnapshotOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSnapshotOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSnapshotOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSnapshotOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSnapshotOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSnapshotOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSnapshotOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSnapshotOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSnapshotOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSnapshotOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSnapshotOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSnapshotOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSnapshotOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSnapshotOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSnapshotOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSnapshotOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSnapshotOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSnapshotOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSnapshotOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSnapshotOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSnapshotOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSnapshotOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSnapshotOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSnapshotOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSnapshotOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSnapshotOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSnapshotOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSnapshotOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSnapshotOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSnapshotOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSnapshotOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSnapshotOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSnapshotOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSnapshotOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSnapshotOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSnapshotOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSnapshotOptionsOutputReference.property.automatedSnapshotStartHour">AutomatedSnapshotStartHour</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSnapshotOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSnapshotOptions">DataAwsccOpensearchserviceDomainSnapshotOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSnapshotOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSnapshotOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AutomatedSnapshotStartHour`<sup>Required</sup> <a name="AutomatedSnapshotStartHour" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSnapshotOptionsOutputReference.property.automatedSnapshotStartHour"></a>

```csharp
public double AutomatedSnapshotStartHour { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSnapshotOptionsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccOpensearchserviceDomainSnapshotOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSnapshotOptions">DataAwsccOpensearchserviceDomainSnapshotOptions</a>

---


### DataAwsccOpensearchserviceDomainSoftwareUpdateOptionsOutputReference <a name="DataAwsccOpensearchserviceDomainSoftwareUpdateOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSoftwareUpdateOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSoftwareUpdateOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccOpensearchserviceDomainSoftwareUpdateOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSoftwareUpdateOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSoftwareUpdateOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSoftwareUpdateOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSoftwareUpdateOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSoftwareUpdateOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSoftwareUpdateOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSoftwareUpdateOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSoftwareUpdateOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSoftwareUpdateOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSoftwareUpdateOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSoftwareUpdateOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSoftwareUpdateOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSoftwareUpdateOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSoftwareUpdateOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSoftwareUpdateOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSoftwareUpdateOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSoftwareUpdateOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSoftwareUpdateOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSoftwareUpdateOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSoftwareUpdateOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSoftwareUpdateOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSoftwareUpdateOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSoftwareUpdateOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSoftwareUpdateOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSoftwareUpdateOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSoftwareUpdateOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSoftwareUpdateOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSoftwareUpdateOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSoftwareUpdateOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSoftwareUpdateOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSoftwareUpdateOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSoftwareUpdateOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSoftwareUpdateOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSoftwareUpdateOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSoftwareUpdateOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSoftwareUpdateOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSoftwareUpdateOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSoftwareUpdateOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSoftwareUpdateOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSoftwareUpdateOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSoftwareUpdateOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSoftwareUpdateOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSoftwareUpdateOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSoftwareUpdateOptionsOutputReference.property.autoSoftwareUpdateEnabled">AutoSoftwareUpdateEnabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSoftwareUpdateOptionsOutputReference.property.useLatestServiceSoftwareForBlueGreen">UseLatestServiceSoftwareForBlueGreen</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSoftwareUpdateOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSoftwareUpdateOptions">DataAwsccOpensearchserviceDomainSoftwareUpdateOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSoftwareUpdateOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSoftwareUpdateOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AutoSoftwareUpdateEnabled`<sup>Required</sup> <a name="AutoSoftwareUpdateEnabled" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSoftwareUpdateOptionsOutputReference.property.autoSoftwareUpdateEnabled"></a>

```csharp
public IResolvable AutoSoftwareUpdateEnabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `UseLatestServiceSoftwareForBlueGreen`<sup>Required</sup> <a name="UseLatestServiceSoftwareForBlueGreen" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSoftwareUpdateOptionsOutputReference.property.useLatestServiceSoftwareForBlueGreen"></a>

```csharp
public IResolvable UseLatestServiceSoftwareForBlueGreen { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSoftwareUpdateOptionsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccOpensearchserviceDomainSoftwareUpdateOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainSoftwareUpdateOptions">DataAwsccOpensearchserviceDomainSoftwareUpdateOptions</a>

---


### DataAwsccOpensearchserviceDomainTagsList <a name="DataAwsccOpensearchserviceDomainTagsList" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccOpensearchserviceDomainTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTagsList.get"></a>

```csharp
private DataAwsccOpensearchserviceDomainTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccOpensearchserviceDomainTagsOutputReference <a name="DataAwsccOpensearchserviceDomainTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccOpensearchserviceDomainTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTags">DataAwsccOpensearchserviceDomainTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccOpensearchserviceDomainTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainTags">DataAwsccOpensearchserviceDomainTags</a>

---


### DataAwsccOpensearchserviceDomainVpcOptionsOutputReference <a name="DataAwsccOpensearchserviceDomainVpcOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainVpcOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainVpcOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccOpensearchserviceDomainVpcOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainVpcOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainVpcOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainVpcOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainVpcOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainVpcOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainVpcOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainVpcOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainVpcOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainVpcOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainVpcOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainVpcOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainVpcOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainVpcOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainVpcOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainVpcOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainVpcOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainVpcOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainVpcOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainVpcOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainVpcOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainVpcOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainVpcOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainVpcOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainVpcOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainVpcOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainVpcOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainVpcOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainVpcOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainVpcOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainVpcOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainVpcOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainVpcOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainVpcOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainVpcOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainVpcOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainVpcOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainVpcOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainVpcOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainVpcOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainVpcOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainVpcOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainVpcOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainVpcOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainVpcOptionsOutputReference.property.egressEnabled">EgressEnabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainVpcOptionsOutputReference.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainVpcOptionsOutputReference.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainVpcOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainVpcOptions">DataAwsccOpensearchserviceDomainVpcOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainVpcOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainVpcOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EgressEnabled`<sup>Required</sup> <a name="EgressEnabled" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainVpcOptionsOutputReference.property.egressEnabled"></a>

```csharp
public IResolvable EgressEnabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainVpcOptionsOutputReference.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; }
```

- *Type:* string[]

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainVpcOptionsOutputReference.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainVpcOptionsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccOpensearchserviceDomainVpcOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceDomain.DataAwsccOpensearchserviceDomainVpcOptions">DataAwsccOpensearchserviceDomainVpcOptions</a>

---



