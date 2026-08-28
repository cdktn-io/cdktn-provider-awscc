# `dataAwsccCasesCaseRule` Submodule <a name="`dataAwsccCasesCaseRule` Submodule" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccCasesCaseRule <a name="DataAwsccCasesCaseRule" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/cases_case_rule awscc_cases_case_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCasesCaseRule(Construct Scope, string Id, DataAwsccCasesCaseRuleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleConfig">DataAwsccCasesCaseRuleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleConfig">DataAwsccCasesCaseRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccCasesCaseRule resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccCasesCaseRule.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccCasesCaseRule.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccCasesCaseRule.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccCasesCaseRule.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccCasesCaseRule resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccCasesCaseRule to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccCasesCaseRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/cases_case_rule#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccCasesCaseRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.property.caseRuleArn">CaseRuleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.property.caseRuleId">CaseRuleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.property.createdTime">CreatedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.property.domainId">DomainId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.property.lastModifiedTime">LastModifiedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.property.rule">Rule</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleOutputReference">DataAwsccCasesCaseRuleRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTagsList">DataAwsccCasesCaseRuleTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `CaseRuleArn`<sup>Required</sup> <a name="CaseRuleArn" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.property.caseRuleArn"></a>

```csharp
public string CaseRuleArn { get; }
```

- *Type:* string

---

##### `CaseRuleId`<sup>Required</sup> <a name="CaseRuleId" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.property.caseRuleId"></a>

```csharp
public string CaseRuleId { get; }
```

- *Type:* string

---

##### `CreatedTime`<sup>Required</sup> <a name="CreatedTime" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.property.createdTime"></a>

```csharp
public string CreatedTime { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DomainId`<sup>Required</sup> <a name="DomainId" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.property.domainId"></a>

```csharp
public string DomainId { get; }
```

- *Type:* string

---

##### `LastModifiedTime`<sup>Required</sup> <a name="LastModifiedTime" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.property.lastModifiedTime"></a>

```csharp
public string LastModifiedTime { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Rule`<sup>Required</sup> <a name="Rule" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.property.rule"></a>

```csharp
public DataAwsccCasesCaseRuleRuleOutputReference Rule { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleOutputReference">DataAwsccCasesCaseRuleRuleOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.property.tags"></a>

```csharp
public DataAwsccCasesCaseRuleTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTagsList">DataAwsccCasesCaseRuleTagsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccCasesCaseRuleConfig <a name="DataAwsccCasesCaseRuleConfig" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCasesCaseRuleConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/cases_case_rule#id DataAwsccCasesCaseRule#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccCasesCaseRuleRule <a name="DataAwsccCasesCaseRuleRule" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCasesCaseRuleRule {

};
```


### DataAwsccCasesCaseRuleRuleHidden <a name="DataAwsccCasesCaseRuleRuleHidden" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHidden"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHidden.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCasesCaseRuleRuleHidden {

};
```


### DataAwsccCasesCaseRuleRuleHiddenConditions <a name="DataAwsccCasesCaseRuleRuleHiddenConditions" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCasesCaseRuleRuleHiddenConditions {

};
```


### DataAwsccCasesCaseRuleRuleHiddenConditionsEqualTo <a name="DataAwsccCasesCaseRuleRuleHiddenConditionsEqualTo" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualTo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualTo.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCasesCaseRuleRuleHiddenConditionsEqualTo {

};
```


### DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandOne <a name="DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandOne" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandOne"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandOne.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandOne {

};
```


### DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandTwo <a name="DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandTwo" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandTwo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandTwo.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandTwo {

};
```


### DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualTo <a name="DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualTo" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualTo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualTo.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualTo {

};
```


### DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandOne <a name="DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandOne" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandOne"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandOne.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandOne {

};
```


### DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwo <a name="DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwo" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwo.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwo {

};
```


### DataAwsccCasesCaseRuleRuleRequired <a name="DataAwsccCasesCaseRuleRuleRequired" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequired"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequired.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCasesCaseRuleRuleRequired {

};
```


