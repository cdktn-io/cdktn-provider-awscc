# `dataAwsccDatazoneSubscriptionTarget` Submodule <a name="`dataAwsccDatazoneSubscriptionTarget` Submodule" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccDatazoneSubscriptionTarget <a name="DataAwsccDatazoneSubscriptionTarget" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/datazone_subscription_target awscc_datazone_subscription_target}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDatazoneSubscriptionTarget(Construct Scope, string Id, DataAwsccDatazoneSubscriptionTargetConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetConfig">DataAwsccDatazoneSubscriptionTargetConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetConfig">DataAwsccDatazoneSubscriptionTargetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccDatazoneSubscriptionTarget resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccDatazoneSubscriptionTarget.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccDatazoneSubscriptionTarget.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccDatazoneSubscriptionTarget.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccDatazoneSubscriptionTarget.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccDatazoneSubscriptionTarget resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccDatazoneSubscriptionTarget to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccDatazoneSubscriptionTarget that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/datazone_subscription_target#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccDatazoneSubscriptionTarget to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.property.applicableAssetTypes">ApplicableAssetTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.property.authorizedPrincipals">AuthorizedPrincipals</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.property.createdBy">CreatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.property.domainId">DomainId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.property.domainIdentifier">DomainIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.property.environmentId">EnvironmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.property.environmentIdentifier">EnvironmentIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.property.manageAccessRole">ManageAccessRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.property.providerName">ProviderName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.property.subscriptionTargetConfig">SubscriptionTargetConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigList">DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.property.subscriptionTargetId">SubscriptionTargetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.property.updatedBy">UpdatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `ApplicableAssetTypes`<sup>Required</sup> <a name="ApplicableAssetTypes" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.property.applicableAssetTypes"></a>

```csharp
public string[] ApplicableAssetTypes { get; }
```

- *Type:* string[]

---

##### `AuthorizedPrincipals`<sup>Required</sup> <a name="AuthorizedPrincipals" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.property.authorizedPrincipals"></a>

```csharp
public string[] AuthorizedPrincipals { get; }
```

- *Type:* string[]

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.property.createdBy"></a>

```csharp
public string CreatedBy { get; }
```

- *Type:* string

---

##### `DomainId`<sup>Required</sup> <a name="DomainId" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.property.domainId"></a>

```csharp
public string DomainId { get; }
```

- *Type:* string

---

##### `DomainIdentifier`<sup>Required</sup> <a name="DomainIdentifier" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.property.domainIdentifier"></a>

```csharp
public string DomainIdentifier { get; }
```

- *Type:* string

---

##### `EnvironmentId`<sup>Required</sup> <a name="EnvironmentId" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.property.environmentId"></a>

```csharp
public string EnvironmentId { get; }
```

- *Type:* string

---

##### `EnvironmentIdentifier`<sup>Required</sup> <a name="EnvironmentIdentifier" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.property.environmentIdentifier"></a>

```csharp
public string EnvironmentIdentifier { get; }
```

- *Type:* string

---

##### `ManageAccessRole`<sup>Required</sup> <a name="ManageAccessRole" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.property.manageAccessRole"></a>

```csharp
public string ManageAccessRole { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

##### `ProviderName`<sup>Required</sup> <a name="ProviderName" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.property.providerName"></a>

```csharp
public string ProviderName { get; }
```

- *Type:* string

---

##### `SubscriptionTargetConfig`<sup>Required</sup> <a name="SubscriptionTargetConfig" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.property.subscriptionTargetConfig"></a>

```csharp
public DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigList SubscriptionTargetConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigList">DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigList</a>

---

##### `SubscriptionTargetId`<sup>Required</sup> <a name="SubscriptionTargetId" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.property.subscriptionTargetId"></a>

```csharp
public string SubscriptionTargetId { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `UpdatedBy`<sup>Required</sup> <a name="UpdatedBy" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.property.updatedBy"></a>

```csharp
public string UpdatedBy { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccDatazoneSubscriptionTargetConfig <a name="DataAwsccDatazoneSubscriptionTargetConfig" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDatazoneSubscriptionTargetConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/datazone_subscription_target#id DataAwsccDatazoneSubscriptionTarget#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfig <a name="DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfig" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfig {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigList <a name="DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigList" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigList.get"></a>

```csharp
private DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference <a name="DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.property.content">Content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.property.formName">FormName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfig">DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.property.content"></a>

```csharp
public string Content { get; }
```

- *Type:* string

---

##### `FormName`<sup>Required</sup> <a name="FormName" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.property.formName"></a>

```csharp
public string FormName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.property.internalValue"></a>

```csharp
public DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfig">DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfig</a>

---



