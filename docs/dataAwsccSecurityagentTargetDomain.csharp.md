# `dataAwsccSecurityagentTargetDomain` Submodule <a name="`dataAwsccSecurityagentTargetDomain` Submodule" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccSecurityagentTargetDomain <a name="DataAwsccSecurityagentTargetDomain" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/securityagent_target_domain awscc_securityagent_target_domain}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSecurityagentTargetDomain(Construct Scope, string Id, DataAwsccSecurityagentTargetDomainConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainConfig">DataAwsccSecurityagentTargetDomainConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainConfig">DataAwsccSecurityagentTargetDomainConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccSecurityagentTargetDomain resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccSecurityagentTargetDomain.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccSecurityagentTargetDomain.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccSecurityagentTargetDomain.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccSecurityagentTargetDomain.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccSecurityagentTargetDomain resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccSecurityagentTargetDomain to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccSecurityagentTargetDomain that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/securityagent_target_domain#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccSecurityagentTargetDomain to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTagsList">DataAwsccSecurityagentTargetDomainTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.property.targetDomainId">TargetDomainId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.property.targetDomainName">TargetDomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.property.verificationDetails">VerificationDetails</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsOutputReference">DataAwsccSecurityagentTargetDomainVerificationDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.property.verificationMethod">VerificationMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.property.verificationStatus">VerificationStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.property.verificationStatusReason">VerificationStatusReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.property.verifiedAt">VerifiedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.property.tags"></a>

```csharp
public DataAwsccSecurityagentTargetDomainTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTagsList">DataAwsccSecurityagentTargetDomainTagsList</a>

---

##### `TargetDomainId`<sup>Required</sup> <a name="TargetDomainId" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.property.targetDomainId"></a>

```csharp
public string TargetDomainId { get; }
```

- *Type:* string

---

##### `TargetDomainName`<sup>Required</sup> <a name="TargetDomainName" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.property.targetDomainName"></a>

```csharp
public string TargetDomainName { get; }
```

- *Type:* string

---

##### `VerificationDetails`<sup>Required</sup> <a name="VerificationDetails" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.property.verificationDetails"></a>

```csharp
public DataAwsccSecurityagentTargetDomainVerificationDetailsOutputReference VerificationDetails { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsOutputReference">DataAwsccSecurityagentTargetDomainVerificationDetailsOutputReference</a>

---

##### `VerificationMethod`<sup>Required</sup> <a name="VerificationMethod" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.property.verificationMethod"></a>

```csharp
public string VerificationMethod { get; }
```

- *Type:* string

---

##### `VerificationStatus`<sup>Required</sup> <a name="VerificationStatus" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.property.verificationStatus"></a>

```csharp
public string VerificationStatus { get; }
```

- *Type:* string

---

##### `VerificationStatusReason`<sup>Required</sup> <a name="VerificationStatusReason" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.property.verificationStatusReason"></a>

```csharp
public string VerificationStatusReason { get; }
```

- *Type:* string

---

##### `VerifiedAt`<sup>Required</sup> <a name="VerifiedAt" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.property.verifiedAt"></a>

```csharp
public string VerifiedAt { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccSecurityagentTargetDomainConfig <a name="DataAwsccSecurityagentTargetDomainConfig" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSecurityagentTargetDomainConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/securityagent_target_domain#id DataAwsccSecurityagentTargetDomain#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccSecurityagentTargetDomainTags <a name="DataAwsccSecurityagentTargetDomainTags" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSecurityagentTargetDomainTags {

};
```


### DataAwsccSecurityagentTargetDomainVerificationDetails <a name="DataAwsccSecurityagentTargetDomainVerificationDetails" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetails.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSecurityagentTargetDomainVerificationDetails {

};
```


### DataAwsccSecurityagentTargetDomainVerificationDetailsDnsTxt <a name="DataAwsccSecurityagentTargetDomainVerificationDetailsDnsTxt" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsDnsTxt"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsDnsTxt.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSecurityagentTargetDomainVerificationDetailsDnsTxt {

};
```


