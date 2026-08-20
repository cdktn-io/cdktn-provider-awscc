# `dataAwsccAccessanalyzerArchiveRule` Submodule <a name="`dataAwsccAccessanalyzerArchiveRule` Submodule" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccAccessanalyzerArchiveRule <a name="DataAwsccAccessanalyzerArchiveRule" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/accessanalyzer_archive_rule awscc_accessanalyzer_archive_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccaccessanalyzerarchiverule"

dataawsccaccessanalyzerarchiverule.NewDataAwsccAccessanalyzerArchiveRule(scope Construct, id *string, config DataAwsccAccessanalyzerArchiveRuleConfig) DataAwsccAccessanalyzerArchiveRule
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleConfig">DataAwsccAccessanalyzerArchiveRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleConfig">DataAwsccAccessanalyzerArchiveRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccAccessanalyzerArchiveRule resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccaccessanalyzerarchiverule"

dataawsccaccessanalyzerarchiverule.DataAwsccAccessanalyzerArchiveRule_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccaccessanalyzerarchiverule"

dataawsccaccessanalyzerarchiverule.DataAwsccAccessanalyzerArchiveRule_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccaccessanalyzerarchiverule"

dataawsccaccessanalyzerarchiverule.DataAwsccAccessanalyzerArchiveRule_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccaccessanalyzerarchiverule"

dataawsccaccessanalyzerarchiverule.DataAwsccAccessanalyzerArchiveRule_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccAccessanalyzerArchiveRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccAccessanalyzerArchiveRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccAccessanalyzerArchiveRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/accessanalyzer_archive_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccAccessanalyzerArchiveRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.property.analyzerName">AnalyzerName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.property.filter">Filter</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilterMap">DataAwsccAccessanalyzerArchiveRuleFilterMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.property.ruleName">RuleName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `AnalyzerName`<sup>Required</sup> <a name="AnalyzerName" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.property.analyzerName"></a>

```go
func AnalyzerName() *string
```

- *Type:* *string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.property.filter"></a>

```go
func Filter() DataAwsccAccessanalyzerArchiveRuleFilterMap
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilterMap">DataAwsccAccessanalyzerArchiveRuleFilterMap</a>

---

##### `RuleName`<sup>Required</sup> <a name="RuleName" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.property.ruleName"></a>

```go
func RuleName() *string
```

- *Type:* *string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccAccessanalyzerArchiveRuleConfig <a name="DataAwsccAccessanalyzerArchiveRuleConfig" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccaccessanalyzerarchiverule"

&dataawsccaccessanalyzerarchiverule.DataAwsccAccessanalyzerArchiveRuleConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/accessanalyzer_archive_rule#id DataAwsccAccessanalyzerArchiveRule#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccAccessanalyzerArchiveRuleFilter <a name="DataAwsccAccessanalyzerArchiveRuleFilter" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilter.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccaccessanalyzerarchiverule"

&dataawsccaccessanalyzerarchiverule.DataAwsccAccessanalyzerArchiveRuleFilter {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccAccessanalyzerArchiveRuleFilterMap <a name="DataAwsccAccessanalyzerArchiveRuleFilterMap" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilterMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilterMap.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccaccessanalyzerarchiverule"

dataawsccaccessanalyzerarchiverule.NewDataAwsccAccessanalyzerArchiveRuleFilterMap(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccAccessanalyzerArchiveRuleFilterMap
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilterMap.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilterMap.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilterMap.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilterMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilterMap.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilterMap.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilterMap.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilterMap.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilterMap.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilterMap.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilterMap.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilterMap.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilterMap.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilterMap.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilterMap.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilterMap.get"></a>

```go
func Get(key *string) DataAwsccAccessanalyzerArchiveRuleFilterOutputReference
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilterMap.get.parameter.key"></a>

- *Type:* *string

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilterMap.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilterMap.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilterMap.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilterMap.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccAccessanalyzerArchiveRuleFilterOutputReference <a name="DataAwsccAccessanalyzerArchiveRuleFilterOutputReference" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilterOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccaccessanalyzerarchiverule"

dataawsccaccessanalyzerarchiverule.NewDataAwsccAccessanalyzerArchiveRuleFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectKey *string) DataAwsccAccessanalyzerArchiveRuleFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilterOutputReference.Initializer.parameter.complexObjectKey">complexObjectKey</a></code> | <code>*string</code> | the key of this item in the map. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectKey`<sup>Required</sup> <a name="complexObjectKey" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilterOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* *string

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilterOutputReference.property.contains">Contains</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilterOutputReference.property.eq">Eq</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilterOutputReference.property.exists">Exists</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilterOutputReference.property.neq">Neq</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilter">DataAwsccAccessanalyzerArchiveRuleFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Contains`<sup>Required</sup> <a name="Contains" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilterOutputReference.property.contains"></a>

```go
func Contains() *[]*string
```

- *Type:* *[]*string

---

##### `Eq`<sup>Required</sup> <a name="Eq" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilterOutputReference.property.eq"></a>

```go
func Eq() *[]*string
```

- *Type:* *[]*string

---

##### `Exists`<sup>Required</sup> <a name="Exists" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilterOutputReference.property.exists"></a>

```go
func Exists() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Neq`<sup>Required</sup> <a name="Neq" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilterOutputReference.property.neq"></a>

```go
func Neq() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccAccessanalyzerArchiveRuleFilter
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilter">DataAwsccAccessanalyzerArchiveRuleFilter</a>

---