### DataAwsccCasesCaseRuleRuleRequiredConditions <a name="DataAwsccCasesCaseRuleRuleRequiredConditions" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCasesCaseRuleRuleRequiredConditions {

};
```


### DataAwsccCasesCaseRuleRuleRequiredConditionsEqualTo <a name="DataAwsccCasesCaseRuleRuleRequiredConditionsEqualTo" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualTo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualTo.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCasesCaseRuleRuleRequiredConditionsEqualTo {

};
```


### DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandOne <a name="DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandOne" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandOne"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandOne.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandOne {

};
```


### DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandTwo <a name="DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandTwo" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandTwo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandTwo.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandTwo {

};
```


### DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualTo <a name="DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualTo" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualTo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualTo.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualTo {

};
```


### DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandOne <a name="DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandOne" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandOne"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandOne.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandOne {

};
```


### DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwo <a name="DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwo" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwo.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwo {

};
```


### DataAwsccCasesCaseRuleTags <a name="DataAwsccCasesCaseRuleTags" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCasesCaseRuleTags {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference <a name="DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.property.fieldId">FieldId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandOne">DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandOne</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FieldId`<sup>Required</sup> <a name="FieldId" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.property.fieldId"></a>

```csharp
public string FieldId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.property.internalValue"></a>

```csharp
public DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandOne InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandOne">DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandOne</a>

---


### DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference <a name="DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.property.booleanValue">BooleanValue</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.property.doubleValue">DoubleValue</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.property.emptyValue">EmptyValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.property.stringValue">StringValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandTwo">DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandTwo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BooleanValue`<sup>Required</sup> <a name="BooleanValue" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.property.booleanValue"></a>