### DataAwsccSecurityagentTargetDomainVerificationDetailsHttpRoute <a name="DataAwsccSecurityagentTargetDomainVerificationDetailsHttpRoute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsHttpRoute"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsHttpRoute.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSecurityagentTargetDomainVerificationDetailsHttpRoute {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccSecurityagentTargetDomainTagsList <a name="DataAwsccSecurityagentTargetDomainTagsList" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSecurityagentTargetDomainTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTagsList.get"></a>

```csharp
private DataAwsccSecurityagentTargetDomainTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccSecurityagentTargetDomainTagsOutputReference <a name="DataAwsccSecurityagentTargetDomainTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSecurityagentTargetDomainTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTags">DataAwsccSecurityagentTargetDomainTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSecurityagentTargetDomainTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTags">DataAwsccSecurityagentTargetDomainTags</a>

---


### DataAwsccSecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference <a name="DataAwsccSecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.property.dnsRecordName">DnsRecordName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.property.dnsRecordType">DnsRecordType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.property.token">Token</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsDnsTxt">DataAwsccSecurityagentTargetDomainVerificationDetailsDnsTxt</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DnsRecordName`<sup>Required</sup> <a name="DnsRecordName" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.property.dnsRecordName"></a>

```csharp
public string DnsRecordName { get; }
```

- *Type:* string

---

##### `DnsRecordType`<sup>Required</sup> <a name="DnsRecordType" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.property.dnsRecordType"></a>

```csharp
public string DnsRecordType { get; }
```

- *Type:* string

---

##### `Token`<sup>Required</sup> <a name="Token" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.property.token"></a>

```csharp
public string Token { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSecurityagentTargetDomainVerificationDetailsDnsTxt InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsDnsTxt">DataAwsccSecurityagentTargetDomainVerificationDetailsDnsTxt</a>

---


### DataAwsccSecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference <a name="DataAwsccSecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.property.routePath">RoutePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.property.token">Token</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsHttpRoute">DataAwsccSecurityagentTargetDomainVerificationDetailsHttpRoute</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RoutePath`<sup>Required</sup> <a name="RoutePath" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.property.routePath"></a>

```csharp
public string RoutePath { get; }
```

- *Type:* string

---

##### `Token`<sup>Required</sup> <a name="Token" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.property.token"></a>

```csharp
public string Token { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSecurityagentTargetDomainVerificationDetailsHttpRoute InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsHttpRoute">DataAwsccSecurityagentTargetDomainVerificationDetailsHttpRoute</a>

---


### DataAwsccSecurityagentTargetDomainVerificationDetailsOutputReference <a name="DataAwsccSecurityagentTargetDomainVerificationDetailsOutputReference" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSecurityagentTargetDomainVerificationDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsOutputReference.property.dnsTxt">DnsTxt</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference">DataAwsccSecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsOutputReference.property.httpRoute">HttpRoute</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference">DataAwsccSecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsOutputReference.property.method">Method</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetails">DataAwsccSecurityagentTargetDomainVerificationDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DnsTxt`<sup>Required</sup> <a name="DnsTxt" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsOutputReference.property.dnsTxt"></a>

```csharp
public DataAwsccSecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference DnsTxt { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference">DataAwsccSecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference</a>

---

##### `HttpRoute`<sup>Required</sup> <a name="HttpRoute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsOutputReference.property.httpRoute"></a>

```csharp
public DataAwsccSecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference HttpRoute { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference">DataAwsccSecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference</a>

---

##### `Method`<sup>Required</sup> <a name="Method" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsOutputReference.property.method"></a>

```csharp
public string Method { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSecurityagentTargetDomainVerificationDetails InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetails">DataAwsccSecurityagentTargetDomainVerificationDetails</a>

---