```csharp
public IResolvable BooleanValue { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `DoubleValue`<sup>Required</sup> <a name="DoubleValue" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.property.doubleValue"></a>

```csharp
public double DoubleValue { get; }
```

- *Type:* double

---

##### `EmptyValue`<sup>Required</sup> <a name="EmptyValue" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.property.emptyValue"></a>

```csharp
public string EmptyValue { get; }
```

- *Type:* string

---

##### `StringValue`<sup>Required</sup> <a name="StringValue" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.property.stringValue"></a>

```csharp
public string StringValue { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.property.internalValue"></a>

```csharp
public DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandTwo InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandTwo">DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandTwo</a>

---


### DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOutputReference <a name="DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOutputReference" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOutputReference.property.operandOne">OperandOne</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference">DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOutputReference.property.operandTwo">OperandTwo</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference">DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOutputReference.property.result">Result</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualTo">DataAwsccCasesCaseRuleRuleHiddenConditionsEqualTo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OperandOne`<sup>Required</sup> <a name="OperandOne" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOutputReference.property.operandOne"></a>

```csharp
public DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference OperandOne { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference">DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference</a>

---

##### `OperandTwo`<sup>Required</sup> <a name="OperandTwo" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOutputReference.property.operandTwo"></a>

```csharp
public DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference OperandTwo { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference">DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference</a>

---

##### `Result`<sup>Required</sup> <a name="Result" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOutputReference.property.result"></a>

```csharp
public IResolvable Result { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOutputReference.property.internalValue"></a>

```csharp
public DataAwsccCasesCaseRuleRuleHiddenConditionsEqualTo InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualTo">DataAwsccCasesCaseRuleRuleHiddenConditionsEqualTo</a>

---


### DataAwsccCasesCaseRuleRuleHiddenConditionsList <a name="DataAwsccCasesCaseRuleRuleHiddenConditionsList" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCasesCaseRuleRuleHiddenConditionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsList.get"></a>

```csharp
private DataAwsccCasesCaseRuleRuleHiddenConditionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference <a name="DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.property.fieldId">FieldId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandOne">DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandOne</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FieldId`<sup>Required</sup> <a name="FieldId" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.property.fieldId"></a>

```csharp
public string FieldId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.property.internalValue"></a>

```csharp
public DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandOne InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandOne">DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandOne</a>

---


### DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference <a name="DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.property.booleanValue">BooleanValue</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.property.doubleValue">DoubleValue</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.property.emptyValue">EmptyValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.property.stringValue">StringValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwo">DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BooleanValue`<sup>Required</sup> <a name="BooleanValue" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.property.booleanValue"></a>

```csharp
public IResolvable BooleanValue { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `DoubleValue`<sup>Required</sup> <a name="DoubleValue" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.property.doubleValue"></a>

```csharp
public double DoubleValue { get; }
```

- *Type:* double

---

##### `EmptyValue`<sup>Required</sup> <a name="EmptyValue" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.property.emptyValue"></a>

```csharp
public string EmptyValue { get; }
```

- *Type:* string

---

##### `StringValue`<sup>Required</sup> <a name="StringValue" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.property.stringValue"></a>

```csharp
public string StringValue { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.property.internalValue"></a>

```csharp
public DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwo InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwo">DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwo</a>

---


### DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference <a name="DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.property.operandOne">OperandOne</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference">DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.property.operandTwo">OperandTwo</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference">DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.property.result">Result</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualTo">DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualTo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OperandOne`<sup>Required</sup> <a name="OperandOne" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.property.operandOne"></a>

```csharp
public DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference OperandOne { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference">DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference</a>

---

##### `OperandTwo`<sup>Required</sup> <a name="OperandTwo" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.property.operandTwo"></a>

```csharp
public DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference OperandTwo { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference">DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference</a>

---

##### `Result`<sup>Required</sup> <a name="Result" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.property.result"></a>

```csharp
public IResolvable Result { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.property.internalValue"></a>

```csharp
public DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualTo InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualTo">DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualTo</a>

---


### DataAwsccCasesCaseRuleRuleHiddenConditionsOutputReference <a name="DataAwsccCasesCaseRuleRuleHiddenConditionsOutputReference" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCasesCaseRuleRuleHiddenConditionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsOutputReference.property.equalTo">EqualTo</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOutputReference">DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsOutputReference.property.notEqualTo">NotEqualTo</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference">DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditions">DataAwsccCasesCaseRuleRuleHiddenConditions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EqualTo`<sup>Required</sup> <a name="EqualTo" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsOutputReference.property.equalTo"></a>

```csharp
public DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOutputReference EqualTo { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOutputReference">DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOutputReference</a>

---

##### `NotEqualTo`<sup>Required</sup> <a name="NotEqualTo" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsOutputReference.property.notEqualTo"></a>

```csharp
public DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference NotEqualTo { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference">DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccCasesCaseRuleRuleHiddenConditions InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditions">DataAwsccCasesCaseRuleRuleHiddenConditions</a>

---


### DataAwsccCasesCaseRuleRuleHiddenOutputReference <a name="DataAwsccCasesCaseRuleRuleHiddenOutputReference" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCasesCaseRuleRuleHiddenOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenOutputReference.property.conditions">Conditions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsList">DataAwsccCasesCaseRuleRuleHiddenConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenOutputReference.property.defaultValue">DefaultValue</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHidden">DataAwsccCasesCaseRuleRuleHidden</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Conditions`<sup>Required</sup> <a name="Conditions" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenOutputReference.property.conditions"></a>

```csharp
public DataAwsccCasesCaseRuleRuleHiddenConditionsList Conditions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsList">DataAwsccCasesCaseRuleRuleHiddenConditionsList</a>

---

##### `DefaultValue`<sup>Required</sup> <a name="DefaultValue" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenOutputReference.property.defaultValue"></a>

```csharp
public IResolvable DefaultValue { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenOutputReference.property.internalValue"></a>

```csharp
public DataAwsccCasesCaseRuleRuleHidden InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHidden">DataAwsccCasesCaseRuleRuleHidden</a>

---


### DataAwsccCasesCaseRuleRuleOutputReference <a name="DataAwsccCasesCaseRuleRuleOutputReference" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCasesCaseRuleRuleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleOutputReference.property.hidden">Hidden</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenOutputReference">DataAwsccCasesCaseRuleRuleHiddenOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleOutputReference.property.required">Required</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredOutputReference">DataAwsccCasesCaseRuleRuleRequiredOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRule">DataAwsccCasesCaseRuleRule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Hidden`<sup>Required</sup> <a name="Hidden" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleOutputReference.property.hidden"></a>

```csharp
public DataAwsccCasesCaseRuleRuleHiddenOutputReference Hidden { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenOutputReference">DataAwsccCasesCaseRuleRuleHiddenOutputReference</a>

---

##### `Required`<sup>Required</sup> <a name="Required" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleOutputReference.property.required"></a>

```csharp
public DataAwsccCasesCaseRuleRuleRequiredOutputReference Required { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredOutputReference">DataAwsccCasesCaseRuleRuleRequiredOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleOutputReference.property.internalValue"></a>

```csharp
public DataAwsccCasesCaseRuleRule InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRule">DataAwsccCasesCaseRuleRule</a>

---


### DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference <a name="DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.property.fieldId">FieldId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandOne">DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandOne</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FieldId`<sup>Required</sup> <a name="FieldId" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.property.fieldId"></a>

```csharp
public string FieldId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.property.internalValue"></a>

```csharp
public DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandOne InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandOne">DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandOne</a>

---


### DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference <a name="DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.property.booleanValue">BooleanValue</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.property.doubleValue">DoubleValue</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.property.emptyValue">EmptyValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.property.stringValue">StringValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandTwo">DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandTwo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BooleanValue`<sup>Required</sup> <a name="BooleanValue" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.property.booleanValue"></a>

```csharp
public IResolvable BooleanValue { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `DoubleValue`<sup>Required</sup> <a name="DoubleValue" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.property.doubleValue"></a>

```csharp
public double DoubleValue { get; }
```

- *Type:* double

---

##### `EmptyValue`<sup>Required</sup> <a name="EmptyValue" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.property.emptyValue"></a>

```csharp
public string EmptyValue { get; }
```

- *Type:* string

---

##### `StringValue`<sup>Required</sup> <a name="StringValue" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.property.stringValue"></a>

```csharp
public string StringValue { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.property.internalValue"></a>

```csharp
public DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandTwo InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandTwo">DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandTwo</a>

---


### DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOutputReference <a name="DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOutputReference" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOutputReference.property.operandOne">OperandOne</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference">DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOutputReference.property.operandTwo">OperandTwo</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference">DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOutputReference.property.result">Result</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualTo">DataAwsccCasesCaseRuleRuleRequiredConditionsEqualTo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OperandOne`<sup>Required</sup> <a name="OperandOne" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOutputReference.property.operandOne"></a>

```csharp
public DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference OperandOne { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference">DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference</a>

---

##### `OperandTwo`<sup>Required</sup> <a name="OperandTwo" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOutputReference.property.operandTwo"></a>

```csharp
public DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference OperandTwo { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference">DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference</a>

---

##### `Result`<sup>Required</sup> <a name="Result" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOutputReference.property.result"></a>

```csharp
public IResolvable Result { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOutputReference.property.internalValue"></a>

```csharp
public DataAwsccCasesCaseRuleRuleRequiredConditionsEqualTo InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualTo">DataAwsccCasesCaseRuleRuleRequiredConditionsEqualTo</a>

---


### DataAwsccCasesCaseRuleRuleRequiredConditionsList <a name="DataAwsccCasesCaseRuleRuleRequiredConditionsList" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCasesCaseRuleRuleRequiredConditionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsList.get"></a>

```csharp
private DataAwsccCasesCaseRuleRuleRequiredConditionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference <a name="DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.property.fieldId">FieldId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandOne">DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandOne</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FieldId`<sup>Required</sup> <a name="FieldId" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.property.fieldId"></a>

```csharp
public string FieldId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.property.internalValue"></a>

```csharp
public DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandOne InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandOne">DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandOne</a>

---


### DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference <a name="DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.property.booleanValue">BooleanValue</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.property.doubleValue">DoubleValue</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.property.emptyValue">EmptyValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.property.stringValue">StringValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwo">DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BooleanValue`<sup>Required</sup> <a name="BooleanValue" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.property.booleanValue"></a>

```csharp
public IResolvable BooleanValue { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `DoubleValue`<sup>Required</sup> <a name="DoubleValue" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.property.doubleValue"></a>

```csharp
public double DoubleValue { get; }
```

- *Type:* double

---

##### `EmptyValue`<sup>Required</sup> <a name="EmptyValue" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.property.emptyValue"></a>

```csharp
public string EmptyValue { get; }
```

- *Type:* string

---

##### `StringValue`<sup>Required</sup> <a name="StringValue" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.property.stringValue"></a>

```csharp
public string StringValue { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.property.internalValue"></a>

```csharp
public DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwo InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwo">DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwo</a>

---


### DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference <a name="DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.property.operandOne">OperandOne</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference">DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.property.operandTwo">OperandTwo</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference">DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.property.result">Result</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualTo">DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualTo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OperandOne`<sup>Required</sup> <a name="OperandOne" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.property.operandOne"></a>

```csharp
public DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference OperandOne { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference">DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference</a>

---

##### `OperandTwo`<sup>Required</sup> <a name="OperandTwo" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.property.operandTwo"></a>

```csharp
public DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference OperandTwo { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference">DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference</a>

---

##### `Result`<sup>Required</sup> <a name="Result" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.property.result"></a>

```csharp
public IResolvable Result { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.property.internalValue"></a>

```csharp
public DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualTo InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualTo">DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualTo</a>

---


### DataAwsccCasesCaseRuleRuleRequiredConditionsOutputReference <a name="DataAwsccCasesCaseRuleRuleRequiredConditionsOutputReference" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCasesCaseRuleRuleRequiredConditionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsOutputReference.property.equalTo">EqualTo</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOutputReference">DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsOutputReference.property.notEqualTo">NotEqualTo</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference">DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditions">DataAwsccCasesCaseRuleRuleRequiredConditions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EqualTo`<sup>Required</sup> <a name="EqualTo" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsOutputReference.property.equalTo"></a>

```csharp
public DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOutputReference EqualTo { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOutputReference">DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOutputReference</a>

---

##### `NotEqualTo`<sup>Required</sup> <a name="NotEqualTo" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsOutputReference.property.notEqualTo"></a>

```csharp
public DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference NotEqualTo { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference">DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccCasesCaseRuleRuleRequiredConditions InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditions">DataAwsccCasesCaseRuleRuleRequiredConditions</a>

---


### DataAwsccCasesCaseRuleRuleRequiredOutputReference <a name="DataAwsccCasesCaseRuleRuleRequiredOutputReference" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCasesCaseRuleRuleRequiredOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredOutputReference.property.conditions">Conditions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsList">DataAwsccCasesCaseRuleRuleRequiredConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredOutputReference.property.defaultValue">DefaultValue</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequired">DataAwsccCasesCaseRuleRuleRequired</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Conditions`<sup>Required</sup> <a name="Conditions" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredOutputReference.property.conditions"></a>

```csharp
public DataAwsccCasesCaseRuleRuleRequiredConditionsList Conditions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsList">DataAwsccCasesCaseRuleRuleRequiredConditionsList</a>

---

##### `DefaultValue`<sup>Required</sup> <a name="DefaultValue" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredOutputReference.property.defaultValue"></a>

```csharp
public IResolvable DefaultValue { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredOutputReference.property.internalValue"></a>

```csharp
public DataAwsccCasesCaseRuleRuleRequired InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequired">DataAwsccCasesCaseRuleRuleRequired</a>

---


### DataAwsccCasesCaseRuleTagsList <a name="DataAwsccCasesCaseRuleTagsList" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCasesCaseRuleTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTagsList.get"></a>

```csharp
private DataAwsccCasesCaseRuleTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccCasesCaseRuleTagsOutputReference <a name="DataAwsccCasesCaseRuleTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCasesCaseRuleTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTags">DataAwsccCasesCaseRuleTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccCasesCaseRuleTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTags">DataAwsccCasesCaseRuleTags</a>

---



